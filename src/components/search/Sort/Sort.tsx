import { useSearch } from '@faststore/sdk'
import React from 'react'
import Select from 'src/components/ui/Select'
import Icon from 'src/components/ui/Icon'

const OptionsMap = {
  price_desc: 'Maior preço',
  price_asc: 'Menor preço',
  orders_desc: 'Mais vendidos',
  name_asc: 'De A a Z',
  name_desc: 'De Z a A',
  release_desc: 'Data de lançamento',
  discount_desc: 'Maior desconto',
  score_desc: 'Relevância',
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
      icon={
        <Icon className="orderby-icon" name="OrderBy" width={16} height={16} />
      }
      Arrowicon={<Icon name="ArrowDown" width={12} height={12} />}
    />
  )
}

export default Sort
