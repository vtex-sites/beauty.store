import React from 'react'
import EmptyState from 'src/components/ui/EmptyState'
import Icon from 'src/components/ui/Icon'

function EmptyGallery() {
  return (
    <EmptyState>
      <div>
        <Icon name="CircleWavyWarning" width={56} height={56} weight="thin" />
        <p>Sua busca não encontrou nenhum resultado</p>
      </div>
    </EmptyState>
  )
}

export default EmptyGallery
