import React from 'react'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'

interface IProps {
  testId?: string
  text: string
  icon: React.ReactNode
}

function FilterButton({ testId = '', text, icon }: IProps) {
  return (
    <Button className="filter-button" testId={testId}>
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
