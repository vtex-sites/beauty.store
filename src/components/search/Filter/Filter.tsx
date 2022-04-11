import { useSearch } from '@faststore/sdk'
import { graphql } from 'gatsby'
import React, { useRef, useState } from 'react'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import IconButton from 'src/components/ui/IconButton'
import SlideOver from 'src/components/ui/SlideOver'
import Sort from 'src/components/search/Sort'
import type { Filter_FacetsFragment } from '@generated/graphql'

import Facets from './Facets'
import { useFilter } from './useFilter'
import FilterButton from './FilterButton'

interface Props {
  facets: Filter_FacetsFragment[]
  /**
   * ID to find this component in testing tools (e.g.: cypress,
   * testing-library, and jest).
   */
  testId?: string
}

type Callback = () => unknown

function Filter({ facets: allFacets, testId = 'store-filter' }: Props) {
  const dismissTransition = useRef<Callback | undefined>()
  const {
    setFacets,
    toggleFacet,
    state: { selectedFacets },
  } = useSearch()

  const { facets, selected, dispatch } = useFilter(allFacets)
  const [openFilter, setOpenFilter] = useState(false)
  const { isWidescreen: isMobile } = useWidescreen('(max-width: 768px)')

  return (
    <>
      <div className="filter-button-container">
        <FilterButton
          text="filtros"
          onClick={() => setOpenFilter(!openFilter)}
          icon={<Icon name="Filter" width={18} height={18} />}
        />
        <Sort />
      </div>

      {!isMobile ? (
        <div className={`${!openFilter && 'hidden-filter'} hidden-mobile`}>
          <Facets
            facets={facets}
            testId={`desktop-${testId}`}
            onFacetChange={toggleFacet}
          />
        </div>
      ) : (
        <SlideOver
          isOpen={openFilter}
          onDismiss={() => setOpenFilter(false)}
          onDismissTransition={(callback) =>
            (dismissTransition.current = callback)
          }
          size="partial"
          direction="leftSide"
          className="filter-modal__content"
        >
          <div className="filter-modal__body">
            <header className="filter-modal__header">
              <h2 className="title-display">Filtros</h2>
              <IconButton
                data-testid="filter-modal-button-close"
                classes="filter-modal__button"
                aria-label="Close Filters"
                icon={<Icon name="X" width={32} height={32} />}
                onClick={() => {
                  dispatch({
                    type: 'selectFacets',
                    payload: selectedFacets,
                  })

                  dismissTransition.current?.()
                }}
              />
            </header>
            <Facets
              facets={facets}
              testId={`mobile-${testId}`}
              onFacetChange={(facet) =>
                dispatch({ type: 'toggleFacet', payload: facet })
              }
            />
          </div>
          <footer className="filter-modal__footer">
            <Button
              variant="secondary"
              onClick={() => dispatch({ type: 'selectFacets', payload: [] })}
            >
              Limpar
            </Button>
            <Button
              variant="primary"
              data-testid="filter-modal-button-apply"
              onClick={() => {
                setFacets(selected)
                setOpenFilter?.(false)
              }}
            >
              Aplicar filtro
            </Button>
          </footer>
        </SlideOver>
      )}
    </>
  )
}

export const fragment = graphql`
  fragment Filter_facets on StoreFacet {
    key
    label
    type
    values {
      label
      value
      selected
    }
  }
`

export default Filter
