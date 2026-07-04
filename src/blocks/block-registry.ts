import React from 'react'
import { BlockHolder } from '@/blocks/BlockHolder'
import { Section } from '@/blocks/Section'
import { blockManifest } from '@/blocks/block-manifest'

// blockHolder0/1/2 and section are hand-wired here rather than in the
// manifest — see the comment above blockManifest in block-manifest.ts for why.
export const blockComponents: { [key: string]: React.FC<any> } = {
  blockHolder0: BlockHolder,
  blockHolder1: BlockHolder,
  blockHolder2: BlockHolder,
  section: Section,
  ...Object.fromEntries(blockManifest.map(({ slug, component }) => [slug, component])),
}
