import React from 'react'
import Link from 'next/link'
import { Icon } from '@/components/atoms/Icon'
import type { IconProps } from '@/components/atoms/Icon'
import styles from './style.module.scss'

type InternalLink = {
  slug?: string
}

type ButtonProps = IconProps & {
  text: string
  linkType: 'internal' | 'external'
  internalLink?: InternalLink | string | null
  externalUrl?: string | null
  newTab?: boolean
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  className?: string
  iconPosition?: 'left' | 'right'
}

export const Button: React.FC<ButtonProps> = ({
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
  className = '',
}) => {
  const resolvedHref =
    linkType === 'internal'
      ? typeof internalLink === 'object' && internalLink !== null
        ? `/${internalLink.slug ?? ''}`
        : typeof internalLink === 'string'
          ? `/${internalLink}`
          : '/'
      : externalUrl ?? '#'

  const iconEl = (
    <Icon
      hasIcon={hasIcon}
      iconType={iconType}
      icon={icon}
      customSvg={customSvg}
      size={16}
      className={styles.icon}
    />
  )

  const content = (
    <>
      {hasIcon && iconPosition === 'left' && iconEl}
      <span>{text}</span>
      {hasIcon && iconPosition === 'right' && iconEl}
    </>
  )

  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  const linkProps =
    newTab || linkType === 'external' ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  if (linkType === 'external') {
    return (
      <a href={resolvedHref} className={classes} {...linkProps}>
        {content}
      </a>
    )
  }

  return (
    <Link href={resolvedHref} className={classes} {...linkProps}>
      {content}
    </Link>
  )
}

export default Button
