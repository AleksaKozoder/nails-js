// components/atoms/RichText/index.tsx
import React from 'react'
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import s from './style.module.scss'

interface RichTextProps {
  text: any
  className?: string
  color?: string
  variant?: string
}

export const RichText: React.FC<RichTextProps> = ({ text, color, variant }) => {
  if (!text) return null

  const classes = [s.richText, variant && s[`richText--${variant}`]]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      style={color ? { color: `var(--color-${color})` } : undefined}
    >
      <PayloadRichText data={text} />
    </div>
  )
}
