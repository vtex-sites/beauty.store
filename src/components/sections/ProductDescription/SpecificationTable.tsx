import React from 'react'

interface SpecsProps {
  specs: Array<{ key: string | null; value: string | null } | null> | null
}

function SpecificationTable({ specs }: SpecsProps) {
  return (
    <div className="spec-table">
      <div className="spec-key">
        {specs?.map((spec) => (
          <div className="spec-key__value" key={spec?.key}>
            {spec?.key}
          </div>
        ))}
      </div>

      <div className="spec-value">
        {specs?.map((spec) => (
          <div className="spec-value__value" key={spec?.value}>
            {spec?.value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecificationTable
