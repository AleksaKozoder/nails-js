import React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import type { ImageBlockProps } from '@/payload-types'
import s from './style.module.scss'

export const Image: React.FC<ImageBlockProps> = ({
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
  const media = typeof image === 'object' ? image : undefined
  if (!media?.url) return null

  const classes = [s.wrapper, variant && s[`wrapper-${variant}`]].filter(Boolean).join(' ')

  const ratio = aspectRatio === 'custom' ? customAspectRatio : aspectRatio

  const objectPosition =
    media.focalX && media.focalY ? `${media.focalX}% ${media.focalY}%` : 'center'

  const showOverlay = overlay?.enabled && overlay?.color

  const resolvedHref =
    linkType === 'internal'
      ? typeof internalLink === 'object' && internalLink !== null
        ? `/${internalLink.slug ?? ''}`
        : '/'
      : (externalUrl ?? '#')

  const width = media.width ?? 0
  const height = media.height ?? 0

  const content = (
    <div
      className={classes}
      style={{
        aspectRatio: ratio !== 'auto' ? (ratio ?? undefined) : width / height,
        width: ratio !== 'auto' ? '100%' : `${width}px`,
      }}
    >
      <NextImage
        src={media.url}
        alt={media.alt || ''}
        fill
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
