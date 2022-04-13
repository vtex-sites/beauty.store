import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import type { PropsWithChildren } from 'react'

interface TextProps {
  tag: 'h1' | 'p' | 'span'
  className?: string
}

function Text({ tag, className, children }: PropsWithChildren<TextProps>) {
  return (
    <>
      {tag === 'h1' && <h1 className={className}>{children}</h1>}
      {tag === 'p' && <p className={className}>{children}</p>}
      {tag === 'span' && <span className={className}>{children}</span>}
    </>
  )
}

export default mark(Text)
