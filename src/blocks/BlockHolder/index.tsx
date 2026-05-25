import React, { CSSProperties } from 'react'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

type GridColumn = {
  value?: number | null
  unit?: 'fr' | 'px' | '%' | 'rem' | 'auto' | 'min-content' | 'max-content'
}

type BlockHolderProps = {
  layout?: 'block' | 'flex' | 'grid'
  gap?: number | null
  variant?: string

  // Flex
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  flexJustify?: string
  flexAlign?: string
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'

  // Grid
  gridMode?: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | 'custom'
  gridJustifyItems?: string
  gridAlignItems?: string

  // Grid — auto
  gridAutoRepeat?: 'auto-fill' | 'auto-fit'
  gridAutoMinValue?: number | null
  gridAutoMinUnit?: 'px' | '%' | 'rem'
  gridAutoMax?: string

  // Grid — columns array
  gridColumns?: GridColumn[] | null

  // Content
  blocks?: any[]
}

function buildColumnsFromArray(columns: GridColumn[]): string {
  return columns
    .map(({ value, unit }) => {
      if (!unit) return '1fr'
      if (unit === 'auto' || unit === 'min-content' || unit === 'max-content') return unit
      return `${value ?? 1}${unit}`
    })
    .join(' ')
}

function buildDefaultRepeat(n: number): string {
  return `repeat(${n}, 1fr)`
}

function buildGridTemplateColumns(props: BlockHolderProps): string {
  const { gridMode, gridColumns, gridAutoRepeat, gridAutoMinValue, gridAutoMinUnit, gridAutoMax } =
    props

  if (gridMode === 'auto') {
    const repeat = gridAutoRepeat ?? 'auto-fill'
    const minVal = gridAutoMinValue ?? 280
    const minUnit = gridAutoMinUnit ?? 'px'
    const max = gridAutoMax ?? '1fr'
    return `repeat(${repeat}, minmax(${minVal}${minUnit}, ${max}))`
  }

  if (gridColumns && gridColumns.length > 0) {
    return buildColumnsFromArray(gridColumns)
  }

  // fallback na broj kolona ako nema array podataka
  const n = parseInt(gridMode ?? '2', 10)
  return isNaN(n) ? 'repeat(2, 1fr)' : buildDefaultRepeat(n)
}

export const BlockHolder: React.FC<BlockHolderProps> = (props) => {
  const {
    layout = 'block',
    gap = 20,
    // flex
    flexDirection = 'row',
    flexJustify = 'start',
    flexAlign = 'start',
    flexWrap = 'nowrap',
    // grid
    gridJustifyItems = 'stretch',
    gridAlignItems = 'stretch',
    // content
    blocks,
    variant,
  } = props

  let style: CSSProperties = {}

  if (layout === 'flex') {
    style = {
      flexDirection: flexDirection,
      justifyContent: flexJustify,
      alignItems: flexAlign,
      flexWrap: flexWrap,
      gap: gap ? `${gap}px` : undefined,
    }
  } else if (layout === 'grid') {
    style = {
      gridTemplateColumns: buildGridTemplateColumns(props),
      justifyItems: gridJustifyItems,
      alignItems: gridAlignItems,
      gap: gap ? `${gap}px` : undefined,
    }
  }

  const blockClasses = [
    layout === 'block' ? s['block-holder'] : s[`block-holder--${layout}`],
    variant && s[`block-holder--${variant}`]]
    .filter(Boolean)
    .join(' ')

  return (
    <div style={style} className={blockClasses}>
      <BlockRenderer blocks={blocks ?? []} />
    </div>
  )
}

export default BlockHolder
