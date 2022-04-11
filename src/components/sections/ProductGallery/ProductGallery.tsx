import { usePagination, useSearch } from '@faststore/sdk'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React, { lazy, Suspense } from 'react'
import Filter from 'src/components/search/Filter'
import Container from 'src/components/common/Container'
import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton'
import { LinkButton } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/common/Section'

import EmptyGallery from './EmptyGallery'
import { useDelayedFacets } from './useDelayedFacets'
import { useGalleryQuery } from './useGalleryQuery'
import { useProductsPrefetch } from './usePageProducts'

const GalleryPage = lazy(() => import('./ProductGalleryPage'))
const GalleryPageSkeleton = <ProductGridSkeleton loading />

interface Props {
  title: string
  searchTerm?: string
}

function ProductGallery({ title, searchTerm }: Props) {
  const { pages, addNextPage, addPrevPage, state: searchState } = useSearch()

  const { data } = useGalleryQuery()
  const facets = useDelayedFacets(data)
  const totalCount = data?.search.products.pageInfo.totalCount ?? 0
  const { next, prev } = usePagination(totalCount)

  useProductsPrefetch(prev ? prev.cursor : null)
  useProductsPrefetch(next ? next.cursor : null)

  if (data && totalCount === 0) {
    return (
      <Section className="product-listing / grid-content">
        <EmptyGallery />
      </Section>
    )
  }

  return (
    <Section className="product-listing / grid-content-full">
      <div className="product-listing__filters">
        <Filter facets={facets} />
      </div>
      {searchTerm && (
        <header className="product-listing__search-term / grid-content">
          <h1>
            Exibindo resultados de: <span>{searchTerm}</span>
          </h1>
        </header>
      )}
      <Container>
        <div className="product-listing__content-grid">
          <div className="product-listing__results">
            {/* Add link to previous page. This helps on SEO */}
            {prev !== false && (
              <div className="product-listing__pagination product-listing__pagination--top">
                <GatsbySeo
                  defer
                  linkTags={[{ rel: 'prev', href: prev.link }]}
                />
                <LinkButton
                  onClick={(e) => {
                    e.currentTarget.blur()
                    e.preventDefault()
                    addPrevPage()
                  }}
                  to={prev.link}
                  rel="prev"
                  variant="secondary"
                  iconPosition="left"
                  icon={
                    <Icon
                      name="ArrowLeft"
                      width={16}
                      height={16}
                      weight="bold"
                    />
                  }
                >
                  Previous Page
                </LinkButton>
              </div>
            )}

            {/* Render ALL products */}
            {data ? (
              <Suspense fallback={GalleryPageSkeleton}>
                {pages.map((page) => (
                  <GalleryPage
                    key={`gallery-page-${page}`}
                    showSponsoredProducts={false}
                    fallbackData={page === searchState.page ? data : undefined}
                    page={page}
                    title={title}
                  />
                ))}
              </Suspense>
            ) : (
              GalleryPageSkeleton
            )}

            {/* Add link to next page. This helps on SEO */}
            {next !== false && (
              <div className="product-listing__pagination product-listing__pagination--bottom">
                <GatsbySeo
                  defer
                  linkTags={[{ rel: 'next', href: next.link }]}
                />
                <LinkButton
                  data-testid="show-more"
                  onClick={(e) => {
                    e.currentTarget.blur()
                    e.preventDefault()
                    addNextPage()
                  }}
                  to={next.link}
                  rel="next"
                  variant="secondary"
                >
                  Load more products
                </LinkButton>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}

ProductGallery.displayName = 'ProductGallery'
export default mark(ProductGallery)
