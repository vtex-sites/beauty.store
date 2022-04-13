import React from 'react'
import { Button } from '@faststore/ui'

interface Props {
  title: string
  description?: string
  imageSrc: string
  value: string
  isSelected: boolean
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>
}

function ScannerStepOption({
  imageSrc,
  title,
  description,
  value,
  isSelected,
  setSelectedOption,
}: Props) {
  return (
    <>
      <div className="ScannerStepOption">
        <Button
          onClick={() => {
            setSelectedOption(value)
          }}
          className="ScannerStepOptionRadio"
        >
          {isSelected && <span className="ScannerStepOptionRadioSelected" />}
        </Button>
        <img
          className="ScannerStepOptionImage"
          width={74}
          height={74}
          src={imageSrc}
          alt="Scanner"
        />

        <div className="ScannerStepOptionTitle">{title}</div>
        {description && (
          <p className="ScannerStepOptionDescription">{description}</p>
        )}
      </div>
    </>
  )
}

export default ScannerStepOption
