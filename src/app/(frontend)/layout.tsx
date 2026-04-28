import React from 'react'
import '../../scss/main.scss'
import { getPayload } from 'payload'
import config from '@payload-config'

async function getColors() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'colors' })
  return data.colors || []
}

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const colors = await getColors()

  const cssVariables = colors.map(({ value, hex }) => `--color-${value}: ${hex};`).join('\n')

  return (
    <html lang="en">
      <head>{cssVariables && <style>{`:root { ${cssVariables} }`}</style>}</head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
