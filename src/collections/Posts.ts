import { CollectionConfig } from 'payload'
import { SectionBlock } from '@/blocks/Section/config'
import { PostsBlock } from '@/blocks/PostsBlock/config'

const formatSlug = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data

        if (typeof data.slug === 'string' && data.slug.trim()) {
          data.slug = formatSlug(data.slug)
          return data
        }

        if (typeof data.title === 'string' && data.title.trim()) {
          data.slug = formatSlug(data.title)
        }

        return data
      },
    ],
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
          label: 'Settings',
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'The primary image for this post.',
              },
            },
            {
              name: 'excerpt',
              type: 'textarea',
              admin: {
                description: 'A short summary of the post used for previews.',
              },
            },
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'categories',
              hasMany: true,
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
      validate: (value: unknown) => {
        if (typeof value !== 'string' || !value.trim()) {
          return 'Slug is required.'
        }

        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
          return 'The slug can only contain lowercase letters, numbers, and hyphens (no spaces, special characters, or leading/trailing hyphens).'
        }

        return true
      },
      admin: {
        position: 'sidebar',
        description:
          'Only lowercase letters, numbers, and hyphens are allowed. Leaving it blank will automatically generate it from the title.',
      },
    },
  ],
}
