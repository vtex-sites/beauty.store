import React from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import ProductCard from 'src/components/product/ProductCard'

function ProductShelf({ ...variables }: Partial<ProductsQueryQueryVariables>) {
  const products = useProductsQuery(variables)

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <section className="page__section-shelf">
      <div className="product-shelf__wrapper">
        <ProductShelfSkeleton loading={products === undefined}>
          <Swiper
            loop
            navigation
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {products?.edges.map((product, idx) => (
              <SwiperSlide key={`${product.node.id}`}>
                <ProductCard product={product.node} index={idx + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ProductShelfSkeleton>
      </div>
    </section>
  )
}

export default ProductShelf
