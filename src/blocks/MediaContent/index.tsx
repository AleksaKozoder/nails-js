import React from 'react'
import Image from 'next/image'
import {TextBlock} from '@/blocks/TextBlock'
import s from './style.module.scss'

export const MediaContent: React.FC<any> = ({ layout, image, title, textContent }) => {
  const isRight = layout === 'imageRight'

  return (
    <div className={`${s.mediaContent} ${isRight ? s['mediaContent--imageRight'] : ''}`}>
      <div className={s.mediaContent__imageWrapper}>
        <Image src={image.url} alt={image.alt || title} fill />
      </div>
      <div className={s.mediaContent__textWrapper}>
        <TextBlock {...textContent} />
      </div>
    </div>
  )
}
