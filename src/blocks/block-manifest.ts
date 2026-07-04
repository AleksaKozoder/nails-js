import React from 'react'
import { Block } from 'payload'

import { MenuBlock } from '@/components/atoms/Menu/config'
import { HeadingBlock } from '@/components/atoms/Heading/config'
import { RichTextBlock } from '@/components/atoms/RichText/config'
import { ImageBlock } from '@/components/atoms/Image/config'
import { VideoBlock } from '@/components/atoms/Video/config'
import { ButtonBlock } from '@/components/atoms/Button/config'
import { TabsBlock as TabsBlockConfig } from '@/blocks/Tabs/config'
import { SliderBlock } from '@/blocks/Slider/config'
import { AccordionBlock } from '@/blocks/Accordion/config'
import { CTABlock } from '@/blocks/CTA/config'
import { TestimonialsBlock } from '@/blocks/Testimonials/config'
import { StatsBlock } from '@/blocks/Stats/config'
import { TeamBlock } from '@/blocks/Team/config'
import { FormBlock as FormBlockConfig } from '@/blocks/FormBlock/config'
import { PostsBlock as PostsBlockConfig } from '@/blocks/PostsBlock/config'
import { DividerBlock } from '@/blocks/Divider/config'

/**
 * Component references are dynamically imported (never statically imported)
 * so this manifest stays safe to import from BlockHolder/config.ts, which is
 * itself reached from payload.config.ts (Pages -> SectionBlock -> BlockHolder)
 * for schema/type generation. A static import of a block's index.tsx pulls in
 * its style.module.scss, which the Payload config's Node/tsx loader can't
 * resolve. This mirrors the pattern the codebase already used for Tabs.
 */
const Menu = React.lazy(() => import('@/components/atoms/Menu').then((m) => ({ default: m.Menu })))
const Heading = React.lazy(() =>
  import('@/components/atoms/Heading').then((m) => ({ default: m.Heading })),
)
const RichText = React.lazy(() =>
  import('@/components/atoms/RichText').then((m) => ({ default: m.RichText })),
)
const Image = React.lazy(() =>
  import('@/components/atoms/Image').then((m) => ({ default: m.Image })),
)
const Video = React.lazy(() =>
  import('@/components/atoms/Video').then((m) => ({ default: m.Video })),
)
const Button = React.lazy(() =>
  import('@/components/atoms/Button').then((m) => ({ default: m.Button })),
)
const TabsBlockComponent = React.lazy(() =>
  import('@/blocks/Tabs').then((m) => ({ default: m.TabsBlock })),
)
const Slider = React.lazy(() => import('@/blocks/Slider').then((m) => ({ default: m.Slider })))
const Accordion = React.lazy(() =>
  import('@/blocks/Accordion').then((m) => ({ default: m.AccordionBlock })),
)
const CTA = React.lazy(() => import('@/blocks/CTA').then((m) => ({ default: m.CTA })))
const Testimonials = React.lazy(() =>
  import('@/blocks/Testimonials').then((m) => ({ default: m.Testimonials })),
)
const Stats = React.lazy(() => import('@/blocks/Stats').then((m) => ({ default: m.Stats })))
const Team = React.lazy(() => import('@/blocks/Team').then((m) => ({ default: m.Team })))
const FormBlockComponent = React.lazy(() =>
  import('@/blocks/FormBlock').then((m) => ({ default: m.FormBlock })),
)
const PostsBlockComponent = React.lazy(() =>
  import('@/blocks/PostsBlock').then((m) => ({ default: m.PostsBlock })),
)
const Divider = React.lazy(() => import('@/blocks/Divider').then((m) => ({ default: m.Divider })))

export interface BlockManifestEntry {
  slug: string
  config: Block
  component: React.FC<any>
  /**
   * Whether this block may be nested inside BlockHolder's atoms/blocks arrays.
   * Defaults to true. PostsBlock only renders at its existing fixed position
   * (SectionBlock.blocks) and is excluded from BlockHolder nesting.
   */
  nestable?: boolean
}

/**
 * blockHolder0/1/2 and 'section' are intentionally excluded from this
 * manifest, both for the same reason: circular imports. BlockHolder is
 * recursive (createBlockHolder nests itself per depth level in
 * BlockHolder/config.ts), and Section/config.ts imports BlockHolder from
 * BlockHolder/config.ts — so either one landing in this manifest would create
 * a cycle with BlockHolder/config.ts, which imports this file. Both stay
 * hand-maintained in block-registry.ts (component wiring) and
 * BlockHolder/config.ts / Section/config.ts (config wiring).
 */
export const blockManifest: BlockManifestEntry[] = [
  { slug: 'menu', config: MenuBlock, component: Menu },
  { slug: 'heading', config: HeadingBlock, component: Heading },
  { slug: 'richText', config: RichTextBlock, component: RichText },
  { slug: 'image', config: ImageBlock, component: Image },
  { slug: 'video', config: VideoBlock, component: Video },
  { slug: 'button', config: ButtonBlock, component: Button },
  { slug: 'tabs', config: TabsBlockConfig, component: TabsBlockComponent },
  { slug: 'slider', config: SliderBlock, component: Slider },
  { slug: 'accordion', config: AccordionBlock, component: Accordion },
  { slug: 'cta', config: CTABlock, component: CTA },
  { slug: 'testimonials', config: TestimonialsBlock, component: Testimonials },
  { slug: 'stats', config: StatsBlock, component: Stats },
  { slug: 'team', config: TeamBlock, component: Team },
  { slug: 'formBlock', config: FormBlockConfig, component: FormBlockComponent },
  { slug: 'postsBlock', config: PostsBlockConfig, component: PostsBlockComponent, nestable: false },
  { slug: 'divider', config: DividerBlock, component: Divider },
]
