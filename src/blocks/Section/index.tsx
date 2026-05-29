import React from 'react'
import Image from 'next/image'
import { BlockRenderer } from '../BlockRenderer'
import s from './style.module.scss'

export const Section: React.FC<any> = ({ settings, blocks }) => {
  const {
    backgroundType,
    colorTheme,
    gradientTheme,
    bgImage,
    paddingTop,
    paddingBottom,
    widthType,
    containerType,
    heightType,
    variant,
    htmlId,
    overlay,
  } = settings

  const sectionClasses = [
    s['section'],
    backgroundType === 'color' && s[`section--color-${colorTheme}`],
    backgroundType === 'gradient' && s[`section--gradient-${gradientTheme}`],
    backgroundType === 'image' && s['section--image'],
    heightType === 'fullHeight' && s[`section--full-height`],
    variant && s[`section--${variant}`],
  ]
    .filter(Boolean)
    .join(' ')

  const container =
    widthType === 'boxed' ? [...new Set(['container', containerType])].join(' ') : null

  const showOverlay = overlay?.enabled && overlay?.color

  return (
    <section
      className={sectionClasses}
      style={{
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
      }}
      id={htmlId || undefined}
    >
      {backgroundType === 'image' && bgImage && (
        <Image src={bgImage.url} alt="" fill className={s['section__bgImage']} />
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
