import React from 'react'
import ProductItems from 'src/components/product/ProductItems'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'
import { Image } from 'src/components/ui/Image'

function BannerAndShelf() {
  return (
    <Section>
      <Container>
        <div className="banner-and-shelf">
          <div className="banner-and-shelf__banner-wrapper">
            <Image
              data={false}
              width={571}
              height={771}
              className="banner-and-shelf__banner"
              src="https://beauty.vtexassets.com/arquivos/banner-and-shelf.jpg"
              alt="Banner ao lado da Prateleira"
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
