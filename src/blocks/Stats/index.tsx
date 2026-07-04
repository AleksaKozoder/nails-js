import React from 'react'
import type { StatsBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

export const Stats: React.FC<StatsBlockProps> = ({
  items = [],
  columns = 'col-4',
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  if (!items?.length) return null

  const classes = [
    s.stats,
    ...getBackgroundClasses(background, s, 'stats'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const wrapperClasses = [s.stats__wrapper, s[`stats__wrapper--${columns}`]]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['stats__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={wrapperClasses}>
        {items.map((item, index) => (
          <div key={index} className={s.stat}>
            <div className={s.stat__value}>{item.value}</div>
            <div className={s.stat__label}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
