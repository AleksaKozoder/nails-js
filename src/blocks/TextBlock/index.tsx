// src/blocks/TextBlock/index.tsx
import React from 'react'
import s from './style.module.scss'
import { Heading } from '@/components/atoms/Heading'
import { RichText } from '@/components/atoms/RichText'

type TextBlockProps = {
  content: any[]
  verticalPosition?: 'top' | 'center' | 'bottom' | 'space-between' | 'space-around'
  horizontalPosition?: 'left' | 'center' | 'right'
}

export const TextBlock: React.FC<TextBlockProps> = ({
  content,
  verticalPosition,
  horizontalPosition,
}) => {
  const classes = [
    s.textBlock,
    verticalPosition && s[`justify-${verticalPosition}`],
    horizontalPosition && s[`align-${horizontalPosition}`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {content?.map((block, index) => {
console.log(block)
        switch (block.blockType) {
          case 'heading':
            return <Heading key={index} {...block} />
          case 'richText':
            return <RichText key={index} {...block} />
          default:
            return null
        }
      })}
    </div>
  )
}
