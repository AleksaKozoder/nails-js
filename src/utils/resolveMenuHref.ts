import type { Menu as MenuDoc } from '@/payload-types'

// The schema only models 2 levels of nesting, but this stays generic for arbitrary depth.
export type MenuItemNode = Omit<NonNullable<MenuDoc['items']>[number], 'children'> & {
  children?: MenuItemNode[] | null
}

export const resolveMenuItemHref = (item: MenuItemNode): string => {
  if (item.type === 'external') return item.url || '#'
  const page = typeof item.page === 'object' ? item.page : undefined
  const slug = page?.slug ? `/${page.slug}` : '/'
  return item.anchor ? `${slug}#${item.anchor}` : slug
}
