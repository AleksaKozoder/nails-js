import React from 'react'
import { Slider } from '@/blocks/Slider'
import { Section } from '@/blocks/Section'
import { BlockHolder } from '@/blocks/BlockHolder'
import { RichText } from '@/components/atoms/RichText'
import { Heading } from '@/components/atoms/Heading'
import { Image } from '@/components/atoms/Image'
import { Button } from '@/components/atoms/Button'
import { AccordionBlock } from '@/blocks/Accordion'
import { Menu } from '@/components/atoms/Menu'
import { PostsBlock } from '@/blocks/PostsBlock'
import { CTA } from '@/blocks/CTA'
import { Testimonials } from '@/blocks/Testimonials'
import { Stats } from '@/blocks/Stats'
import { Team } from '@/blocks/Team'
import { FormBlock } from '@/blocks/FormBlock'

const TabsBlock = React.lazy(() => import('@/blocks/Tabs').then((m) => ({ default: m.TabsBlock })))

export const blockComponents: { [key: string]: React.FC<any> } = {
  section: Section,
  menu: Menu,
  slider: Slider,
  heading: Heading,
  image: Image,
  button: Button,
  richText: RichText,
  blockHolder0: BlockHolder,
  blockHolder1: BlockHolder,
  blockHolder2: BlockHolder,
  postsBlock: PostsBlock,
  tabs: TabsBlock,
  accordion: AccordionBlock,
  cta: CTA,
  testimonials: Testimonials,
  stats: Stats,
  team: Team,
  formBlock: FormBlock,
}
