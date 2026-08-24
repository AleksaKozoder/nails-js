'use client'

import React from 'react'
import Image from 'next/image'
import type { FooterColumnsBlockProps } from '@/payload-types'
import { scrollToAnchorIfSamePage } from '@/utils/smoothAnchorScroll'
import s from './style.module.scss'

export const FooterColumns: React.FC<FooterColumnsBlockProps> = ({
  logo,
  brandName,
  brandSub,
  description,
  social,
  columns,
  bottomText,
  bottomSecondaryText,
  htmlId,
  customClassName,
}) => {
  const logoMedia = typeof logo === 'object' ? logo : undefined
  const hasSocial = !!social?.length
  const hasColumns = !!columns?.length
  const hasBottom = !!(bottomText || bottomSecondaryText)

  const classes = [s.footerColumns, customClassName].filter(Boolean).join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <div className={s.footerColumns__grid}>
        <div className={s.footerColumns__brandCol}>
          <div className={s.footerColumns__brand}>
            {logoMedia?.url && (
              <Image
                src={logoMedia.url}
                alt={logoMedia.alt || brandName || ''}
                width={40}
                height={40}
                className={s.footerColumns__logo}
              />
            )}
            <span className={s.footerColumns__brandText}>
              <span className={s.footerColumns__brandName}>{brandName}</span>
              {brandSub && <span className={s.footerColumns__brandSub}>{brandSub}</span>}
            </span>
          </div>

          {description && <p className={s.footerColumns__description}>{description}</p>}

          {hasSocial && (
            <div className={s.footerColumns__social}>
              {social!.map((link, index) => {
                const isInternal = link.url?.startsWith('mailto:') || link.url?.startsWith('tel:')

                return (
                  <a
                    key={link.id ?? index}
                    href={link.url}
                    target={isInternal ? undefined : '_blank'}
                    rel={isInternal ? undefined : 'noopener noreferrer'}
                    className={s.footerColumns__socialLink}
                  >
                    <span className={s.footerColumns__socialIcon}>{link.icon}</span>
                  </a>
                )
              })}
            </div>
          )}
        </div>

        {hasColumns &&
          columns!.map((column, index) => (
            <div key={column.id ?? index} className={s.footerColumns__col}>
              <h4 className={s.footerColumns__heading}>{column.heading}</h4>
              {column.links && column.links.length > 0 && (
                <ul className={s.footerColumns__list}>
                  {column.links.map((link, linkIndex) => (
                    <li key={link.id ?? linkIndex}>
                      <a href={link.url} onClick={(e) => scrollToAnchorIfSamePage(e, link.url)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>

      {hasBottom && (
        <div className={s.footerColumns__bottom}>
          {bottomText && <span>{bottomText}</span>}
          {bottomSecondaryText && <span>{bottomSecondaryText}</span>}
        </div>
      )}
    </div>
  )
}

export default FooterColumns
