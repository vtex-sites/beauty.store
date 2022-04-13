import React from 'react'
import Container from 'src/components/common/Container'
import NavbarSpacer from 'src/components/common/NavbarSpacer'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import { useScanner } from 'src/contexts/ScannerContext'

import ScannerProduct from './ScannerProduct'
import ScannerButton from './ScannerButton'

const ScannerResults = () => {
  const { isWidescreen } = useWidescreen()
  const { selectedOptions } = useScanner()

  const { data, loading } = useProductsQuery({
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
                {loading ? (
                  <p>Carregando...</p>
                ) : data ? (
                  data.edges.length > 0 &&
                  data.edges.map(({ node }, index) => {
                    return <ScannerProduct key={index} product={node} />
                  })
                ) : (
                  <p className="scanner-results__error">
                    Nenhum produto foi encontrado
                  </p>
                )}
              </div>

              <ScannerButton />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ScannerResults
