import { Block } from 'payload'
import { ButtonBlock } from '@/components/atoms/Button/config'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

const alignments = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
]

export const CTABlock: Block = {
  slug: 'cta',
  interfaceName: 'CTABlockProps',
  labels: { singular: 'CTA', plural: 'CTAs' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
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
              name: 'buttons',
              type: 'blocks',
              label: 'Buttons',
              maxRows: 2,
              blocks: [ButtonBlock],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'alignment',
              type: 'select',
              defaultValue: 'center',
              options: alignments,
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
