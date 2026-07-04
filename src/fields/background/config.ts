import type { Field } from 'payload'

/**
 * Reusable background field group (color / gradient / image + overlay).
 * Importuj u bilo koji Block kao deo fields niza.
 *
 * Primer:
 *   import { backgroundFields } from '@/fields/background/config'
 *   fields: [...backgroundFields]
 */
export const backgroundFields: Field[] = [
  {
    name: 'background',
    type: 'group',
    label: 'Background',
    fields: [
      {
        name: 'type',
        type: 'select',
        label: 'Background Type',
        defaultValue: 'blank',
        options: [
          { label: 'Blank', value: 'blank' },
          { label: 'Color', value: 'color' },
          { label: 'Gradient', value: 'gradient' },
          { label: 'Image', value: 'image' },
        ],
      },
      {
        name: 'colorTheme',
        type: 'text',
        label: 'Color',
        admin: {
          components: {
            Field: '/components/admin/ColorSelectField',
          },
          condition: (_, siblingData) => siblingData?.type === 'color',
        },
      },
      {
        name: 'gradientTheme',
        type: 'select',
        label: 'Gradient',
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'gradient',
        },
        options: [
          { label: 'Warm Glow', value: 'warm' },
          { label: 'Cool Deep', value: 'cool' },
        ],
      },
      {
        name: 'image',
        type: 'upload',
        label: 'Image',
        relationTo: 'media',
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'image',
        },
      },
      {
        name: 'overlay',
        type: 'group',
        label: 'Overlay',
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'image',
        },
        fields: [
          {
            name: 'enabled',
            type: 'checkbox',
            label: 'Enable Overlay',
            defaultValue: false,
            admin: { width: '20%' },
          },
          {
            name: 'color',
            type: 'text',
            label: 'Overlay Color',
            admin: {
              width: '40%',
              components: {
                Field: '/components/admin/ColorSelectField',
              },
              condition: (_, siblingData) => siblingData?.enabled === true,
            },
          },
          {
            name: 'opacity',
            type: 'number',
            label: 'Opacity',
            min: 0,
            max: 100,
            defaultValue: 50,
            admin: {
              width: '40%',
              description: '0 - 100',
              condition: (_, siblingData) => siblingData?.enabled === true,
            },
          },
        ],
      },
    ],
  },
]
