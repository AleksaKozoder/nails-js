import { GlobalConfig } from 'payload'
import { blockHolderFields } from '@/blocks/BlockHolder/config'

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
          fields: blockHolderFields,
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
                  name: 'containerType',
                  type: 'select',
                  defaultValue: 'container',
                  admin: {
                    width: '33%',
                  },
                  options: [
                    { label: 'Container XL', value: 'container-xl' },
                    { label: 'Container L', value: 'container-lg' },
                    { label: 'Container', value: 'container' },
                    { label: 'Container XS', value: 'container-xs' },
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
