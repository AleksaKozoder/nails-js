// src/components/atoms/RichText/index.tsx
import React from 'react'
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import s from './style.module.scss'

type RichTextProps = {
  text: any,
  color?: string
}

export const RichText: React.FC<RichTextProps> = ({ text, color }) => {
  if (!text) return null

  return (
    <div className={s.richText} style={color ? { color: `var(--color-${color})` } : undefined}>
      <PayloadRichText data={text} />
    </div>
  )
}
