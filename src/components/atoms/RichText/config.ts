import {Block} from 'payload'

export const RichTextBlock: Block = {
  slug: 'richText',
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