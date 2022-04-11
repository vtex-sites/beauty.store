import React from 'react'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import ProductItems from 'src/components/product/ProductItems'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'

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
    <Section className="page__section-shelf">
      <Container>
        <ProductShelfSkeleton loading={products === undefined}>
          <ul className="product-shelf">
            <ProductItems {...variables} />
          </ul>
        </ProductShelfSkeleton>
      </Container>
    </Section>
  )
}

export default ProductShelf
