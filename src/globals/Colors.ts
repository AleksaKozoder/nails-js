// globals/Colors.ts
import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

// Seed defaults mirror the hardcoded fallbacks in src/scss/_variables.scss
// ($colors map) so an empty/fresh Colors global never breaks the frontend.
// `value` tokens must match the $colors map keys in _variables.scss exactly
// (they become the --color-{value} CSS custom property name) — `label` is
// just the human-readable name shown in the admin.
const DEFAULT_COLORS = [
  { label: 'Rose Deep', value: 'rose-deep', hex: '#a85c68' },
  { label: 'Ink', value: 'ink', hex: '#241c1d' },
  { label: 'Red (Error)', value: 'red', hex: '#dc2626' },
  { label: 'Rose Line', value: 'rose-line', hex: '#e3bcc0' },
  { label: 'Rose', value: 'rose', hex: '#c98a93' },
  { label: 'Gold', value: 'gold', hex: '#c9a876' },
  { label: 'Ink Soft', value: 'ink-soft', hex: '#5b4a4c' },
  { label: 'Cream', value: 'cream', hex: '#fffbf9' },
  { label: 'Blush', value: 'blush', hex: '#f6e1e3' },
  { label: 'Blush Soft', value: 'blush-soft', hex: '#fbf0ef' },
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
