import { Block, Field } from 'payload'
import { iconFields } from '@/components/atoms/Icon/config'

const variants = [
  { label: 'Primary', value: 'primary' },
  { label: 'Secondary', value: 'secondary' },
  { label: 'Ghost', value: 'ghost' },
  { label: 'Outline', value: 'outline' },
]

export const buttonFields: Field[] = [
  {
    type: 'tabs',
    tabs: [
      {
        label: 'Content',
        fields: [
          {
            name: 'text',
            type: 'text',
            label: 'Button Text',
            required: true,
          },
          {
            name: 'linkType',
            type: 'radio',
            label: 'Link Type',
            defaultValue: 'internal',
            options: [
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
          },
        ],
      },
      {
        label: 'Settings',
        fields: [
          {
            name: 'variant',
            type: 'select',
            label: 'Variant',
            defaultValue: 'primary',
            options: variants,
          },
          ...iconFields,
        ],
      },
    ],
  },
]

export const ButtonBlock: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlockProps',
  fields: buttonFields,
}
