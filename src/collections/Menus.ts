// src/collections/Menus.ts
import { CollectionConfig } from 'payload'

export const Menus: CollectionConfig = {
  slug: 'menus',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Items',
          fields: [
            {
              name: 'items',
              type: 'array',
              label: 'Menu Items',
              fields: [
                {
                  type: 'tabs',
                  tabs: [
                    {
                      label: 'Link',
                      fields: [
                        {
                          name: 'page',
                          type: 'relationship',
                          relationTo: 'pages',
                          admin: {
                            condition: (_, siblingData) => siblingData?.type === 'internal',
                            description: 'Select a page',
                          },
                        },
                        {
                          name: 'anchor',
                          type: 'text',
                          admin: {
                            condition: (_, siblingData) => siblingData?.type === 'internal',
                            description: 'Optional — element ID on the page (without #)',
                            placeholder: 'section-about',
                          },
                        },
                        {
                          name: 'url',
                          type: 'text',
                          admin: {
                            condition: (_, siblingData) => siblingData?.type === 'external',
                            description: 'Full URL (https://...)',
                            placeholder: 'https://example.com',
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
                              name: 'label',
                              type: 'text',
                              admin: { width: '50%' },
                            },
                            {
                              name: 'type',
                              type: 'select',
                              defaultValue: 'internal',
                              admin: { width: '50%' },
                              options: [
                                { label: 'Internal', value: 'internal' },
                                { label: 'External', value: 'external' },
                              ],
                            },
                          ],
                        },
                        {
                          name: 'newTab',
                          type: 'checkbox',
                          label: 'Open in new tab',
                          defaultValue: false,
                          admin: {
                            condition: (_, siblingData) => siblingData?.type === 'external',
                          },
                        },
                      ],
                    },
                    {
                      label: 'Dropdown',
                      fields: [
                        {
                          name: 'children',
                          type: 'array',
                          label: 'Dropdown items',
                          fields: [
                            {
                              type: 'tabs',
                              tabs: [
                                {
                                  label: 'Link',
                                  fields: [
                                    {
                                      name: 'page',
                                      type: 'relationship',
                                      relationTo: 'pages',
                                      admin: {
                                        condition: (_, siblingData) =>
                                          siblingData?.type === 'internal',
                                      },
                                    },
                                    {
                                      name: 'anchor',
                                      type: 'text',
                                      admin: {
                                        condition: (_, siblingData) =>
                                          siblingData?.type === 'internal',
                                        placeholder: 'section-contact',
                                      },
                                    },
                                    {
                                      name: 'url',
                                      type: 'text',
                                      admin: {
                                        condition: (_, siblingData) =>
                                          siblingData?.type === 'external',
                                        placeholder: 'https://example.com',
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
                                          name: 'label',
                                          type: 'text',
                                          required: true,
                                          admin: { width: '50%' },
                                        },
                                        {
                                          name: 'type',
                                          type: 'select',
                                          defaultValue: 'internal',
                                          admin: { width: '50%' },
                                          options: [
                                            { label: 'Internal', value: 'internal' },
                                            { label: 'External', value: 'external' },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      name: 'newTab',
                                      type: 'checkbox',
                                      label: 'Open in new tab',
                                      defaultValue: false,
                                      admin: {
                                        condition: (_, siblingData) =>
                                          siblingData?.type === 'external',
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
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
                  options: [{ label: 'Default', value: 'default' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
