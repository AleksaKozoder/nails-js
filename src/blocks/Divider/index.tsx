import React from 'react'
import type { DividerBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import s from './style.module.scss'

export const Divider: React.FC<DividerBlockProps> = ({
  lineStyle = 'solid',
  thickness = 'thin',
  colorTheme,
  htmlId,
  customClassName,
  spacing,
}) => {
  const classes = [
    s.divider,
    s[`divider--${lineStyle}`],
    s[`divider--${thickness}`],
    colorTheme && s[`divider--color-${colorTheme}`],
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return <hr className={classes} id={htmlId || undefined} />
}

export default Divider
