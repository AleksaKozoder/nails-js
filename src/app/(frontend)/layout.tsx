import React from 'react'
import '../../scss/main.scss'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCta } from '@/components/layout/MobileCta'
import { getColorsCss } from '@/utils/getColorsCss'
import { getSiteSettings } from '@/utils/getSiteSettings'
import type { Metadata } from 'next'
import type { Header as PayloadHeader, Footer as PayloadFooter, Media } from '@/payload-types'

const resolveImageUrl = (image?: (number | null) | Media): string | undefined => {
  if (image && typeof image === 'object' && image.url) return image.url
  return undefined
}

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()

  const titleTemplate = (siteSettings.titleTemplate || '%s | %site').replace(
    '%site',
    siteSettings.siteTitle,
  )

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
    title: {
      default: siteSettings.defaultMeta?.title || siteSettings.siteTitle,
      template: titleTemplate,
    },
    description: siteSettings.defaultMeta?.description || siteSettings.tagline || undefined,
    robots: siteSettings.robots ?? undefined,
    icons: {
      icon: resolveImageUrl(siteSettings.favicon),
      apple: resolveImageUrl(siteSettings.appleTouchIcon),
    },
    openGraph: {
      siteName: siteSettings.siteTitle,
      images: resolveImageUrl(siteSettings.defaultMeta?.ogImage)
        ? [{ url: resolveImageUrl(siteSettings.defaultMeta?.ogImage)! }]
        : undefined,
    },
  }
}

async function getHeader(): Promise<PayloadHeader> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'header', depth: 10 })
}

async function getFooter(): Promise<PayloadFooter> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'footer', depth: 10 })
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const [colorsCss, siteSettings, header, footer] = await Promise.all([
    getColorsCss(),
    getSiteSettings(),
    getHeader(),
    getFooter(),
  ])

  return (
    <html lang="en">
      <head>
        {colorsCss && <style>{colorsCss}</style>}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,500&family=Jost:wght@300;400;500;600&family=Mrs+Saint+Delafield&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {header.id && (
          <Header
            blocks={header.blocks ?? []}
            variant={header.variant ?? 'default'}
            sticky={header.sticky ?? 'none'}
            colorTheme={header.colorTheme ?? undefined}
            htmlId={header.htmlId ?? undefined}
            paddingTop={header.paddingTop ?? undefined}
            paddingBottom={header.paddingBottom ?? undefined}
          />
        )}
        <main>{children}</main>
        {footer.id && (
          <Footer
            blocks={footer.blocks ?? []}
            variant={footer.variant ?? 'default'}
            colorTheme={footer.colorTheme ?? undefined}
            htmlId={footer.htmlId ?? undefined}
            paddingTop={footer.paddingTop ?? undefined}
            paddingBottom={footer.paddingBottom ?? undefined}
          />
        )}
        <MobileCta
          enabled={siteSettings.mobileCtaEnabled ?? true}
          colorTheme={siteSettings.colorTheme ?? undefined}
          instagramUrl={siteSettings.instagramUrl}
          instagramLabel={siteSettings.instagramLabel}
          phone={siteSettings.phone}
          phoneLabel={siteSettings.phoneLabel}
        />
      </body>
    </html>
  )
}
