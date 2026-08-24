import React from 'react'
import Image from 'next/image'
import type { TestimonialsBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

export const Testimonials: React.FC<TestimonialsBlockProps> = ({
  eyebrow,
  title,
  items = [],
  layout = 'grid',
  columns = 'col-3',
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  if (!items?.length) return null

  const classes = [
    s.testimonials,
    ...getBackgroundClasses(background, s, 'testimonials'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const wrapperClasses = [
    s.testimonials__wrapper,
    layout === 'grid' && s[`testimonials__wrapper--grid`],
    layout === 'grid' && s[`testimonials__wrapper--${columns}`],
    layout === 'carousel' && s[`testimonials__wrapper--carousel`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['testimonials__bgImage']}
        overlayClassName={s.overlay}
      />

      {(eyebrow || title) && (
        <div className={s.testimonials__head}>
          {eyebrow && <span className={s.testimonials__eyebrow}>{eyebrow}</span>}
          {title && <h2 className={s.testimonials__title}>{title}</h2>}
          <div className={s.flourish}>
            <span />
          </div>
        </div>
      )}

      <div className={wrapperClasses}>
        {items.map((item, index) => {
          const avatar = typeof item.avatar === 'object' ? item.avatar : undefined
          const rating = Math.min(5, Math.max(1, item.rating ?? 5))

          return (
            <figure key={index} className={s.testimonial}>
              <div className={s.testimonial__quoteMark}>„</div>
              <div className={s.testimonial__stars}>{'★'.repeat(rating)}</div>
              <blockquote className={s.testimonial__quote}>{item.quote}</blockquote>
              <figcaption className={s.testimonial__author}>
                {avatar?.url && (
                  <Image
                    src={avatar.url}
                    alt={avatar.alt || item.name}
                    width={48}
                    height={48}
                    className={s.testimonial__avatar}
                  />
                )}
                <div>
                  <div className={s.testimonial__name}>{item.name}</div>
                  {item.role && <span className={s.testimonial__role}>{item.role}</span>}
                </div>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
