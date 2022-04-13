import React from 'react'

interface Props {
  text: string
  handleClick: () => void
}

function CtaButton({ text, handleClick }: Props) {
  return (
    <button className="cta-button" onClick={handleClick}>
      <span className="cta-button__content">{text}</span>
    </button>
  )
}

export default CtaButton
