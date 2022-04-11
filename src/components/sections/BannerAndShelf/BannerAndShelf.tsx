import React from 'react'
import ProductItems from 'src/components/product/ProductItems'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'

interface BannerAndShelfProps {
  bannerSrc: string
  bannerAlt: string
}

function BannerAndShelf({ bannerSrc, bannerAlt }: BannerAndShelfProps) {
  return (
    <Section>
      <Container>
        <div className="banner-and-shelf">
          <div className="banner-and-shelf__banner-wrapper">
            <img
              className="banner-and-shelf__banner"
              src={bannerSrc}
              alt={bannerAlt}
            />
          </div>
          <ul className="banner-and-shelf__items">
            <ProductItems first={4} />
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default BannerAndShelf
