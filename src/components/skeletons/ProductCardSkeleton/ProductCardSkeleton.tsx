import React from 'react'

import Shimmer from '../Shimmer'
import SkeletonElement from '../SkeletonElement'

interface Props {
  bordered?: boolean
  sectioned?: boolean
  showActions?: boolean
  variant?: 'vertical' | 'horizontal'
}

function ProductCardSkeleton({
  bordered,
  sectioned = false,
  showActions = false,
  variant = 'vertical',
}: Props) {
  return (
    <div
      data-store-product-card-skeleton
      data-bordered={bordered}
      data-variant={variant}
    >
      <div data-product-card-skeleton-image data-sectioned={sectioned}>
        <SkeletonElement type="image" />
      </div>
      <div data-product-card-skeleton-content>
        <SkeletonElement type="text" />

        {showActions && <SkeletonElement type="button" />}
      </div>
      <div data-product-card-skeleton-bottom>
        <SkeletonElement type="prices" />
        <SkeletonElement type="badge" />
      </div>
      <Shimmer />
    </div>
  )
}

export default ProductCardSkeleton
