// src/components/atoms/Heading/index.tsx
import React from 'react'
import s from './style.module.scss'

type HeadingProps = {
  title: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  color?: string
}

export const Heading: React.FC<HeadingProps> = ({ title, titleTag: Tag = 'h2', color }) => {
  if (!title) return null

  return (
    <Tag
      className={s[Tag]}
      style={color ? { color: `var(--color-${color})` } : undefined}
    >
      {title}
    </Tag>
  )
}
