import { Link as LinkGatsby } from 'gatsby'
import React, { useRef, useState } from 'react'
import CartToggle from 'src/components/cart/CartToggle'
import SearchInput from 'src/components/common/SearchInput'
import Icon from 'src/components/ui/Icon'
import IconButton from 'src/components/ui/IconButton'
import Logo from 'src/components/ui/Logo'
import SignInLink from 'src/components/ui/SignInLink'
import SlideOver from 'src/components/ui/SlideOver'
import { mark } from 'src/sdk/tests/mark'
import type { SearchInputRef } from '@faststore/ui'
import MainMenu from 'src/components/common/MainMenu'

import Container from '../Container'
import Section from '../Section'

type Callback = () => unknown

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const searchMobileRef = useRef<SearchInputRef>(null)
  const dismissTransition = useRef<Callback | undefined>()
  const handleCloseSlideOver = () => setShowMenu(false)

  const handlerExpandSearch = () => {
    setSearchExpanded(true)
    searchMobileRef.current?.inputRef?.focus()
  }

  return (
    <header className="navbar / grid-content-full">
      <Section>
        <Container>
          <div className="navbar__header / grid-content">
            <section className="navbar__row">
              {!searchExpanded && (
                <>
                  <MainMenu className="main-menu-large" />
                  <IconButton
                    classes="navbar__menu"
                    aria-label="Open Menu"
                    icon={<Icon name="List" width={32} height={32} />}
                    onClick={() => setShowMenu(true)}
                  />
                  <LinkGatsby
                    to="/"
                    aria-label="Go to Faststore home"
                    title="Go to Faststore home"
                    className="navbar__logo"
                  >
                    <Logo />
                  </LinkGatsby>
                </>
              )}
              <div
                className="navbar__buttons"
                data-store-search-expanded={searchExpanded}
              >
                <SearchInput />
                {searchExpanded && (
                  <IconButton
                    classes="navbar__collapse"
                    aria-label="Collapse search bar"
                    icon={<Icon name="CaretLeft" width={32} height={32} />}
                    onClick={() => setSearchExpanded(false)}
                  />
                )}
                <SearchInput
                  placeholder=""
                  ref={searchMobileRef}
                  testId="store-input-mobile"
                  buttonTestId="store-input-mobile-button"
                  onSearchClick={handlerExpandSearch}
                />
                <SignInLink />
                <CartToggle />
              </div>
            </section>
          </div>
        </Container>
      </Section>

      <SlideOver
        isOpen={showMenu}
        onDismiss={handleCloseSlideOver}
        onDismissTransition={(callback) => {
          dismissTransition.current = callback
        }}
        size="full"
        direction="leftSide"
        className="navbar__modal-content"
      >
        <div className="navbar__modal-body">
          <header className="navbar__modal-header">
            <LinkGatsby
              to="/"
              aria-label="Go to Faststore home"
              title="Go to Faststore home"
              className="navbar__logo"
              onClick={() => dismissTransition.current?.()}
            >
              <Logo />
            </LinkGatsby>

            <IconButton
              classes="navbar__button"
              aria-label="Close Menu"
              icon={<Icon name="X" width={32} height={32} />}
              onClick={() => dismissTransition.current?.()}
            />
          </header>
          <div className="navlinks">
            <MainMenu className="main-menu-mobile" type="column" />
            <div className="navlinks__signin">
              <SignInLink />
            </div>
          </div>
        </div>
      </SlideOver>
    </header>
  )
}

Navbar.displayName = 'Navbar'

export default mark(Navbar)
