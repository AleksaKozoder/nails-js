import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const GalleryBlock: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlockProps',
  labels: { singular: 'Gallery', plural: 'Galleries' },
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
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'allLabel',
              type: 'text',
              label: '"Show All" Filter Label',
              defaultValue: 'All',
              admin: {
                description: 'Label for the filter button that shows every item.',
              },
            },
            {
              name: 'categories',
              type: 'array',
              label: 'Filter Categories',
              labels: { singular: 'Category', plural: 'Categories' },
              admin: {
                description: 'Leave empty to hide the filter bar and show all items.',
              },
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
                      name: 'value',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '50%',
                        description: "Matched against each item's Category field below.",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'initialCount',
                  type: 'number',
                  label: 'Initial Items Shown',
                  defaultValue: 12,
                  min: 1,
                  admin: {
                    width: '34%',
                    description:
                      'Items shown before the "Show all" button appears. Applies per filter too.',
                  },
                },
                {
                  name: 'showAllLabel',
                  type: 'text',
                  label: '"Show All" Button Label',
                  defaultValue: 'Show all',
                  admin: { width: '33%' },
                },
                {
                  name: 'showLessLabel',
                  type: 'text',
                  label: '"Show Less" Button Label',
                  defaultValue: 'Show less',
                  admin: { width: '33%' },
                },
              ],
            },
            {
              name: 'items',
              type: 'array',
              label: 'Gallery Items',
              labels: { singular: 'Item', plural: 'Items' },
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                      admin: { width: '50%' },
                    },
                    {
                      name: 'category',
                      type: 'text',
                      admin: {
                        width: '25%',
                        description: 'A category "value" above. Leave blank to always show.',
                      },
                    },
                    {
                      name: 'caption',
                      type: 'text',
                      admin: { width: '25%' },
                    },
                  ],
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
