'use client' // Swiper zahteva klijentsku komponentu
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

// Import Swiper stilova
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './style.module.scss'

export const Slider: React.FC<any> = ({ settings, slides }) => {
  const isVertical = settings.orientation === 'vertical'

  return (
    <div className={`${s.slider} ${isVertical ? s['slider--vertical'] : ''}`}>
      <div className={s.slider__wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          direction={settings.orientation}
          spaceBetween={settings.spaceBetween}
          slidesPerView={settings.slidesPerView}
          navigation
          pagination={{ clickable: true }}
          className={s.slider__swiper}
        >
          {slides?.map((slide: any, index: number) => (
            <SwiperSlide key={index} className={s.slider__slide}>
              {slide.image && <Image src={slide.image.url} alt={slide.caption || 'slide'} fill />}
              {slide.caption && <div className={s.slider__caption}>{slide.caption}</div>}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
