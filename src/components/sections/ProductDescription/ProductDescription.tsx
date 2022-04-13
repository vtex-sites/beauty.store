import React, { useState } from 'react'
import type { ProductDetailsFragment_ProductFragment } from '@generated/graphql'
import Link from 'src/components/ui/Link'

import SpecificationTable from './SpecificationTable'

interface Props {
  product: ProductDetailsFragment_ProductFragment
}

function ProductDescription({ product }: Props) {
  let initialTab = 'description'

  if (typeof window !== `undefined`) {
    initialTab = window.location.hash.slice(1) || 'description'
  }

  // TODO: isolate the logic for a custom tab hook
  const [selectedTab, setSelectedTab] = useState(initialTab)

  const tabs = [
    {
      id: 'description',
      title: 'Descrição',
      content: product.description,
    },
    {
      id: 'specification',
      title: 'Especificações Técnicas',
      content: SpecificationTable({
        specs: product.isVariantOf.specifications,
      }),
    },
  ]

  const handleChangeTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setSelectedTab(e.currentTarget.getAttribute('data-tab') ?? '')
  }

  return (
    <section className="product-description">
      <h2 className="product-description__title">Saiba mais do produto</h2>

      <ul className="product-description-tab">
        {tabs.map((tab) => (
          <li key={tab.id} className="product-description-tab__item">
            <Link
              as="a"
              title="Link da descrição do produto"
              target="_self"
              rel="noopener noreferrer"
              href={`#${tab.id}`}
              className={`product-description-tab__link ${
                tab.id === selectedTab
                  ? 'product-description-tab__link--active'
                  : ''
              }`}
              data-tab={tab.id}
              onClick={handleChangeTab}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
      <article className="product-description__content">
        {tabs.find((tab) => tab.id === selectedTab)?.content}
      </article>
    </section>
  )
}

export default ProductDescription
