import React from 'react'
import type { HTMLAttributes } from 'react'

export interface UIHeroProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * ID to find this component in testing tools (e.g.: cypress,
   * testing-library, and jest).
   */
  testId?: string
  isInverted: boolean
  children: React.ReactNode
}

const UIHero = ({ testId, isInverted, children }: UIHeroProps) => {
  return (
    <article
      className={
        isInverted ? 'hero-article hero-article-inverted' : 'hero-article'
      }
      data-store-hero
      data-testid={testId}
    >
      {children}
    </article>
  )
}

export default UIHero
