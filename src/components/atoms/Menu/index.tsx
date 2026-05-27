'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import s from './style.module.scss'

type MenuItem = {
  label?: string
  type?: 'internal' | 'external'
  page?: { slug?: string; title?: string }
  anchor?: string
  url?: string
  newTab?: boolean
  children?: MenuItem[]
}

type MenuProps = {
  items?: MenuItem[] | null
  orientation?: 'horizontal' | 'vertical'
  variant?: string
  className?: string
}

const resolveHref = (item: MenuItem): string => {
  if (item.type === 'external') return item.url || '#'
  const slug = item.page?.slug ? `/${item.page.slug}` : '/'
  return item.anchor ? `${slug}#${item.anchor}` : slug
}

const MenuItemComponent: React.FC<{ item: MenuItem; depth?: number }> = ({ item, depth = 0 }) => {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.children?.length
  const href = resolveHref(item)
  const isExternal = item.type === 'external'

  return (
    <li
      className={[
        s.menu__item,
        hasChildren && s['menu__item--has-children'],
        open && s['menu__item--open'],
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={s.menu__item_inner}>
        <Link
          href={href}
          className={s.menu__link}
          target={isExternal && item.newTab ? '_blank' : undefined}
          rel={isExternal && item.newTab ? 'noopener noreferrer' : undefined}
        >
          {item.label || item.page?.title}
        </Link>

        {hasChildren && (
          <button
            type="button"
            className={s.menu__toggle}
            aria-expanded={open}
            aria-label="Toggle submenu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className={s.menu__toggle_icon} aria-hidden="true" />
          </button>
        )}
      </div>

      {hasChildren && (
        <ul
          className={[s.menu__dropdown, open && s['menu__dropdown--open']]
            .filter(Boolean)
            .join(' ')}
        >
          {item.children!.map((child, i) => (
            <MenuItemComponent key={i} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export const Menu: React.FC<MenuProps> = ({
  items,
  orientation = 'horizontal',
  variant = 'default',
  className,
}) => {
  if (!items?.length) return null

  const classes = [s.menu, s[`menu--${orientation}`], s[`menu--${variant}`], className]
    .filter(Boolean)
    .join(' ')

  return (
    <nav className={classes}>
      <ul className={s.menu__list} role="list">
        {items.map((item, i) => (
          <MenuItemComponent key={i} item={item} />
        ))}
      </ul>
    </nav>
  )
}

export default Menu
