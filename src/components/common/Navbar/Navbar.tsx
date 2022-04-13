import { Link as LinkGatsby } from 'gatsby'
import React, { useRef, useState } from 'react'
import CartToggle from 'src/components/cart/CartToggle'
import Icon from 'src/components/ui/Icon'
import IconButton from 'src/components/ui/IconButton'
import Logo from 'src/components/ui/Logo'
import SignInLink from 'src/components/ui/SignInLink'
import SlideOver from 'src/components/ui/SlideOver'
import { mark } from 'src/sdk/tests/mark'
import type { MainMenuList } from 'src/components/common/MainMenu'
import MainMenu from 'src/components/common/MainMenu'

import Container from '../Container'
import Section from '../Section'
import ExpandingSearchInput from '../ExpandingSearchInput'

type Callback = () => unknown

const listRow: MainMenuList[] = [
  {
    label: 'A Beauty',
    href: '/beleza',
  },
  {
    label: 'Produtos',
    href: '/Produtos',
    childrenTitle: 'Beleza',
    children: [
      {
        label: 'Categorias',
        href: '#',
        children: [
          {
            label: 'Firmeza da Pele',
            href: '#',
          },
          {
            label: 'Hidratação da Pele',
            href: '#',
          },
          {
            label: 'Rugas e Linhas de expressão',
            href: '#',
          },
          {
            label: 'Flacidez e Celulite',
            href: '#',
          },
          {
            label: 'Cabelos e Unhas',
            href: '#',
          },
        ],
      },
      {
        label: 'Ativos',
        href: '#',
        children: [
          {
            label: 'Ácido Hialurônico',
            href: '#',
          },
          {
            label: 'Colágeno',
            href: '#',
          },
          {
            label: 'Biotina',
            href: '#',
          },
          {
            label: 'Peptan',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    label: 'Scanner Facial',
    href: '#',
  },
]

const listColumn: MainMenuList[] = [
  {
    label: 'Todas as Categorias',
    href: '#',
    childrenTitle: 'Categorias',
    children: [
      {
        label: 'beleza',
        href: '#',
      },
      {
        label: 'Cabelos',
        href: '#',
      },
      {
        label: 'Pele',
        href: '#',
      },
    ],
  },
  {
    label: 'Scanner Facial',
    href: '#',
  },
  {
    label: 'A Beauty',
    href: '',
    childrenTitle: 'Categorias',
    children: [
      {
        label: 'Por Necessidade',
        href: '#',
        children: [
          {
            label: 'Firmeza da Pele',
            href: '#',
          },
          {
            label: 'Hidratação da Pele',
            href: '#',
          },
          {
            label: 'Rugas e Linhas de expressão',
            href: '#',
          },
          {
            label: 'Flacidez e Celulite',
            href: '#',
          },
          {
            label: 'Cabelos e Unhas',
            href: '#',
          },
        ],
      },
      {
        label: 'Ativos',
        href: '',
        children: [
          {
            label: 'Ácido Hialurônico',
            href: '',
          },
          {
            label: 'Colágeno',
            href: '',
          },
          {
            label: 'Biotina',
            href: '',
          },
          {
            label: 'Peptan',
            href: '',
          },
          {
            label: 'Verisol',
            href: '',
          },
          {
            label: 'Vitamina C',
            href: '',
          },
          {
            label: 'MSM - metilsulfonilmetano',
            href: '',
          },
          {
            label: 'Antioxidantes',
            href: '',
          },
        ],
      },
    ],
  },
]

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const dismissTransition = useRef<Callback | undefined>()
  const handleCloseSlideOver = () => setShowMenu(false)

  return (
    <header
      className="navbar / grid-content-full"
      data-store-section-expanded={searchExpanded}
    >
      <Section>
        <Container>
          <div className="navbar__header / grid-content">
            <section className="navbar__row">
              <MainMenu list={listRow} className="main-menu-large" />
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
              <div
                className="navbar__buttons"
                data-store-search-expanded={searchExpanded}
              >
                <ExpandingSearchInput
                  isExpanded={searchExpanded}
                  onExpand={setSearchExpanded}
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
            <MainMenu
              list={listColumn}
              className="main-menu-mobile"
              type="column"
            />
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
