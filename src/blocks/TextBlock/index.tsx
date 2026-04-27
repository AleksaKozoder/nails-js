import React from 'react'
import s from './style.module.scss'

import { Heading } from '@/components/atoms/Heading'

export const TextBlock: React.FC<any> = ({
  supTitle,
  supTitleTag,
  title,
  titleTag,
  subTitle,
  subTitleTag,
  horizontalPosition,
  verticalPosition,
  text,
}) => {
  const classes = [
    s.textBlock,
    horizontalPosition && s[`align-${horizontalPosition}`],
    verticalPosition && s[`justify-${verticalPosition}`],
  ].filter(Boolean).join(' ')
console.log(horizontalPosition, verticalPosition)
  return (
    <div className={classes}>
      {supTitle && (
        <Heading tag={supTitleTag} visualLevel="supTitle">
          {supTitle}
        </Heading>
      )}

      <Heading tag={titleTag} visualLevel="h2">
        {title}
      </Heading>

      {subTitle && (
        <Heading tag={subTitleTag} visualLevel="subTitle">
          {subTitle}
        </Heading>
      )}

      {/* RichText... */}
    </div>
  )
}