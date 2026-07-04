import { Block } from 'payload'

const variants = [
  { label: 'Default', value: 'default' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
]

export const RichTextBlock: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlockProps',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'text',
              type: 'richText',
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
                  name: 'variant',
                  type: 'select',
                  admin: { width: '33%' },
                  defaultValue: 'default',
                  options: variants,
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Text Color',
                  admin: {
                    width: '50%',
                    components: {
                      Field: '/components/admin/ColorSelectField',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
