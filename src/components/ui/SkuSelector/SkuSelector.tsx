/* eslint-disable @typescript-eslint/no-explicit-any */
import { RadioGroup, RadioOption } from '@faststore/ui'
import React, { useState } from 'react'
import type { ChangeEventHandler } from 'react'
import Text from 'src/components/common/Text'

interface DefaultSkuProps {
  /**
   * Label to describe the SKU when selected.
   */
  label: string
  /**
   * Current value for this SKU.
   */
  value: string
  /**
   * Specifies that this option should be disabled.
   */
  disabled?: boolean
}

type ImageSkuProps = {
  /**
   * Alternative text description of the image.
   */
  alt: string
  /**
   * Image URL.
   */
  src: string
  /**
   * Label to describe the image when selected.
   */
  label: string
  /**
   * Specifies that this option should be disabled.
   */
  disabled?: boolean
  link?: string
} | null

type ImageVariant = 'image'

type Sku<V> = V extends ImageVariant ? ImageSkuProps : DefaultSkuProps

type Variant = 'color' | 'label' | 'image'

export interface SkuSelectorProps {
  /**
   * ID to find this component in testing tools (e.g.: cypress,
   * testing-library, and jest).
   */
  testId?: string
  /**
   * Specify which variant the component should handle.
   */
  variant: Variant
  /**
   * SKU options that should be rendered.
   */
  options?: Array<Sku<Variant>>
  /**
   * Default SKU option.
   */
  defaultSku?: string
  /**
   * Section label for the SKU selector.
   */
  label?: string
  /**
   * Function to be triggered when SKU option change.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

function SkuSelector({
  variant,
  options = [],
  onChange,
  defaultSku,
  testId = 'store-sku-selector',
}: SkuSelectorProps) {
  const [selectedSku, setSelectedSku] = useState<string>(defaultSku ?? '')

  return (
    <div data-store-sku-selector data-testid={testId} data-variant={variant}>
      <Text tag="p" className="sku__name">
        Selecione o tamanho
      </Text>

      <div className="sku__options">
        <RadioGroup
          selectedValue={selectedSku}
          name={`sku-selector-${variant}`}
          onChange={(e) => {
            onChange?.(e)
            setSelectedSku(e.currentTarget.value)
          }}
        >
          {options.map((option: any, index) => {
            return (
              <div
                key={String(index)}
                className={`${
                  option.label === selectedSku ? 'sku__selected' : ''
                }`}
                data-store-radio-option
              >
                <RadioOption
                  label={option.label}
                  value={option.label}
                  disabled={option.disabled}
                  checked={option.label === selectedSku}
                >
                  {variant === 'label' && <span>{option.label}</span>}
                  {variant === 'color' && 'value' in option && (
                    <span>
                      <div
                        data-sku-selector-color
                        style={{
                          backgroundColor: option.value,
                        }}
                      />
                    </span>
                  )}
                  {variant === 'image' && 'src' in option && (
                    <img
                      src={option.src.replace('http:', 'https:')}
                      alt={option.alt}
                      width={49}
                      height={49}
                      loading="lazy"
                    />
                  )}
                </RadioOption>
                <span className="sku__label">{option.label}</span>
              </div>
            )
          })}
        </RadioGroup>
      </div>
    </div>
  )
}

export default SkuSelector
