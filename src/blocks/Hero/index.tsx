import React from 'react'
import Image from 'next/image'
import type { HeroBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

export const Hero: React.FC<HeroBlockProps> = ({
  eyebrow,
  title,
  highlightedTitle,
  description,
  buttons,
  trustItems,
  images,
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const classes = [
    s.hero,
    ...getBackgroundClasses(background, s, 'hero'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const pinnedImages = (images ?? [])
    .map((item) => (typeof item.image === 'object' ? item.image : undefined))
    .filter((image): image is NonNullable<typeof image> => Boolean(image?.url))
    .slice(0, 3)

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['hero__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={s.hero__wrap}>
        <div className={s.hero__copy}>
          {eyebrow && <span className={s.hero__eyebrow}>{eyebrow}</span>}

          <h1 className={s.hero__title}>
            {title}
            {highlightedTitle && (
              <>
                <br />
                <em>{highlightedTitle}</em>
              </>
            )}
          </h1>

          {description && <p className={s.hero__description}>{description}</p>}

          {buttons && buttons.length > 0 && (
            <div className={s.hero__actions}>
              <BlockRenderer blocks={buttons} />
            </div>
          )}

          {trustItems && trustItems.length > 0 && (
            <div className={s.hero__trustRow}>
              {trustItems.map((item, index) => (
                <span key={index} className={s.hero__trustChip}>
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>

        {pinnedImages.length > 0 && (
          <div className={s.hero__pinStage}>
            {pinnedImages.map((image, index) => (
              <div
                key={image.id ?? index}
                className={[s.hero__polaroid, s[`hero__polaroid--${index + 1}`]].join(' ')}
              >
                <Image
                  src={image.url as string}
                  alt={image.alt || ''}
                  width={image.width ?? 600}
                  height={image.height ?? 600}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
