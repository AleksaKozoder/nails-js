import { Block } from 'payload'
import { TextBlockConfig } from '@/blocks/TextBlock/config'
import { ImageBlock } from '@/components/atoms/Image/config'
import { ButtonBlock } from '@/components/atoms/Button/config'

const alignOptions = [
  { label: 'Start', value: 'start' },
  { label: 'Center', value: 'center' },
  { label: 'End', value: 'end' },
  { label: 'Stretch', value: 'stretch' },
]

const justifyOptions = [
  { label: 'Start', value: 'start' },
  { label: 'Center', value: 'center' },
  { label: 'End', value: 'end' },
  { label: 'Stretch', value: 'stretch' },
  { label: 'Space Between', value: 'space-between' },
  { label: 'Space Around', value: 'space-around' },
  { label: 'Space Evenly', value: 'space-evenly' },
]

export const BlockHolder: Block = {
  slug: 'blockHolder',
  labels: { singular: 'Block Holder', plural: 'Blocks Holder' },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks: [TextBlockConfig, ImageBlock, ButtonBlock],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            // ── Layout + Gap + Variant ──────────────────────────────────
            {
              type: 'row',
              fields: [
                {
                  name: 'layout',
                  type: 'select',
                  defaultValue: 'block',
                  admin: { width: '33%' },
                  options: [
                    { label: 'Block', value: 'block' },
                    { label: 'Flex', value: 'flex' },
                    { label: 'Grid', value: 'grid' },
                  ],
                },
                {
                  name: 'gap',
                  label: 'Gap (px)',
                  type: 'number',
                  defaultValue: 20,
                  admin: {
                    width: '33%',
                    condition: (_, s) => s?.layout === 'flex' || s?.layout === 'grid',
                  },
                },
                {
                  name: 'variant',
                  type: 'select',
                  admin: { width: '33%' },
                  defaultValue: 'default',
                  options: [{ label: 'Default', value: 'default' }],
                },
              ],
            },

            // ── FLEX opcije ─────────────────────────────────────────────
            {
              type: 'row',
              admin: { condition: (_, s) => s?.layout === 'flex' },
              fields: [
                {
                  name: 'flexDirection',
                  label: 'Direction',
                  type: 'select',
                  defaultValue: 'row',
                  admin: { width: '25%' },
                  options: [
                    { label: 'Row', value: 'row' },
                    { label: 'Column', value: 'column' },
                    { label: 'Row Reverse', value: 'row-reverse' },
                    { label: 'Column Reverse', value: 'column-reverse' },
                  ],
                },
                {
                  name: 'flexJustify',
                  label: 'Justify Content',
                  type: 'select',
                  defaultValue: 'start',
                  admin: { width: '25%' },
                  options: justifyOptions,
                },
                {
                  name: 'flexAlign',
                  label: 'Align Items',
                  type: 'select',
                  defaultValue: 'start',
                  admin: { width: '25%' },
                  options: alignOptions,
                },
                {
                  name: 'flexWrap',
                  label: 'Wrap',
                  type: 'select',
                  defaultValue: 'nowrap',
                  admin: { width: '25%' },
                  options: [
                    { label: 'No Wrap', value: 'nowrap' },
                    { label: 'Wrap', value: 'wrap' },
                    { label: 'Wrap Reverse', value: 'wrap-reverse' },
                  ],
                },
              ],
            },

            // ── GRID: mode ──────────────────────────────────────────────
            {
              type: 'row',
              admin: { condition: (_, s) => s?.layout === 'grid' },
              fields: [
                {
                  name: 'gridMode',
                  label: 'Columns',
                  type: 'select',
                  defaultValue: 'auto',
                  admin: { width: '33%' },
                  options: [
                    { label: 'Auto (repeat + minmax)', value: 'auto' },
                    { label: 'Custom', value: 'custom' },
                  ],
                },
                {
                  name: 'gridJustifyItems',
                  label: 'Justify Items',
                  type: 'select',
                  defaultValue: 'stretch',
                  admin: { width: '33%' },
                  options: alignOptions,
                },
                {
                  name: 'gridAlignItems',
                  label: 'Align Items',
                  type: 'select',
                  defaultValue: 'stretch',
                  admin: { width: '33%' },
                  options: alignOptions,
                },
              ],
            },

            // ── GRID: auto opcije ───────────────────────────────────────
            {
              type: 'row',
              admin: {
                condition: (_, s) => s?.layout === 'grid' && s?.gridMode === 'auto',
              },
              fields: [
                {
                  name: 'gridAutoRepeat',
                  label: 'Repeat',
                  type: 'select',
                  defaultValue: 'auto-fill',
                  admin: { width: '25%' },
                  options: [
                    { label: 'auto-fill', value: 'auto-fill' },
                    { label: 'auto-fit', value: 'auto-fit' },
                  ],
                },
                {
                  name: 'gridAutoMinValue',
                  label: 'Min vrednost',
                  type: 'number',
                  defaultValue: 280,
                  admin: { width: '25%' },
                },
                {
                  name: 'gridAutoMinUnit',
                  label: 'Min jedinica',
                  type: 'select',
                  defaultValue: 'px',
                  admin: { width: '25%' },
                  options: [
                    { label: 'px', value: 'px' },
                    { label: '%', value: '%' },
                    { label: 'rem', value: 'rem' },
                  ],
                },
                {
                  name: 'gridAutoMax',
                  label: 'Max',
                  type: 'select',
                  defaultValue: '1fr',
                  admin: { width: '25%' },
                  options: [
                    { label: '1fr', value: '1fr' },
                    { label: '2fr', value: '2fr' },
                    { label: '3fr', value: '3fr' },
                    { label: '100%', value: '100%' },
                  ],
                },
              ],
            },

            // ── GRID: custom / broj kolona — array ──────────────────────
            {
              name: 'gridColumns',
              label: 'Column Definitions',
              type: 'array',
              minRows: 1,
              maxRows: 12,
              admin: {
                condition: (_, s) =>
                  s?.layout === 'grid' &&
                  s?.gridMode !== 'auto' &&
                  s?.gridMode != null,
                components: {
                  RowLabel: '@/blocks/BlockHolder/GridColumnRowLabel#GridColumnRowLabel',
                },
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'value',
                      label: 'Vrednost',
                      type: 'number',
                      defaultValue: 1,
                      admin: { width: '50%' },
                    },
                    {
                      name: 'unit',
                      label: 'Jedinica',
                      type: 'select',
                      defaultValue: 'fr',
                      admin: { width: '50%' },
                      options: [
                        { label: 'fr', value: 'fr' },
                        { label: 'px', value: 'px' },
                        { label: '%', value: '%' },
                        { label: 'rem', value: 'rem' },
                        { label: 'auto', value: 'auto' },
                        { label: 'min-content', value: 'min-content' },
                        { label: 'max-content', value: 'max-content' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
