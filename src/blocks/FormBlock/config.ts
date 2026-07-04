import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const FormBlock: Block = {
  slug: 'formBlock',
  interfaceName: 'FormBlockProps',
  labels: { singular: 'Form', plural: 'Forms' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'form',
              type: 'relationship',
              relationTo: 'forms',
              required: true,
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
