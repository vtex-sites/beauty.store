import type { SearchInputRef } from '@faststore/ui'
import React, { useRef } from 'react'
import SearchInput from 'src/components/common/SearchInput'
import Icon from 'src/components/ui/Icon'
import IconButton from 'src/components/ui/IconButton'

interface Props {
  isExpanded: boolean
  onExpand: (isExpanded: boolean) => void
}

function ExpandingSearchInput({ isExpanded, onExpand }: Props) {
  const searchRef = useRef<SearchInputRef>(null)

  const handleSearchClick = () => {
    onExpand(true)
    searchRef.current?.inputRef?.focus()
  }

  const handleCloseSearch = () => {
    onExpand(false)
  }

  return (
    <div
      className="expanding-search-input"
      data-store-search-expanded={isExpanded}
    >
      <SearchInput
        onSearchClick={handleSearchClick}
        ref={searchRef}
        placeholder=""
      />
      {isExpanded && (
        <IconButton
          classes="expanding-search-input-close"
          aria-label="Close search"
          icon={<Icon name="X" width={20} height={20} />}
          onClick={handleCloseSearch}
        />
      )}
    </div>
  )
}

export default ExpandingSearchInput
