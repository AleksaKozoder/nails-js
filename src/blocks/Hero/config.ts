import { Block } from 'payload'
import { ButtonBlock } from '@/components/atoms/Button/config'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlockProps',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Eyebrow',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title (line 1)',
                  required: true,
                  admin: { width: '50%' },
                },
                {
                  name: 'highlightedTitle',
                  type: 'text',
                  label: 'Title (line 2 — emphasized)',
                  admin: {
                    width: '50%',
                    description: 'Rendered on its own line, wrapped in <em>.',
                  },
                },
              ],
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'buttons',
              type: 'blocks',
              label: 'Buttons',
              maxRows: 2,
              blocks: [ButtonBlock],
            },
            {
              name: 'trustItems',
              type: 'array',
              label: 'Trust Chips',
              labels: { singular: 'Chip', plural: 'Chips' },
              maxRows: 6,
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: { description: 'e.g. "📍 Kragujevac" — include the emoji in the text.' },
                },
              ],
            },
            {
              name: 'images',
              type: 'array',
              label: 'Pinned Images',
              labels: { singular: 'Image', plural: 'Images' },
              minRows: 0,
              maxRows: 3,
              admin: {
                description:
                  'Up to 3 images, pinned/rotated like polaroids. First image is the large one.',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [...advancedFields, ...spacingFields, ...backgroundFields],
        },
      ],
    },
  ],
}
