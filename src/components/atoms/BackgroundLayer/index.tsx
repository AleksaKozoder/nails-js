import React from 'react'
import Image from 'next/image'
import type { BackgroundLike } from '@/utils/getBackgroundClasses'

type BackgroundLayerProps = {
  background: BackgroundLike
  imageClassName?: string
  overlayClassName?: string
}

export const BackgroundLayer: React.FC<BackgroundLayerProps> = ({
  background,
  imageClassName,
  overlayClassName,
}) => {
  const backgroundType = background?.type
  const bgImageMedia = typeof background?.image === 'object' ? background.image : undefined
  const bgVideoMedia = typeof background?.video === 'object' ? background.video : undefined
  const overlay = background?.overlay
  const showOverlay = overlay?.enabled && overlay?.color

  return (
    <>
      {backgroundType === 'image' && bgImageMedia?.url && (
        <Image src={bgImageMedia.url} alt="" fill className={imageClassName} />
      )}

      {backgroundType === 'video' && bgVideoMedia?.url && (
        <video src={bgVideoMedia.url} className={imageClassName} autoPlay muted loop playsInline />
      )}

      {showOverlay && (
        <div
          className={overlayClassName}
          style={{
            backgroundColor: `var(--color-${overlay.color})`,
            opacity: (overlay.opacity ?? 50) / 100,
          }}
        />
      )}
    </>
  )
}

export default BackgroundLayer
