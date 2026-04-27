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
          label: 'Sadržaj',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                SectionBlock
              ],
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
                  'Naslov koji se pojavljuje u Google rezultatima (preporučeno do 60 karaktera).',
              },
            },
            {
              name: 'seoDescription',
              type: 'textarea',
              admin: {
                description: 'Kratak opis stranice za pretraživače (preporučeno do 160 karaktera).',
              },
            },
            {
              name: 'seoImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Slika koja će se prikazivati pri deljenju na društvenim mrežama.',
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
