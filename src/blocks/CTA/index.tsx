import React from 'react'
import Image from 'next/image'
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import type { CTABlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

export const CTA: React.FC<CTABlockProps> = ({
  title,
  text,
  buttons,
  alignment = 'center',
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const backgroundType = background?.type
  const bgImageMedia = typeof background?.image === 'object' ? background.image : undefined
  const overlay = background?.overlay
  const showOverlay = overlay?.enabled && overlay?.color

  const classes = [
    s.cta,
    s[`cta--${alignment}`],
    backgroundType === 'color' && s[`cta--color-${background?.colorTheme}`],
    backgroundType === 'gradient' && s[`cta--gradient-${background?.gradientTheme}`],
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      {backgroundType === 'image' && bgImageMedia?.url && (
        <Image src={bgImageMedia.url} alt="" fill className={s['cta__bgImage']} />
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

      <div className={s.cta__inner}>
        {title && <h2 className={s.cta__title}>{title}</h2>}
        {text && (
          <div className={s.cta__text}>
            <PayloadRichText data={text} />
          </div>
        )}
        {buttons && buttons.length > 0 && (
          <div className={s.cta__buttons}>
            <BlockRenderer blocks={buttons} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CTA
