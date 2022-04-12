import React from 'react'

interface IProps {
  icon: React.ReactNode
  label: string
}

function InfocardIcon({ icon, label }: IProps) {
  return (
    <div className="infocard-icon">
      <div className="infocard-icon__icon">{icon}</div>
      <span className="infocard-icon__label">{label}</span>
    </div>
  )
}

export default InfocardIcon
