import { Block } from 'payload'

const tagOptions = [
  { label: 'H1', value: 'h1' },
  { label: 'H2', value: 'h2' },
  { label: 'H3', value: 'h3' },
  { label: 'H4', value: 'h4' },
  { label: 'Paragraph', value: 'p' },
  { label: 'Span', value: 'span' },
]

export const TextBlockConfig: Block = {
  slug: 'textBlock',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'verticalPosition',
          type: 'select',
          admin: { width: '50%' },
          dbName: 'v_pos',
          defaultValue: 'top',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom', value: 'bottom' },
            { label: 'SpaceBetween', value: 'space-between' },
            { label: 'SpaceAround', value: 'space-around' },
          ],
        },
        {
          name: 'horizontalPosition',
          type: 'select',
          admin: { width: '50%' },
          dbName: 'h_pos',
          defaultValue: 'left',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'supTitle', type: 'text', admin: { width: '70%' } },
        {
          name: 'supTitleTag',
          type: 'select',
          defaultValue: 'span',
          options: tagOptions,
          admin: { width: '30%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'title', type: 'text', required: true, admin: { width: '70%' } },
        {
          name: 'titleTag',
          type: 'select',
          defaultValue: 'h2',
          options: tagOptions,
          admin: { width: '30%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'subTitle', type: 'text', admin: { width: '70%' } },
        {
          name: 'subTitleTag',
          type: 'select',
          defaultValue: 'span',
          options: tagOptions,
          admin: { width: '30%' },
        },
      ],
    },
    {
      name: 'text',
      type: 'richText',
    },
  ],
}
