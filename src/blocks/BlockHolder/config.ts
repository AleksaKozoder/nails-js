import { Block, Field } from 'payload'
import { blockManifest } from '@/blocks/block-manifest'
import { advancedFields } from '@/fields/advanced/config'
import { SPACING_OPTIONS } from '@/fields/constants'

/**
 * Blocks nestable inside BlockHolder's atoms/blocks arrays, derived from the
 * shared manifest. blockHolder itself is added separately per depth level
 * below (see the block-manifest.ts comment for why it isn't in the manifest).
 */
const nestableBlocks: Block[] = blockManifest
  .filter((entry) => entry.nestable !== false)
  .map((entry) => entry.config)

const flexOptions = [
  { label: 'Row', value: 'row' },
  { label: 'Row Reverse', value: 'row-reverse' },
  { label: 'Row Wrap', value: 'row-wrap' },
  { label: 'Column', value: 'column' },
  { label: 'Column Reverse', value: 'column-reverse' },
]

const gridOptions = [
  { label: 'Auto', value: 'auto' },
  { label: '2 columns', value: 'col-2' },
  { label: '3 columns', value: 'col-3' },
]

const createBlockHolder = (depth = 0, maxDepth = 3): Block => {
  const canNest = depth < maxDepth - 1

  return {
    slug: `blockHolder${depth}`,
    interfaceName: `BlockHolderLevel${depth}BlockProps`,
    labels: { singular: `Block Holder - level ${depth + 1}`, plural: 'Blocks Holder' },
    fields: [
      {
        type: 'tabs',
        tabs: [
          {
            label: 'Content',
            fields: [
              {
                name: 'atoms',
                type: 'blocks',
                blocks: [
                  ...(canNest ? [createBlockHolder(depth + 1, maxDepth)] : []),
                  ...nestableBlocks,
                ],
              },
            ],
          },
          {
            label: 'Settings',
            fields: [
              ...advancedFields,
              {
                type: 'row',
                fields: [
                  {
                    name: 'layout',
                    type: 'select',
                    defaultValue: 'block',
                    admin: { width: '50%' },
                    options: [
                      { label: 'Block', value: 'block' },
                      { label: 'Flex', value: 'flex' },
                      { label: 'Grid', value: 'grid' },
                    ],
                  },
                  {
                    name: 'verticalAlignment',
                    type: 'select',
                    defaultValue: 'top',
                    admin: { width: '50%' },
                    options: [
                      { label: 'Top', value: 'top' },
                      { label: 'Middle', value: 'middle' },
                      { label: 'Bottom', value: 'bottom' },
                    ],
                  },
                ],
              },
              {
                type: 'row',
                fields: [
                  {
                    name: 'flexVariant',
                    type: 'select',
                    defaultValue: 'row',
                    options: flexOptions,
                    admin: {
                      width: '50%',
                      condition: (_, s) => s?.layout === 'flex',
                    },
                  },
                  {
                    name: 'gridVariant',
                    type: 'select',
                    defaultValue: 'auto',
                    options: gridOptions,
                    admin: {
                      width: '50%',
                      condition: (_, s) => s?.layout === 'grid',
                    },
                  },
                  {
                    name: 'gap',
                    label: 'Gap',
                    type: 'select',
                    defaultValue: 'none',
                    options: SPACING_OPTIONS,
                    admin: {
                      width: '50%',
                      condition: (_, s) => s?.layout === 'flex' || s?.layout === 'grid',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
}

export const blockHolderFields: Field[] = [
  {
    name: 'blocks',
    type: 'blocks',
    blocks: [createBlockHolder(0, 3), ...nestableBlocks],
  },
]

export const BlockHolder = createBlockHolder(0, 3)
