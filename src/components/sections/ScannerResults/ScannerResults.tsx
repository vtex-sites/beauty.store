import React from 'react'
import Container from 'src/components/common/Container'
import NavbarSpacer from 'src/components/common/NavbarSpacer'

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
                <div className="scanner-product">
                  <div className="scanner-product__image-wrapper">
                    <img src="/produto-teste.jpg" alt="" />
                    <button className="scanner-product__check" />
                  </div>

                  <h3 className="scanner-product__title">
                    Gel de Limpeza Facial
                  </h3>

                  <p className="scanner-product__complement">
                    Vitamina C, Ácido Salicílico
                  </p>
                </div>

                <div className="scanner-product">
                  <div className="scanner-product__image-wrapper">
                    <img src="/produto-teste.jpg" alt="" />
                    <button className="scanner-product__check" />
                  </div>

                  <h3 className="scanner-product__title">
                    Gel de Limpeza Facial
                  </h3>

                  <p className="scanner-product__complement">
                    Vitamina C, Ácido Salicílico
                  </p>
                </div>

                <div className="scanner-product">
                  <div className="scanner-product__image-wrapper">
                    <img src="/produto-teste.jpg" alt="" />
                    <button className="scanner-product__check" />
                  </div>

                  <h3 className="scanner-product__title">
                    Gel de Limpeza Facial
                  </h3>

                  <p className="scanner-product__complement">
                    Vitamina C, Ácido Salicílico
                  </p>
                </div>

                <div className="scanner-product">
                  <div className="scanner-product__image-wrapper">
                    <img src="/produto-teste.jpg" alt="" />
                    <button className="scanner-product__check" />
                  </div>

                  <h3 className="scanner-product__title">
                    Gel de Limpeza Facial
                  </h3>

                  <p className="scanner-product__complement">
                    Vitamina C, Ácido Salicílico
                  </p>
                </div>
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
