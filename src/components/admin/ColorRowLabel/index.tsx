// components/admin/ColorRowLabel/index.tsx
'use client'
import { useRowLabel } from '@payloadcms/ui'

const ColorRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ label: string; hex: string }>()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  {data.hex && (
    <div style={{
    width: '16px',
      height: '16px',
      borderRadius: '3px',
      backgroundColor: data.hex,
      border: '1px solid rgba(0,0,0,0.15)',
      flexShrink: 0,
  }} />
  )}
  <span>{data.label || `Color ${rowNumber}`}</span>
  </div>
)
}
export default ColorRowLabel