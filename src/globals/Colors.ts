// globals/Colors.ts
import { GlobalConfig } from 'payload'

export const Colors: GlobalConfig = {
  slug: 'colors',
  label: 'Colors',
  access: {
    read: () => true, // svi mogu čitati (frontend treba boje)
    update: ({ req }) => {
      return req.user?.role === 'admin'
    },
  },
  fields: [
    {
      name: 'colors',
      type: 'array',
      label: 'Colors',
      admin: {
        components: {
          RowLabel: '/components/admin/ColorRowLabel', // path relativan od project root-a
        },
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Name (npr. Primary)',
              admin: { width: '33%' },
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Token (npr. primary)',
              required: true,
              admin: {
                description: 'It will be used as a CSS class/variable — without spaces',
                width: '33%',
              },
            },
            {
              name: 'hex',
              type: 'text',
              admin: { width: '33%' },
              label: 'Hex (#ffffff)',
            },
          ],
        },
      ],
    },
  ],
}
