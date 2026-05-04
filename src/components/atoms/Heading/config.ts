import { Block } from 'payload'

const tagOptions = [
  { label: 'H1', value: 'h1' },
  { label: 'H2', value: 'h2' },
  { label: 'H3', value: 'h3' },
  { label: 'H4', value: 'h4' },
  { label: 'Paragraph', value: 'p' },
  { label: 'Span', value: 'span' },
]

export const HeadingBlock: Block = {
  slug: 'heading',
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
                  name: 'titleTag',
                  type: 'select',
                  defaultValue: 'h2',
                  admin: { width: '50%' },
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
                    width: '50%',
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
