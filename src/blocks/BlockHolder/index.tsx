import React, { CSSProperties } from 'react'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

type BlockHolderProps = {
  layout?: 'block' | 'flex' | 'grid'
  gap?: number | null
  variant?: string
  flexVariant?: string
  gridVariant?: string
  verticalAlignment?: 'top' | 'center' | 'bottom'
  htmlId?: string

  // Content
  atoms?: any[]
}

export const BlockHolder: React.FC<BlockHolderProps> = (props) => {
  const {
    layout = 'block',
    gap = 'none',
    htmlId,
    atoms,
    flexVariant,
    gridVariant,
    variant,
    verticalAlignment,
  } = props

  const blockClasses = [
    layout === 'block' ? s['block-holder'] : s[`block-holder--${layout}`],
    gap !== 'none' && `gap-${gap}`,
    variant !== 'default' && s[`block-holder--${variant}`],
    flexVariant !== 'row' && s[`block-holder--flex-${flexVariant}`],
    gridVariant !== 'auto' && s[`block-holder--grid-${gridVariant}`],
    verticalAlignment !== 'top' && s[`block-holder--align-${verticalAlignment}`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={blockClasses} id={htmlId || undefined}>
      <BlockRenderer blocks={atoms ?? []} />
    </div>
  )
}

export default BlockHolder
