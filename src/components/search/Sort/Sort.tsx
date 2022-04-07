import { useSearch } from '@faststore/sdk'
import React from 'react'
import Select from 'src/components/ui/Select'
import Icon from 'src/components/ui/Icon'

const OptionsMap = {
  price_desc: 'Price, descending',
  price_asc: 'Price, ascending',
  orders_desc: 'Top sales',
  name_asc: 'Name, A-Z',
  name_desc: 'Name, Z-A',
  release_desc: 'Release date',
  discount_desc: 'Discount',
  score_desc: 'Relevance',
}

const keys = Object.keys(OptionsMap) as Array<keyof typeof OptionsMap>

function Sort() {
  const {
    setSort,
    state: { sort },
  } = useSearch()

  return (
    <Select
      id="sort-select"
      className="sort"
      options={OptionsMap}
      onChange={(e) => setSort(keys[e.target.selectedIndex])}
      value={sort}
      testId="search-sort"
      icon={<Icon name="OrderBy" width={16} height={16} />}
      Arrowicon={<Icon name="ArrowDown" width={12} height={12} />}
    />
  )
}

export default Sort
