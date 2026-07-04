import React from 'react'
import { blockComponents } from './block-registry'

type BlockData = {
  blockType: string
  [key: string]: any
}

type BlockRendererProps = {
  blocks?: BlockData[] | null
  container?: string | null
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, container }) => {
  if (!blocks || !Array.isArray(blocks)) {
    return undefined
  }

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
