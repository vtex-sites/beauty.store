import { useSearch } from '@faststore/sdk'
import { useEffect } from 'react'
import {
  useProductsQueryPrefetch,
  useProductsQuery,
} from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQuery } from '@generated/graphql'

export const useProductsPrefetch = (page: number | null) => {
  const {
    itemsPerPage,
    state: { sort, term, selectedFacets },
  } = useSearch()

  const prefetch = useProductsQueryPrefetch({
    first: itemsPerPage,
    after: (itemsPerPage * (page ?? 0)).toString(),
    sort,
    term: term ?? '',
    selectedFacets,
  })

  useEffect(() => {
    if (page !== null) {
      prefetch()
    }
  }, [page, prefetch])
}

export const useProducts = (
  page: number,
  fallbackData?: ProductsQueryQuery
) => {
  const {
    itemsPerPage,
    state: { sort, term, selectedFacets },
  } = useSearch()

  const { data } = useProductsQuery(
    {
      first: itemsPerPage,
      after: (itemsPerPage * page).toString(),
      sort,
      term: term ?? '',
      selectedFacets,
    },
    {
      fallbackData,
      revalidateOnMount: false,
    }
  )

  return data?.edges
}
