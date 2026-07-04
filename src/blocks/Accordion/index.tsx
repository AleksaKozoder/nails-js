'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import type { AccordionBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

export const AccordionBlock: React.FC<AccordionBlockProps> = (props) => {
  const {
    items = [],
    allowMultiple = false,
    variant = 'default',
    htmlId,
    customClassName,
    spacing,
    background,
  } = props

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

  const backgroundType = background?.type
  const bgImageMedia = typeof background?.image === 'object' ? background.image : undefined
  const overlay = background?.overlay
  const showOverlay = overlay?.enabled && overlay?.color

  const blockClasses = [
    s.accordion,
    s[`accordion--${variant}`],
    backgroundType === 'color' && s[`accordion--color-${background?.colorTheme}`],
    backgroundType === 'gradient' && s[`accordion--gradient-${background?.gradientTheme}`],
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={blockClasses} id={htmlId || undefined}>
      {backgroundType === 'image' && bgImageMedia?.url && (
        <Image src={bgImageMedia.url} alt="" fill className={s['accordion__bgImage']} />
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

      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)

        return (
          <div
            key={`accordion-item-${index}`}
            className={[s.accordion__item, isOpen && s['accordion__item--open']]
              .filter(Boolean)
              .join(' ')}
          >
            <button
              type="button"
              className={s.accordion__trigger}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item?.label}</span>
              <span className={s.accordion__icon} aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className={[s.accordion__panel, isOpen && s['accordion__panel--open']]
                .filter(Boolean)
                .join(' ')}
              aria-hidden={!isOpen}
            >
              <div className={s.accordion__panel_inner}>
                <div className={s.accordion__panel_content}>
                  <BlockRenderer blocks={item?.blocks ?? []} />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AccordionBlock
