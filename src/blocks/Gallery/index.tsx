'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import type { GalleryBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

const ROTATIONS = [-3, 2, -2, 3]

export const Gallery: React.FC<GalleryBlockProps> = ({
  eyebrow,
  title,
  description,
  allLabel = 'All',
  categories,
  items,
  initialCount,
  showAllLabel = 'Show all',
  showLessLabel = 'Show less',
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(false)

  const limit = initialCount ?? 12

  const visibleItems = (items ?? []).filter(
    (item) => activeFilter === 'all' || !item.category || item.category === activeFilter,
  )
  const visibleCount = visibleItems.length
  const displayedItems = expanded ? visibleItems : visibleItems.slice(0, limit)
  const hasMore = visibleCount > limit

  const handleFilterChange = (value: string) => {
    setActiveFilter(value)
    setExpanded(false)
  }

  useEffect(() => {
    if (focusedIndex === null || visibleCount === 0) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFocusedIndex(null)
      if (event.key === 'ArrowLeft') {
        setFocusedIndex((current) =>
          current === null ? null : (current - 1 + visibleCount) % visibleCount,
        )
      }
      if (event.key === 'ArrowRight') {
        setFocusedIndex((current) => (current === null ? null : (current + 1) % visibleCount))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [focusedIndex, visibleCount])

  if (!items?.length) return null

  const classes = [
    s.gallery,
    ...getBackgroundClasses(background, s, 'gallery'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const focusedItem = focusedIndex !== null ? visibleItems[focusedIndex] : undefined
  const focusedMedia =
    focusedItem && typeof focusedItem.image === 'object' ? focusedItem.image : undefined

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['gallery__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={s.gallery__head}>
        {eyebrow && <span className={s.gallery__eyebrow}>{eyebrow}</span>}
        <h2 className={s.gallery__title}>{title}</h2>
        {description && <p className={s.gallery__description}>{description}</p>}
      </div>

      {categories && categories.length > 0 && (
        <div className={s.gallery__filterBar}>
          <button
            type="button"
            className={[
              s.gallery__filterBtn,
              activeFilter === 'all' && s['gallery__filterBtn--active'],
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => handleFilterChange('all')}
          >
            {allLabel}
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className={[
                s.gallery__filterBtn,
                activeFilter === category.value && s['gallery__filterBtn--active'],
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => handleFilterChange(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      )}

      <div className={s.gallery__grid}>
        {displayedItems.map((item, index) => {
          const media = typeof item.image === 'object' ? item.image : undefined
          if (!media?.url) return null

          const rotation = ROTATIONS[index % ROTATIONS.length]

          return (
            <button
              key={item.id ?? index}
              type="button"
              className={s.gItem}
              style={{ '--r': `${rotation}deg` } as React.CSSProperties}
              onClick={() => setFocusedIndex(index)}
            >
              <Image
                src={media.url}
                alt={media.alt || ''}
                width={media.width ?? 600}
                height={media.height ?? 600}
              />
              {item.caption && <span className={s.gItem__caption}>{item.caption}</span>}
            </button>
          )
        })}
      </div>

      {(hasMore || expanded) && (
        <div className={s.gallery__more}>
          <button
            type="button"
            className={s.gallery__moreBtn}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? showLessLabel : showAllLabel}
          </button>
        </div>
      )}

      {focusedMedia?.url && (
        <div
          className={s.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={() => setFocusedIndex(null)}
        >
          <button
            type="button"
            className={s.lightbox__close}
            aria-label="Close"
            onClick={() => setFocusedIndex(null)}
          >
            &times;
          </button>

          {visibleCount > 1 && (
            <>
              <button
                type="button"
                className={[s.lightbox__nav, s['lightbox__nav--prev']].join(' ')}
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation()
                  setFocusedIndex((current) =>
                    current === null ? null : (current - 1 + visibleCount) % visibleCount,
                  )
                }}
              >
                &#8249;
              </button>
              <button
                type="button"
                className={[s.lightbox__nav, s['lightbox__nav--next']].join(' ')}
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation()
                  setFocusedIndex((current) =>
                    current === null ? null : (current + 1) % visibleCount,
                  )
                }}
              >
                &#8250;
              </button>
            </>
          )}

          <div className={s.lightbox__frame} onClick={(event) => event.stopPropagation()}>
            <Image
              src={focusedMedia.url}
              alt={focusedMedia.alt || ''}
              width={focusedMedia.width ?? 1600}
              height={focusedMedia.height ?? 1600}
              className={s.lightbox__image}
            />
            {focusedItem?.caption && (
              <span className={s.lightbox__caption}>{focusedItem.caption}</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
