import {Slider} from '@/blocks/Slider'
import { Section } from '@/blocks/Section'
import { BlockHolder } from '@/blocks/BlockHolder'
import { TabsBlock } from '@/blocks/Tabs'
import { RichText } from '@/components/atoms/RichText'
import { Heading } from '@/components/atoms/Heading'
import {Image} from '@/components/atoms/Image'
import {Button} from '@/components/atoms/Button'


export const blockComponents: { [key: string]: React.FC<any> } = {
  section: Section,
  slider: Slider,
  heading: Heading,
  image: Image,
  button: Button,
  richText: RichText,
  blockHolder0: BlockHolder,
  blockHolder1: BlockHolder,
  blockHolder2: BlockHolder,

}
