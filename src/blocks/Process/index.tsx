import React from 'react'
import type { ProcessBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import { getBackgroundClasses } from '@/utils/getBackgroundClasses'
import { BackgroundLayer } from '@/components/atoms/BackgroundLayer'
import s from './style.module.scss'

export const Process: React.FC<ProcessBlockProps> = ({
  eyebrow,
  title,
  titleLine2,
  steps = [],
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  if (!steps?.length) return null

  const classes = [
    s.process,
    ...getBackgroundClasses(background, s, 'process'),
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={htmlId || undefined}>
      <BackgroundLayer
        background={background}
        imageClassName={s['process__bgImage']}
        overlayClassName={s.overlay}
      />

      <div className={s.process__head}>
        {eyebrow && <span className={s.process__eyebrow}>{eyebrow}</span>}
        <h2 className={s.process__title}>
          {title}
          {titleLine2 && (
            <>
              <br />
              {titleLine2}
            </>
          )}
        </h2>
      </div>

      <div className={s.process__grid}>
        {steps.map((step, index) => (
          <div key={index} className={s.step}>
            <div className={s.step__num}>{String(index + 1).padStart(2, '0')}</div>
            <h3 className={s.step__title}>{step.title}</h3>
            {step.description && <p className={s.step__description}>{step.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Process
