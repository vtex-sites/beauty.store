import { useMemo } from 'react'

export const useFormattedPrice = (price: number) => {
  return useMemo(
    () =>
      Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price),
    [price]
  )
}
