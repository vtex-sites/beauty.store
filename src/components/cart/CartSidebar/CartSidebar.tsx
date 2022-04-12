import { List } from '@faststore/ui'
import React, { useRef } from 'react'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import IconButton from 'src/components/ui/IconButton'
import SlideOver from 'src/components/ui/SlideOver'
import { useCart } from 'src/sdk/cart/useCart'
import { useCheckoutButton } from 'src/sdk/cart/useCheckoutButton'
import { useUI } from 'src/sdk/ui'

import CartItem from '../CartItem'
import EmptyCart from '../EmptyCart'
import OrderSummary from '../OrderSummary'

type Callback = () => unknown

function CartSidebar() {
  const btnProps = useCheckoutButton()
  const cart = useCart()
  const { displayMinicart, closeMinicart } = useUI()
  const dismissTransition = useRef<Callback | undefined>()

  const { items, totalItems, isValidating, subTotal, total } = cart

  const isEmpty = items.length === 0

  return (
    <SlideOver
      isOpen={displayMinicart}
      onDismiss={closeMinicart}
      onDismissTransition={(callback) => (dismissTransition.current = callback)}
      size="partial"
      direction="rightSide"
      className="cart-sidebar"
    >
      <header data-testid="cart-sidebar">
        <div className="cart-sidebar__title">
          <p className="cart-sidebar__title__text">Minha Sacola</p>
        </div>
        <IconButton
          data-testid="cart-sidebar-button-close"
          aria-label="Close Cart"
          icon={<Icon name="X" width={22} height={22} />}
          onClick={() => dismissTransition.current?.()}
        />
      </header>

      {isEmpty ? (
        <EmptyCart onDismiss={() => dismissTransition.current?.()} />
      ) : (
        <>
          <List>
            {items.map((item) => (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            ))}
          </List>

          <footer>
            <OrderSummary
              subTotal={subTotal}
              total={total}
              numberOfItems={totalItems}
              checkoutButton={
                <Button
                  variant="primary"
                  icon={
                    !isValidating && (
                      <Icon name="ArrowRight" width={18} height={18} />
                    )
                  }
                  iconPosition="right"
                  {...btnProps}
                >
                  {isValidating ? 'Loading...' : 'Checkout'}
                </Button>
              }
            />
          </footer>
        </>
      )}
    </SlideOver>
  )
}

export default CartSidebar
