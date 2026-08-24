import React from 'react'
import s from './style.module.scss'

type MobileCtaProps = {
  enabled?: boolean | null
  colorTheme?: string | null
  instagramUrl?: string | null
  instagramLabel?: string | null
  phone?: string | null
  phoneLabel?: string | null
}

export const MobileCta: React.FC<MobileCtaProps> = ({
  enabled = true,
  colorTheme,
  instagramUrl,
  instagramLabel,
  phone,
  phoneLabel,
}) => {
  if (!enabled || (!instagramUrl && !phone)) return null

  const mobileCtaClasses = [s.mobileCta, colorTheme && s[`mobileCta--color-${colorTheme}`]]
    .filter(Boolean)
    .join(' ')

  const spacerClasses = [
    s.mobileCta__spacer,
    colorTheme && s[`mobileCta__spacer--color-${colorTheme}`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <div className={mobileCtaClasses}>
        {instagramUrl && (
          <a
            className={`${s.btn} ${s.primary}`}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {instagramLabel || 'Piši DM'}
          </a>
        )}
        {phone && (
          <a className={`${s.btn} ${s.outline}`} href={`tel:${phone}`}>
            {phoneLabel || 'Pozovi'}
          </a>
        )}
      </div>
      <div className={spacerClasses} aria-hidden="true" />
    </>
  )
}

export default MobileCta
