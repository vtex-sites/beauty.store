import React from 'react'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import ProductCard from 'src/components/product/ProductCard'
import Container from 'src/components/common/Container'

interface ProductShelfProps extends Partial<ProductsQueryQueryVariables> {
  title?: string
}

function ProductShelf({ title, ...variables }: ProductShelfProps) {
  const products = useProductsQuery(variables)

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <section className="page__section-shelf">
      {title && <h4 className="product-shelf__title">{title}</h4>}

      <Container>
        <ProductShelfSkeleton loading={products === undefined}>
          <ul className="product-shelf__wrapper">
            {products?.edges.map((product, idx) => (
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
