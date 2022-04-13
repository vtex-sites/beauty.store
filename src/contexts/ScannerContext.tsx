import type { ReactNode } from 'react'
import React, { useCallback, createContext, useState, useContext } from 'react'

interface ScannerContextValue {
  selectedOptions: SelectedOption[]
  addSelectedOption: (selectedOption: SelectedOption) => void
  selectedProducts: any[]
  toggleSelectedProduct: (selectedProduct: any) => void
  clearSelectedProducts: () => void
}

interface ScannerProviderProps {
  children: ReactNode
}

interface SelectedOption {
  key: string
  value: string
}

const ScannerContext = createContext<ScannerContextValue>(
  {} as ScannerContextValue
)

export const ScannerProvider = (props: ScannerProviderProps) => {
  const { children } = props

  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([])
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])

  const addSelectedOption = useCallback(
    (selectedOption: SelectedOption) =>
      setSelectedOptions((oldSelectedOptions) => [
        ...oldSelectedOptions,
        selectedOption,
      ]),
    []
  )

  const toggleSelectedProduct = useCallback(
    (selectedProduct: any) =>
      setSelectedProducts((oldSelectedProducts) => {
        const existentProduct = oldSelectedProducts.find(
          (oldSelectedProduct) => oldSelectedProduct.sku === selectedProduct.sku
        )

        if (existentProduct) {
          return oldSelectedProducts.filter(
            (oldSelectedProduct) =>
              oldSelectedProduct.sku !== selectedProduct.sku
          )
        }

        return [...oldSelectedProducts, selectedProduct]
      }),
    []
  )

  const clearSelectedProducts = useCallback(() => setSelectedProducts([]), [])

  return (
    <ScannerContext.Provider
      value={{
        selectedOptions,
        addSelectedOption,
        selectedProducts,
        toggleSelectedProduct,
        clearSelectedProducts,
      }}
    >
      {children}
    </ScannerContext.Provider>
  )
}

export const useScanner = () => {
  const context = useContext(ScannerContext)

  if (!context) {
    throw new Error('useScanner must be used within a ScannerProvider')
  }

  return context
}
