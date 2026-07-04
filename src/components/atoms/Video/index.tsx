import React from 'react'
import type { VideoBlockProps } from '@/payload-types'
import s from './style.module.scss'

const YOUTUBE_PATTERN =
  /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
const VIMEO_PATTERN = /vimeo\.com\/(?:video\/)?(\d+)/

type UrlEmbed = { kind: 'youtube' | 'vimeo'; embedUrl: string } | { kind: 'file'; url: string }

type EmbedOptions = { autoplay: boolean; muted: boolean; loop: boolean; controls: boolean }

// YouTube/Vimeo links get a lazy-loaded iframe (deferred until near the
// viewport); anything else is treated as a direct video file URL.
const resolveUrlEmbed = (
  url: string,
  { autoplay, muted, loop, controls }: EmbedOptions,
): UrlEmbed => {
  const youtubeMatch = url.match(YOUTUBE_PATTERN)
  if (youtubeMatch) {
    const id = youtubeMatch[1]
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: muted ? '1' : '0',
      loop: loop ? '1' : '0',
      controls: controls ? '1' : '0',
      playsinline: '1',
      ...(loop ? { playlist: id } : {}),
    })
    return { kind: 'youtube', embedUrl: `https://www.youtube.com/embed/${id}?${params}` }
  }

  const vimeoMatch = url.match(VIMEO_PATTERN)
  if (vimeoMatch) {
    const id = vimeoMatch[1]
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      muted: muted ? '1' : '0',
      loop: loop ? '1' : '0',
      controls: controls ? '1' : '0',
      title: '0',
      byline: '0',
      portrait: '0',
    })
    return { kind: 'vimeo', embedUrl: `https://player.vimeo.com/video/${id}?${params}` }
  }

  return { kind: 'file', url }
}

export const Video: React.FC<VideoBlockProps> = ({
  sourceType,
  file,
  poster,
  url,
  aspectRatio,
  customAspectRatio,
  controls,
  autoplay,
  loop,
  muted,
}) => {
  const isUrlSource = sourceType === 'url'
  const fileMedia = typeof file === 'object' ? file : undefined
  const posterMedia = typeof poster === 'object' ? poster : undefined

  const showControls = controls ?? true
  const shouldAutoplay = autoplay ?? false
  const shouldLoop = loop ?? false
  const effectiveMuted = shouldAutoplay || (muted ?? false)

  const ratio = aspectRatio === 'custom' ? customAspectRatio : (aspectRatio ?? '16/9')

  if (!isUrlSource && !fileMedia?.url) return null
  if (isUrlSource && !url) return null

  const embed =
    isUrlSource && url
      ? resolveUrlEmbed(url, {
          autoplay: shouldAutoplay,
          muted: effectiveMuted,
          loop: shouldLoop,
          controls: showControls,
        })
      : null

  return (
    <div className={s.wrapper} style={{ aspectRatio: ratio ?? undefined }}>
      {!isUrlSource && fileMedia?.url && (
        <video
          className={s.media}
          src={fileMedia.url}
          poster={posterMedia?.url ?? undefined}
          controls={showControls}
          autoPlay={shouldAutoplay}
          loop={shouldLoop}
          muted={effectiveMuted}
          playsInline
          preload="metadata"
        />
      )}

      {embed?.kind === 'file' && (
        <video
          className={s.media}
          src={embed.url}
          controls={showControls}
          autoPlay={shouldAutoplay}
          loop={shouldLoop}
          muted={effectiveMuted}
          playsInline
          preload="metadata"
        />
      )}

      {(embed?.kind === 'youtube' || embed?.kind === 'vimeo') && (
        <iframe
          className={s.media}
          src={embed.embedUrl}
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
        />
      )}
    </div>
  )
}
