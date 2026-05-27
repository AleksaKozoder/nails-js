import { GlobalConfig } from 'payload'
import { buttonFields } from '@/components/atoms/Button/config'

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
          fields: [
            {
              name: 'menu',
              type: 'relationship',
              relationTo: 'menus',
              admin: {
                description: 'Select which menu to use for main navigation',
              },
            },
            {
              name: 'cta',
              type: 'group',
              label: 'CTA Button',
              fields: buttonFields,
            },
          ],
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
                  admin: { width: '33%' },
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
                  admin: { width: '33%' },
                  options: [
                    { label: 'None', value: 'none' },
                    { label: 'Sticky', value: 'sticky' },
                    { label: 'Sticky on scroll up', value: 'sticky-up' },
                  ],
                },
                {
                  name: 'width',
                  type: 'select',
                  defaultValue: 'default',
                  admin: { width: '33%' },
                  options: [
                    { label: 'Default', value: 'default' },
                    { label: 'Wide', value: 'wide' },
                    { label: 'Full', value: 'full' },
                  ],
                },
              ],
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
                  name: 'className',
                  type: 'text',
                  label: 'CSS Class',
                  admin: {
                    width: '50%',
                    description: 'Optional — additional CSS class',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
