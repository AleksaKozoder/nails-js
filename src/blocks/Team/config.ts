import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'
import { SPACING_OPTIONS } from '@/fields/constants'

const flexOptions = [
  { label: 'Row', value: 'row' },
  { label: 'Row Reverse', value: 'row-reverse' },
  { label: 'Row Wrap', value: 'row-wrap' },
  { label: 'Column', value: 'column' },
  { label: 'Column Reverse', value: 'column-reverse' },
  { label: 'Column Center', value: 'column-center' },
]

const gridOptions = [
  { label: 'Auto', value: 'auto' },
  { label: '2 columns', value: 'col-2' },
  { label: '3 columns', value: 'col-3' },
  { label: '4 columns', value: 'col-4' },
]

const columnOptions = [
  { label: '1 column', value: 'col-1' },
  { label: '2 columns', value: 'col-2' },
  { label: '3 columns', value: 'col-3' },
  { label: '4 columns', value: 'col-4' },
]

const socialPlatforms = [
  { label: 'Website', value: 'link' },
  { label: 'Facebook', value: 'facebook' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'YouTube', value: 'youtube' },
  { label: 'X (Twitter)', value: 'xTwitter' },
  { label: 'WhatsApp', value: 'whatsapp' },
]

export const TeamBlock: Block = {
  slug: 'team',
  interfaceName: 'TeamBlockProps',
  labels: { singular: 'Team', plural: 'Team' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'items',
              type: 'array',
              minRows: 1,
              labels: { singular: 'Team Member', plural: 'Team Members' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'photo',
                      type: 'upload',
                      relationTo: 'media',
                      admin: { width: '25%' },
                    },
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                      admin: { width: '25%' },
                    },
                    {
                      name: 'role',
                      type: 'text',
                      admin: { width: '25%' },
                    },
                  ],
                },
                {
                  name: 'bio',
                  type: 'textarea',
                },
                {
                  name: 'socialLinks',
                  type: 'array',
                  labels: { singular: 'Social Link', plural: 'Social Links' },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'platform',
                          type: 'select',
                          defaultValue: 'link',
                          options: socialPlatforms,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'url',
                          type: 'text',
                          required: true,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'columns',
              type: 'select',
              defaultValue: 'col-3',
              options: columnOptions,
            },
            ...advancedFields,
            {
              type: 'row',
              fields: [
                {
                  name: 'layout',
                  type: 'select',
                  defaultValue: 'block',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Block', value: 'block' },
                    { label: 'Flex', value: 'flex' },
                    { label: 'Grid', value: 'grid' },
                  ],
                },
                {
                  name: 'verticalAlignment',
                  type: 'select',
                  defaultValue: 'top',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Top', value: 'top' },
                    { label: 'Middle', value: 'middle' },
                    { label: 'Bottom', value: 'bottom' },
                  ],
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'flexVariant',
                  type: 'select',
                  defaultValue: 'row',
                  options: flexOptions,
                  admin: {
                    width: '50%',
                    condition: (_, s) => s?.layout === 'flex',
                  },
                },
                {
                  name: 'gridVariant',
                  type: 'select',
                  defaultValue: 'auto',
                  options: gridOptions,
                  admin: {
                    width: '50%',
                    condition: (_, s) => s?.layout === 'grid',
                  },
                },
                {
                  name: 'gap',
                  label: 'Gap',
                  type: 'select',
                  defaultValue: 'none',
                  options: SPACING_OPTIONS,
                  admin: {
                    width: '50%',
                    condition: (_, s) => s?.layout === 'flex' || s?.layout === 'grid',
                  },
                },
              ],
            },
            ...spacingFields,
            ...backgroundFields,
          ],
        },
      ],
    },
  ],
}
