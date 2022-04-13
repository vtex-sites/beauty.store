import React from 'react'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import ProductCard from 'src/components/product/ProductCard'
import Container from 'src/components/common/Container'

function ProductShelf({ ...variables }: Partial<ProductsQueryQueryVariables>) {
  const { data } = useProductsQuery(variables)

  if (data?.edges.length === 0) {
    return null
  }

  return (
    <section className="page__section-shelf">
      <Container>
        <ProductShelfSkeleton loading={data === undefined}>
          <ul className="product-shelf__wrapper">
            {data?.edges.map((product, idx) => (
              <li key={`${product.node.id}`}>
                <ProductCard product={product.node} index={idx + 1} />
              </li>
            ))}
          </ul>
        </ProductShelfSkeleton>
      </Container>
    </section>
  )
}

export default ProductShelf
