// globals/SiteSettings.ts
import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
    update: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // ─── Identity ────────────────────────────────────────────
        {
          label: 'Identity',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'siteTitle',
                  type: 'text',
                  label: 'Site Title',
                  required: true,
                  admin: {
                    width: '50%',
                    description: 'Used in browser tab, SEO fallback, and logo alt text',
                    placeholder: 'My Website',
                  },
                },
                {
                  name: 'tagline',
                  type: 'text',
                  label: 'Tagline',
                  admin: {
                    width: '50%',
                    description:
                      'Short description — used in default SEO if no meta description is set',
                    placeholder: 'We build great things',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Logo (light / default)',
                  admin: {
                    width: '50%',
                    description: 'Displayed in header — recommended SVG or PNG with transparency',
                  },
                },
                {
                  name: 'logoDark',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Logo (dark variant)',
                  admin: {
                    width: '50%',
                    description: 'Optional — used when header is on dark background',
                  },
                },
              ],
            },
          ],
        },

        // ─── Mobile CTA bar ──────────────────────────────────────
        {
          label: 'Mobile CTA Bar',
          fields: [
            {
              name: 'mobileCtaEnabled',
              type: 'checkbox',
              label: 'Show sticky mobile CTA bar',
              defaultValue: true,
              admin: {
                description:
                  'Fiksna traka na dnu ekrana, vidljiva samo na mobilnim uređajima (≤640px), sa dugmićima za DM i poziv',
              },
            },
            {
              name: 'colorTheme',
              type: 'text',
              label: 'Background Color',
              admin: {
                description: 'Boja pozadine trake. Ostavi prazno za podrazumevanu (blush soft).',
                components: {
                  Field: '/components/admin/ColorSelectField',
                },
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'instagramUrl',
                  type: 'text',
                  label: 'Instagram URL',
                  admin: { width: '50%', placeholder: 'https://instagram.com/nails.js_' },
                },
                {
                  name: 'instagramLabel',
                  type: 'text',
                  label: 'Dugme label',
                  defaultValue: 'Piši DM',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  label: 'Telefon (tel: format)',
                  admin: { width: '50%', placeholder: '+381616878225' },
                },
                {
                  name: 'phoneLabel',
                  type: 'text',
                  label: 'Dugme label',
                  defaultValue: 'Pozovi',
                  admin: { width: '50%' },
                },
              ],
            },
          ],
        },

        // ─── Favicon ─────────────────────────────────────────────
        {
          label: 'Favicon',
          fields: [
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
              label: 'Favicon',
              admin: {
                description: 'ICO, PNG ili SVG — preporučeno 32×32px ili 512×512px',
              },
            },
            {
              name: 'appleTouchIcon',
              type: 'upload',
              relationTo: 'media',
              label: 'Apple Touch Icon',
              admin: {
                description: 'PNG, 180×180px — koristi se na iOS home screen',
              },
            },
          ],
        },

        // ─── Default SEO ──────────────────────────────────────────
        {
          label: 'SEO',
          fields: [
            {
              name: 'defaultMeta',
              type: 'group',
              label: 'Default Meta',
              admin: {
                description: 'Fallback vrijednosti kada stranica nema custom SEO',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Default Meta Title',
                  admin: {
                    description: 'Ako je prazno, koristi Site Title',
                    placeholder: 'My Website — We build great things',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Default Meta Description',
                  admin: {
                    description: 'Preporučeno: 120–160 karaktera',
                    placeholder: 'A short description of your website...',
                  },
                },
                {
                  name: 'ogImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Default OG Image',
                  admin: {
                    description: 'Za social sharing — preporučeno 1200×630px',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'titleTemplate',
                  type: 'text',
                  label: 'Title Template',
                  defaultValue: '%s | %site',
                  admin: {
                    width: '50%',
                    description: 'Koristi %s za naziv stranice, %site za naziv sajta',
                    placeholder: '%s | My Website',
                  },
                },
                {
                  name: 'robots',
                  type: 'select',
                  label: 'Default Robots',
                  defaultValue: 'index, follow',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Index, Follow', value: 'index, follow' },
                    { label: 'No Index, No Follow', value: 'noindex, nofollow' },
                    { label: 'Index, No Follow', value: 'index, nofollow' },
                    { label: 'No Index, Follow', value: 'noindex, follow' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
