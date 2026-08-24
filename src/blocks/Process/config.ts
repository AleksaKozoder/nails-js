import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const ProcessBlock: Block = {
  slug: 'process',
  interfaceName: 'ProcessBlockProps',
  labels: { singular: 'Process', plural: 'Process' },
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
                  name: 'titleLine2',
                  type: 'text',
                  label: 'Title (line 2)',
                  admin: { width: '50%', description: 'Optional — rendered on its own line.' },
                },
              ],
            },
            {
              name: 'steps',
              type: 'array',
              minRows: 1,
              labels: { singular: 'Step', plural: 'Steps' },
              admin: {
                description: 'Step numbers (01, 02, ...) are generated automatically from order.',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
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
