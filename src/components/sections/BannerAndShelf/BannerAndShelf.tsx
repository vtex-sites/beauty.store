import React from 'react'
import ProductItems from 'src/components/product/ProductItems'
import Section from 'src/components/common/Section'

interface BannerAndShelfProps {
  imageSrc: string
}

function BannerAndShelf({ imageSrc }: BannerAndShelfProps) {
  return (
    <Section>
      <div className="banner-and-shelf">
        <div className="banner-and-shelf__banner-wrapper">
          <img
            className="banner-and-shelf__banner"
            src={imageSrc}
            alt="Banner ao lado da prateleira"
          />
        </div>
        <ul className="banner-and-shelf__items">
          <ProductItems first={4} />
        </ul>
      </div>
    </Section>
  )
}

export default BannerAndShelf
