import React from 'react'
import '../../scss/main.scss'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Header } from '@/components/layout/Header'
import type { SiteSetting, Header as PayloadHeader, Media } from '@/payload-types'

async function getColors() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'colors' })
  return data.colors || []
}

async function getSiteSettings(): Promise<SiteSetting> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'site-settings', depth: 1 })
}

async function getHeader(): Promise<PayloadHeader> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'header', depth: 10 })
}

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const [colors, siteSettings, header] = await Promise.all([
    getColors(),
    getSiteSettings(),
    getHeader(),
  ])

  const cssVariables = colors.map(({ value, hex }) => `--color-${value}: ${hex};`).join('\n')

  const faviconUrl =
    siteSettings.favicon && typeof siteSettings.favicon === 'object'
      ? (siteSettings.favicon as Media).url
      : null

  return (
    <html lang="en">
      <head>
        {cssVariables && <style>{`:root { ${cssVariables} }`}</style>}
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
            containerType={header.containerType ?? undefined}
            paddingTop={header.paddingTop ?? undefined}
            paddingBottom={header.paddingBottom ?? undefined}
          />
        )}
        <main>{children}</main>
      </body>
    </html>
  )
}
