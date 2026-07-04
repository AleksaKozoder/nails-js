import React from 'react'
import Image from 'next/image'
import type { StatsBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
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

  const backgroundType = background?.type
  const bgImageMedia = typeof background?.image === 'object' ? background.image : undefined
  const overlay = background?.overlay
  const showOverlay = overlay?.enabled && overlay?.color

  const classes = [
    s.stats,
    backgroundType === 'color' && s[`stats--color-${background?.colorTheme}`],
    backgroundType === 'gradient' && s[`stats--gradient-${background?.gradientTheme}`],
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
      {backgroundType === 'image' && bgImageMedia?.url && (
        <Image src={bgImageMedia.url} alt="" fill className={s['stats__bgImage']} />
      )}

      {showOverlay && (
        <div
          className={s.overlay}
          style={{
            backgroundColor: `var(--color-${overlay.color})`,
            opacity: (overlay.opacity ?? 50) / 100,
          }}
        />
      )}

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
