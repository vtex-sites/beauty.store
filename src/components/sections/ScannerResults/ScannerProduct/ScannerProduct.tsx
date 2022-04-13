import React, { useMemo, useCallback } from 'react'
import { useScanner } from 'src/contexts/ScannerContext'

interface ScannerProductProps {
  id: number
}

const ScannerProduct = (props: ScannerProductProps) => {
  const { id } = props

  const { toggleSelectedProductId, selectedProductsIds } = useScanner()

  const position = useMemo(
    () =>
      selectedProductsIds.findIndex(
        (selectedProductId) => selectedProductId === id
      ),
    [selectedProductsIds, id]
  )

  const handleCheckButtonClick = useCallback(
    () => toggleSelectedProductId(id),
    [toggleSelectedProductId, id]
  )

  return (
    <div className="scanner-product">
      <div className="scanner-product__image-wrapper">
        <img src="/produto-teste.jpg" alt="" />
        <button
          className={`scanner-product__check ${
            position !== -1 ? 'scanner-product__check--checked' : ''
          }`}
          onClick={handleCheckButtonClick}
        >
          {position !== -1 ? position + 1 : ''}
        </button>
      </div>

      <h3 className="scanner-product__title">Gel de Limpeza Facial</h3>

      <p className="scanner-product__complement">
        Vitamina C, Ácido Salicílico
      </p>
    </div>
  )
}

export default ScannerProduct
