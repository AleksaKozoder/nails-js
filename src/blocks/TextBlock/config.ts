const tagOptions = [
  { label: 'H1', value: 'h1' },
  { label: 'H2', value: 'h2' },
  { label: 'H3', value: 'h3' },
  { label: 'H4', value: 'h4' },
  { label: 'Paragraph', value: 'p' },
  { label: 'Span', value: 'span' },
]

export const TextBlock: Block = {
  slug: 'textBlock',
  fields: [
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
    // Ponovi isto za subTitle...
    {
      name: 'text',
      type: 'richText',
    },
  ],
}
