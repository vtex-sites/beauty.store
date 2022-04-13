import type { ReactNode } from 'react'
import React, { useCallback, createContext, useState, useContext } from 'react'

interface ScannerContextValue {
  selectedOptions: SelectedOption[]
  addSelectedOption: (selectedOption: SelectedOption) => void
  selectedProductsIds: string[]
  toggleSelectedProductId: (selectedProductId: string) => void
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
  const [selectedProductsIds, setSelectedProductsIds] = useState<string[]>([])

  const addSelectedOption = useCallback(
    (selectedOption: SelectedOption) =>
      setSelectedOptions((oldSelectedOptions) => [
        ...oldSelectedOptions,
        selectedOption,
      ]),
    []
  )

  const toggleSelectedProductId = useCallback(
    (selectedProductId: string) =>
      setSelectedProductsIds((oldSelectedProductsIds) => {
        const existentProductId =
          oldSelectedProductsIds.includes(selectedProductId)

        if (existentProductId) {
          return oldSelectedProductsIds.filter(
            (oldSelectedProductId) => oldSelectedProductId !== selectedProductId
          )
        }

        return [...oldSelectedProductsIds, selectedProductId]
      }),
    []
  )

  return (
    <ScannerContext.Provider
      value={{
        selectedOptions,
        addSelectedOption,
        selectedProductsIds,
        toggleSelectedProductId,
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
