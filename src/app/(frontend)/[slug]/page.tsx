import { getPayload } from 'payload'
import config from '@/payload.config'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const query = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const page = query.docs[0]

  if (!page) {
    return notFound()
  }

  return (
    <main>
      <BlockRenderer blocks={page.layout} />
    </main>
  )
}
