import type React from 'react'

// Native/Next.js anchor scrolling is unreliable for same-page hashes
// (most noticeably: clicking a link to the current page's own hash from the
// very top does nothing). Scroll manually instead whenever the href points
// at an anchor on the page we're already on.
export const scrollToAnchorIfSamePage = (
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
): void => {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) return

  const path = href.slice(0, hashIndex) || '/'
  const targetId = href.slice(hashIndex + 1)
  if (!targetId || path !== window.location.pathname) return

  const target = document.getElementById(targetId)
  if (!target) return

  event.preventDefault()
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.pushState(null, '', `#${targetId}`)
}
