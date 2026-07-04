import type { Field } from 'payload'
import { SPACING_OPTIONS } from '@/fields/constants'

/**
 * Reusable spacing field group.
 * Importuj u bilo koji Block kao deo fields niza.
 *
 * Primer:
 *   import { spacingFields } from '@/fields/spacing/config'
 *   fields: [...spacingFields]
 */
export const spacingFields: Field[] = [
  {
    name: 'spacing',
    type: 'group',
    label: 'Spacing',
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'paddingTop',
            type: 'select',
            label: 'Padding Top',
            defaultValue: 'none',
            options: SPACING_OPTIONS,
            admin: { width: '25%' },
          },
          {
            name: 'paddingBottom',
            type: 'select',
            label: 'Padding Bottom',
            defaultValue: 'none',
            options: SPACING_OPTIONS,
            admin: { width: '25%' },
          },
          {
            name: 'marginTop',
            type: 'select',
            label: 'Margin Top',
            defaultValue: 'none',
            options: SPACING_OPTIONS,
            admin: { width: '25%' },
          },
          {
            name: 'marginBottom',
            type: 'select',
            label: 'Margin Bottom',
            defaultValue: 'none',
            options: SPACING_OPTIONS,
            admin: { width: '25%' },
          },
        ],
      },
    ],
  },
]
