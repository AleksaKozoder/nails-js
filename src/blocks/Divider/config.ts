import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'

const lineStyles = [
  { label: 'Solid', value: 'solid' },
  { label: 'Dashed', value: 'dashed' },
  { label: 'Dotted', value: 'dotted' },
]

const thicknesses = [
  { label: 'Thin', value: 'thin' },
  { label: 'Medium', value: 'medium' },
  { label: 'Thick', value: 'thick' },
]

export const DividerBlock: Block = {
  slug: 'divider',
  interfaceName: 'DividerBlockProps',
  labels: { singular: 'Divider', plural: 'Dividers' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Settings',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'lineStyle',
                  type: 'select',
                  label: 'Style',
                  defaultValue: 'solid',
                  options: lineStyles,
                  admin: { width: '33%' },
                },
                {
                  name: 'thickness',
                  type: 'select',
                  label: 'Thickness',
                  defaultValue: 'thin',
                  options: thicknesses,
                  admin: { width: '33%' },
                },
                {
                  name: 'colorTheme',
                  type: 'text',
                  label: 'Color',
                  admin: {
                    width: '33%',
                    components: {
                      Field: '/components/admin/ColorSelectField',
                    },
                  },
                },
              ],
            },
            ...advancedFields,
            ...spacingFields,
          ],
        },
      ],
    },
  ],
}
