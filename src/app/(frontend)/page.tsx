import { getPayload } from 'payload'
import config from '@/payload.config'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import { notFound } from 'next/navigation'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Tražimo stranicu koja ima slug 'home'
  const query = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const page = query.docs[0]

  // Ako nisi napravio stranicu sa slugom 'home' u adminu, baci 404
  if (!page) {
    return notFound()
  }

  return (
    <main>
      {/* page.layout je niz blokova (sekcija) koje si složio u adminu */}
      <BlockRenderer blocks={page.layout} />
    </main>
  )
}
