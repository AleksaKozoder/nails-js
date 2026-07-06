// globals/Colors.ts
import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

// Seed defaults mirror the hardcoded fallbacks in src/scss/_variables.scss
// ($colors map) so an empty/fresh Colors global never breaks the frontend.
const DEFAULT_COLORS = [
  { label: 'Primary', value: 'primary', hex: '#01696f' },
  { label: 'Secondary', value: 'secondary', hex: '#0c4e54' },
  { label: 'Blue', value: 'blue', hex: '#2563eb' },
  { label: 'Red', value: 'red', hex: '#dc2626' },
  { label: 'Bg Gray', value: 'bg-gray', hex: '#f3f0ec' },
  { label: 'Green', value: 'green', hex: '#16a34a' },
]

export const Colors: GlobalConfig = {
  slug: 'colors',
  label: 'Colors',
  access: {
    read: () => true, // svi mogu čitati (frontend treba boje)
    update: ({ req }) => {
      return req.user?.role === 'admin'
    },
  },
  hooks: {
    afterChange: [
      () => {
        // Colors are rendered as inline <style> in the root layout, so
        // invalidating the layout is enough to pick up changes on next request.
        revalidatePath('/', 'layout')
      },
    ],
  },
  fields: [
    {
      name: 'colors',
      type: 'array',
      label: 'Colors',
      defaultValue: DEFAULT_COLORS,
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
