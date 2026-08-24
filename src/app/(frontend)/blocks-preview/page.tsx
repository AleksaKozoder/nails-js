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
  HeroBlockProps,
  ServicesBlockProps,
  ProcessBlockProps,
  GalleryBlockProps,
  InstagramStripBlockProps,
  ContactBlockProps,
  NavbarBlockProps,
  FooterColumnsBlockProps,
  AboutBlockProps,
  PricingBlockProps,
  FAQBlockProps,
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
import { Video as VideoAtom } from '@/components/atoms/Video'
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

const navbarMenuDoc: MenuDoc = {
  id: nextId(),
  name: 'Primary Nav',
  items: [
    { type: 'external', label: 'Radovi', url: '#radovi' },
    { type: 'external', label: 'Usluge', url: '#usluge' },
    { type: 'external', label: 'Cenovnik', url: '#cenovnik' },
    { type: 'external', label: 'Utisci', url: '#utisci' },
    { type: 'external', label: 'FAQ', url: '#faq' },
    { type: 'external', label: 'Kontakt', url: '#kontakt' },
  ],
  updatedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
}

const navbarProps: NavbarBlockProps = {
  blockType: 'navbar',
  logo: media('logo', 92, 92, 'Jovana Simović'),
  brandName: 'Jovana Simović',
  brandSub: 'NAILS · KRAGUJEVAC',
  menu: navbarMenuDoc,
  cta: [
    {
      blockType: 'button',
      text: 'Zakaži termin',
      linkType: 'external',
      externalUrl: 'https://instagram.com/nails.js_',
      newTab: true,
      variant: 'primary',
    },
  ],
}

const footerColumnsProps: FooterColumnsBlockProps = {
  blockType: 'footerColumns',
  logo: media('logo', 80, 80, 'Jovana Simović'),
  brandName: 'Jovana Simović',
  brandSub: 'NAILS · KRAGUJEVAC',
  description:
    'Nail artist iz Kragujevca — izlivanje, ojačanje, korekcije i ručno rađen nail art po meri.',
  social: [
    { platform: 'instagram', url: 'https://instagram.com/nails.js_' },
    { platform: 'link', url: 'tel:+381616878225' },
  ],
  columns: [
    {
      heading: 'Navigacija',
      links: [
        { label: 'Radovi', url: '#radovi' },
        { label: 'Usluge', url: '#usluge' },
        { label: 'Cenovnik', url: '#cenovnik' },
        { label: 'FAQ', url: '#faq' },
      ],
    },
    {
      heading: 'Usluge',
      links: [
        { label: 'Izlivanje', url: '#usluge' },
        { label: 'Ojačanje', url: '#usluge' },
        { label: 'Korekcije', url: '#usluge' },
        { label: 'Nail Art & 3D', url: '#usluge' },
      ],
    },
    {
      heading: 'Kontakt',
      links: [
        { label: '061 687 8225', url: 'tel:+381616878225' },
        { label: '@nails.js_', url: 'https://instagram.com/nails.js_' },
        { label: 'Kragujevac', url: '#kontakt' },
      ],
    },
  ],
  bottomText: '© 2026 Jovana Simović Nails. Sva prava zadržana.',
  bottomSecondaryText: 'Dizajn koncept',
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
    slug: 'atom-video-upload',
    name: 'Video (upload)',
    render: () => (
      <div className="container" style={{ maxWidth: '32rem' }}>
        <VideoAtom
          blockType="video"
          sourceType="upload"
          file={videoMedia()}
          aspectRatio="16/9"
          controls
        />
      </div>
    ),
  },
  {
    slug: 'atom-video-url',
    name: 'Video (URL)',
    render: () => (
      <div className="container" style={{ maxWidth: '32rem' }}>
        <VideoAtom
          blockType="video"
          sourceType="url"
          url="https://www.youtube.com/watch?v=aqz-KE-bpKQ"
          aspectRatio="16/9"
          controls
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

// ---------- FAQ ----------
const faqProps: FAQBlockProps = {
  blockType: 'faq',
  eyebrow: 'Pitanja',
  title: 'Često postavljana pitanja',
  allowMultiple: true,
  items: [
    {
      question: 'Kako mogu da zakažem termin?',
      defaultOpen: true,
      answer:
        'Zakazivanje ide isključivo putem DM poruke na Instagramu (@nails.js_) ili pozivom na 061 687 8225. Javite se sa željenim datumom, veličinom i idejom za dizajn.',
    },
    {
      question: 'Koliko traje izlivanje noktiju?',
      answer:
        'U proseku između 2 i 3 sata, u zavisnosti od dužine, oblika i složenosti dizajna koji ste izabrali.',
    },
    {
      question: 'Koliko često treba raditi korekciju?',
      answer: 'Preporučeni razmak je 3–4 nedelje, kako bi nokti ostali uredni, ojačani i zdravi.',
    },
    {
      question: 'Da li mogu da donesem sliku inspiracije?',
      answer:
        'Naravno! Slike sa Pinteresta ili Instagrama su odličan početak — dizajn se zatim prilagođava obliku i dužini vaših noktiju.',
    },
    {
      question: 'Koje veličine i dužine radite?',
      answer:
        'Sve dužine, od S do XXL, prikazane u cenovniku — biramo zajedno ono što najbolje odgovara vašem svakodnevnom ritmu.',
    },
    {
      question: 'Da li izlivanje šteti prirodnom noktu?',
      answer:
        'Uz pravilnu aplikaciju i profesionalno skidanje materijala (posebna usluga u cenovniku), izlivanje ne bi trebalo da ošteti nokat. Ne preporučuje se samostalno struganje kod kuće.',
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

// ---------- Hero ----------
const heroProps: HeroBlockProps = {
  blockType: 'hero',
  eyebrow: 'Nail Artist · Kragujevac',
  title: 'Nokti kao mala',
  highlightedTitle: 'umetnička dela.',
  description:
    'Izlivanje, ojačanje i korekcije gel noktiju — precizan rad, čist završni izgled i nail art rađen ručno, po meri svake klijentkinje.',
  buttons: [
    {
      blockType: 'button',
      text: 'Piši na Instagram DM',
      linkType: 'external',
      externalUrl: '#',
      variant: 'primary',
    },
    {
      blockType: 'button',
      text: 'Pozovi · 061 687 8225',
      linkType: 'external',
      externalUrl: 'tel:+381616878225',
      variant: 'outline',
    },
  ],
  trustItems: [
    { label: '📍 Kragujevac' },
    { label: '✋ 100% ručni rad' },
    { label: '📸 315+ pratilaca' },
    { label: '💅 S–XXL veličine' },
  ],
  images: [
    { image: media('hero-1', 600, 800, 'Pastelni nail art') },
    { image: media('hero-2', 500, 650, 'Nail art sa til efektom') },
    { image: media('hero-3', 450, 530, 'Crveni french manikir') },
  ],
}

// ---------- Services ----------
const servicesProps: ServicesBlockProps = {
  blockType: 'services',
  eyebrow: 'Usluge',
  title: 'Sve što je noktima potrebno,',
  titleLine2: 'na jednom mestu.',
  items: [
    {
      hasIcon: true,
      iconType: 'picker',
      icon: 'star',
      title: 'Izlivanje',
      description:
        'Gradnja noktiju u gelu od nule — dužina i oblik po želji, uz prirodan i uredan izgled od korena do vrha.',
      price: 'od 1600 RSD',
    },
    {
      hasIcon: true,
      iconType: 'picker',
      icon: 'shoppingBag',
      title: 'Ojačanje',
      description:
        'Zaštita i ojačanje prirodnog nokta gelom — idealno rešenje za slabe, tanke ili lomljive nokte.',
      price: 'po dogovoru',
    },
    {
      hasIcon: true,
      iconType: 'picker',
      icon: 'settings',
      title: 'Korekcije',
      description:
        'Redovno održavanje izlivenih noktiju svake 3–4 nedelje, uz mogućnost promene oblika i dizajna.',
      price: 'od 1500 RSD',
    },
    {
      hasIcon: true,
      iconType: 'picker',
      icon: 'heart',
      title: 'Nail Art & 3D',
      description:
        'Ručno crtanje, 3D detalji, cirkoni i sitni ukrasi — dizajn po inspiraciji ili potpuno originalna ideja.',
      price: 'od 50 RSD/nokat',
    },
  ],
}

// ---------- Process ----------
const processProps: ProcessBlockProps = {
  blockType: 'process',
  eyebrow: 'Kako izgleda proces',
  title: 'Od poruke do gotovih noktiju',
  steps: [
    {
      title: 'Pošalji DM',
      description: 'Javi se sa željenim terminom, dužinom i idejom ili inspirativnom slikom.',
    },
    {
      title: 'Dogovor termina',
      description: 'Potvrđujemo datum, vreme i sve detalje pre dolaska.',
    },
    {
      title: 'Izrada noktiju',
      description: 'Opuštena atmosfera, precizan rad i pažnja na svaki detalj dizajna.',
    },
    {
      title: 'Nega i korekcija',
      description: 'Saveti za održavanje i termin za korekciju za 3–4 nedelje.',
    },
  ],
}

// ---------- Gallery ----------
const galleryCategories = [
  { label: 'Francuski', value: 'francuski' },
  { label: 'Cvetni & 3D', value: 'cvetni' },
  { label: 'Šareno & Print', value: 'sareno' },
  { label: 'Minimalistički', value: 'minimal' },
]

const galleryProps: GalleryBlockProps = {
  blockType: 'gallery',
  eyebrow: 'Portfolio',
  title: 'Radovi sa profila',
  description:
    'Deo najnovijih radova — pun portfolio i svakodnevne objave možete pratiti na Instagram profilu @nails.js_.',
  allLabel: 'Sve',
  categories: galleryCategories,
  items: [
    { image: media('gallery-1', 600, 600, 'Nail art 1'), category: 'cvetni' },
    { image: media('gallery-2', 600, 600, 'Nail art 2'), category: 'francuski' },
    { image: media('gallery-3', 600, 600, 'Nail art 3'), category: 'francuski' },
    { image: media('gallery-4', 600, 600, 'Nail art 4'), category: 'francuski' },
    { image: media('gallery-5', 600, 600, 'Nail art 5'), category: 'cvetni' },
    { image: media('gallery-6', 600, 600, 'Nail art 6'), category: 'sareno' },
    { image: media('gallery-7', 600, 600, 'Nail art 7'), category: 'minimal' },
    { image: media('gallery-8', 600, 600, 'Nail art 8'), category: 'francuski' },
    { image: media('gallery-9', 600, 600, 'Nail art 9'), category: 'cvetni' },
    { image: media('gallery-10', 600, 600, 'Nail art 10'), category: 'francuski' },
    { image: media('gallery-11', 600, 600, 'Nail art 11'), category: 'sareno' },
  ],
}

// ---------- Instagram Strip ----------
const instagramStripProps: InstagramStripBlockProps = {
  blockType: 'instagramStrip',
  eyebrow: 'Instagram',
  title: 'Zapratite radove uživo',
  description: 'Poslednjih 5 objava sa profila — sveže, svaki put kad ih klijentkinje pogledaju.',
  instagramHandle: '@nails.js_',
  instagramUrl: 'https://instagram.com/nails.js_',
  // elfsightWidgetId je namerno prazno u ovom mock-u — preview prikazuje
  // fallback stanje jer nema pravog Elfsight naloga povezanog u ovom prikazu.
}

// ---------- Contact ----------
const contactProps: ContactBlockProps = {
  blockType: 'contact',
  eyebrow: 'Kontakt',
  title: 'Zakaži svoj termin',
  items: [
    { icon: '📍', label: 'Nail artist', value: 'Kragujevac' },
    { icon: '📞', label: 'Pozovi ili piši', value: '061 687 8225', url: 'tel:+381616878225' },
    { icon: '✉️', label: 'Zakazivanje isključivo putem', value: 'DM poruke na Instagramu' },
    {
      icon: '@',
      label: 'Prati radove na profilu',
      value: '@nails.js_',
      url: 'https://instagram.com/nails.js_',
    },
    { icon: '🕐', label: 'Termini po dogovoru', value: 'Javite se za dostupne termine' },
  ],
  card: {
    scriptText: 'Vidimo se uskoro 🩷',
    text: 'Pošalji DM sa željenom dužinom, oblikom i terminom koji ti odgovara — javljam se u toku dana.',
    button: [
      {
        blockType: 'button',
        text: 'Otvori Instagram',
        linkType: 'external',
        externalUrl: 'https://instagram.com/nails.js_',
        newTab: true,
        variant: 'primary',
      },
    ],
  },
}

// ---------- About ----------
const twoParagraphs = (a: string, b: string): NonNullable<CTABlockProps['text']> => ({
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
        children: [{ type: 'text', text: a, version: 1 }],
      },
      {
        type: 'paragraph',
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        children: [{ type: 'text', text: b, version: 1 }],
      },
    ],
  },
})

const aboutProps: AboutBlockProps = {
  blockType: 'about',
  image: media('about-photo', 640, 800, 'Detalj rada — Jovana Simović Nails'),
  eyebrow: 'O umetnici',
  title: 'Upoznajte Jovanu',
  text: twoParagraphs(
    'Jovana Simović je nail umetnica iz Kragujevca, fokusirana na precizno izlivanje i ručno rađen nail art. Svaki set radi individualno — od izbora oblika i dužine do najsitnijeg detalja dizajna — prilagođen ruci i željama svake klijentkinje.',
    'Rad prati kroz Instagram profil, gde deli nove radove i cenovnik, a zakazivanje ide direktno kroz poruku.',
  ),
  facts: [
    { label: '📍 Kragujevac' },
    { label: '🎨 Ručni nail art' },
    { label: '💬 Zakazivanje putem DM' },
  ],
  imagePosition: 'left',
}

// ---------- Pricing ----------
const pricingProps: PricingBlockProps = {
  blockType: 'pricing',
  title: 'Cenovnik',
  subtitle: '📌 SVE CENE SU IZRAŽENE U DINARIMA',
  priceBlocks: [
    {
      heading: 'IZLIVANJE',
      smallRows: false,
      rows: [
        { label: 'S', value: '1600 RSD' },
        { label: 'M', value: '1800 RSD' },
        { label: 'L', value: '1900 RSD' },
        { label: 'XL', value: '2100 RSD' },
        { label: 'XXL', value: '2200 RSD' },
      ],
    },
    {
      heading: 'KOREKCIJA',
      smallRows: false,
      rows: [
        { label: 'S', value: '1500 RSD' },
        { label: 'M', value: '1700 RSD' },
        { label: 'L', value: '1800 RSD' },
        { label: 'XL', value: '2000 RSD' },
        { label: 'XXL', value: '2100 RSD' },
      ],
    },
    {
      heading: 'DOPLATE',
      smallRows: true,
      rows: [
        { label: 'Skidanje materijala', value: '400 RSD' },
        { label: 'Crtanje 3D gelom', value: '200 RSD' },
        { label: 'Tuđa korekcija', value: '200 RSD' },
        { label: 'Popravka nokta (van korekcije)', value: '200 RSD' },
        { label: 'Nail art', value: '50–200 / noktu' },
      ],
    },
  ],
  note: 'Tačna cena zavisi od dužine, oblika i izabranog dizajna.',
  button: {
    text: 'Zakaži svoj termin',
    linkType: 'external',
    externalUrl: 'https://instagram.com/nails.js_',
    newTab: true,
    variant: 'primary',
  },
}

// ---------- Testimonials ----------
const testimonialsProps: TestimonialsBlockProps = {
  blockType: 'testimonials',
  eyebrow: 'Utisci',
  title: 'Šta kažu klijentkinje',
  layout: 'grid',
  columns: 'col-3',
  items: [
    {
      quote:
        'Nokti su mi izdržali čitav mesec bez okrnjenog ruba. Jovana je strpljiva i predloži dizajn koji stvarno odgovara obliku ruke.',
      rating: 5,
      name: 'Milica J.',
      role: 'Kragujevac',
    },
    {
      quote:
        'Dolazim redovno na korekcije već duže vreme, uvek izađem oduševljena. Atmosfera je opuštena, a rezultat besprekoran.',
      rating: 5,
      name: 'Teodora S.',
      role: 'Kragujevac',
    },
    {
      quote:
        'Poslala sam inspiraciju sa Pinteresta i dobila tačno ono što sam zamislila, čak i bolje. Preporučujem svima u gradu!',
      rating: 5,
      name: 'Ana M.',
      role: 'Kragujevac',
    },
  ],
}

// ---------- Stats ----------
const statsProps: StatsBlockProps = {
  blockType: 'stats',
  columns: 'col-4',
  items: [
    { value: '117+', label: 'Objavljenih radova' },
    { value: 'S–XXL', label: '5 veličina po izboru' },
    { value: '3–4', label: 'Nedelje između korekcija' },
    { value: '100%', label: 'Ručno rađen dizajn' },
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
  {
    slug: 'navbar',
    name: 'Navbar',
    render: () => <BlockRenderer blocks={[navbarProps]} />,
  },
  { slug: 'hero', name: 'Hero', render: () => <BlockRenderer blocks={[boxed(heroProps)]} /> },
  {
    slug: 'services',
    name: 'Services',
    render: () => <BlockRenderer blocks={[boxed(servicesProps)]} />,
  },
  {
    slug: 'process',
    name: 'Process',
    render: () => <BlockRenderer blocks={[boxed(processProps)]} />,
  },
  {
    slug: 'gallery',
    name: 'Gallery',
    render: () => <BlockRenderer blocks={[boxed(galleryProps)]} />,
  },
  {
    slug: 'instagramStrip',
    name: 'Instagram Strip',
    render: () => <BlockRenderer blocks={[boxed(instagramStripProps)]} />,
  },
  {
    slug: 'contact',
    name: 'Contact',
    render: () => <BlockRenderer blocks={[boxed(contactProps)]} />,
  },
  { slug: 'about', name: 'About', render: () => <BlockRenderer blocks={[boxed(aboutProps)]} /> },
  {
    slug: 'pricing',
    name: 'Pricing',
    render: () => <BlockRenderer blocks={[boxed(pricingProps)]} />,
  },
  { slug: 'tabs', name: 'Tabs', render: () => <BlockRenderer blocks={[boxed(tabsProps)]} /> },
  {
    slug: 'accordion',
    name: 'Accordion',
    render: () => <BlockRenderer blocks={[boxed(accordionProps)]} />,
  },
  { slug: 'faq', name: 'FAQ', render: () => <BlockRenderer blocks={[boxed(faqProps)]} /> },
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
  {
    slug: 'footerColumns',
    name: 'Footer Columns',
    render: () => <BlockRenderer blocks={[footerColumnsProps]} />,
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
