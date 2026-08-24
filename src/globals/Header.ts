import { GlobalConfig } from 'payload'
import { layoutBlocksFields } from '@/fields/layoutBlocks/config'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
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
                    { label: 'Transparent', value: 'transparent' },
                    { label: 'Minimal', value: 'minimal' },
                  ],
                },
                {
                  name: 'sticky',
                  type: 'select',
                  defaultValue: 'none',
                  admin: { width: '50%' },
                  options: [
                    { label: 'None', value: 'none' },
                    { label: 'Sticky', value: 'sticky' },
                    { label: 'Sticky on scroll up', value: 'sticky-up' },
                  ],
                },
              ],
            },
            {
              name: 'colorTheme',
              type: 'text',
              label: 'Background Color',
              defaultValue: 'blush-soft',
              admin: {
                description: 'Header background color (applied at ~86% opacity, with blur).',
                components: {
                  Field: '/components/admin/ColorSelectField',
                },
                condition: (_, siblingData) => siblingData?.variant !== 'transparent',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'htmlId',
                  type: 'text',
                  label: 'HTML ID',
                  admin: {
                    width: '50%',
                    description: 'Optional — custom ID attribute on the header element',
                  },
                },
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
