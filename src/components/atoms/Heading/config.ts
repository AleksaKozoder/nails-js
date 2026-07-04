import { Block } from 'payload'

const tagOptions = [
  { label: 'H1', value: 'h1' },
  { label: 'H2', value: 'h2' },
  { label: 'H3', value: 'h3' },
  { label: 'H4', value: 'h4' },
  { label: 'Paragraph', value: 'p' },
  { label: 'Span', value: 'span' },
]

const variants = [
  { label: 'Default', value: 'default' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
]

export const HeadingBlock: Block = {
  slug: 'heading',
  interfaceName: 'HeadingBlockProps',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              type: 'row',
              fields: [{ name: 'title', type: 'text' }],
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
                  name: 'titleTag',
                  type: 'select',
                  defaultValue: 'h2',
                  admin: { width: '33%' },
                  options: tagOptions,
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Text Color',
                  admin: {
                    components: {
                      Field: '/components/admin/ColorSelectField',
                    },
                    width: '33%',
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
