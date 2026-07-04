import { Block } from 'payload'
import { ImageBlock } from '@/components/atoms/Image/config'
import { ButtonBlock } from '@/components/atoms/Button/config'
import { HeadingBlock } from '@/components/atoms/Heading/config'
import { RichTextBlock } from '@/components/atoms/RichText/config'
import { iconFields } from '@/components/atoms/Icon/config'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const AccordionBlock: Block = {
  slug: 'accordion',
  interfaceName: 'AccordionBlockProps',
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
                              admin: { width: '50%' },
                            },
                            {
                              name: 'defaultOpen',
                              type: 'checkbox',
                              defaultValue: false,
                              admin: { width: '50%' },
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
                  name: 'allowMultiple',
                  type: 'checkbox',
                  label: 'Allow Multiple Open',
                  defaultValue: false,
                  admin: { width: '50%' },
                },
                {
                  name: 'variant',
                  type: 'select',
                  defaultValue: 'default',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Default', value: 'default' },
                    { label: 'Bordered', value: 'bordered' },
                    { label: 'Minimal', value: 'minimal' },
                  ],
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
