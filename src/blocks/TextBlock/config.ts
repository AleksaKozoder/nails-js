import { Block } from 'payload'
import {HeadingBlock} from '@/components/atoms/Heading/config'
import { RichTextBlock } from '@/components/atoms/RichText/config'
import { ButtonBlock } from '@/components/atoms/Button/config'

const variants = [{ label: 'Default', value: 'default' }]

export const TextBlockConfig: Block = {
  slug: 'textBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'blocks',
              blocks: [HeadingBlock, RichTextBlock, ButtonBlock], // dodaješ Heading kao block
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
                  name: 'verticalPosition',
                  type: 'select',
                  admin: { width: '33%' },
                  dbName: 'v_pos',
                  defaultValue: 'top',
                  options: [
                    { label: 'Top', value: 'top' },
                    { label: 'Center', value: 'center' },
                    { label: 'Bottom', value: 'bottom' },
                    { label: 'SpaceBetween', value: 'space-between' },
                    { label: 'SpaceAround', value: 'space-around' },
                  ],
                },
                {
                  name: 'horizontalPosition',
                  type: 'select',
                  admin: { width: '33%' },
                  dbName: 'h_pos',
                  defaultValue: 'left',
                  options: [
                    { label: 'Left', value: 'left' },
                    { label: 'Center', value: 'center' },
                    { label: 'Right', value: 'right' },
                  ],
                },
                {
                  name: 'variant',
                  type: 'select',
                  admin: { width: '33%' },
                  defaultValue: 'default',
                  options: variants,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
