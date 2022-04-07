import { Select as UISelect } from '@faststore/ui'
import React from 'react'
import Icon from 'src/components/ui/Icon'
import type { SelectProps } from '@faststore/ui'

interface UISelectProps extends SelectProps {
  /*
   * Redefines the id property to be required when using the Select component. The
   * id will be used to link the UISelect component and its label.
   */
  id: string
  /*
   * Defines the options available in the select. The SelectOptions object
   * keys are the property names, while the values correspond to the text that
   * will be displayed in the UI
   */
  options: Record<string, string>
  /*
   * Specifies the text that will be displayed in the label right next to the Select.
   * If omitted, the label will not be rendered.
   */
  labelText?: string

  defaultValue?: string

  Arrowicon?: React.ReactNode
  icon?: React.ReactNode
}

export default function Select({
  id,
  className,
  options,
  onChange,
  labelText,
  value,
  'aria-label': ariaLabel,
  testId,
  defaultValue,
  Arrowicon = null,
  icon = null,
}: UISelectProps) {
  return (
    <div data-select className={className}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {icon}
      <UISelect
        data-testid={testId}
        onChange={onChange}
        value={value}
        aria-label={ariaLabel}
        id={id}
      >
        {defaultValue && <option value="">{defaultValue}</option>}

        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key]}
          </option>
        ))}
      </UISelect>
      {Arrowicon ?? (
        <Icon name="CaretDown" width={18} height={18} weight="bold" />
      )}
    </div>
  )
}
