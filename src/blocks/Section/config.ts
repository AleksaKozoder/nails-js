import { Block } from 'payload'
import { BlockHolder } from '@/blocks/BlockHolder/config'
import { PostsBlock } from '@/blocks/PostsBlock/config'

const variants = [{ label: 'Default', value: 'default' }]

const alignment = [
  { label: 'Top', value: 'top' },
  { label: 'Center', value: 'center' },
  { label: 'Bottom', value: 'bottom' },
]

const paddings = [
  { label: 'None', value: 'none' },
  { label: 'Extra Small', value: 'xs' },
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
]

export const SectionBlock: Block = {
  slug: 'section',
  interfaceName: 'SectionBlockProps',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks: [BlockHolder, PostsBlock],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'settings',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'htmlId',
                      type: 'text',
                      label: 'HTML ID',
                      admin: {
                        width: '33%',
                        description: 'Optional — custom ID / anchor',
                      },
                    },
                    {
                      name: 'variant',
                      type: 'select',
                      admin: { width: '33%' },
                      defaultValue: 'default',
                      options: variants,
                    },
                    {
                      name: 'viewport',
                      type: 'select',
                      defaultValue: 'auto',
                      admin: {
                        width: '33%',
                      },
                      options: [
                        { label: 'auto', value: 'auto' },
                        { label: 'full', value: 'full' },
                      ],
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'widthType',
                      type: 'select',
                      defaultValue: 'boxed',
                      admin: { width: '25%' },
                      options: [
                        { label: 'Full Width', value: 'fullWidth' },
                        { label: 'Boxed', value: 'boxed' },
                      ],
                    },
                    {
                      name: 'alignment',
                      type: 'select',
                      defaultValue: 'top',
                      options: alignment,
                      admin: {
                        width: '25%',
                        condition: (_, siblingData) => siblingData?.viewport === 'full',
                        description: 'Optional — vertical alignment',
                      },
                    },
                    {
                      name: 'containerType',
                      type: 'select',
                      defaultValue: 'container',
                      admin: {
                        condition: (_, siblingData) => siblingData?.widthType === 'boxed',
                        width: '25%',
                      },
                      options: [
                        { label: 'Container XL', value: 'container-xl' },
                        { label: 'Container L', value: 'container-lg' },
                        { label: 'Container', value: 'container' },
                        { label: 'Container XS', value: 'container-xs' },
                      ],
                    },
                    {
                      name: 'padding',
                      type: 'select',
                      defaultValue: 'none',
                      options: paddings,
                      admin: {
                        width: '25%',
                        description: 'Optional — space on top & bottom',
                      },
                    },
                  ],
                },
                {
                  name: 'backgroundType',
                  type: 'select',
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
                  admin: {
                    components: {
                      Field: '/components/admin/ColorSelectField',
                    },
                    condition: (_, siblingData) => siblingData?.backgroundType === 'color',
                  },
                },
                {
                  name: 'gradientTheme',
                  type: 'select',
                  admin: {
                    condition: (_, siblingData) => siblingData?.backgroundType === 'gradient',
                  },
                  options: [
                    { label: 'Warm Glow', value: 'warm' },
                    { label: 'Cool Deep', value: 'cool' },
                  ],
                },
                {
                  name: 'bgImage',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    condition: (_, siblingData) => siblingData?.backgroundType === 'image',
                  },
                },
                {
                  name: 'overlay',
                  type: 'group',
                  label: 'Overlay',
                  admin: {
                    condition: (_, siblingData) => siblingData?.backgroundType === 'image',
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
          ],
        },
      ],
    },
  ],
}
