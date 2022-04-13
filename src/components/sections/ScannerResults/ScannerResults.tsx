import React from 'react'
import Container from 'src/components/common/Container'
import NavbarSpacer from 'src/components/common/NavbarSpacer'

import ScannerProduct from './ScannerProduct'

const ScannerResults = () => {
  return (
    <>
      <NavbarSpacer />

      <div className="scanner-results">
        <Container>
          <div className="scanner-results__wrapper">
            <img src="/scanner-results-image.jpg" alt="" />

            <div className="scanner-results__content">
              <h2 className="scanner-results__title">Seus produtos</h2>

              <div className="scanner-results__grid">
                <ScannerProduct id={0} />
                <ScannerProduct id={1} />
                <ScannerProduct id={2} />
                <ScannerProduct id={3} />
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
