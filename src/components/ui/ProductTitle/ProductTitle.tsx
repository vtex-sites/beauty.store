import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface ProductTitleProp {
  /**
   * A react component to be used as the product title, e.g. an <h1>
   */
  title: ReactNode
  /**
   * A react component to be used as the product label, e.g. a <DiscountBadge>
   */
  label?: ReactNode
  /**
   * A text to be used below the title and the label, such as the product's reference number.
   */
  complementName: string | null
}

function ProductTitle({ title, label, complementName }: ProductTitleProp) {
  return (
    <div className="product-title">
      <div className="product-title__header">
        {title}
        {!!label && label}
      </div>

      {complementName && (
        <div className="product-title__complement / text-body-small">
          {complementName}
        </div>
      )}
    </div>
  )
}

export default memo(ProductTitle)
