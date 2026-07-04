import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

const layoutOptions = [
  { label: 'Grid', value: 'grid' },
  { label: 'Carousel', value: 'carousel' },
]

const columnOptions = [
  { label: '2 columns', value: 'col-2' },
  { label: '3 columns', value: 'col-3' },
]

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlockProps',
  labels: { singular: 'Testimonials', plural: 'Testimonials' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'items',
              type: 'array',
              minRows: 1,
              labels: { singular: 'Testimonial', plural: 'Testimonials' },
              fields: [
                {
                  name: 'quote',
                  type: 'textarea',
                  required: true,
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                      admin: { width: '34%' },
                    },
                    {
                      name: 'role',
                      type: 'text',
                      label: 'Role / Company',
                      admin: { width: '33%' },
                    },
                    {
                      name: 'avatar',
                      type: 'upload',
                      relationTo: 'media',
                      admin: { width: '33%' },
                    },
                  ],
                },
              ],
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
                  defaultValue: 'grid',
                  options: layoutOptions,
                  admin: { width: '50%' },
                },
                {
                  name: 'columns',
                  type: 'select',
                  defaultValue: 'col-3',
                  options: columnOptions,
                  admin: {
                    width: '50%',
                    condition: (_, siblingData) => siblingData?.layout === 'grid',
                  },
                },
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
