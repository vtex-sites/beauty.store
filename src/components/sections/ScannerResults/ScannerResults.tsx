import React from 'react'
import Container from 'src/components/common/Container'
import NavbarSpacer from 'src/components/common/NavbarSpacer'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import { useScanner } from 'src/contexts/ScannerContext'

import ScannerProduct from './ScannerProduct'

const ScannerResults = () => {
  const { isWidescreen } = useWidescreen()
  const { selectedOptions } = useScanner()

  const products = useProductsQuery({
    first: 4,

    selectedFacets: [
      ...selectedOptions,

      {
        key: 'categoria',
        value: 'pele',
      },
    ],
  })

  return (
    <>
      <NavbarSpacer />

      <div className="scanner-results">
        <Container>
          <div className="scanner-results__wrapper">
            {isWidescreen && <img src="/scanner-results-image.jpg" alt="" />}

            <div className="scanner-results__content">
              <h2 className="scanner-results__title">Seus produtos</h2>

              <div className="scanner-results__grid">
                {products ? (
                  products.edges.length > 0 &&
                  products.edges.map(({ node }, index) => {
                    const {
                      isVariantOf: { name, complementName },
                      sku,
                      image,
                    } = node

                    return (
                      <ScannerProduct
                        key={index}
                        product={{ name, complementName, sku, image: image[0] }}
                      />
                    )
                  })
                ) : (
                  <p className="scanner-results__error">
                    Nenhum produto foi encontrado
                  </p>
                )}
              </div>

              <button className="scanner-results__button" type="button">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ScannerResults
