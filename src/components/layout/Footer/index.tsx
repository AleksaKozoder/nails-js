import React from 'react'
import type { Footer as FooterGlobal } from '@/payload-types'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import s from './style.module.scss'

type FooterProps = Pick<
  FooterGlobal,
  'blocks' | 'variant' | 'colorTheme' | 'htmlId' | 'paddingTop' | 'paddingBottom'
>

export const Footer: React.FC<FooterProps> = ({
  blocks,
  variant = 'default',
  colorTheme,
  htmlId,
  paddingTop = 0,
  paddingBottom = 0,
}) => {
  const footerClasses = [
    s.footer,
    s[`footer--${variant}`],
    colorTheme && s[`footer--color-${colorTheme}`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <footer
      id={htmlId || undefined}
      className={footerClasses}
      style={{
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
      }}
    >
      <BlockRenderer blocks={blocks ?? []} />
    </footer>
  )
}

export default Footer
