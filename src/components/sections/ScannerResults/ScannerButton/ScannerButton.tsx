import React, { useCallback } from 'react'
import { useCart as useSDKCart } from '@faststore/sdk'
import { useCart } from 'src/sdk/cart/useCart'
import { useScanner } from 'src/contexts/ScannerContext'
import { useUI } from 'src/sdk/ui'

const ScannerButton = () => {
  const { ...cart } = useSDKCart()
  const { setCart } = useCart()
  const { selectedProducts, clearSelectedProducts } = useScanner()
  const { openMinicart } = useUI()

  const handleAddToCartButtonClick = useCallback(() => {
    if (selectedProducts.length > 0) {
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

      openMinicart()
      clearSelectedProducts()
    }
  }, [selectedProducts, cart, setCart, openMinicart, clearSelectedProducts])

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
