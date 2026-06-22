// src/components/blocks/PostsBlock/index.tsx
import React from 'react'
import s from './style.module.scss'

// Tipovi za pojedinačni post (prilagođeno tvojoj Posts kolekciji)
type Post = {
  id: string
  title: string
  slug: string
  featuredImage?:
    | {
        url?: string
        alt?: string
      }
    | string
  excerpt?: string
}

export type PostsBlockProps = {
  title?: string
  populateBy: 'latest' | 'manual'
  limit: number
  selectedPosts?: (string | Post)[]
  htmlId?: string
  layout: 'grid' | 'slider'
  gridColumns?: 'col-2' | 'col-3' | 'col-4'
  autoplay?: boolean
  showArrows?: boolean
  posts?: Post[]
}

export const PostsBlock: React.FC<PostsBlockProps> = ({
  title,
  htmlId,
  layout = 'grid',
  gridColumns = 'col-3',
  autoplay,
  showArrows,
  posts = [],
}) => {
  // if (!posts || posts.length === 0) return null

  // Klasa za omotač u zavisnosti od izabranog layout-a (grid ili slider)
  const wrapperClasses = [
    s['posts-block'],
    layout === 'grid' && s[`posts-block--grid`],
    layout === 'grid' && gridColumns && s[`posts-block--${gridColumns}`],
    layout === 'slider' && s[`posts-block--slider`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div id={htmlId || undefined} className={s['posts']}>
      {title && <h2 className={s['posts-section__title']}>{title}</h2>}

      <div className={wrapperClasses}>
        {layout === 'grid' ? (
          // GRID RENDER
          posts.map((post) => (
            <article key={post.id} className={s['post-card']}>
              {post.featuredImage && (
                <div className={s['post-card__image-wrapper']}>
                  <img
                    src={typeof post.featuredImage === 'object' ? post.featuredImage.url : ''}
                    alt={
                      typeof post.featuredImage === 'object'
                        ? post.featuredImage.alt || post.title
                        : post.title
                    }
                    className={s['post-card__image']}
                  />
                </div>
              )}
              <div className={s['post-card__content']}>
                <h3 className={s['post-card__title']}>{post.title}</h3>
                {post.excerpt && <p className={s['post-card__excerpt']}>{post.excerpt}</p>}
              </div>
            </article>
          ))
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
