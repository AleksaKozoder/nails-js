import { getPayload } from 'payload'
import config from '@payload-config'
import type { SiteSetting } from '@/payload-types'

export async function getSiteSettings(): Promise<SiteSetting> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'site-settings', depth: 1 })
}
