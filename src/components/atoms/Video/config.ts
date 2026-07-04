import { Block } from 'payload'

export const VideoBlock: Block = {
  slug: 'video',
  interfaceName: 'VideoBlockProps',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'sourceType',
              type: 'radio',
              label: 'Source',
              defaultValue: 'upload',
              options: [
                { label: 'Upload', value: 'upload' },
                { label: 'URL', value: 'url' },
              ],
              admin: { layout: 'horizontal' },
            },
            {
              name: 'file',
              type: 'upload',
              label: 'Video File',
              relationTo: 'media',
              admin: {
                condition: (_, siblingData) => siblingData?.sourceType === 'upload',
              },
            },
            {
              name: 'poster',
              type: 'upload',
              label: 'Poster Image',
              relationTo: 'media',
              admin: {
                description:
                  'Shown before playback starts, so the video file itself is only fetched once a visitor presses play.',
                condition: (_, siblingData) => siblingData?.sourceType === 'upload',
              },
            },
            {
              name: 'url',
              type: 'text',
              label: 'Video URL',
              admin: {
                description: 'YouTube, Vimeo, or a direct video file link.',
                condition: (_, siblingData) => siblingData?.sourceType === 'url',
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
                  name: 'aspectRatio',
                  type: 'select',
                  label: 'Aspect Ratio',
                  defaultValue: '16/9',
                  admin: { width: '50%' },
                  options: [
                    { label: '16:9', value: '16/9' },
                    { label: '4:3', value: '4/3' },
                    { label: '1:1', value: '1/1' },
                    { label: '9:16', value: '9/16' },
                    { label: 'Custom', value: 'custom' },
                  ],
                },
                {
                  name: 'customAspectRatio',
                  type: 'text',
                  label: 'Custom Aspect Ratio',
                  admin: {
                    width: '50%',
                    description: 'Format: 16/9, 4/3, 1/1...',
                    condition: (_, siblingData) => siblingData?.aspectRatio === 'custom',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'controls',
                  type: 'checkbox',
                  label: 'Show Controls',
                  defaultValue: true,
                  admin: { width: '25%' },
                },
                {
                  name: 'autoplay',
                  type: 'checkbox',
                  label: 'Autoplay',
                  defaultValue: false,
                  admin: {
                    width: '25%',
                    description: 'Forces mute — browsers block sound-on autoplay.',
                  },
                },
                {
                  name: 'loop',
                  type: 'checkbox',
                  label: 'Loop',
                  defaultValue: false,
                  admin: { width: '25%' },
                },
                {
                  name: 'muted',
                  type: 'checkbox',
                  label: 'Muted',
                  defaultValue: false,
                  admin: { width: '25%' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
