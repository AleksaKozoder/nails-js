import React from 'react'
import type { ServicesBlockProps } from '@/payload-types'
import { Icon } from '@/components/atoms/Icon'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

export const Services: React.FC<ServicesBlockProps> = ({
  eyebrow,
  title,
  titleLine2,
  items = [],
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  if (!items?.length) return null

  const classes = [
    s.services,
    ...getBackgroundClasses(background, s, 'services'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['services__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={s.services__head}>
        {eyebrow && <span className={s.services__eyebrow}>{eyebrow}</span>}
        <h2 className={s.services__title}>
          {title}
          {titleLine2 && (
            <>
              <br />
              {titleLine2}
            </>
          )}
        </h2>
      </div>

      <div className={s.services__grid}>
        {items.map((item, index) => (
          <div key={index} className={s.card}>
            <Icon
              hasIcon={item.hasIcon ?? false}
              iconType={item.iconType ?? 'picker'}
              icon={item.icon}
              customSvg={typeof item.customSvg === 'object' ? item.customSvg : null}
              size={40}
              className={s.card__icon}
            />
            <h3 className={s.card__title}>{item.title}</h3>
            {item.description && <p className={s.card__description}>{item.description}</p>}
            {item.price && <span className={s.card__price}>{item.price}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
