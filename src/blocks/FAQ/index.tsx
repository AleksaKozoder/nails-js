'use client'

import React, { useState } from 'react'
import type { FAQBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

export const FAQ: React.FC<FAQBlockProps> = ({
  eyebrow,
  title,
  items = [],
  allowMultiple = true,
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(() =>
    (items ?? []).reduce<number[]>((acc, item, i) => {
      if (item?.defaultOpen) acc.push(i)
      return acc
    }, []),
  )

  if (!items?.length) return null

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
      )
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  const classes = [
    s.faq,
    ...getBackgroundClasses(background, s, 'faq'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['faq__bgImage']}
        overlayClassName={s.overlay}
      />

      {(eyebrow || title) && (
        <div className={s.faq__head}>
          {eyebrow && <span className={s.faq__eyebrow}>{eyebrow}</span>}
          {title && <h2 className={s.faq__title}>{title}</h2>}
          <div className={s.flourish}>
            <span />
          </div>
        </div>
      )}

      <div className={s.faq__list}>
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index)

          return (
            <div
              key={index}
              className={[s.faq__item, isOpen && s['faq__item--open']].filter(Boolean).join(' ')}
            >
              <button
                type="button"
                className={s.faq__question}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <h3>{item.question}</h3>
                <span className={s.faq__chev} aria-hidden="true" />
              </button>
              <div className={s.faq__answer} aria-hidden={!isOpen}>
                <div className={s.faq__answerInner}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FAQ
