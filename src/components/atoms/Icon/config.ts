import type { Field } from 'payload'

/**
 * Reusable icon field group.
 * Importuj u bilo koji Block/Field kao deo fields niza.
 *
 * Primer:
 *   import { iconFields } from '@/components/atoms/Icon/config'
 *   fields: [...iconFields]
 */
export const iconFields: Field[] = [
  {
    name: 'hasIcon',
    type: 'checkbox',
    label: 'Add Icon',
    defaultValue: false,
  },
  {
    name: 'iconType',
    type: 'radio',
    label: 'Icon Type',
    defaultValue: 'picker',
    options: [
      { label: 'Picker', value: 'picker' },
      { label: 'Custom SVG (Media)', value: 'customSvg' },
    ],
    admin: {
      layout: 'horizontal',
      condition: (_, siblingData) => Boolean(siblingData?.hasIcon),
    },
  },
  {
    name: 'icon',
    type: 'text',
    label: 'Icon',
    admin: {
      condition: (_, siblingData) =>
        Boolean(siblingData?.hasIcon) && siblingData?.iconType !== 'customSvg',
      components: {
        Field: '@/components/atoms/Icon/IconPickerField#IconPickerField',
      },
    },
  },
  {
    name: 'customSvg',
    type: 'relationship',
    label: 'Custom SVG File',
    relationTo: 'media',
    admin: {
      condition: (_, siblingData) =>
        Boolean(siblingData?.hasIcon) && siblingData?.iconType === 'customSvg',
    },
  },
  {
    name: 'iconPosition',
    type: 'select',
    label: 'Icon Position',
    defaultValue: 'right',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Right', value: 'right' },
    ],
    admin: {
      condition: (_, siblingData) => Boolean(siblingData?.hasIcon),
    },
  },
]
