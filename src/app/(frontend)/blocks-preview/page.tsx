import React from 'react'
import type {
  Category,
  Form,
  Header as HeaderGlobal,
  Footer as FooterGlobal,
  Media,
  Menu as MenuDoc,
  Post,
  TabsBlockProps,
  AccordionBlockProps,
  SliderBlockProps,
  CTABlockProps,
  TestimonialsBlockProps,
  StatsBlockProps,
  TeamBlockProps,
  FormBlockProps,
  SectionBlockProps,
} from '@/payload-types'
import type { PostsBlockProps } from '@/blocks/PostsBlock'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Icon, type IconName } from '@/components/atoms/Icon'
import { Image as ImageAtom } from '@/components/atoms/Image'
import { Menu as MenuAtom } from '@/components/atoms/Menu'
import { RichText as RichTextAtom } from '@/components/atoms/RichText'

// Internal/sales tool: renders every block once with dummy data so the
// boilerplate's page-builder blocks can be eyeballed without seeding Payload.
// Not linked from nav, not backed by CMS data — see robots export below.
export const metadata = {
  title: 'Blocks Preview',
  robots: { index: false, follow: false },
}

let idCounter = 0
const nextId = () => ++idCounter

const media = (seed: string, width = 800, height = 600, alt = 'Placeholder image'): Media => ({
  id: nextId(),
  alt,
  url: `https://picsum.photos/seed/${seed}/${width}/${height}`,
  width,
  height,
  updatedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
})

const videoMedia = (alt = 'Placeholder video'): Media => ({
  id: nextId(),
  alt,
  url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  updatedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
})

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti nunc sit amet.'

const richText = (text: string): NonNullable<CTABlockProps['text']> => ({
  root: {
    type: 'root',
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
    children: [
      {
        type: 'paragraph',
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        children: [{ type: 'text', text, version: 1 }],
      },
    ],
  },
})

const listItem = (text: string, value: number) => ({
  type: 'listitem',
  direction: 'ltr' as const,
  format: '',
  indent: 0,
  version: 1,
  value,
  children: [{ type: 'text', text, version: 1 }],
})

// Richer demo doc for the RichText atom: paragraph with an inline link, plus
// a bulleted and a numbered list, so the atom's list/link styling shows up.
const richTextWithListsAndLink = (): NonNullable<CTABlockProps['text']> => ({
  root: {
    type: 'root',
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
    children: [
      {
        type: 'paragraph',
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        children: [
          { type: 'text', text: `${LOREM} See the `, version: 1 },
          {
            type: 'link',
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 2,
            fields: { url: '#', newTab: false, linkType: 'custom' },
            children: [{ type: 'text', text: 'documentation', version: 1 }],
          },
          { type: 'text', text: ' for more details.', version: 1 },
        ],
      },
      {
        type: 'list',
        tag: 'ul',
        listType: 'bullet',
        start: 1,
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        children: [
          listItem('First bullet point', 1),
          listItem('Second bullet point', 2),
          listItem('Third bullet point', 3),
        ],
      },
      {
        type: 'list',
        tag: 'ol',
        listType: 'number',
        start: 1,
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        children: [listItem('Step one', 1), listItem('Step two', 2), listItem('Step three', 3)],
      },
    ],
  },
})

// Every preview below is rendered through the real Section block (boxed
// container) so it looks like it does composed on an actual page, rather
// than as a bare component floating on the page background.
type AnyBlockEntry = { blockType: string }

const boxed = (block: AnyBlockEntry): SectionBlockProps => ({
  blockType: 'section',
  settings: {
    viewport: 'auto',
    widthType: 'boxed',
    containerType: 'container',
    background: { type: 'blank' },
  },
  blocks: [block] as unknown as SectionBlockProps['blocks'],
})

// ============================================================
// HEADER
// ============================================================
const menuDoc: MenuDoc = {
  id: nextId(),
  name: 'Main Menu',
  items: [
    { type: 'external', label: 'Home', url: '#' },
    { type: 'external', label: 'Features', url: '#' },
    { type: 'external', label: 'Pricing', url: '#' },
    { type: 'external', label: 'Contact', url: '#' },
  ],
  updatedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
}

// BlockHolder isn't part of the block-manifest union type (see block-manifest.ts
// for why), so its shape is asserted rather than typed against generated props.
const headerBlockHolder = {
  blockType: 'blockHolder0',
  layout: 'flex',
  flexVariant: 'row',
  gap: 'md',
  verticalAlignment: 'middle',
  atoms: [
    { blockType: 'heading', title: 'Brand', titleTag: 'span', variant: 'default' },
    { blockType: 'menu', menu: menuDoc, orientation: 'horizontal', variant: 'default' },
    {
      blockType: 'button',
      text: 'Contact us',
      linkType: 'external',
      externalUrl: '#',
      variant: 'primary',
    },
  ],
}

const headerProps: Pick<
  HeaderGlobal,
  'blocks' | 'variant' | 'sticky' | 'htmlId' | 'paddingTop' | 'paddingBottom'
> = {
  blocks: [boxed(headerBlockHolder)] as unknown as HeaderGlobal['blocks'],
  variant: 'default',
  sticky: 'none',
  paddingTop: 8,
  paddingBottom: 8,
}

// ============================================================
// FOOTER
// ============================================================
// Two rows demonstrating why Footer/Header take Section blocks: the top
// row needs a full-width background that breaks out of the boxed content
// column, the bottom row is a plain boxed row.
const footerCtaRow = {
  blockType: 'blockHolder0',
  layout: 'flex',
  flexVariant: 'row',
  gap: 'md',
  verticalAlignment: 'middle',
  atoms: [
    { blockType: 'heading', title: 'Stay in touch', titleTag: 'h3', variant: 'default' },
    {
      blockType: 'button',
      text: 'Subscribe',
      linkType: 'external',
      externalUrl: '#',
      variant: 'primary',
    },
  ],
}

const footerCtaSection = {
  blockType: 'section',
  settings: {
    viewport: 'auto',
    widthType: 'boxed',
    containerType: 'container',
    background: { type: 'gradient', gradientTheme: 'cool' },
  },
  blocks: [footerCtaRow],
}

const footerCopyrightRow = {
  blockType: 'blockHolder0',
  layout: 'block',
  atoms: [
    {
      blockType: 'richText',
      text: richText('© 2026 Boilerplate Inc. All rights reserved.'),
      variant: 'default',
    },
  ],
}

const footerProps: Pick<
  FooterGlobal,
  'blocks' | 'variant' | 'htmlId' | 'paddingTop' | 'paddingBottom'
> = {
  blocks: [footerCtaSection, boxed(footerCopyrightRow)] as unknown as FooterGlobal['blocks'],
  variant: 'default',
  paddingTop: 16,
  paddingBottom: 16,
}

// ============================================================
// ATOMS
// ============================================================
const ATOM_ICONS: IconName[] = [
  'star',
  'heart',
  'mail',
  'phone',
  'mapPin',
  'arrowRight',
  'check',
  'download',
]

const ATOMS = [
  {
    slug: 'atom-button',
    name: 'Button',
    render: () => (
      <div className="container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {(['primary', 'secondary', 'ghost', 'outline'] as const).map((variant) => (
          <Button
            key={variant}
            blockType="button"
            text={variant[0].toUpperCase() + variant.slice(1)}
            linkType="external"
            externalUrl="#"
            variant={variant}
          />
        ))}
      </div>
    ),
  },
  {
    slug: 'atom-heading',
    name: 'Heading',
    render: () => (
      <div className="container">
        {(['h1', 'h2', 'h3', 'h4'] as const).map((tag) => (
          <Heading
            key={tag}
            blockType="heading"
            title={`Heading ${tag.toUpperCase()}`}
            titleTag={tag}
            variant="default"
          />
        ))}
      </div>
    ),
  },
  {
    slug: 'atom-icon',
    name: 'Icon',
    render: () => (
      <div className="container" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {ATOM_ICONS.map((icon) => (
          <Icon key={icon} hasIcon icon={icon} size={28} />
        ))}
      </div>
    ),
  },
  {
    slug: 'atom-image',
    name: 'Image',
    render: () => (
      <div className="container" style={{ maxWidth: '32rem' }}>
        <ImageAtom
          blockType="image"
          image={media('atom-image', 800, 450)}
          aspectRatio="16/9"
          linkType="none"
        />
      </div>
    ),
  },
  {
    slug: 'atom-menu',
    name: 'Menu',
    render: () => (
      <div className="container">
        <MenuAtom blockType="menu" menu={menuDoc} orientation="horizontal" variant="default" />
      </div>
    ),
  },
  {
    slug: 'atom-richtext',
    name: 'RichText',
    render: () => (
      <div className="container">
        <RichTextAtom blockType="richText" text={richTextWithListsAndLink()} variant="default" />
      </div>
    ),
  },
] as const

// ============================================================
// COMPOSITIONS — image + heading/text/button split, image on
// either side. There's no dedicated block for this yet; it's an
// atoms composition, laid out with a plain flex wrapper here since
// BlockHolder has no per-child width control of its own.
// ============================================================
const mediaSplit = (imageSeed: string, imageOnRight: boolean) => (
  <div
    className="container"
    style={{
      display: 'flex',
      flexDirection: imageOnRight ? 'row-reverse' : 'row',
      gap: '3rem',
      alignItems: 'center',
    }}
  >
    <div style={{ flex: '1 1 0' }}>
      <ImageAtom
        blockType="image"
        image={media(imageSeed, 800, 600)}
        aspectRatio="4/3"
        linkType="none"
      />
    </div>
    <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <Heading blockType="heading" title="Feature title" titleTag="h2" variant="default" />
      <RichTextAtom blockType="richText" text={richText(LOREM)} variant="default" />
      <div>
        <Button
          blockType="button"
          text="Learn more"
          linkType="external"
          externalUrl="#"
          variant="primary"
        />
      </div>
    </div>
  </div>
)

const COMPOSITIONS = [
  {
    slug: 'composition-image-left',
    name: 'Image left',
    render: () => mediaSplit('composition-left', false),
  },
  {
    slug: 'composition-image-right',
    name: 'Image right',
    render: () => mediaSplit('composition-right', true),
  },
] as const

// ---------- Tabs ----------
const tabsProps: TabsBlockProps = {
  blockType: 'tabs',
  orientation: 'horizontal',
  variant: 'default',
  items: [
    {
      label: 'Overview',
      defaultActive: true,
      hasIcon: true,
      iconType: 'picker',
      icon: 'info',
      iconPosition: 'left',
      blocks: [
        { blockType: 'heading', title: 'Product overview', titleTag: 'h3', variant: 'default' },
        { blockType: 'richText', text: richText(LOREM), variant: 'default' },
      ],
    },
    {
      label: 'Features',
      hasIcon: true,
      iconType: 'picker',
      icon: 'star',
      iconPosition: 'left',
      blocks: [
        { blockType: 'heading', title: 'Key features', titleTag: 'h3', variant: 'default' },
        { blockType: 'richText', text: richText(LOREM), variant: 'default' },
      ],
    },
    {
      label: 'Pricing',
      hasIcon: true,
      iconType: 'picker',
      icon: 'tag',
      iconPosition: 'left',
      blocks: [
        { blockType: 'heading', title: 'Simple pricing', titleTag: 'h3', variant: 'default' },
        { blockType: 'richText', text: richText(LOREM), variant: 'default' },
      ],
    },
  ],
}

// ---------- Accordion ----------
const accordionProps: AccordionBlockProps = {
  blockType: 'accordion',
  variant: 'default',
  allowMultiple: false,
  background: { type: 'blank' },
  items: [
    {
      label: 'What is included?',
      defaultOpen: true,
      blocks: [{ blockType: 'richText', text: richText(LOREM), variant: 'default' }],
    },
    {
      label: 'How does billing work?',
      blocks: [{ blockType: 'richText', text: richText(LOREM), variant: 'default' }],
    },
    {
      label: 'Can I cancel anytime?',
      blocks: [{ blockType: 'richText', text: richText(LOREM), variant: 'default' }],
    },
  ],
}

// ---------- Slider ----------
const sliderProps: SliderBlockProps = {
  blockType: 'slider',
  settings: { orientation: 'horizontal', spaceBetween: 20, slidesPerView: 1 },
  slides: [1, 2, 3, 4].map((n) => ({
    image: media(`slider-${n}`, 1200, 600),
    caption: `Slide ${n} caption`,
  })),
}

// ---------- CTA ----------
const ctaProps: CTABlockProps = {
  blockType: 'cta',
  title: 'Ready to get started?',
  text: richText(LOREM),
  alignment: 'center',
  background: { type: 'gradient', gradientTheme: 'warm' },
  buttons: [
    {
      blockType: 'button',
      text: 'Get started',
      linkType: 'external',
      externalUrl: '#',
      variant: 'primary',
    },
    {
      blockType: 'button',
      text: 'Learn more',
      linkType: 'external',
      externalUrl: '#',
      variant: 'outline',
    },
  ],
}

// ---------- Testimonials ----------
const testimonialsProps: TestimonialsBlockProps = {
  blockType: 'testimonials',
  layout: 'grid',
  columns: 'col-3',
  items: [
    {
      quote: LOREM,
      name: 'Jordan Ellis',
      role: 'CTO, Northwind',
      avatar: media('avatar-1', 96, 96),
    },
    {
      quote: LOREM,
      name: 'Priya Nair',
      role: 'Founder, Loopwork',
      avatar: media('avatar-2', 96, 96),
    },
    { quote: LOREM, name: 'Marco Diaz', role: 'PM, Buildstack', avatar: media('avatar-3', 96, 96) },
  ],
}

// ---------- Stats ----------
const statsProps: StatsBlockProps = {
  blockType: 'stats',
  columns: 'col-4',
  items: [
    { value: '500+', label: 'Projects shipped' },
    { value: '99%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '4.9', label: 'Average rating' },
  ],
}

// ---------- Team ----------
const teamProps: TeamBlockProps = {
  blockType: 'team',
  columns: 'col-4',
  items: [1, 2, 3, 4].map((n) => ({
    photo: media(`team-${n}`, 320, 320),
    name: `Team Member ${n}`,
    role: 'Software Engineer',
    bio: LOREM,
    socialLinks: [
      { platform: 'linkedin', url: '#' },
      { platform: 'xTwitter', url: '#' },
    ],
  })),
}

// ---------- Posts (shared by PostsBlock + Section demos) ----------
const category: Category = {
  id: nextId(),
  title: 'Product',
  slug: 'product',
  updatedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
}

const posts: Post[] = [1, 2, 3].map((n) => ({
  id: nextId(),
  title: `Sample Post ${n}`,
  slug: `sample-post-${n}`,
  excerpt: LOREM,
  featuredImage: media(`post-${n}`, 640, 400),
  category: [category],
  updatedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
}))

const postsBlockProps: PostsBlockProps = {
  blockType: 'postsBlock',
  title: 'Latest Posts',
  populateBy: 'latest',
  limit: 3,
  layout: 'grid',
  gridColumns: 'col-3',
  gap: 'md',
  posts,
}

// ---------- FormBlock ----------
const formDoc: Form = {
  id: nextId(),
  title: 'Contact Form',
  submitButtonLabel: 'Send message',
  confirmationType: 'message',
  confirmationMessage: richText('Thanks — we will be in touch shortly.'),
  fields: [
    { blockType: 'text', name: 'name', label: 'Name', required: true, width: 50 },
    { blockType: 'email', name: 'email', label: 'Email', required: true, width: 50 },
    {
      blockType: 'select',
      name: 'topic',
      label: 'Topic',
      required: false,
      width: 100,
      options: [
        { label: 'General', value: 'general' },
        { label: 'Support', value: 'support' },
      ],
    },
    { blockType: 'textarea', name: 'message', label: 'Message', required: true, width: 100 },
    { blockType: 'checkbox', name: 'newsletter', label: 'Subscribe to newsletter', width: 100 },
  ],
  updatedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
}

const formBlockProps: FormBlockProps = { blockType: 'formBlock', form: formDoc }

// ---------- Section (wraps a PostsBlock to show container/background/spacing) ----------
const sectionProps: SectionBlockProps = {
  blockType: 'section',
  settings: {
    viewport: 'auto',
    widthType: 'boxed',
    containerType: 'container',
    background: { type: 'blank' },
  },
  blocks: [{ ...postsBlockProps, title: 'Latest Posts (nested in Section)' }],
}

// ---------- Section with video background ----------
const sectionVideoProps: SectionBlockProps = {
  blockType: 'section',
  settings: {
    viewport: 'full',
    widthType: 'boxed',
    alignment: 'center',
    containerType: 'container',
    background: {
      type: 'video',
      video: videoMedia(),
    },
  },
  blocks: [
    {
      blockType: 'blockHolder0',
      layout: 'block',
      atoms: [
        { blockType: 'heading', title: 'Built for motion', titleTag: 'h2', variant: 'default' },
        { blockType: 'richText', text: richText(LOREM), variant: 'default' },
      ],
    },
  ],
}

const BLOCKS = [
  { slug: 'tabs', name: 'Tabs', render: () => <BlockRenderer blocks={[boxed(tabsProps)]} /> },
  {
    slug: 'accordion',
    name: 'Accordion',
    render: () => <BlockRenderer blocks={[boxed(accordionProps)]} />,
  },
  { slug: 'slider', name: 'Slider', render: () => <BlockRenderer blocks={[boxed(sliderProps)]} /> },
  { slug: 'cta', name: 'CTA', render: () => <BlockRenderer blocks={[boxed(ctaProps)]} /> },
  {
    slug: 'testimonials',
    name: 'Testimonials',
    render: () => <BlockRenderer blocks={[boxed(testimonialsProps)]} />,
  },
  { slug: 'stats', name: 'Stats', render: () => <BlockRenderer blocks={[boxed(statsProps)]} /> },
  { slug: 'team', name: 'Team', render: () => <BlockRenderer blocks={[boxed(teamProps)]} /> },
  {
    slug: 'postsBlock',
    name: 'PostsBlock',
    render: () => <BlockRenderer blocks={[boxed(postsBlockProps)]} />,
  },
  {
    slug: 'formBlock',
    name: 'FormBlock',
    render: () => <BlockRenderer blocks={[boxed(formBlockProps)]} />,
  },
  { slug: 'section', name: 'Section', render: () => <BlockRenderer blocks={[sectionProps]} /> },
  {
    slug: 'section-video',
    name: 'Section (video background)',
    render: () => <BlockRenderer blocks={[sectionVideoProps]} />,
  },
] as const

const GROUPS = [
  {
    key: 'header',
    label: 'Header',
    items: [{ slug: 'header', name: 'Header', render: () => <Header {...headerProps} /> }],
  },
  { key: 'atoms', label: 'Atoms', items: ATOMS },
  { key: 'compositions', label: 'Compositions', items: COMPOSITIONS },
  { key: 'blocks', label: 'Blocks', items: BLOCKS },
  {
    key: 'footer',
    label: 'Footer',
    items: [{ slug: 'footer', name: 'Footer', render: () => <Footer {...footerProps} /> }],
  },
] as const

export default function BlocksPreviewPage() {
  return (
    <div>
      <style>{`
        .blocks-preview-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          padding: 0.75rem 1.5rem;
          background: #111;
          border-bottom: 1px solid #333;
        }
        .blocks-preview-nav__row {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 1rem 2rem;
          padding: 0.8rem 0;
        }
        .blocks-preview-nav__row-label {
          color: #777;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          width: 11rem;
          flex-shrink: 0;
        }
        .blocks-preview-nav a {
          color: #fff;
          text-decoration: none;
          font-size: 1.6rem;
          opacity: 0.8;
        }
        .blocks-preview-nav a:hover {
          opacity: 1;
          text-decoration: underline;
        }
        .blocks-preview-intro {
          padding: 1.5rem;
        }
        .blocks-preview-group__divider {
          margin: 0;
          padding: 1.5rem 1.5rem 0;
          font-size: 3rem;
        }
        .blocks-preview-section {
          padding: 3rem 0;
          scroll-margin-top: 21rem;
        }
        .blocks-preview-section:nth-of-type(odd) {
          background: #eef0f3;
        }
        .blocks-preview-section:nth-of-type(even) {
          background: #ffffff;
        }
        .blocks-preview-section__label {
          padding: 0 1.5rem;
          margin: 0 0 1.5rem;
          font-family: monospace;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #888;
        }
      `}</style>

      <nav className="blocks-preview-nav">
        {GROUPS.map(({ key, label, items }) => (
          <div key={key} className="blocks-preview-nav__row">
            <span className="blocks-preview-nav__row-label">{label}</span>
            {items.map(({ slug, name }) => (
              <a key={slug} href={`#${slug}`}>
                {name}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <div className="blocks-preview-intro">
        <h1>Blocks Preview</h1>
        <p>
          Internal reference — header, atoms and page-builder blocks, each rendered once with
          placeholder data. Footer will be added here once it exists.
        </p>
      </div>

      {GROUPS.map(({ key, label, items }) => (
        <React.Fragment key={key}>
          <h2 className="blocks-preview-group__divider">{label}</h2>
          {items.map(({ slug, name, render }) => (
            <section key={slug} id={slug} className="blocks-preview-section">
              <h3 className="blocks-preview-section__label">{name}</h3>
              {render()}
            </section>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
