import {Block} from 'payload'
import { TextBlockConfig } from '@/blocks/TextBlock/config'
import { type } from 'node:os'
import { ImageBlock } from '@/components/atoms/Image/config'

export const BlockHolder: Block = {
  slug: 'blockHolder',
  labels: { singular: 'Block Holder', plural: 'Blocks Holder' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'Blocks',
              type: 'blocks',
              blocks: [TextBlockConfig, ImageBlock],
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
                  name: 'layout',
                  type: 'select',
                  defaultValue: 'block',
                  admin: { width: '33%' },
                  options: [
                    { label: 'Grid', value: 'grid' },
                    { label: 'Flex', value: 'flex' },
                    { label: 'Block', value: 'block' },
                  ],
                },
                {
                  name: 'gap',
                  label: 'Gap (px)',
                  type: 'number',
                  defaultValue: 20,
                  admin: { width: '33%' },
                },
                {
                  name: 'variant',
                  type: 'select',
                  admin: { width: '33%' },
                  defaultValue: 'default',
                  options: [{ label: 'Default', value: 'default' }],
                },
              ],
            },
            {
              type: 'row',
              admin: { condition: (_, siblingData) => siblingData?.layout === 'flex' },
              fields: [
                {
                  name: 'Direction',
                  type: 'select',
                  defaultValue: 'row',
                  admin: { width: '25%' },
                  options: [
                    { label: 'Row', value: 'row' },
                    { label: 'Column', value: 'column' },
                  ],
                },
                {
                  name: 'Justify',
                  type: 'select',
                  defaultValue: 'start',
                  admin: { width: '25%' },
                  options: [
                    { label: 'Start', value: 'start' },
                    { label: 'Center', value: 'center' },
                    { label: 'End', value: 'end' },
                    { label: 'SpaceBetween', value: 'space-between' },
                    { label: 'SpaceAround', value: 'space-around' },
                  ],
                },
                {
                  name: 'Align',
                  type: 'select',
                  defaultValue: 'start',
                  admin: { width: '25%' },
                  options: [
                    { label: 'Start', value: 'start' },
                    { label: 'Center', value: 'center' },
                    { label: 'End', value: 'end' },
                    { label: 'Stretch', value: 'stretch' },
                  ],
                },
                {
                  name: 'Wrap',
                  type: 'select',
                  defaultValue: 'nowrap',
                  admin: { width: '25%' },
                  options: [
                    { label: 'NoWrap', value: 'nowrap' },
                    { label: 'Wrap', value: 'wrap' },
                    { label: 'WrapReverse', value: 'wrap-reverse' },
                  ],
                },
              ],
            },
            {
              type: 'row',
              admin: { condition: (_, siblingData) => siblingData?.layout === 'grid' },
              fields: [
                {
                  name: 'Columns',
                  type: 'number',
                  defaultValue: 1,
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