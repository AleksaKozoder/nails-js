import { CollectionConfig } from 'payload'
import { SectionBlock } from '@/blocks/Section/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [SectionBlock],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seoTitle',
              type: 'text',
              admin: {
                description:
                  'Title tag appearing in Google results (recommended up to 60 characters).',
              },
            },
            {
              name: 'seoDescription',
              type: 'textarea',
              admin: {
                description:
                  'Meta description for search engines (recommended up to 160 characters).',
              },
            },
            {
              name: 'seoImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Social media share image.',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
