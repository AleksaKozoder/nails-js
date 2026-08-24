import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const AboutBlock: Block = {
  slug: 'about',
  interfaceName: 'AboutBlockProps',
  labels: { singular: 'About', plural: 'About' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Eyebrow',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'text',
              type: 'richText',
              label: 'Text',
            },
            {
              name: 'facts',
              type: 'array',
              label: 'Fact Chips',
              labels: { singular: 'Chip', plural: 'Chips' },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: { description: 'e.g. "📍 Kragujevac" — include the emoji in the text.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'imagePosition',
              type: 'select',
              label: 'Image Position',
              defaultValue: 'left',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ],
            },
            ...advancedFields,
            ...spacingFields,
            ...backgroundFields,
          ],
        },
      ],
    },
  ],
}
