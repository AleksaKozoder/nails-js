import React from 'react'
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import type { RichTextBlockProps } from '@/payload-types'
import s from './style.module.scss'

export const RichText: React.FC<RichTextBlockProps> = ({ text, color, variant }) => {
  if (!text) return null

  const classes = [s.richText, variant && s[`richText--${variant}`]].filter(Boolean).join(' ')

  return (
    <div className={classes} style={color ? { color: `var(--color-${color})` } : undefined}>
      <PayloadRichText data={text} />
    </div>
  )
}
