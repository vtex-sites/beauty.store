import React from 'react'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import ProductItems from 'src/components/product/ProductItems'
import Section from 'src/components/common/Section'

interface ProductShelfProps extends Partial<ProductsQueryQueryVariables> {
  title: string | JSX.Element
  withDivisor?: boolean
}

function ProductShelf({
  title,
  withDivisor = false,
  ...variables
}: ProductShelfProps) {
  const products = useProductsQuery(variables)

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <Section
      className={`page__section-shelf / grid-section ${
        withDivisor ? 'page__section-divisor' : ''
      }`}
    >
      <h2 className="title-section / grid-content">{title}</h2>
      <div className="page__section-content">
        <ProductShelfSkeleton loading={products === undefined}>
          <ul data-product-shelf className="grid-content">
            <ProductItems {...variables} />
          </ul>
        </ProductShelfSkeleton>
      </div>
    </Section>
  )
}

export default ProductShelf
