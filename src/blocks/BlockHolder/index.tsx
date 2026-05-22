import React, { CSSProperties } from 'react'
import { BlockRenderer } from '@/blocks/BlockRenderer'

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

// Mapira array kolona u grid-template-columns string
function buildColumnsFromArray(columns: GridColumn[]): string {
  return columns
    .map(({ value, unit }) => {
      if (!unit) return '1fr'
      if (unit === 'auto' || unit === 'min-content' || unit === 'max-content') return unit
      return `${value ?? 1}${unit}`
    })
    .join(' ')
}

// Kad je gridMode broj ("2", "3"...) i nema customizovanih kolona,
// generišemo defaultni repeat(n, 1fr)
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
  } = props

  let style: CSSProperties = {}

  if (layout === 'flex') {
    style = {
      display: 'flex',
      flexDirection: flexDirection,
      justifyContent: flexJustify,
      alignItems: flexAlign,
      flexWrap: flexWrap,
      gap: gap ? `${gap}px` : undefined,
    }
  } else if (layout === 'grid') {
    style = {
      display: 'grid',
      gridTemplateColumns: buildGridTemplateColumns(props),
      justifyItems: gridJustifyItems,
      alignItems: gridAlignItems,
      gap: gap ? `${gap}px` : undefined,
    }
  }

  return (
    <div style={style}>
      <BlockRenderer blocks={blocks ?? []} />
    </div>
  )
}

export default BlockHolder
