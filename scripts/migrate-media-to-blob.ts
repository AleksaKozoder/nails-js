import fs from 'fs'
import path from 'path'
import { put } from '@vercel/blob'
import { Client } from 'pg'

const DATABASE_URI = process.env.DATABASE_URI
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN

if (!DATABASE_URI) throw new Error('DATABASE_URI is required')
if (!BLOB_TOKEN) throw new Error('BLOB_READ_WRITE_TOKEN is required')

const mediaDir = path.resolve(process.cwd(), 'media')
const limit = process.env.MIGRATE_LIMIT ? Number(process.env.MIGRATE_LIMIT) : undefined

async function migrate() {
  const client = new Client({ connectionString: DATABASE_URI })
  await client.connect()

  const { rows } = await client.query<{ id: number; filename: string; url: string }>(
    `select id, filename, url from media where filename is not null order by id`,
  )

  const target = typeof limit === 'number' ? rows.slice(0, limit) : rows
  console.log(`Found ${rows.length} media docs, processing ${target.length}.`)

  let ok = 0
  let missing = 0
  let failed = 0

  for (const row of target) {
    const localPath = path.join(mediaDir, row.filename)
    if (!fs.existsSync(localPath)) {
      console.warn(`Missing local file for doc ${row.id}: ${localPath}`)
      missing++
      continue
    }

    if (row.url?.includes('blob.vercel-storage.com')) {
      console.log(`Skipping doc ${row.id} (${row.filename}) — already on blob`)
      ok++
      continue
    }

    try {
      const buffer = fs.readFileSync(localPath)
      const blob = await put(row.filename, buffer, {
        access: 'public',
        token: BLOB_TOKEN,
        addRandomSuffix: false,
        allowOverwrite: true,
      })

      await client.query(`update media set url = $1 where id = $2`, [blob.url, row.id])
      ok++
      console.log(`OK doc ${row.id} -> ${blob.url}`)
    } catch (err) {
      failed++
      console.error(`Failed doc ${row.id} (${row.filename}):`, err)
    }
  }

  console.log(`\nDone. ok=${ok} missing=${missing} failed=${failed}`)
  await client.end()
  process.exit(failed > 0 ? 1 : 0)
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
