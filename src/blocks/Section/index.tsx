import React from 'react'
import Image from 'next/image'
import type { SectionBlockProps } from '@/payload-types'
import { BlockRenderer } from '../BlockRenderer'
import s from './style.module.scss'

export const Section: React.FC<SectionBlockProps> = ({ settings = {}, blocks }) => {
  const {
    background,
    spacing,
    viewport,
    widthType,
    containerType,
    alignment,
    htmlId,
    customClassName,
  } = settings

  const backgroundType = background?.type
  const colorTheme = background?.colorTheme
  const gradientTheme = background?.gradientTheme
  const overlay = background?.overlay
  const bgImageMedia = typeof background?.image === 'object' ? background.image : undefined

  const sectionClasses = [
    s['section'],
    backgroundType === 'color' && s[`section--color-${colorTheme}`],
    backgroundType === 'gradient' && s[`section--gradient-${gradientTheme}`],
    backgroundType === 'image' && s['section--image'],
    viewport === 'full' && s[`section--full-height`],
    spacing?.paddingTop && spacing.paddingTop !== 'none' && `padding-top-${spacing.paddingTop}`,
    spacing?.paddingBottom &&
      spacing.paddingBottom !== 'none' &&
      `padding-bottom-${spacing.paddingBottom}`,
    spacing?.marginTop && spacing.marginTop !== 'none' && `margin-top-${spacing.marginTop}`,
    spacing?.marginBottom &&
      spacing.marginBottom !== 'none' &&
      `margin-bottom-${spacing.marginBottom}`,
    customClassName,
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
