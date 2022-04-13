import React, { useCallback } from 'react'
import { useCart as useSDKCart } from '@faststore/sdk'
import Container from 'src/components/common/Container'
import NavbarSpacer from 'src/components/common/NavbarSpacer'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import { useCart } from 'src/sdk/cart/useCart'
import { useScanner } from 'src/contexts/ScannerContext'

import ScannerProduct from './ScannerProduct'

const ScannerResults = () => {
  const { isWidescreen } = useWidescreen()
  const { selectedOptions } = useScanner()
  const { ...cart } = useSDKCart()
  const { setCart } = useCart()

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

  const handleAddToCartButtonClick = useCallback(() => {
    if (data) {
      const products = data.edges.map(({ node }) => {
        return {
          id: node.id,

          itemOffered: {
            brand: node.brand,
            gtin: node.gtin,
            image: node.image,
            isVariantOf: node.isVariantOf,
            name: node.name,
            sku: node.sku,
          },

          quantity: 1,
          seller: { identifier: '1' },
          listPrice: node.offers.offers[0].listPrice,
          price: node.offers.offers[0].price,
        }
      }, {})

      setCart({
        ...cart,
        items: products,
      })
    }
  }, [data, setCart, cart])

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

              <button
                className="scanner-results__button"
                type="button"
                onClick={handleAddToCartButtonClick}
              >
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
