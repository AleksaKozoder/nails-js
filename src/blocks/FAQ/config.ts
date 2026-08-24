import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const FAQBlock: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlockProps',
  labels: { singular: 'FAQ', plural: 'FAQs' },
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
              name: 'title',
              type: 'text',
              label: 'Title',
            },
            {
              name: 'items',
              type: 'array',
              label: 'Questions',
              labels: { singular: 'Question', plural: 'Questions' },
              minRows: 1,
              fields: [
                {
                  name: 'question',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'answer',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'defaultOpen',
                  type: 'checkbox',
                  label: 'Open by default',
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'allowMultiple',
              type: 'checkbox',
              label: 'Allow Multiple Open',
              defaultValue: true,
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
