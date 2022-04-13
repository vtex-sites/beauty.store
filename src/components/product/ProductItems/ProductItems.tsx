import React from 'react'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'

import ProductCard from '../ProductCard'

function ProductItems({ ...variables }: Partial<ProductsQueryQueryVariables>) {
  const products = useProductsQuery(variables)

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <>
      {products?.edges.map((product, idx) => (
        <li key={`${product.node.id}`}>
          <ProductCard product={product.node} index={idx + 1} />
        </li>
      ))}
    </>
  )
}

export default ProductItems
