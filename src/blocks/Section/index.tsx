import React from 'react'
import Image from 'next/image'
import type { SectionBlockProps } from '@/payload-types'
import { BlockRenderer } from '../BlockRenderer'
import s from './style.module.scss'

export const Section: React.FC<SectionBlockProps> = ({ settings = {}, blocks }) => {
  const {
    backgroundType,
    colorTheme,
    gradientTheme,
    bgImage,
    padding,
    viewport,
    widthType,
    containerType,
    variant,
    alignment,
    htmlId,
    overlay,
  } = settings

  const bgImageMedia = typeof bgImage === 'object' ? bgImage : undefined

  const sectionClasses = [
    s['section'],
    backgroundType === 'color' && s[`section--color-${colorTheme}`],
    backgroundType === 'gradient' && s[`section--gradient-${gradientTheme}`],
    backgroundType === 'image' && s['section--image'],
    viewport === 'full' && s[`section--full-height`],
    variant !== 'default' && s[`section--${variant}`],
    padding && padding !== 'none' && `padding-${padding}`,
  ]
    .filter(Boolean)
    .join(' ')

  const container =
    widthType === 'boxed'
      ? [
          ...new Set([
            'container',
            containerType,
            viewport === 'full' &&
              alignment &&
              alignment !== 'top' &&
              `container--align-${alignment}`,
          ]),
        ]
          .filter(Boolean)
          .join(' ')
      : null

  const showOverlay = overlay?.enabled && overlay?.color

  return (
    <section className={sectionClasses} id={htmlId || undefined}>
      {backgroundType === 'image' && bgImageMedia?.url && (
        <Image src={bgImageMedia.url} alt="" fill className={s['section__bgImage']} />
      )}

      {showOverlay && (
        <div
          className={s.overlay}
          style={{
            backgroundColor: `var(--color-${overlay.color})`,
            opacity: (overlay.opacity ?? 50) / 100,
          }}
        />
      )}

      <BlockRenderer blocks={blocks} container={container} />
    </section>
  )
}
