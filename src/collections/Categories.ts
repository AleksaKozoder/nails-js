import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title', // U admin panelu će se videti naslov kategorije
  },
  access: {
    read: () => true, // Omogućava javno čitanje kategorija
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar', // Pomera slug u desnu stranu panela
      },
    },
  ],
}
