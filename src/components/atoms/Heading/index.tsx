import React from 'react'
import s from './style.module.scss'

interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  visualLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'supTitle' | 'subTitle'
  children: React.ReactNode
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({
  tag: Tag = 'h2',
  visualLevel = 'h2',
  children,
  className,
}) => {
  const classes = [s.heading, s[`heading--${visualLevel}`], className].filter(Boolean).join(' ')

  return <Tag className={classes}>{children}</Tag>
}
