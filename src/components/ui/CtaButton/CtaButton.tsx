import React from 'react'

interface Props {
  content: string
}

function CtaButton({ content }: Props) {
  return (
    <button className="cta-button">
      <span className="cta-button__content">{content}</span>
    </button>
  )
}

export default CtaButton
