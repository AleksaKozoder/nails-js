import { Block } from 'payload'
import { iconFields } from '@/components/atoms/Icon/config'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const ServicesBlock: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlockProps',
  labels: { singular: 'Services', plural: 'Services' },
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
              name: 'items',
              type: 'array',
              minRows: 1,
              labels: { singular: 'Service', plural: 'Services' },
              fields: [
                ...iconFields,
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
                {
                  name: 'price',
                  type: 'text',
                  label: 'Price',
                  admin: { description: 'e.g. "od 1600 RSD" or "po dogovoru"' },
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
