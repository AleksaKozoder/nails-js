import type { Media } from '@/payload-types'

export type BackgroundLike =
  | {
      type?: ('blank' | 'color' | 'gradient' | 'image') | null
      colorTheme?: string | null
      gradientTheme?: ('warm' | 'cool') | null
      image?: (number | null) | Media
      overlay?: {
        enabled?: boolean | null
        color?: string | null
        opacity?: number | null
      } | null
    }
  | null
  | undefined

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
