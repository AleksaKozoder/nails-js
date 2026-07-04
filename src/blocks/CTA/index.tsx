import React from 'react'
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import type { CTABlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
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
  const classes = [
    s.cta,
    s[`cta--${alignment}`],
    ...getBackgroundClasses(background, s, 'cta'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['cta__bgImage']}
        overlayClassName={s.overlay}
      />

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
