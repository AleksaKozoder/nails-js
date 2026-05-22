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
      <head>
        {cssVariables && <style>{`:root { ${cssVariables} }`}</style>}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
