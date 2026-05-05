import { Block } from 'payload'

const variants = [{ label: 'Default', value: 'default' }]

export const ImageBlock: Block = {
  slug: 'image',
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
                    { label: '4:3', value: '4/3' },
                    { label: '16:9', value: '16/9' },
                    { label: '3:2', value: '3/2' },
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
                      admin: { width: '20%' },
                    },
                    {
                      name: 'color',
                      type: 'text',
                      label: 'Overlay Color',
                      admin: {
                        width: '40%',
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
                        width: '40%',
                        description: '0 - 100',
                        condition: (_, siblingData) => siblingData?.enabled === true,
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'variant',
                      type: 'select',
                      admin: { width: '50%' },
                      defaultValue: 'default',
                      options: variants,
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
