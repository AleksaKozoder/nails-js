import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'

export const FooterColumnsBlock: Block = {
  slug: 'footerColumns',
  interfaceName: 'FooterColumnsBlockProps',
  labels: { singular: 'Footer Columns', plural: 'Footer Columns' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              label: 'Logo Image',
              relationTo: 'media',
              admin: { description: 'Optional — round brand mark next to the name.' },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'brandName',
                  type: 'text',
                  label: 'Brand Name',
                  required: true,
                  admin: { width: '50%' },
                },
                {
                  name: 'brandSub',
                  type: 'text',
                  label: 'Brand Subtitle',
                  admin: { width: '50%', description: 'e.g. "NAILS · KRAGUJEVAC"' },
                },
              ],
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'social',
              type: 'array',
              label: 'Social Links',
              labels: { singular: 'Social Link', plural: 'Social Links' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'icon',
                      type: 'text',
                      label: 'Icon (emoji)',
                      required: true,
                      admin: { width: '30%', description: 'e.g. 📍' },
                    },
                    {
                      name: 'url',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '70%',
                        description: 'Full URL, or mailto:/tel: for email and phone.',
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: 'columns',
              type: 'array',
              label: 'Link Columns',
              labels: { singular: 'Column', plural: 'Columns' },
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  required: true,
                  admin: { description: 'e.g. "Navigacija"' },
                },
                {
                  name: 'links',
                  type: 'array',
                  labels: { singular: 'Link', plural: 'Links' },
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
                          name: 'url',
                          type: 'text',
                          required: true,
                          admin: {
                            width: '50%',
                            description: 'Anchor (#usluge), tel:, mailto:, or full URL.',
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'bottomText',
                  type: 'text',
                  label: 'Bottom Bar Text',
                  admin: {
                    width: '50%',
                    description: 'e.g. "© 2026 Jovana Simović Nails. Sva prava zadržana."',
                  },
                },
                {
                  name: 'bottomSecondaryText',
                  type: 'text',
                  label: 'Bottom Bar Secondary Text',
                  admin: { width: '50%', description: 'Optional — e.g. a design credit.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [...advancedFields],
        },
      ],
    },
  ],
}
