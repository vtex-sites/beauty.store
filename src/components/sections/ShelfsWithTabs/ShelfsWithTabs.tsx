import React from 'react'
import Section from 'src/components/common/Section'
import TabLayout from 'src/components/common/TabLayout'
import type { ITab } from 'src/components/common/TabLayout/TabLayout'

import ProductShelf from '../ProductShelf'

function ShelfsWithTabs() {
  const tabs: ITab[] = [
    {
      title: 'Séruns',
      content: ProductShelf({ first: 8, sort: 'name_asc' }),
    },

    {
      title: 'Gel de Limpeza',
      content: ProductShelf({ first: 8, sort: 'name_desc' }),
    },
    {
      title: 'Hidratantes',
      content: ProductShelf({ first: 8, sort: 'price_asc' }),
    },
    {
      title: 'Ácidos',
      content: ProductShelf({ first: 8, sort: 'price_desc' }),
    },
  ]

  return (
    <Section className="shelf-with-tabs">
      <h2 className="shelf-with-tabs__title">Navegue pelas categorias</h2>
      <TabLayout tabs={tabs}>
        {tabs.map((tab) => {
          return tab.content
        })}
      </TabLayout>
    </Section>
  )
}

export default ShelfsWithTabs
