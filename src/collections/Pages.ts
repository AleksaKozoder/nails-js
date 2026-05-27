import { CollectionConfig } from 'payload'
import { SectionBlock } from '@/blocks/Section/config'

const formatSlug = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data

        // Ako je slug ručno unet — samo ga formatiraj
        if (typeof data.slug === 'string' && data.slug.trim()) {
          data.slug = formatSlug(data.slug)
          return data
        }

        // Ako slug nije unet — generiši ga iz title-a
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
          return 'Slug je obavezan.'
        }

        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
          return 'Slug može sadržati samo mala slova, brojeve i crtice (bez razmaka, specijalnih znakova ili crtica na početku/kraju).'
        }

        return true
      },
      admin: {
        position: 'sidebar',
        description:
          'Dozvoljena su mala slova, brojevi i crtice. Ako ostavljaš prazno, generisaće se automatski iz naslova.',
      },
    },
  ],
}
