'use client' // Swiper zahteva klijentsku komponentu
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import type { SliderBlockProps } from '@/payload-types'

// Import Swiper stilova
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './style.module.scss'

export const Slider: React.FC<SliderBlockProps> = ({ settings = {}, slides }) => {
  const orientation = settings.orientation ?? 'horizontal'
  const isVertical = orientation === 'vertical'

  return (
    <div className={`${s.slider} ${isVertical ? s['slider--vertical'] : ''}`}>
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
