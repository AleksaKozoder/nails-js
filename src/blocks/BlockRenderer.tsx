// src/blocks/BlockRenderer.tsx
import React from 'react'
import { blockComponents } from './block-registry'

interface BlockData {
  blockType: string
  [key: string]: any
}

interface BlockRendererProps {
  blocks?: BlockData[] | null
  container?: string | null
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, container }) => {
  if (!blocks || !Array.isArray(blocks)) {
    return null
  }

  // Definišemo unutrašnji sadržaj (niz blokova)
  const content = (
    <>
      {blocks.map((block, index) => {
        const { blockType } = block
        const Component = blockComponents[blockType]

        if (Component) {
          return <Component key={`${blockType}-${index}`} {...block} />
        }

        console.warn(`Blok tipa "${blockType}" nije registrovan u block-registry.ts`)
        return null
      })}
    </>
  )

  // Ako postoji container prop, vraćamo content umotan u div, inače samo content
  return container ? <div className={container}>{content}</div> : content
}
