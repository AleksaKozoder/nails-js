'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu } from '@/components/atoms/Menu'
import { Button } from '@/components/atoms/Button'
import s from './style.module.scss'

type HeaderProps = {
  menu?: any
  cta?: any
  variant?: string
  sticky?: 'none' | 'sticky' | 'sticky-up'
  width?: 'default' | 'wide' | 'full'
  htmlId?: string
  className?: string
  logo?: {
    url: string
    alt?: string
    width?: number
    height?: number
  }
  siteTitle?: string
}

export const Header: React.FC<HeaderProps> = ({
  menu,
  cta,
  variant = 'default',
  sticky = 'none',
  width = 'default',
  htmlId,
  className,
  logo,
  siteTitle,
}) => {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (sticky === 'none') return

    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 20)

      if (sticky === 'sticky-up') {
        setHidden(current > lastScrollY.current && current > 80)
      }

      lastScrollY.current = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sticky])

  const headerClasses = [
    s.header,
    s[`header--${variant}`],
    sticky !== 'none' && s['header--sticky'],
    hidden && s['header--hidden'],
    scrolled && s['header--scrolled'],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const innerClasses = [s.header__inner, s[`header__inner--${width}`]].filter(Boolean).join(' ')

  return (
    <header id={htmlId || undefined} className={headerClasses}>
      <div className={innerClasses}>
        {/* Logo */}
        <Link href="/" className={s.header__logo}>
          {logo?.url ? (
            <img
              src={logo.url}
              alt={logo.alt || siteTitle || 'Logo'}
              width={logo.width || 140}
              height={logo.height || 40}
            />
          ) : (
            <span className={s.header__logo_text}>{siteTitle}</span>
          )}
        </Link>

        {/* Desktop nav */}
        {menu?.items?.length > 0 && (
          <div className={s.header__nav}>
            <Menu items={menu.items} orientation={menu.orientation} variant={menu.variant} />
          </div>
        )}

        {/* CTA */}
        {cta?.text && (
          <div className={s.header__cta}>
            <Button {...cta} />
          </div>
        )}

        {/* Mobile toggle */}
        <button
          type="button"
          className={s.header__burger}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={[s.header__burger_icon, mobileOpen && s['header__burger_icon--open']]
              .filter(Boolean)
              .join(' ')}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[s.header__mobile, mobileOpen && s['header__mobile--open']]
          .filter(Boolean)
          .join(' ')}
      >
        {menu?.items?.length > 0 && (
          <Menu items={menu.items} orientation="vertical" variant={menu.variant} />
        )}
        {cta?.text && <Button {...cta} />}
      </div>
    </header>
  )
}

export default Header
