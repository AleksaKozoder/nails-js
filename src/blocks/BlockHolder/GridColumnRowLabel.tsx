'use client'

import React from 'react'
import type { RowLabelProps } from '@payloadcms/ui'

export const GridColumnRowLabel: React.FC<RowLabelProps> = ({ data, rowNumber }) => {
  const value = data?.value
  const unit = data?.unit

  const label =
    unit === 'auto' || unit === 'min-content' || unit === 'max-content'
      ? unit
      : value != null && unit
        ? `${value}${unit}`
        : `Kolona ${rowNumber}`

  return (
    <span>
      Col {rowNumber} — {label}
    </span>
  )
}
