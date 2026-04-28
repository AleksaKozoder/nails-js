'use client'
import { useField } from '@payloadcms/ui'
import { useEffect, useState, useRef } from 'react'

type ColorOption = {
  label: string
  value: string
  hex: string
}

type Props = {
  path: string
  label?: string
}

export const ColorSelectField = ({ path, label }: Props) => {
  const [options, setOptions] = useState<ColorOption[]>([])
  const [open, setOpen] = useState(false)
  const { value, setValue } = useField<string>({ path }) // path kao prop
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/globals/colors')
      .then((res) => res.json())
      .then((data) => setOptions(data.colors || []))
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selected = options.find((o) => o.value === value)

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px' }}>
        {label || 'Background Color'}
      </label>

      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          border: '1px solid var(--theme-elevation-150)',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: 'var(--theme-elevation-50)',
          minHeight: '40px',
        }}
      >
        {selected ? (
          <>
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '3px',
                backgroundColor: selected.hex,
                border: '1px solid rgba(0,0,0,0.15)',
                flexShrink: 0,
              }}
            />
            <span>{selected.label}</span>
          </>
        ) : (
          <span style={{ color: 'var(--theme-elevation-400)' }}>Izaberi boju...</span>
        )}
      </div>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: 'var(--theme-elevation-0)',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: '4px',
            marginTop: '4px',
            overflow: 'hidden',
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setValue(option.value)
                setOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                cursor: 'pointer',
                backgroundColor:
                  value === option.value ? 'var(--theme-elevation-100)' : 'transparent',
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '3px',
                  backgroundColor: option.hex,
                  border: '1px solid rgba(0,0,0,0.15)',
                  flexShrink: 0,
                }}
              />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ColorSelectField
