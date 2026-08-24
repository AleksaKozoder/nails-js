'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { Header as HeaderGlobal } from '@/payload-types'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

type HeaderProps = Pick<
  HeaderGlobal,
  'blocks' | 'variant' | 'sticky' | 'colorTheme' | 'htmlId' | 'paddingTop' | 'paddingBottom'
>

export const Header: React.FC<HeaderProps> = ({
  blocks,
  variant = 'default',
  sticky = 'none',
  colorTheme,
  htmlId,
  paddingTop = 0,
  paddingBottom = 0,
}) => {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
    colorTheme && s[`header--color-${colorTheme}`],
    sticky !== 'none' && s['header--sticky'],
    hidden && s['header--hidden'],
    scrolled && s['header--scrolled'],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header
      id={htmlId || undefined}
      className={headerClasses}
      style={{
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
      }}
    >
      <BlockRenderer blocks={blocks ?? []} />
    </header>
  )
}

export default Header
