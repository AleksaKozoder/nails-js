'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import type { FormBlockProps } from '@/payload-types'
import { getSpacingClasses } from '@/utils/getSpacingClasses'
import s from './style.module.scss'

export const FormBlock: React.FC<FormBlockProps> = ({
  form,
  htmlId,
  customClassName,
  spacing,
  background,
}) => {
  const router = useRouter()
  const [values, setValues] = useState<Record<string, string | boolean>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const formDoc = typeof form === 'object' ? form : undefined
  if (!formDoc) return null

  const backgroundType = background?.type
  const bgImageMedia = typeof background?.image === 'object' ? background.image : undefined
  const overlay = background?.overlay
  const showOverlay = overlay?.enabled && overlay?.color

  const classes = [
    s.formBlock,
    backgroundType === 'color' && s[`formBlock--color-${background?.colorTheme}`],
    backgroundType === 'gradient' && s[`formBlock--gradient-${background?.gradientTheme}`],
    ...getSpacingClasses(spacing),
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const setValue = (name: string, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus('submitting')

    const submissionData = Object.entries(values).map(([field, value]) => ({
      field,
      value: String(value),
    }))

    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form: formDoc.id, submissionData }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')

      if (formDoc.confirmationType === 'redirect' && formDoc.redirect) {
        const { reference, url } = formDoc.redirect
        const referencedPage = typeof reference?.value === 'object' ? reference.value : undefined
        const redirectUrl = referencedPage?.slug ? `/${referencedPage.slug}` : url

        if (redirectUrl) router.push(redirectUrl)
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success' && formDoc.confirmationType !== 'redirect') {
    return (
      <div className={classes} id={htmlId || undefined}>
        <div className={s.formBlock__confirmation}>
          {formDoc.confirmationMessage ? (
            <PayloadRichText data={formDoc.confirmationMessage} />
          ) : (
            <p>Thank you — your submission has been received.</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={classes} id={htmlId || undefined}>
      {backgroundType === 'image' && bgImageMedia?.url && (
        <Image src={bgImageMedia.url} alt="" fill className={s['formBlock__bgImage']} />
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

      <form className={s.formBlock__form} onSubmit={handleSubmit}>
        {formDoc.fields?.map((field, index) => {
          const key = `${field.blockType}-${index}`

          if (field.blockType === 'message') {
            return (
              <div key={key} className={s.formBlock__message}>
                {field.message && <PayloadRichText data={field.message} />}
              </div>
            )
          }

          const width = field.width ? `${field.width}%` : '100%'

          if (field.blockType === 'checkbox') {
            return (
              <label key={key} className={s.formBlock__checkbox} style={{ width }}>
                <input
                  type="checkbox"
                  required={field.required ?? undefined}
                  checked={Boolean(values[field.name])}
                  onChange={(event) => setValue(field.name, event.target.checked)}
                />
                {field.label}
              </label>
            )
          }

          if (field.blockType === 'select') {
            return (
              <div key={key} className={s.formBlock__field} style={{ width }}>
                {field.label && <label htmlFor={field.name}>{field.label}</label>}
                <select
                  id={field.name}
                  required={field.required ?? undefined}
                  value={(values[field.name] as string) ?? ''}
                  onChange={(event) => setValue(field.name, event.target.value)}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )
          }

          if (field.blockType === 'textarea') {
            return (
              <div key={key} className={s.formBlock__field} style={{ width }}>
                {field.label && <label htmlFor={field.name}>{field.label}</label>}
                <textarea
                  id={field.name}
                  required={field.required ?? undefined}
                  value={(values[field.name] as string) ?? ''}
                  onChange={(event) => setValue(field.name, event.target.value)}
                />
              </div>
            )
          }

          const inputType =
            field.blockType === 'email' ? 'email' : field.blockType === 'number' ? 'number' : 'text'

          return (
            <div key={key} className={s.formBlock__field} style={{ width }}>
              {field.label && <label htmlFor={field.name}>{field.label}</label>}
              <input
                id={field.name}
                type={inputType}
                required={field.required ?? undefined}
                value={(values[field.name] as string) ?? ''}
                onChange={(event) => setValue(field.name, event.target.value)}
              />
            </div>
          )
        })}

        <button type="submit" className={s.formBlock__submit} disabled={status === 'submitting'}>
          {formDoc.submitButtonLabel || 'Submit'}
        </button>

        {status === 'error' && (
          <p className={s.formBlock__error}>Something went wrong — please try again.</p>
        )}
      </form>
    </div>
  )
}

export default FormBlock
