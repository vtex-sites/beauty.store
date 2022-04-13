import type { ReactNode } from 'react'
import React, { useCallback, createContext, useState, useContext } from 'react'

interface ScannerContextValue {
  specifications: Specification[]
  addSpecification: (specification: Specification) => void
}

interface ScannerProviderProps {
  children: ReactNode
}

interface Specification {
  name: string
  value: string
}

const ScannerContext = createContext<ScannerContextValue>(
  {} as ScannerContextValue
)

export const ScannerProvider = (props: ScannerProviderProps) => {
  const { children } = props

  const [specifications, setSpecifications] = useState<Specification[]>([])

  const addSpecification = useCallback(
    (specification: Specification) =>
      setSpecifications((oldSpecifications) => [
        ...oldSpecifications,
        specification,
      ]),
    []
  )

  return (
    <ScannerContext.Provider value={{ specifications, addSpecification }}>
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
