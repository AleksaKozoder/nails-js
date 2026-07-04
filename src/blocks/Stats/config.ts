import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

const columnOptions = [
  { label: '2 columns', value: 'col-2' },
  { label: '3 columns', value: 'col-3' },
  { label: '4 columns', value: 'col-4' },
]

export const StatsBlock: Block = {
  slug: 'stats',
  interfaceName: 'StatsBlockProps',
  labels: { singular: 'Stats', plural: 'Stats' },
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
              labels: { singular: 'Stat', plural: 'Stats' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'value',
                      type: 'text',
                      required: true,
                      admin: { width: '50%', description: 'e.g. 500+, 99%, 24/7' },
                    },
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      admin: { width: '50%' },
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
              name: 'columns',
              type: 'select',
              defaultValue: 'col-4',
              options: columnOptions,
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
