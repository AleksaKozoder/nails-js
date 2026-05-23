import { MediaContent } from './MediaContent'
import {Slider} from '@/blocks/Slider'
import { Section } from '@/blocks/Section'
import { TextBlock } from '@/blocks/TextBlock'
import { BlockHolder } from '@/blocks/BlockHolder'

export const blockComponents: { [key: string]: React.FC<any> } = {
  section: Section,
  mediaContent: MediaContent,
  slider: Slider,
  textBlock: TextBlock,
  blockHolder: BlockHolder
}
