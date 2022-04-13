import React, { useMemo, useCallback } from 'react'
import { useScanner } from 'src/contexts/ScannerContext'
import { Image } from 'src/components/ui/Image'

interface ScannerProductProps {
  product: {
    name: string
    complementName: string | null
    sku: string

    image: {
      url: string
      alternateName: string
    }
  }
}

const ScannerProduct = (props: ScannerProductProps) => {
  const { product } = props
  const { name, complementName, sku, image } = product

  const { toggleSelectedProductId, selectedProductsIds } = useScanner()

  const position = useMemo(
    () =>
      selectedProductsIds.findIndex(
        (selectedProductId) => selectedProductId === sku
      ),
    [selectedProductsIds, sku]
  )

  const handleCheckButtonClick = useCallback(
    () => toggleSelectedProductId(sku),
    [toggleSelectedProductId, sku]
  )

  return (
    <div className="scanner-product">
      <div className="scanner-product__image-wrapper">
        <Image
          className="scanner-product__image"
          src={image.url}
          alt={image.alternateName}
          width={170}
          height={170}
        />

        <button
          className={`scanner-product__check ${
            position !== -1 ? 'scanner-product__check--checked' : ''
          }`}
          onClick={handleCheckButtonClick}
        >
          {position !== -1 ? position + 1 : ''}
        </button>
      </div>

      <h3 className="scanner-product__title">{name}</h3>
      <p className="scanner-product__complement">{complementName}</p>
    </div>
  )
}

export default ScannerProduct
