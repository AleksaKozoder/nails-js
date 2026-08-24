import React from 'react'
import type { PricingBlockProps } from '@/payload-types'
import { Button } from '@/components/atoms/Button'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

export const Pricing: React.FC<PricingBlockProps> = ({
  title,
  subtitle,
  priceBlocks,
  note,
  button,
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  if (!priceBlocks?.length) return null

  const classes = [
    s.pricing,
    ...getBackgroundClasses(background, s, 'pricing'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['pricing__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={s.priceCard}>
        {title && <h2 className={s.priceCard__title}>{title}</h2>}
        {subtitle && <p className={s.priceCard__subtitle}>{subtitle}</p>}

        {priceBlocks.map((block, index) => (
          <div key={index} className={s.priceBlock}>
            {block.heading && <h4 className={s.priceBlock__heading}>{block.heading}</h4>}
            {block.rows?.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={[s.priceRow, block.smallRows && s['priceRow--small']]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className={s.priceRow__label}>{row.label}</span>
                <span className={s.priceRow__fill} />
                <span className={s.priceRow__value}>{row.value}</span>
              </div>
            ))}
          </div>
        ))}

        {note && <p className={s.priceCard__note}>{note}</p>}

        {button?.text && (
          <div className={s.priceCard__cta}>
            <Button blockType="button" {...button} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Pricing
