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
  overlay?: {
    enabled?: boolean
    color?: string
    opacity?: number
  }
}

export const Image: React.FC<ImageProps> = ({
  image,
  aspectRatio,
  customAspectRatio,
  variant,
  overlay,
}) => {
  if (!image?.url) return null

  const classes = [s.wrapper, variant && s[`wrapper-${variant}`]].filter(Boolean).join(' ')

  const ratio =
    aspectRatio === 'custom' ? customAspectRatio : aspectRatio !== 'auto' ? aspectRatio : undefined

  const objectPosition =
    image.focalX && image.focalY ? `${image.focalX}% ${image.focalY}%` : 'center'

  const showOverlay = overlay?.enabled && overlay?.color

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
      {showOverlay && (
        <div
          className={s.overlay}
          style={{
            backgroundColor: `var(--color-${overlay.color})`,
            opacity: (overlay.opacity ?? 50) / 100,
          }}
        />
      )}
    </div>
  )
}
