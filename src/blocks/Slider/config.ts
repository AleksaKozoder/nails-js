import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const SliderBlock: Block = {
  slug: 'slider',
  interfaceName: 'SliderBlockProps',
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
    ...advancedFields,
    ...spacingFields,
    ...backgroundFields,
  ],
}
