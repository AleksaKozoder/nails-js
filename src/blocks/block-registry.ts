import React from 'react'
import {Slider} from '@/blocks/Slider'
import { Section } from '@/blocks/Section'
import { BlockHolder } from '@/blocks/BlockHolder'
import { RichText } from '@/components/atoms/RichText'
import { Heading } from '@/components/atoms/Heading'
import {Image} from '@/components/atoms/Image'
import {Button} from '@/components/atoms/Button'
import {AccordionBlock} from '@/blocks/Accordion'
import { Menu } from '@/components/atoms/Menu'

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
  tabs: TabsBlock,
  accordion: AccordionBlock,
}
