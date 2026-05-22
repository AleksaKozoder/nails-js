import { Block } from 'payload'

export const SliderBlock: Block = {
  slug: 'slider',
  labels: { singular: 'Slider', plural: 'Sliders' },
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
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
          ],
        },
        {
          name: 'spaceBetween',
          type: 'number',
          defaultValue: 20,
          admin: { description: 'Space between slides in px' },
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
