// src/blocks/Section/config.ts
import { Block } from 'payload'
import { SliderBlock } from '@/blocks/Slider/config'
import { BlockHolder } from '@/blocks/BlockHolder/config'

const variants = [
  { label: 'Default', value: 'default' },
]

export const SectionBlock: Block = {
  slug: 'section',
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
              blocks: [BlockHolder, SliderBlock],
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
                      name: 'widthType',
                      type: 'select',
                      defaultValue: 'boxed',
                      admin: { width: '33%' },
                      options: [
                        { label: 'Full Width', value: 'fullWidth' },
                        { label: 'Boxed', value: 'boxed' },
                      ],
                    },
                    {
                      name: 'containerType',
                      type: 'select',
                      defaultValue: 'container',
                      admin: {
                        condition: (_, siblingData) => siblingData?.widthType === 'boxed',
                        width: '33%',
                      },
                      options: [
                        { label: 'Container XL', value: 'container-xl' },
                        { label: 'Container L', value: 'container-lg' },
                        { label: 'Container', value: 'container' },
                        { label: 'Container XS', value: 'container-xs' },
                      ],
                    },
                    {
                      name: 'variant',
                      type: 'select',
                      admin: { width: '33%' },
                      defaultValue: 'default',
                      options: variants,
                    }
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'paddingTop',
                      type: 'number',
                      defaultValue: 80,
                      admin: { width: '50%' },
                    },
                    {
                      name: 'paddingBottom',
                      type: 'number',
                      defaultValue: 80,
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  name: 'heightType',
                  type: 'select',
                  defaultValue: 'auto',
                  options: [
                    { label: 'Full Height', value: 'fullHeight' },
                    { label: 'Auto', value: 'auto' },
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
              ],
            },
          ],
        },
      ],
    },
  ],
}
