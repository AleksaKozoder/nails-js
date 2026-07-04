import type { Field } from 'payload'

/**
 * Reusable "advanced" field group (custom HTML ID / anchor + custom CSS class).
 * Importuj u bilo koji Block kao deo fields niza.
 *
 * Primer:
 *   import { advancedFields } from '@/fields/advanced/config'
 *   fields: [...advancedFields]
 */
export const advancedFields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'htmlId',
        type: 'text',
        label: 'HTML ID',
        admin: {
          width: '50%',
          description: 'Optional — custom ID / anchor',
        },
      },
      {
        name: 'customClassName',
        type: 'text',
        label: 'Custom CSS Class',
        admin: {
          width: '50%',
          description: 'Optional — extra class name(s) for custom styling',
        },
      },
    ],
  },
]
