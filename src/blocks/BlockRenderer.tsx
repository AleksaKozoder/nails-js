import React from 'react'
import { blockComponents } from './block-registry'

interface Block {
  blockType: string
  [key: string]: any
}

interface BlockRendererProps {
  blocks: Block[]
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks)) return null

  return (
    <>
      {blocks.map((block, index) => {
        const { blockType } = block

        // Proveravamo da li komponenta postoji u našem registru
        const Component = blockComponents[blockType]

        if (Component) {
          return <Component key={`${blockType}-${index}`} {...block} />
        }

        // Ako zaboraviš da dodaš blok u registar, videćeš ovo u dev-u
        console.warn(`Blok tipa "${blockType}" nije registrovan.`)
        return null
      })}
    </>
  )
}
