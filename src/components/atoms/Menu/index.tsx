'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import type { MenuBlockProps } from '@/payload-types'
import { resolveMenuItemHref, type MenuItemNode } from '@/utils/resolveMenuHref'
import s from './style.module.scss'

const MenuItemComponent: React.FC<{ item: MenuItemNode; depth?: number }> = ({
  item,
  depth = 0,
}) => {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.children?.length
  const href = resolveMenuItemHref(item)
  const isExternal = item.type === 'external'
  const page = typeof item.page === 'object' ? item.page : undefined

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
          {item.label || page?.title}
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

export const Menu: React.FC<MenuBlockProps> = ({
  menu,
  orientation = 'horizontal',
  variant = 'default',
  htmlId,
  customClassName,
}) => {
  const items = typeof menu === 'object' ? (menu?.items as MenuItemNode[] | null | undefined) : null
  if (!items?.length) return null
  const classes = [s.menu, s[`menu--${orientation}`], s[`menu--${variant}`], customClassName]
    .filter(Boolean)
    .join(' ')

  return (
    <nav id={htmlId || undefined} className={classes}>
      <ul className={s.menu__list} role="list">
        {items.map((item, i) => (
          <MenuItemComponent key={i} item={item} />
        ))}
      </ul>
    </nav>
  )
}

export default Menu
