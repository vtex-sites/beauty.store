import { mark } from 'src/sdk/tests/mark'
import React from 'react'

import MainMenuItem from './MainMenuItem'
import type { MainMenuList, MainMenuType } from '.'

interface Props {
  className?: string
  list: MainMenuList[]
  type?: MainMenuType
}

function MainMenu({ list, className, type = 'row' }: Props) {
  return (
    <div className={`main-menu type-${type} ${className}`} data-store-main-menu>
      {list?.map((item) => (
        <MainMenuItem data={item} level={0} key={item.href} type={type} />
      ))}
    </div>
  )
}

MainMenu.displayName = 'MainMenu'
export default mark(MainMenu)
