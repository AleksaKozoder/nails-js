import { getPayload } from 'payload'
import config from '../src/payload.config'
import { migrations } from '../src/migrations'

// This project intentionally runs `pnpm dev` (Payload's push-mode schema sync)
// against the same database as production, so the live schema is always
// already up to date by the time a deploy runs. `payload migrate` doesn't
// know that: it flags any dev-mode push with a `batch: -1` sentinel row and,
// on the next `payload migrate`, blocks on an interactive confirm prompt
// ("data loss will occur, proceed?") that Vercel's non-interactive build
// shell can never answer — stalling the build for several minutes before it
// times out. Since the schema is already correct, this script clears that
// flag and records any not-yet-tracked migration files as applied (without
// re-running their `up()`, which would fail on tables/columns push already
// created) so `payload migrate` becomes a fast no-op.
const payload = await getPayload({ config })

const { docs } = await payload.find({
  collection: 'payload-migrations',
  limit: 0,
})

const devFlags = docs.filter((doc) => doc.batch === -1)
for (const doc of devFlags) {
  await payload.delete({ collection: 'payload-migrations', id: doc.id })
}
if (devFlags.length > 0) {
  payload.logger.info(`Cleared ${devFlags.length} dev-mode migration lock(s).`)
}

const applied = docs.filter((doc) => doc.batch !== -1)
const appliedNames = new Set(applied.map((doc) => doc.name))
const latestBatch = applied.reduce((max, doc) => Math.max(max, Number(doc.batch) || 0), 0)

let nextBatch = latestBatch + 1
for (const migration of migrations) {
  if (appliedNames.has(migration.name)) continue
  await payload.create({
    collection: 'payload-migrations',
    data: { name: migration.name, batch: nextBatch },
  })
  payload.logger.info(`Recorded already-applied migration: ${migration.name}`)
  nextBatch += 1
}

process.exit(0)
