// src/components/atoms/Image/index.tsx
import React from 'react'
import NextImage from 'next/image'
import s from './style.module.scss'

type ImageProps = {
  image: {
    url: string
    alt: string
    focalX?: number
    focalY?: number
  }
  aspectRatio?: string
  customAspectRatio?: string
  variant?: string
}

export const Image: React.FC<ImageProps> = ({ image, aspectRatio, customAspectRatio, variant }) => {
  if (!image?.url) return null

  const classes = [s.wrapper, variant && s[`wrapper-${variant}`]].filter(Boolean).join(' ')


  const ratio =
    aspectRatio === 'custom' ? customAspectRatio : aspectRatio !== 'auto' ? aspectRatio : undefined

  const objectPosition =
    image.focalX && image.focalY ? `${image.focalX}% ${image.focalY}%` : 'center'

  return (
    <div className={classes} style={{ aspectRatio: ratio }}>
      <NextImage
        src={image.url}
        alt={image.alt || ''}
        fill
        style={{
          objectFit: 'cover',
          objectPosition,
        }}
      />
    </div>
  )
}
