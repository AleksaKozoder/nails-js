import { GlobalConfig } from 'payload'
import { layoutBlocksFields } from '@/fields/layoutBlocks/config'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: layoutBlocksFields,
        },
        {
          label: 'Settings',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'variant',
                  type: 'select',
                  defaultValue: 'default',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Default', value: 'default' },
                    { label: 'Minimal', value: 'minimal' },
                  ],
                },
                {
                  name: 'htmlId',
                  type: 'text',
                  label: 'HTML ID',
                  admin: {
                    width: '50%',
                    description: 'Optional — custom ID attribute on the footer element',
                  },
                },
              ],
            },
            {
              name: 'colorTheme',
              type: 'text',
              label: 'Background Color',
              admin: {
                description: 'Footer background color. Leave empty for a transparent background.',
                components: {
                  Field: '/components/admin/ColorSelectField',
                },
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'paddingTop',
                  type: 'number',
                  defaultValue: 10,
                  admin: { width: '25%' },
                },
                {
                  name: 'paddingBottom',
                  type: 'number',
                  defaultValue: 10,
                  admin: { width: '25%' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
