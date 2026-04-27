import { Block } from 'payload'

export const SliderBlock: Block = {
  slug: 'slider',
  labels: { singular: 'Slajder', plural: 'Slajderi' },
  fields: [
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          name: 'orientation',
          type: 'select',
          defaultValue: 'horizontal',
          options: [
            { label: 'Horizontalni', value: 'horizontal' },
            { label: 'Vertikalni', value: 'vertical' },
          ],
        },
        {
          name: 'spaceBetween',
          type: 'number',
          defaultValue: 20,
          admin: { description: 'Razmak između slajdova u px' },
        },
        {
          name: 'slidesPerView',
          type: 'number',
          defaultValue: 1,
        },
      ],
    },
    {
      name: 'slides',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
}
