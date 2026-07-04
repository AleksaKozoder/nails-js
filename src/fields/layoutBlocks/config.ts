import { Field } from 'payload'
import { BlockHolder, nestableBlocks } from '@/blocks/BlockHolder/config'
import { SectionBlock } from '@/blocks/Section/config'

/**
 * Shared "blocks" field for layout globals (Header, Footer) that need to
 * compose rows out of Section (full-width background, boxed content) and/or
 * BlockHolder (flex/grid arrangement), same as a Page's top-level layout.
 *
 * Primer:
 *   import { layoutBlocksFields } from '@/fields/layoutBlocks/config'
 *   fields: [...layoutBlocksFields]
 */
export const layoutBlocksFields: Field[] = [
  {
    name: 'blocks',
    type: 'blocks',
    blocks: [SectionBlock, BlockHolder, ...nestableBlocks],
  },
]
