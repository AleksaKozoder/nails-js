import type { Media } from '@/payload-types'
import { getVideoEmbed, type VideoEmbed } from '@/utils/getVideoEmbed'

export type BackgroundLike =
  | {
      type?: ('blank' | 'color' | 'gradient' | 'image' | 'video') | null
      colorTheme?: string | null
      gradientTheme?: ('warm' | 'cool') | null
      image?: (number | null) | Media
      useVideoUrl?: boolean | null
      video?: (number | null) | Media
      videoUrl?: string | null
      overlay?: {
        enabled?: boolean | null
        color?: string | null
        opacity?: number | null
      } | null
    }
  | null
  | undefined

/** Resolves a background's video field (upload or URL) to a playable embed. */
export const resolveBackgroundVideo = (background: BackgroundLike): VideoEmbed | null => {
  if (background?.type !== 'video') return null

  if (background.useVideoUrl && background.videoUrl) {
    return getVideoEmbed(background.videoUrl)
  }

  const media = typeof background.video === 'object' ? background.video : undefined
  return media?.url ? { kind: 'file', url: media.url } : null
}

export const getBackgroundClasses = (
  background: BackgroundLike,
  stylesModule: Record<string, string>,
  prefix: string,
): string[] => {
  const backgroundType = background?.type

  return [
    backgroundType === 'color' && stylesModule[`${prefix}--color-${background?.colorTheme}`],
    backgroundType === 'gradient' &&
      stylesModule[`${prefix}--gradient-${background?.gradientTheme}`],
  ].filter((className): className is string => Boolean(className))
}
