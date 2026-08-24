import React from 'react'
import '../../scss/main.scss'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCta } from '@/components/layout/MobileCta'
import { getColorsCss } from '@/utils/getColorsCss'
import type {
  SiteSetting,
  Header as PayloadHeader,
  Footer as PayloadFooter,
  Media,
} from '@/payload-types'

async function getSiteSettings(): Promise<SiteSetting> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'site-settings', depth: 1 })
}

async function getHeader(): Promise<PayloadHeader> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'header', depth: 10 })
}

async function getFooter(): Promise<PayloadFooter> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'footer', depth: 10 })
}

export const metadata = {
  description:
    'Jovana Simović Nails Kragujevac — Profesionalno izlivanje, ojačanje i korekcija gel noktiju. Ručno rađen nail art i unikatni dizajn. Zakaži termin putem Instagrama!',
  title: 'NAILS JS',
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

  const faviconUrl =
    siteSettings.favicon && typeof siteSettings.favicon === 'object'
      ? (siteSettings.favicon as Media).url
      : null

  return (
    <html lang="en">
      <head>
        {colorsCss && <style>{colorsCss}</style>}
        {faviconUrl && <link rel="icon" href={faviconUrl} />}
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
