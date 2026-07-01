// src/components/atoms/Image/index.tsx
import React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import s from './style.module.scss'

type InternalLink = {
  slug?: string
}

type ImageProps = {
  image: {
    url: string
    alt: string
    focalX?: number
    focalY?: number
    width: number
    height: number
  }
  aspectRatio?: string
  customAspectRatio?: string
  variant?: string
  linkType?: 'none' | 'internal' | 'external'
  internalLink?: InternalLink | string | null
  externalUrl?: string | null
  newTab?: boolean
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
  linkType = 'none',
  internalLink,
  externalUrl,
  newTab = false,
  overlay,
}) => {
  if (!image?.url) return null
console.log(image)
  const classes = [s.wrapper, variant && s[`wrapper-${variant}`]].filter(Boolean).join(' ')

  const ratio =
    aspectRatio === 'custom' ? customAspectRatio :  aspectRatio

  const objectPosition =
    image.focalX && image.focalY ? `${image.focalX}% ${image.focalY}%` : 'center'

  const showOverlay = overlay?.enabled && overlay?.color

  const resolvedHref =
    linkType === 'internal'
      ? typeof internalLink === 'object' && internalLink !== null
        ? `/${internalLink.slug ?? ''}`
        : typeof internalLink === 'string'
          ? `/${internalLink}`
          : '/'
      : externalUrl ?? '#'

  const content = (
    <div className={classes} style={{ aspectRatio: ratio }}>
      <NextImage
        src={image.url}
        alt={image.alt || ''}
        width={image.width}
        height={image.height}
        fill={!image.width }
        sizes={'100vw'}
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

  const linkProps =
    newTab || linkType === 'external' ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  if (linkType === 'external' && externalUrl) {
    return (
      <a className={s.link} href={resolvedHref} {...linkProps}>
        {content}
      </a>
    )
  }

  if (linkType === 'internal' && internalLink) {
    return (
      <Link className={s.link} href={resolvedHref} {...linkProps}>
        {content}
      </Link>
    )
  }

  return content
}
