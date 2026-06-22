import React, { CSSProperties } from 'react'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

type BlockHolderProps = {
  layout?: 'block' | 'flex' | 'grid'
  gap?: number | null
  flexVariant?: string
  gridVariant?: string
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
  } = props


  const blockClasses = [
    layout === 'block' ? s['block-holder'] : s[`block-holder--${layout}`],
    gap !== 'none' && `gap-${gap}`,
    flexVariant !== 'row' && s[`block-holder--flex-${flexVariant}`],
    gridVariant !== 'auto' && s[`block-holder--grid-${gridVariant}`],
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
