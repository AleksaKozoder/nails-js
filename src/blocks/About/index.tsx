import React from 'react'
import Image from 'next/image'
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import type { AboutBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

export const About: React.FC<AboutBlockProps> = ({
  image,
  eyebrow,
  title,
  text,
  facts,
  imagePosition = 'left',
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const media = typeof image === 'object' ? image : undefined
  if (!media?.url) return null

  const classes = [
    s.about,
    s[`about--image-${imagePosition ?? 'left'}`],
    ...getBackgroundClasses(background, s, 'about'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['about__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={s.about__photo}>
        <Image
          src={media.url}
          alt={media.alt || ''}
          fill
          sizes="(max-width: 860px) 100vw, 45vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={s.about__copy}>
        {eyebrow && <span className={s.about__eyebrow}>{eyebrow}</span>}
        <h2 className={s.about__title}>{title}</h2>
        {text && (
          <div className={s.about__text}>
            <PayloadRichText data={text} />
          </div>
        )}
        {facts && facts.length > 0 && (
          <div className={s.about__facts}>
            {facts.map((fact, index) => (
              <span key={index} className={s.about__fact}>
                {fact.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default About
