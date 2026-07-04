'use client'

import React, { useMemo, useState } from 'react'
import type { TabsBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

export const TabsBlock: React.FC<TabsBlockProps> = (props) => {
  const {
    orientation: orientationProp,
    variant = 'default',
    items = [],
    htmlId,
    customClassName,
    spacing,
  } = props
  const orientation = orientationProp ?? 'horizontal'

  const tabs = items ?? []
  const defaultIndex = useMemo(() => {
    const found = tabs.findIndex((item) => item?.defaultActive)
    return found >= 0 ? found : 0
  }, [items])

  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const activeItem = items?.[activeIndex]

  const blockClasses = [
    s.tabs,
    s[`tabs--${orientation}`],
    variant && s[`tabs--${variant}`],
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  if (!items?.length) return null

  return (
    <div className={blockClasses} id={htmlId || undefined}>
      <div className={s.tabs__nav} role="tablist" aria-orientation={orientation}>
        {items.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={`${item?.label ?? 'tab'}-${index}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={[s.tabs__trigger, isActive && s['tabs__trigger--active']]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveIndex(index)}
            >
              {item?.label}
            </button>
          )
        })}
      </div>

      <div className={s.tabs__panel} role="tabpanel">
        <BlockRenderer blocks={activeItem?.blocks ?? []} />
      </div>
    </div>
  )
}

export default TabsBlock
