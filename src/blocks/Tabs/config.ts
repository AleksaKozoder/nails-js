import { Block } from 'payload'
import { ImageBlock } from '@/components/atoms/Image/config'
import { ButtonBlock } from '@/components/atoms/Button/config'
import { HeadingBlock } from '@/components/atoms/Heading/config'
import { RichTextBlock } from '@/components/atoms/RichText/config'
import { iconFields } from '@/components/atoms/Icon/config'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'

export const TabsBlock: Block = {
  slug: 'tabs',
  interfaceName: 'TabsBlockProps',
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
                          blocks: [HeadingBlock, RichTextBlock, ImageBlock, ButtonBlock],
                          admin: {
                            initCollapsed: true,
                          },
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
                              name: 'label',
                              type: 'text',
                              required: true,
                              admin: { width: '33%' },
                            },
                            {
                              name: 'defaultActive',
                              type: 'checkbox',
                              defaultValue: false,
                              admin: { width: '33%' },
                            },
                          ],
                        },
                        {
                          type: 'row',
                          fields: [...iconFields],
                        },
                      ],
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
                  name: 'orientation',
                  type: 'select',
                  defaultValue: 'horizontal',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Horizontal', value: 'horizontal' },
                    { label: 'Vertical', value: 'vertical' },
                  ],
                },
                {
                  name: 'variant',
                  type: 'select',
                  defaultValue: 'default',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Default', value: 'default' },
                    { label: 'Full with tabs', value: 'full' },
                    { label: 'Minimal', value: 'minimal' },
                  ],
                },
              ],
            },
            ...advancedFields,
            ...spacingFields,
          ],
        },
      ],
    },
  ],
}
