'use client'

import React, { useMemo, useState } from 'react'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

type TabsItem = {
  label?: string
  icon?: string
  defaultActive?: boolean
  content?: any[]
}

type TabsBlockProps = {
  orientation?: 'horizontal' | 'vertical'
  variant?: string
  items?: TabsItem[] | null
}

export const TabsBlock: React.FC<TabsBlockProps> = (props) => {
  const { orientation = 'horizontal', variant = 'default', items = [] } = props

  const tabs = items ?? [];
  const defaultIndex = useMemo(() => {
    const found = tabs.findIndex((item) => item?.defaultActive)
    return found >= 0 ? found : 0
  }, [items])

  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const activeItem = items?.[activeIndex]

  const blockClasses = [s.tabs, s[`tabs--${orientation}`], variant && s[`tabs--${variant}`]]
    .filter(Boolean)
    .join(' ')

  if (!items?.length) return null

  return (
    <div className={blockClasses}>
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
        <BlockRenderer blocks={activeItem?.content ?? []} />
      </div>
    </div>
  )
}

export default TabsBlock
