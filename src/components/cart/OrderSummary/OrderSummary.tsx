import { List } from '@faststore/ui'
import React from 'react'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import type { ReactNode } from 'react'

interface OrderSummaryProps {
  subTotal: number
  total: number
  numberOfItems: number
  checkoutButton?: ReactNode
}

function OrderSummary({
  subTotal,
  total,
  numberOfItems,
  checkoutButton,
}: OrderSummaryProps) {
  const discount = subTotal - total
  const formattedDiscount = useFormattedPrice(discount)

  return (
    <List className="order-summary" data-order-summary>
      <li>
        <span>
          Subtotal ({numberOfItems} {numberOfItems > 1 ? 'produtos' : 'produto'}
          )
        </span>
        <span data-order-summary-price>{useFormattedPrice(subTotal)}</span>
      </li>
      {discount > 0 && (
        <li data-order-summary-discount>
          <span>Desconto</span>
          <span data-order-summary-price>-{formattedDiscount}</span>
        </li>
      )}
      <li className="title-subsection" data-order-summary-total>
        <span>Total</span>
        <span data-order-summary-price>{useFormattedPrice(total)}</span>
      </li>
      {checkoutButton}
    </List>
  )
}

export default OrderSummary
