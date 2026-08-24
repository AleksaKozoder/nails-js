import React from 'react'
import type { ContactBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

export const Contact: React.FC<ContactBlockProps> = ({
  eyebrow,
  title,
  items,
  card,
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const classes = [
    s.contact,
    ...getBackgroundClasses(background, s, 'contact'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['contact__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={s.contact__inner}>
        <div className={s.contact__info}>
          {eyebrow && <span className={s.contact__eyebrow}>{eyebrow}</span>}
          <h2 className={s.contact__title}>{title}</h2>

          {items && items.length > 0 && (
            <ul className={s.contact__list}>
              {items.map((item, index) => (
                <li key={item.id ?? index}>
                  {item.icon && <span className={s.contact__icon}>{item.icon}</span>}
                  <div>
                    <span className={s.contact__label}>{item.label}</span>
                    <br />
                    {item.url ? (
                      <a
                        href={item.url}
                        className={[s.contact__value, s['contact__value--link']].join(' ')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <strong className={s.contact__value}>{item.value}</strong>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {card && (card.scriptText || card.text || (card.button && card.button.length > 0)) && (
          <div className={s.contact__card}>
            {card.scriptText && <span className={s.contact__script}>{card.scriptText}</span>}
            {card.text && <p className={s.contact__cardText}>{card.text}</p>}
            {card.button && card.button.length > 0 && (
              <div className={s.contact__cardButton}>
                <BlockRenderer blocks={card.button} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
