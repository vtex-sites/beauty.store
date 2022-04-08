import React, { useState } from 'react'
import cssBuilder from 'src/sdk/helpers/cssBuilder'
import Link from 'src/components/ui/Link'

import type { MainMenuList } from '.'

interface Props {
  data: MainMenuList
  level: number
}

function MainMenuItem({ data, level }: Props) {
  const [isActive, setIsActive] = useState(false)
  const hasChildren = !!data.children?.length
  const isHighlight = !!data.isHighlight
  const cssWithLevel = (className: string) =>
    `${className} ${className}-lvl-${level}`

  const classnames = {
    container: cssBuilder([
      [cssWithLevel('main-menu-item-container'), true],
      [cssWithLevel('main-menu-item-isHighlight'), isHighlight],
      [cssWithLevel('main-menu-item-with-children'), hasChildren],
      [cssWithLevel('main-menu-item-container-active'), isActive],
    ]),
    link: cssBuilder([
      [cssWithLevel('main-menu-item-link'), true],
      [cssWithLevel('main-menu-item-link-active'), isActive],
    ]),
    linkContainer: cssBuilder([
      [cssWithLevel('main-menu-item-linkContainer'), true],
      [cssWithLevel('main-menu-item-linkContainer-active'), isActive],
      [cssWithLevel('main-menu-item-linkContainer-with-children'), hasChildren],
    ]),
    childrenSection: cssBuilder([
      [cssWithLevel('main-menu-item-children-section'), true],
      [cssWithLevel('main-menu-item-children-section-active'), isActive],
    ]),
    childrenContainer: cssBuilder([
      [cssWithLevel('main-menu-item-children-container'), true],
      [cssWithLevel('main-menu-item-children-container-active'), isActive],
    ]),
    childrenItemsWrapper: cssBuilder([
      [cssWithLevel('main-menu-item-children-items-wrapper'), true],
      [cssWithLevel('main-menu-item-children-items-wrapper-active'), isActive],
    ]),
    childrenTitle: cssBuilder([
      [cssWithLevel('main-menu-item-children-title'), true],
      [cssWithLevel('main-menu-item-children-title-active'), isActive],
    ]),
  }

  const buildChildren = () => {
    const title = () => (
      <h2 className={classnames.childrenTitle}>{data.childrenTitle}</h2>
    )

    const childrenItem = (item: MainMenuList) => (
      <MainMenuItem data={item} level={level + 1} key={item.href} />
    )

    return (
      <section className={classnames.childrenSection}>
        <div className={classnames.childrenContainer}>
          {data.childrenTitle && title()}
          <div className={classnames.childrenItemsWrapper}>
            {data.children?.map(childrenItem)}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div
      className={classnames.container}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      role="menubar"
      tabIndex={-1}
    >
      <div className={classnames.linkContainer}>
        <Link
          className={classnames.link}
          as="a"
          href={data.href}
          title={data.label}
        >
          {data.label}
        </Link>
      </div>
      {hasChildren ? buildChildren() : ''}
    </div>
  )
}

export default MainMenuItem
