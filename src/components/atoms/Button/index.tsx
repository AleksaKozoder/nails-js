import React from 'react'
import Link from 'next/link'
import { Icon } from '@/components/atoms/Icon'
import type { ButtonBlockProps } from '@/payload-types'
import s from './style.module.scss'

export const Button: React.FC<ButtonBlockProps> = ({
  text,
  linkType,
  internalLink,
  externalUrl,
  newTab = false,
  variant = 'primary',
  hasIcon = false,
  iconType = 'picker',
  icon,
  customSvg,
  iconPosition = 'right',
  htmlId,
  customClassName,
}) => {
  const resolvedHref =
    linkType === 'internal'
      ? typeof internalLink === 'object' && internalLink !== null
        ? `/${internalLink.slug ?? ''}`
        : '/'
      : (externalUrl ?? '#')

  const iconEl = (
    <Icon
      hasIcon={hasIcon ?? false}
      iconType={iconType ?? 'picker'}
      icon={icon}
      customSvg={typeof customSvg === 'object' ? customSvg : null}
      size={16}
      className={s.icon}
    />
  )

  const content = (
    <>
      {hasIcon && iconPosition === 'left' && iconEl}
      <span>{text}</span>
      {hasIcon && iconPosition === 'right' && iconEl}
    </>
  )

  const classes = [s.button, s[variant ?? 'primary'], customClassName].filter(Boolean).join(' ')

  const linkProps =
    newTab || linkType === 'external' ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  if (linkType === 'external') {
    return (
      <a id={htmlId || undefined} href={resolvedHref} className={classes} {...linkProps}>
        {content}
      </a>
    )
  }

  return (
    <Link id={htmlId || undefined} href={resolvedHref} className={classes} {...linkProps}>
      {content}
    </Link>
  )
}

export default Button
