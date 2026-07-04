export type VideoEmbed =
  | { kind: 'youtube'; embedUrl: string }
  | { kind: 'vimeo'; embedUrl: string }
  | { kind: 'file'; url: string }

const YOUTUBE_PATTERN =
  /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
const VIMEO_PATTERN = /vimeo\.com\/(?:video\/)?(\d+)/

/**
 * Detects YouTube/Vimeo links and returns an autoplaying/muted/looping embed
 * URL for them; anything else is treated as a direct video file URL.
 */
export const getVideoEmbed = (url: string): VideoEmbed => {
  const youtubeMatch = url.match(YOUTUBE_PATTERN)
  if (youtubeMatch) {
    const id = youtubeMatch[1]
    return {
      kind: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1`,
    }
  }

  const vimeoMatch = url.match(VIMEO_PATTERN)
  if (vimeoMatch) {
    const id = vimeoMatch[1]
    return {
      kind: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&background=1`,
    }
  }

  return { kind: 'file', url }
}
