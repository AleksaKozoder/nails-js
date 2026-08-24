import { Metadata } from 'next'
import type { Media, SiteSetting } from '@/payload-types'

type SeoPageData = {
  title: string
  seoTitle?: string | null
  seoDescription?: string | null
  seoImage?: (number | null) | Media
}

const resolveImageUrl = (image?: (number | null) | Media): string | undefined => {
  if (image && typeof image === 'object' && image.url) return image.url
  return undefined
}

export const generateMeta = (
  pageData: SeoPageData,
  siteSettings: SiteSetting,
  path?: string,
): Metadata => {
  const title =
    pageData.seoTitle || pageData.title || siteSettings.defaultMeta?.title || siteSettings.siteTitle

  const description =
    pageData.seoDescription ||
    siteSettings.defaultMeta?.description ||
    siteSettings.tagline ||
    undefined

  const image =
    resolveImageUrl(pageData.seoImage) || resolveImageUrl(siteSettings.defaultMeta?.ogImage)

  return {
    title,
    description,
    robots: siteSettings.robots ?? undefined,
    alternates: path ? { canonical: path } : undefined,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}
