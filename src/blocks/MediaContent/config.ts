import { Block } from 'payload'
import { TextBlockConfig } from '../TextBlock/config'

export const MediaContentBlock: Block = {
  slug: 'mediaContent',
  labels: { singular: 'Image & Text', plural: 'Images & Texts' },
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'imageLeft',
      options: [
        { label: 'Image left', value: 'imageLeft' },
        { label: 'Image right', value: 'imageRight' },
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
