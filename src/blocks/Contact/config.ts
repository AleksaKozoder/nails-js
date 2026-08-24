import { Block } from 'payload'
import { ButtonBlock } from '@/components/atoms/Button/config'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const ContactBlock: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlockProps',
  labels: { singular: 'Contact', plural: 'Contacts' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Eyebrow',
              defaultValue: 'Kontakt',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'items',
              type: 'array',
              label: 'Contact Items',
              labels: { singular: 'Item', plural: 'Items' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'icon',
                      type: 'text',
                      label: 'Icon (emoji)',
                      admin: { width: '20%', description: 'e.g. 📍' },
                    },
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Label',
                      required: true,
                      admin: { width: '40%', description: 'First line, e.g. "Pozovi ili piši"' },
                    },
                    {
                      name: 'value',
                      type: 'text',
                      label: 'Value',
                      required: true,
                      admin: {
                        width: '40%',
                        description: 'Second line, e.g. "061 687 8225"',
                      },
                    },
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Link (optional)',
                  admin: {
                    description:
                      'If set, the Value is rendered as a link (tel:, mailto:, https://…).',
                  },
                },
              ],
            },
            {
              name: 'card',
              type: 'group',
              label: 'Side Card',
              fields: [
                {
                  name: 'scriptText',
                  type: 'text',
                  label: 'Script Text',
                  admin: { description: 'e.g. "Vidimo se uskoro 🩷"' },
                },
                {
                  name: 'text',
                  type: 'textarea',
                  label: 'Text',
                },
                {
                  name: 'button',
                  type: 'blocks',
                  label: 'Button',
                  maxRows: 1,
                  blocks: [ButtonBlock],
                },
              ],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [...advancedFields, ...spacingFields, ...backgroundFields],
        },
      ],
    },
  ],
}
