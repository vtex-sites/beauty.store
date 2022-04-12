import { Label as UILabel } from '@faststore/ui'
import React from 'react'
import Checkbox from 'src/components/ui/Checkbox'
import Container from 'src/components/common/Container'
import type {
  IStoreSelectedFacet,
  Filter_FacetsFragment,
} from '@generated/graphql'

interface FacetsProps {
  testId: string
  facets: Filter_FacetsFragment[]
  onFacetChange: (item: IStoreSelectedFacet) => void
  setOpenFilter?: (state: boolean) => void
}

function Facets({ testId, facets, onFacetChange, setOpenFilter }: FacetsProps) {
  return (
    <div className="filter" data-store-filter data-testid={testId}>
      <Container>
        <div className="filter-grid">
          {facets.map(({ label, values, key }, index) => (
            <div className="filter-item" key={index}>
              <h4 className="filter-item__title">{label}</h4>
              <div className="filter-item__values">
                {values.map((item) => {
                  const id = `${testId}-${label}-${item.label}`

                  return (
                    <div
                      key={id}
                      className={`filter-item__value
                        ${item.selected && 'filter-item__value--selected'}`}
                    >
                      <Checkbox
                        id={id}
                        className="filter-item__checkbox"
                        checked={item.selected}
                        onChange={() => {
                          onFacetChange({ key, value: item.value })
                          if (setOpenFilter) setOpenFilter(false)
                        }}
                        data-testid={`${testId}-accordion-panel-checkbox`}
                        data-value={item.value}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        data-quantity={(item as any).quantity}
                      />
                      <UILabel htmlFor={id} className="value__text">
                        {item.label.replace('&apos;', "'")}
                      </UILabel>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Facets
