// src/components/atoms/Heading/index.tsx
import React from 'react'
import s from './style.module.scss'

type HeadingProps = {
  title: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  color?: string,
  variant?: string
}

export const Heading: React.FC<HeadingProps> = ({ title, titleTag: Tag = 'h2', color, variant }) => {
  if (!title) return null

  const classes = [s[`heading`], s[`heading--${Tag}`], variant && s[`heading--${variant}`]]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} style={color ? { color: `var(--color-${color})` } : undefined}>
      {title}
    </Tag>
  )
}
