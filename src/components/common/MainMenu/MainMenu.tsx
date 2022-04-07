import { mark } from 'src/sdk/tests/mark'
import React from 'react'

import MainMenuItem from './MainMenuItem'
import type { MainMenuList } from '.'

const listData: MainMenuList[] = [
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

function MainMenu() {
  return (
    <div className="main-menu">
      {listData?.map((item) => (
        <MainMenuItem data={item} level={0} key={item.href} />
      ))}
    </div>
  )
}

MainMenu.displayName = 'MainMenu'
export default mark(MainMenu)
