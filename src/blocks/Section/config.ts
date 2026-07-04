import { Block } from 'payload'
import { BlockHolder } from '@/blocks/BlockHolder/config'
import { PostsBlock } from '@/blocks/PostsBlock/config'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

const alignment = [
  { label: 'Top', value: 'top' },
  { label: 'Center', value: 'center' },
  { label: 'Bottom', value: 'bottom' },
]

export const SectionBlock: Block = {
  slug: 'section',
  interfaceName: 'SectionBlockProps',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks: [BlockHolder, PostsBlock],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'settings',
              type: 'group',
              fields: [
                ...advancedFields,
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'viewport',
                      type: 'select',
                      defaultValue: 'auto',
                      admin: {
                        width: '25%',
                      },
                      options: [
                        { label: 'auto', value: 'auto' },
                        { label: 'full', value: 'full' },
                      ],
                    },
                    {
                      name: 'widthType',
                      type: 'select',
                      defaultValue: 'boxed',
                      admin: { width: '25%' },
                      options: [
                        { label: 'Full Width', value: 'fullWidth' },
                        { label: 'Boxed', value: 'boxed' },
                      ],
                    },
                    {
                      name: 'alignment',
                      type: 'select',
                      defaultValue: 'top',
                      options: alignment,
                      admin: {
                        width: '25%',
                        condition: (_, siblingData) => siblingData?.viewport === 'full',
                        description: 'Optional — vertical alignment',
                      },
                    },
                    {
                      name: 'containerType',
                      type: 'select',
                      defaultValue: 'container',
                      admin: {
                        condition: (_, siblingData) => siblingData?.widthType === 'boxed',
                        width: '25%',
                      },
                      options: [
                        { label: 'Container XL', value: 'container-xl' },
                        { label: 'Container L', value: 'container-lg' },
                        { label: 'Container', value: 'container' },
                        { label: 'Container XS', value: 'container-xs' },
                      ],
                    },
                  ],
                },
                ...spacingFields,
                ...backgroundFields,
              ],
            },
          ],
        },
      ],
    },
  ],
}
