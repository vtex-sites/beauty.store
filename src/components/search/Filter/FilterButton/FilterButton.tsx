import React from 'react'
import type { ButtonProps } from '@faststore/ui'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'

interface IButtonProps {
  testId?: string
  text: string
  icon: React.ReactNode
}

type IProps = IButtonProps & ButtonProps

function FilterButton({ testId = '', text, icon, ...otherProps }: IProps) {
  return (
    <Button className="filter-button" testId={testId} {...otherProps}>
      <div className="filter-button__main">
        <div>{icon}</div>
        <span className="filter-button__text">{text}</span>
      </div>
      <div>
        <Icon name="ArrowDown" width={12} height={12} />
      </div>
    </Button>
  )
}

export default FilterButton
