import React, { useState } from 'react'
import cssBuilder from 'src/sdk/helpers/cssBuilder'
import Link from 'src/components/ui/Link'
import IconButton from 'src/components/ui/IconButton'
import Icon from 'src/components/ui/Icon'

import type { MainMenuList, MainMenuType } from '.'

interface Props {
  data: MainMenuList
  level: number
  type: MainMenuType
  onGoBack?: () => void
}

function MainMenuItem({ data, level, type, onGoBack }: Props) {
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
    linkIcon: cssBuilder([
      [cssWithLevel('main-menu-item-link-icon'), true],
      [cssWithLevel('main-menu-item-link-icon-active'), isActive],
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
    ]),
    goBackBtn: cssBuilder([[cssWithLevel('main-menu-item-go-back-btn'), true]]),
  }

  const buildChildren = () => {
    const title = () => (
      <h2 className={classnames.childrenTitle}>{data.childrenTitle}</h2>
    )

    const gobackBtn = () => {
      return (
        <IconButton
          classes={classnames.goBackBtn}
          aria-label="close Menu"
          icon={<Icon name="ArrowLeft" width={24} height={24} />}
          onClick={() => setIsActive(false)}
        />
      )
    }

    const childrenItem = (item: MainMenuList) => (
      <MainMenuItem
        data={item}
        level={level + 1}
        key={item.href}
        type={type}
        onGoBack={onGoBack}
      />
    )

    const componentData = {
      'data-main-menu-item': true,
      [`data-main-menu-item-lvl-${level}`]: true,
    }

    return (
      <section className={classnames.childrenSection} {...componentData}>
        <div className={classnames.childrenContainer}>
          {type === 'column' && gobackBtn()}
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
      onMouseEnter={() => type === 'row' && setIsActive(true)}
      onMouseLeave={() => type === 'row' && setIsActive(false)}
      role="menubar"
      tabIndex={-1}
    >
      <div className={classnames.linkContainer}>
        <Link
          className={classnames.link}
          as="a"
          href={data.href}
          title={data.label}
          role="menuitem"
        >
          {data.label}
        </Link>
        {hasChildren && (
          <IconButton
            classes={classnames.linkIcon}
            aria-label="Open Menu"
            icon={<Icon name="ArrowRight" width={20} height={20} />}
            onClick={() => setIsActive(true)}
          />
        )}
      </div>
      {hasChildren ? buildChildren() : ''}
    </div>
  )
}

export default MainMenuItem
