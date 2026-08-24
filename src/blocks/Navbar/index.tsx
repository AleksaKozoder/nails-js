'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import type { NavbarBlockProps } from '@/payload-types'
import { resolveMenuItemHref, type MenuItemNode } from '@/utils/resolveMenuHref'
import { scrollToAnchorIfSamePage } from '@/utils/smoothAnchorScroll'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

export const Navbar: React.FC<NavbarBlockProps> = ({
  logo,
  brandName,
  brandSub,
  menu,
  cta,
  htmlId,
  customClassName,
}) => {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const logoMedia = typeof logo === 'object' ? logo : undefined
  const items = (typeof menu === 'object' ? menu?.items : null) as MenuItemNode[] | null | undefined
  const hasItems = !!items?.length
  const hasCta = !!cta?.length

  const classes = [s.navbar, customClassName].filter(Boolean).join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <div className={s.navbar__inner}>
        <Link href="/" className={s.navbar__brand} onClick={() => setOpen(false)}>
          {logoMedia?.url && (
            <Image
              src={logoMedia.url}
              alt={logoMedia.alt || brandName || ''}
              width={46}
              height={46}
              className={s.navbar__logo}
            />
          )}
          <span className={s.navbar__brandText}>
            <span className={s.navbar__brandName}>{brandName}</span>
            {brandSub && <span className={s.navbar__brandSub}>{brandSub}</span>}
          </span>
        </Link>

        {hasItems && (
          <nav className={s.navbar__links} aria-label="Primary">
            {items!.map((item, index) => {
              const href = resolveMenuItemHref(item)
              return (
                <Link
                  key={item.id ?? index}
                  href={href}
                  onClick={(e) => scrollToAnchorIfSamePage(e, href)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}

        <div className={s.navbar__right}>
          {hasCta && (
            <div className={s.navbar__cta}>
              <BlockRenderer blocks={cta!} />
            </div>
          )}

          {hasItems && (
            <button
              type="button"
              className={[s.navbar__burger, open && s['navbar__burger--open']]
                .filter(Boolean)
                .join(' ')}
              aria-expanded={open}
              aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          )}
        </div>
      </div>

      {hasItems &&
        mounted &&
        createPortal(
          <div
            className={[s.navbar__panel, open && s['navbar__panel--open']]
              .filter(Boolean)
              .join(' ')}
          >
            {items!.map((item, index) => {
              const href = resolveMenuItemHref(item)
              return (
                <Link
                  key={item.id ?? index}
                  href={href}
                  onClick={(e) => {
                    scrollToAnchorIfSamePage(e, href)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
            {hasCta && (
              <div className={s.navbar__panelCta}>
                <BlockRenderer blocks={cta!} />
              </div>
            )}
          </div>,
          document.body,
        )}
    </div>
  )
}

export default Navbar
