import { Block } from 'payload'
import { buttonFields } from '@/components/atoms/Button/config'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const PricingBlock: Block = {
  slug: 'pricing',
  interfaceName: 'PricingBlockProps',
  labels: { singular: 'Pricing', plural: 'Pricing' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  admin: { width: '50%' },
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  label: 'Subtitle',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              name: 'priceBlocks',
              type: 'array',
              label: 'Price Blocks',
              labels: { singular: 'Price Block', plural: 'Price Blocks' },
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      label: 'Heading',
                      required: true,
                      admin: { width: '70%', description: 'e.g. "IZLIVANJE"' },
                    },
                    {
                      name: 'smallRows',
                      type: 'checkbox',
                      label: 'Small rows',
                      defaultValue: false,
                      admin: {
                        width: '30%',
                        description: 'For long lists of add-ons/surcharges.',
                      },
                    },
                  ],
                },
                {
                  name: 'rows',
                  type: 'array',
                  label: 'Rows',
                  labels: { singular: 'Row', plural: 'Rows' },
                  minRows: 1,
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'label',
                          type: 'text',
                          required: true,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'value',
                          type: 'text',
                          required: true,
                          admin: { width: '50%', description: 'e.g. "1600 RSD"' },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'note',
              type: 'text',
              label: 'Note',
            },
            {
              name: 'button',
              type: 'group',
              label: 'Button',
              fields: buttonFields,
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
