'use client'

import React from 'react'
import Script from 'next/script'
import type { InstagramStripBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import { Icon } from '@/components/atoms/Icon'
import s from './style.module.scss'

export const InstagramStrip: React.FC<InstagramStripBlockProps> = ({
  eyebrow,
  title,
  description,
  instagramHandle,
  instagramUrl,
  elfsightWidgetId,
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const classes = [
    s.instagramStrip,
    ...getBackgroundClasses(background, s, 'instagramStrip'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['instagramStrip__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={s.instagramStrip__head}>
        {eyebrow && <span className={s.instagramStrip__eyebrow}>{eyebrow}</span>}
        <h2 className={s.instagramStrip__title}>{title}</h2>
        {description && <p className={s.instagramStrip__description}>{description}</p>}
      </div>

      <div className={s.instagramStrip__frame}>
        {elfsightWidgetId ? (
          <>
            <div className={`elfsight-app-${elfsightWidgetId}`} data-elfsight-app-lazy="true" />
            <Script
              src="https://static.elfsight.com/platform/platform.js"
              strategy="lazyOnload"
              data-use-service-core=""
            />
          </>
        ) : (
          <div className={s.instagramStrip__placeholder}>
            <Icon
              hasIcon
              iconType="picker"
              icon="instagram"
              size={30}
              className={s.placeholderIcon}
            />
            <p>Ovde će se prikazati poslednjih 5 Instagram objava.</p>
            {instagramUrl && (
              <a
                className={s.instagramStrip__cta}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon hasIcon iconType="picker" icon="instagram" size={18} />
                <span>{instagramHandle || 'Otvori Instagram'}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default InstagramStrip
