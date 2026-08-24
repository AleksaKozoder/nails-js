import { Block } from 'payload'
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

export const InstagramStripBlock: Block = {
  slug: 'instagramStrip',
  interfaceName: 'InstagramStripBlockProps',
  labels: { singular: 'Instagram Strip', plural: 'Instagram Strips' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Eyebrow',
              defaultValue: 'Instagram',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'instagramHandle',
              type: 'text',
              label: 'Instagram Handle',
              admin: {
                description:
                  'e.g. @nails.js_ — used on the fallback button before the feed is connected.',
              },
            },
            {
              name: 'instagramUrl',
              type: 'text',
              label: 'Instagram Profile URL',
              required: true,
            },
            {
              name: 'elfsightWidgetId',
              type: 'text',
              label: 'Elfsight Widget ID',
              admin: {
                description:
                  'ID from your Elfsight "Instagram Feed" widget embed code (the part after "elfsight-app-"). Create the widget at elfsight.com, connect the Instagram account, limit it to 5 posts, and turn on its Header option so the live follower count + Follow button render inside the widget. Leave empty to show a static fallback button instead.',
              },
            },
          ],
        },
        {
          label: 'Settings',
          fields: [...advancedFields, ...spacingFields, ...backgroundFields],
        },
      ],
    },
  ],
}
