import React from 'react'
import CtaButton from 'src/components/ui/CtaButton'
// import { Image } from 'src/components/ui/Image'

interface Props {
  title: string
  message: string
  img: string
}

function ScannerPresenter({ title, message, img }: Props) {
  return (
    <section className="scanner">
      <div className="scanner__img-wrapper">
        <img
          className="scanner__img"
          width={1440}
          height={1228}
          src={img}
          alt="Scanner"
        />
      </div>
      <div className="scanner-cta">
        <h1 className="scanner-cta__title">{title}</h1>
        <p className="scanner-cta__msg">{message}</p>
        <CtaButton content="Começar" />
      </div>
    </section>
  )
}

export default ScannerPresenter
