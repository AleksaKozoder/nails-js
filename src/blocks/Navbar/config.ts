import { Block } from 'payload'
import { ButtonBlock } from '@/components/atoms/Button/config'
import { advancedFields } from '@/fields/advanced/config'

export const NavbarBlock: Block = {
  slug: 'navbar',
  interfaceName: 'NavbarBlockProps',
  labels: { singular: 'Navbar', plural: 'Navbars' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              label: 'Logo Image',
              relationTo: 'media',
              admin: { description: 'Optional — round brand mark shown next to the name.' },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'brandName',
                  type: 'text',
                  label: 'Brand Name',
                  required: true,
                  admin: { width: '50%' },
                },
                {
                  name: 'brandSub',
                  type: 'text',
                  label: 'Brand Subtitle',
                  admin: { width: '50%', description: 'e.g. "NAILS · KRAGUJEVAC"' },
                },
              ],
            },
            {
              name: 'menu',
              type: 'relationship',
              label: 'Nav Menu',
              relationTo: 'menus',
              required: true,
              admin: {
                description:
                  'Select a menu from the Menus collection. Rendered flat (top-level items only) as the desktop links and inside the mobile full-screen menu.',
              },
            },
            {
              name: 'cta',
              type: 'blocks',
              label: 'CTA Button',
              maxRows: 1,
              blocks: [ButtonBlock],
              admin: {
                description: 'Shown on desktop next to the links, and inside the mobile menu.',
              },
            },
          ],
        },
        {
          label: 'Settings',
          fields: [...advancedFields],
        },
      ],
    },
  ],
}
