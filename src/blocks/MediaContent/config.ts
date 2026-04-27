import { Block } from 'payload'
import { TextBlockConfig } from '../TextBlock/config'

export const MediaContentBlock: Block = {
  slug: 'mediaContent',
  labels: { singular: 'Slika i Tekst', plural: 'Slike i Tekstovi' },
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'imageLeft',
      options: [
        { label: 'Slika levo, Tekst desno', value: 'imageLeft' },
        { label: 'Slika desno, Tekst levo', value: 'imageRight' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'textContent',
      type: 'group',
      fields: TextBlockConfig.fields, // Re-use polja iz TextBlocka
    },
  ],
}
