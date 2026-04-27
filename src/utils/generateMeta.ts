import { Metadata } from 'next'

export const generateMeta = (pageData: any): Metadata => {
  const { seoTitle, seoDescription, seoImage, title } = pageData

  return {
    title: seoTitle || title,
    description: seoDescription || '',
    openGraph: {
      title: seoTitle || title,
      description: seoDescription || '',
      images: seoImage?.url ? [{ url: seoImage.url }] : [],
    },
  }
}
