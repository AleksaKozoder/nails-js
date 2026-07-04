import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import React from 'react'

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const query = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
    },
  })

  const post = query.docs[0]
  if (!post) return notFound()

  return (
    <article style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      {/* ISPIS SVIH KATEGORIJA IZ NIZA */}
      {post.category && Array.isArray(post.category) && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          {post.category.map((cat: any) => (
            <span
              key={cat.id || cat}
              style={{
                background: '#f0f0f0',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              {typeof cat === 'object' ? cat.title : 'Category'}
            </span>
          ))}
        </div>
      )}

      <h1>{post.title}</h1>
      <p style={{ color: '#666' }}>
        Objavljeno: {new Date(post.createdAt).toLocaleDateString('sr-RS')}
      </p>

      <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

      <div style={{ lineHeight: '1.6' }}>
        {post.excerpt && <p style={{ fontStyle: 'italic', color: '#555' }}>{post.excerpt}</p>}
        {/* Ovde ide tvoj glavni sadržaj / RichText */}
      </div>
    </article>
  )
}
