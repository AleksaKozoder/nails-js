import React from 'react'
import Link from 'next/link'
import type { PostsBlockProps as GeneratedPostsBlockProps, Post } from '@/payload-types'
import s from './style.module.scss'

// `posts` is injected server-side by enrichBlocks() in app/(frontend)/page.tsx, not part of the CMS schema
export type PostsBlockProps = GeneratedPostsBlockProps & {
  posts?: Post[]
}

export const PostsBlock: React.FC<PostsBlockProps> = ({
  title,
  htmlId,
  customClassName,
  layout = 'grid',
  gridColumns = 'col-3',
  autoplay,
  showArrows,
  gap = 'none',
  posts = [],
}) => {
  // Klasa za omotač u zavisnosti od izabranog layout-a (grid ili slider)
  const wrapperClasses = [
    s['posts-block'],
    gap !== 'none' && `gap-${gap}`,
    layout === 'grid' && s[`posts-block--grid`],
    layout === 'grid' && gridColumns && s[`posts-block--${gridColumns}`],
    layout === 'slider' && s[`posts-block--slider`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      id={htmlId || undefined}
      className={[s['posts'], customClassName].filter(Boolean).join(' ')}
    >
      {title && <h2 className={s['posts-section__title']}>{title}</h2>}

      <div className={wrapperClasses}>
        {layout === 'grid' ? (
          posts.map((post) => {
            const featuredImage =
              typeof post.featuredImage === 'object' ? post.featuredImage : undefined
            const categories = (post.category ?? []).filter(
              (cat): cat is Extract<typeof cat, object> => typeof cat === 'object',
            )

            return (
              <article key={post.id} className={s['post-card']}>
                <Link className={s.link} href={`/posts/${post.slug}`} />
                {featuredImage?.url && (
                  <div className={s['post-card__image-wrapper']}>
                    <img
                      src={featuredImage.url}
                      alt={featuredImage.alt || post.title}
                      className={s['post-card__image']}
                    />
                  </div>
                )}
                <div className={s['post-card__content']}>
                  {categories.length > 0 && (
                    <div className={s['post-card__category']}>
                      {categories.map((cat) => (
                        <span key={cat.id}>{cat.title}</span>
                      ))}
                    </div>
                  )}
                  <h3 className={s['post-card__title']}>{post.title}</h3>
                  {post.excerpt && <p className={s['post-card__excerpt']}>{post.excerpt}</p>}
                </div>
              </article>
            )
          })
        ) : (
          // SLIDER RENDER (ovde implementiraš svoj Slider/Swiper sa autoplay i showArrows opcijama)
          <div className={s['slider-placeholder']}>
            {/* Ovde možeš ubaciti Swiper/Slick i mapirati kroz iste ove postove */}
            <p>
              Slider Layout (Autoplay: {autoplay ? 'Yes' : 'No'}, Arrows:{' '}
              {showArrows ? 'Yes' : 'No'})
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
