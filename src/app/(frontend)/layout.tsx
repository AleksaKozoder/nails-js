import React from 'react'
import '../../scss/main.scss'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
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
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
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
      </head>
      <body>
        {header.id && (
          <Header
            blocks={header.blocks ?? []}
            variant={header.variant ?? 'default'}
            sticky={header.sticky ?? 'none'}
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
            htmlId={footer.htmlId ?? undefined}
            paddingTop={footer.paddingTop ?? undefined}
            paddingBottom={footer.paddingBottom ?? undefined}
          />
        )}
      </body>
    </html>
  )
}
