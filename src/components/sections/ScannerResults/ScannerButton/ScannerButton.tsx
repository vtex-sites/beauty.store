import React, { useCallback } from 'react'
import { useCart as useSDKCart } from '@faststore/sdk'
import { useCart } from 'src/sdk/cart/useCart'
import { useScanner } from 'src/contexts/ScannerContext'

const ScannerButton = () => {
  const { ...cart } = useSDKCart()
  const { setCart } = useCart()
  const { selectedProducts } = useScanner()

  const handleAddToCartButtonClick = useCallback(() => {
    if (selectedProducts) {
      const products = selectedProducts.map((node) => {
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
  }, [selectedProducts, cart, setCart])

  return (
    <button
      className="scanner-results__button"
      type="button"
      onClick={handleAddToCartButtonClick}
    >
      Adicionar ao carrinho
    </button>
  )
}

export default ScannerButton
