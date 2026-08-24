import React from 'react'
import Image from 'next/image'
import type { TeamBlockProps } from '@/payload-types'
import { Icon, type IconName } from '@/components/atoms/Icon'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

export const Team: React.FC<TeamBlockProps> = ({
  items = [],
  columns = 'col-3',
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  if (!items?.length) return null

  const classes = [
    s.team,
    ...getBackgroundClasses(background, s, 'team'),
    ...getSpacingClasses(spacing),
    customClassName && s[`team--${customClassName}`],
  ]
    .filter(Boolean)
    .join(' ')

  const wrapperClasses = [s.team__wrapper, s[`team__wrapper--${columns}`]].filter(Boolean).join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['team__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={wrapperClasses}>
        {items.map((item, index) => {
          const photo = typeof item.photo === 'object' ? item.photo : undefined

          return (
            <div key={index} className={s.member}>
              {photo?.url && (
                <Image
                  src={photo.url}
                  alt={photo.alt || item.name}
                  width={160}
                  height={160}
                  className={s.member__photo}
                />
              )}
              <h3 className={s.member__name}>{item.name}</h3>
              {item.role && <p className={s.member__role}>{item.role}</p>}
              {item.bio && <span className={s.member__bio}>{item.bio}</span>}

              {item.socialLinks && item.socialLinks.length > 0 && (
                <div className={s.member__socials}>
                  {item.socialLinks.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.member__social}
                      aria-label={link.platform ?? undefined}
                    >
                      <Icon hasIcon icon={(link.platform ?? 'link') as IconName} size={18} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
