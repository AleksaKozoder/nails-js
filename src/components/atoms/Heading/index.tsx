import React from 'react'
import type { HeadingBlockProps } from '@/payload-types'
import s from './style.module.scss'

export const Heading: React.FC<HeadingBlockProps> = ({ title, titleTag, color, variant }) => {
  if (!title) return null

  const Tag = titleTag ?? 'h2'

  const classes = [s[`heading`], s[`heading--${Tag}`], variant && s[`heading--${variant}`]]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} style={color ? { color: `var(--color-${color})` } : undefined}>
      {title}
    </Tag>
  )
}
