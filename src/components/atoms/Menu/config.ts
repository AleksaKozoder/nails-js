import { Block, Field } from 'payload'

export const menuFields: Field[] = [
  {
    type: 'tabs',
    tabs: [
      {
        label: 'Content',
        fields: [
          {
            name: 'menu',
            type: 'relationship',
            relationTo: 'menus',
            required: true,
            admin: {
              description: 'Select a menu from the Menus collection',
            },
          },
        ],
      },
      {
        label: 'Settings',
        fields: [
          {
            type: 'row',
            fields: [
              {
                name: 'orientation',
                type: 'select',
                defaultValue: 'horizontal',
                admin: { width: '50%' },
                options: [
                  { label: 'Horizontal', value: 'horizontal' },
                  { label: 'Vertical', value: 'vertical' },
                ],
              },
              {
                name: 'variant',
                type: 'select',
                defaultValue: 'default',
                admin: { width: '50%' },
                options: [
                  { label: 'Default', value: 'default' },
                  { label: 'Minimal', value: 'minimal' },
                  { label: 'Pills', value: 'pills' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export const MenuBlock: Block = {
  slug: 'menu',
  labels: { singular: 'Menu', plural: 'Menus' },
  fields: menuFields,
}
