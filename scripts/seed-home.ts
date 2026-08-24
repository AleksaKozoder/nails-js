import { getPayload } from 'payload'
import config from '@/payload.config'

const richText = (text: string) => ({
  root: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text, version: 1 }],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        version: 1,
      },
    ],
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})

async function seed() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const existingAdmin = await payload.find({
    collection: 'users',
    where: { email: { equals: 'admin@example.com' } },
    limit: 1,
  })

  if (existingAdmin.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@example.com',
        password: 'ChangeMe123!',
        role: 'admin',
      },
    })
    console.log('Created admin user: admin@example.com / ChangeMe123!')
  } else {
    console.log('Admin user already exists, skipping.')
  }

  const existingHome = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })

  const layout = [
    {
      blockType: 'section',
      settings: {
        widthType: 'boxed',
        containerType: 'container',
        viewport: 'auto',
        spacing: { paddingTop: 'xl', paddingBottom: 'xl' },
        background: { type: 'color', colorTheme: 'bg-gray' },
      },
      blocks: [
        {
          blockType: 'blockHolder0',
          layout: 'block',
          gap: 'sm',
          atoms: [
            {
              blockType: 'heading',
              title: 'Build your next website faster',
              titleTag: 'h1',
              variant: 'center',
            },
            {
              blockType: 'richText',
              variant: 'center',
              text: richText(
                'A block-based Payload CMS boilerplate with a page builder, reusable components, and a component library that maps directly to the CMS schema.',
              ),
            },
            {
              blockType: 'blockHolder1',
              layout: 'flex',
              flexVariant: 'row',
              gap: 'sm',
              atoms: [
                {
                  blockType: 'button',
                  text: 'Get Started',
                  linkType: 'external',
                  externalUrl: '#',
                  variant: 'primary',
                },
                {
                  blockType: 'button',
                  text: 'Learn More',
                  linkType: 'external',
                  externalUrl: '#',
                  variant: 'outline',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      blockType: 'section',
      settings: {
        widthType: 'boxed',
        containerType: 'container',
        viewport: 'auto',
        spacing: { paddingTop: 'lg', paddingBottom: 'lg' },
      },
      blocks: [
        {
          blockType: 'blockHolder0',
          layout: 'block',
          atoms: [
            {
              blockType: 'stats',
              columns: 'col-4',
              items: [
                { value: '500+', label: 'Projects launched' },
                { value: '99%', label: 'Client satisfaction' },
                { value: '24/7', label: 'Support' },
                { value: '10+', label: 'Years of experience' },
              ],
            },
          ],
        },
      ],
    },
    {
      blockType: 'section',
      settings: {
        widthType: 'boxed',
        containerType: 'container',
        viewport: 'auto',
        spacing: { paddingTop: 'lg', paddingBottom: 'lg' },
        background: { type: 'color', colorTheme: 'bg-gray' },
      },
      blocks: [
        {
          blockType: 'blockHolder0',
          layout: 'block',
          atoms: [
            {
              blockType: 'heading',
              title: 'What our clients say',
              titleTag: 'h2',
              variant: 'center',
            },
          ],
        },
        {
          blockType: 'blockHolder0',
          layout: 'block',
          atoms: [
            {
              blockType: 'testimonials',
              layout: 'grid',
              columns: 'col-3',
              spacing: { paddingTop: 'md' },
              items: [
                {
                  quote:
                    'This boilerplate saved us weeks of setup. The block system is a dream to work with.',
                  name: 'Ana Petrovic',
                  role: 'CTO, Nordic Labs',
                },
                {
                  quote:
                    'Clean architecture, well documented, and the admin panel is intuitive for our editors.',
                  name: 'Marko Jovanovic',
                  role: 'Founder, Studio Nine',
                },
                {
                  quote: 'Exactly what we needed for a fast-turnaround client project.',
                  name: 'Elena Ristic',
                  role: 'Lead Developer, Pixelworks',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      blockType: 'section',
      settings: {
        widthType: 'boxed',
        containerType: 'container',
        viewport: 'auto',
        spacing: { paddingTop: 'lg', paddingBottom: 'xl' },
      },
      blocks: [
        {
          blockType: 'blockHolder0',
          layout: 'block',
          atoms: [
            {
              blockType: 'cta',
              title: 'Ready to start your next project?',
              text: richText('Spin up a new site on this boilerplate in minutes, not weeks.'),
              alignment: 'center',
              background: { type: 'color', colorTheme: 'primary' },
              spacing: { paddingTop: 'lg', paddingBottom: 'lg' },
              buttons: [
                {
                  blockType: 'button',
                  text: 'Contact Us',
                  linkType: 'external',
                  externalUrl: '#',
                  variant: 'primary',
                },
              ],
            },
          ],
        },
      ],
    },
  ]

  if (existingHome.docs.length === 0) {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Home',
        slug: 'home',
        layout,
      },
    })
    console.log('Created home page.')
  } else {
    await payload.update({
      collection: 'pages',
      id: existingHome.docs[0].id,
      data: { layout },
    })
    console.log('Updated existing home page.')
  }

  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
