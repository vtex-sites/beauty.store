import type { ComponentPropsWithRef, FormEvent, ReactNode } from 'react'
import React, { forwardRef, useRef } from 'react'
import { Form, Input, Button, Icon as UIIcon } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'

export interface NewsletterProps
  extends Omit<ComponentPropsWithRef<'form'>, 'title' | 'onSubmit'> {
  /**
   * Title for the section.
   */
  title: ReactNode
  /**
   * A subtitle for the section.
   */
  subtitle?: ReactNode
  /**
   * Callback function when submitted.
   */
  onSubmit?: (value: string) => void
}

const Newsletter = forwardRef<HTMLFormElement, NewsletterProps>(
  function Newsletter({ title, subtitle, onSubmit, ...otherProps }, ref) {
    const emailInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault()

      if (emailInputRef.current?.value !== '') {
        // onSubmit(emailInputRef.current!.value
      }
    }

    return (
      <section data-store-newsletter>
        <Form
          data-newsletter-form
          ref={ref}
          onSubmit={handleSubmit}
          {...otherProps}
        >
          <div data-newsletter-header>
            {title}
            {Boolean(subtitle) && subtitle}
          </div>

          <div data-newsletter-controls>
            <Input
              id="newsletter-email"
              type="email"
              name="newsletter-email"
              placeholder="Digite seu e-mail"
              ref={emailInputRef}
            />
            <Button type="submit" aria-label="newsletter-submit-button">
              <UIIcon
                component={
                  <Icon width={12} height={12} name="NewsletterArrow" />
                }
              />
            </Button>
          </div>
        </Form>
      </section>
    )
  }
)

export default Newsletter
