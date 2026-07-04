import { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'image',
  interfaceName: 'ImageBlockProps',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'linkType',
              type: 'radio',
              label: 'Link Type',
              defaultValue: 'none',
              options: [
                { label: 'None', value: 'none' },
                { label: 'Internal', value: 'internal' },
                { label: 'External', value: 'external' },
              ],
              admin: {
                layout: 'horizontal',
              },
            },
            {
              name: 'internalLink',
              type: 'relationship',
              label: 'Internal Page',
              relationTo: 'pages',
              admin: {
                condition: (_, siblingData) => siblingData?.linkType === 'internal',
              },
            },
            {
              name: 'externalUrl',
              type: 'text',
              label: 'External URL',
              admin: {
                condition: (_, siblingData) => siblingData?.linkType === 'external',
              },
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: 'Open in new tab',
              defaultValue: false,
              admin: {
                condition: (_, siblingData) =>
                  siblingData?.linkType === 'internal' || siblingData?.linkType === 'external',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'aspectRatio',
                  type: 'select',
                  label: 'Aspect Ratio',
                  defaultValue: 'auto',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Auto', value: 'auto' },
                    { label: '1:1', value: '1/1' },
                    { label: '3:2', value: '3/2' },
                    { label: '4:3', value: '4/3' },
                    { label: '16:9', value: '16/9' },
                    { label: '2:3', value: '2/3' },
                    { label: '3:4', value: '3/4' },
                    { label: '9:16', value: '9/16' },
                    { label: 'Custom', value: 'custom' },
                  ],
                },
                {
                  name: 'customAspectRatio',
                  type: 'text',
                  label: 'Custom Aspect Ratio',
                  admin: {
                    width: '50%',
                    description: 'Format: 16/9, 4/3, 1/1...',
                    condition: (_, siblingData) => siblingData?.aspectRatio === 'custom',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'overlay',
                  type: 'group',
                  label: 'Overlay',
                  fields: [
                    {
                      name: 'enabled',
                      type: 'checkbox',
                      label: 'Enable Overlay',
                      defaultValue: false,
                      admin: { width: '25%' },
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'color',
                          type: 'text',
                          label: 'Overlay Color',
                          admin: {
                            width: '25%',
                            components: {
                              Field: '/components/admin/ColorSelectField',
                            },
                            condition: (_, siblingData) => siblingData?.enabled === true,
                          },
                        },
                        {
                          name: 'opacity',
                          type: 'number',
                          label: 'Opacity',
                          min: 0,
                          max: 100,
                          defaultValue: 50,
                          admin: {
                            width: '20%',
                            description: '0 - 100',
                            condition: (_, siblingData) => siblingData?.enabled === true,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
