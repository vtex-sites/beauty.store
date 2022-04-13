import React from 'react'
import Button from 'src/components/ui/Button'
import EmptyState from 'src/components/ui/EmptyState'
import Icon from 'src/components/ui/Icon'

interface Props {
  /**
   * This function is called when `Start Shopping` button is clicked
   */
  onDismiss: () => void
}

function EmptyCart({ onDismiss }: Props) {
  return (
    <EmptyState>
      <header data-empty-cart-title>
        <Icon name="ShoppingCart" width={56} height={56} weight="thin" />
        <p>Seu carriho está vazio</p>
      </header>
      <Button onClick={onDismiss} variant="secondary">
        Continuar comprando
      </Button>
    </EmptyState>
  )
}

export default EmptyCart
