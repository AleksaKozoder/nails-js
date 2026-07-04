import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { SPACING_OPTIONS } from '@/fields/constants'

const layoutOptions = [
  { label: 'Grid', value: 'grid' },
  { label: 'Slider', value: 'slider' },
]

const gridColumns = [
  { label: '2 columns', value: 'col-2' },
  { label: '3 columns', value: 'col-3' },
  { label: '4 columns', value: 'col-4' },
]

export const PostsBlock: Block = {
  slug: 'postsBlock',
  interfaceName: 'PostsBlockProps',
  labels: {
    singular: 'Posts View',
    plural: 'Posts Views',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              admin: {
                description: 'Optional — section title above the posts loop',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'populateBy',
                  label: 'Populate By',
                  type: 'select',
                  defaultValue: 'latest',
                  options: [
                    { label: 'Latest Posts (Automatic)', value: 'latest' },
                    { label: 'Categories', value: 'categories' },
                    { label: 'Manual Selection', value: 'manual' },
                  ],
                  admin: { width: '50%' },
                },
                {
                  name: 'limit',
                  label: 'Limit',
                  type: 'number',
                  defaultValue: 3,
                  required: true,
                  admin: {
                    width: '25%',
                    description: 'Maximum number of posts to fetch',
                  },
                },
              ],
            },
            {
              name: 'selectedCategories',
              label: 'Selected Category / Categories',
              type: 'relationship',
              relationTo: 'categories',
              hasMany: true,
              admin: {
                condition: (_, s) => s?.populateBy === 'categories',
                description: 'Manually select which category/categries to display',
              },
            },
            {
              name: 'selectedPosts',
              label: 'Selected Posts',
              type: 'relationship',
              relationTo: 'posts',
              hasMany: true,
              admin: {
                condition: (_, s) => s?.populateBy === 'manual',
                description: 'Manually select which posts to display',
              },
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            ...advancedFields,
            {
              type: 'row',
              fields: [
                {
                  name: 'layout',
                  label: 'Layout Type',
                  type: 'select',
                  defaultValue: 'grid',
                  options: layoutOptions,
                  admin: { width: '50%' },
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
            {
              type: 'row',
              fields: [
                {
                  name: 'gridColumns',
                  label: 'Grid Columns',
                  type: 'select',
                  defaultValue: 'col-3',
                  options: gridColumns,
                  admin: {
                    width: '50%',
                    condition: (_, s) => s?.layout === 'grid',
                  },
                },
                {
                  name: 'autoplay',
                  label: 'Autoplay',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    width: '25%',
                    condition: (_, s) => s?.layout === 'slider',
                  },
                },
                {
                  name: 'showArrows',
                  label: 'Show Arrows',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: {
                    width: '25%',
                    condition: (_, s) => s?.layout === 'slider',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
