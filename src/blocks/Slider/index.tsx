'use client' // Swiper zahteva klijentsku komponentu
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import type { SliderBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'

// Import Swiper stilova
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './style.module.scss'

export const Slider: React.FC<SliderBlockProps> = ({
  settings = {},
  slides,
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const orientation = settings.orientation ?? 'horizontal'
  const isVertical = orientation === 'vertical'

  const backgroundType = background?.type
  const bgImageMedia = typeof background?.image === 'object' ? background.image : undefined
  const overlay = background?.overlay
  const showOverlay = overlay?.enabled && overlay?.color

  const sliderClasses = [
    s.slider,
    isVertical && s['slider--vertical'],
    backgroundType === 'color' && s[`slider--color-${background?.colorTheme}`],
    backgroundType === 'gradient' && s[`slider--gradient-${background?.gradientTheme}`],
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={sliderClasses} id={htmlId || undefined}>
      {backgroundType === 'image' && bgImageMedia?.url && (
        <Image src={bgImageMedia.url} alt="" fill className={s['slider__bgImage']} />
      )}

      {showOverlay && (
        <div
          className={s.overlay}
          style={{
            backgroundColor: `var(--color-${overlay.color})`,
            opacity: (overlay.opacity ?? 50) / 100,
          }}
        />
      )}

      <div className={s.slider__wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          direction={orientation}
          spaceBetween={settings.spaceBetween ?? undefined}
          slidesPerView={settings.slidesPerView ?? undefined}
          navigation
          pagination={{ clickable: true }}
          className={s.slider__swiper}
        >
          {slides?.map((slide, index) => {
            const image = typeof slide.image === 'object' ? slide.image : undefined

            return (
              <SwiperSlide key={index} className={s.slider__slide}>
                {image?.url && <Image src={image.url} alt={slide.caption || 'slide'} fill />}
                {slide.caption && <div className={s.slider__caption}>{slide.caption}</div>}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
