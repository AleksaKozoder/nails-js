// src/blocks/Section/config.ts
import { Block } from 'payload'
import { MediaContentBlock } from '@/blocks/MediaContent/config'
import { SliderBlock } from '@/blocks/Slider/config'
import { TextBlockConfig } from '@/blocks/TextBlock/config'

export const SectionBlock: Block = {
  slug: 'section',
  fields: [
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          name: 'widthType',
          type: 'select',
          defaultValue: 'fullWidth',
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
          },
          options: [
            { label: 'Container XL', value: 'container-xl' },
            { label: 'Container L', value: 'container-lg' },
            { label: 'Container', value: 'container' },
            { label: 'Container XS', value: 'container-xs' },
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
          type: 'select',
          admin: {
            condition: (_, siblingData) => siblingData?.backgroundType === 'color',
          },
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Dark', value: 'dark' },
            { label: 'Light', value: 'light' },
          ],
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
        { name: 'paddingTop', type: 'number', defaultValue: 80 },
        { name: 'paddingBottom', type: 'number', defaultValue: 80 },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [MediaContentBlock, SliderBlock, TextBlockConfig],
    },
  ],
}
