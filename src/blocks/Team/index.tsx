import React from 'react'
import Image from 'next/image'
import type { TeamBlockProps } from '@/payload-types'
import { Icon, type IconName } from '@/components/atoms/Icon'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
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

  const backgroundType = background?.type
  const bgImageMedia = typeof background?.image === 'object' ? background.image : undefined
  const overlay = background?.overlay
  const showOverlay = overlay?.enabled && overlay?.color

  const classes = [
    s.team,
    backgroundType === 'color' && s[`team--color-${background?.colorTheme}`],
    backgroundType === 'gradient' && s[`team--gradient-${background?.gradientTheme}`],
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const wrapperClasses = [s.team__wrapper, s[`team__wrapper--${columns}`]].filter(Boolean).join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      {backgroundType === 'image' && bgImageMedia?.url && (
        <Image src={bgImageMedia.url} alt="" fill className={s['team__bgImage']} />
      )}

      {showOverlay && (
        <div
          className={s.overlay}
          style={{
            backgroundColor: `var(--color-${overlay.color})`,
            opacity: (overlay.opacity ?? 50) / 100,
          }}
        />
      )}

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
              <div className={s.member__name}>{item.name}</div>
              {item.role && <div className={s.member__role}>{item.role}</div>}
              {item.bio && <p className={s.member__bio}>{item.bio}</p>}

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
