import React, { useState } from 'react'

interface TabLayoutProps {
  tabs: ITab[]
  children: React.ReactNode[]
}

export interface ITab {
  title: string
  content?: any
}

function TabLayout({ tabs, children }: TabLayoutProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (tabs.length !== children.length) {
    return <></>
  }

  return (
    <div className="tab-layout">
      <div className="tab-layout__header">
        {tabs.map((tab, index) => (
          <button
            className={
              index === activeIndex
                ? 'tab-layout__tab tab-layout__tab--active'
                : 'tab-layout__tab'
            }
            key={`${index}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {tabs.map((_, index) => {
        if (activeIndex === index) return children[index]

        return <></>
      })}
    </div>
  )
}

export default TabLayout
