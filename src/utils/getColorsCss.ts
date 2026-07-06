import { getPayload } from 'payload'
import config from '@payload-config'

// Loose but safe check for plausible CSS color values: hex, rgb()/rgba(),
// hsl()/hsla(), or a bare CSS keyword (e.g. "transparent"). Anything else
// (including attempts to break out of the declaration) is dropped.
const CSS_COLOR_PATTERN = /^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\)|hsla?\([\d\s.,%]+\)|[a-zA-Z]+)$/

const sanitizeName = (name: string): string =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '')

const isValidColor = (value: string): boolean => CSS_COLOR_PATTERN.test(value.trim())

export async function getColorsCss(): Promise<string> {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'colors' })
  const colors = data.colors || []

  const declarations = colors
    .map((entry) => {
      const name = sanitizeName(entry.value ?? '')
      const value = (entry.hex ?? '').trim()

      if (!name || !isValidColor(value)) return null

      return `--color-${name}: ${value};`
    })
    .filter((declaration): declaration is string => Boolean(declaration))

  if (declarations.length === 0) return ''

  return `:root { ${declarations.join(' ')} }`
}
