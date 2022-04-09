import React, { useState } from 'react'
import { Icon as UIIcon, List as UIList } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

const links = [
  {
    title: 'A Beauty',
    items: [
      {
        href: '/',
        name: 'Lorem ipsum',
        highlight: false,
      },
      {
        href: '/',
        name: 'Lorem ipsum',
        highlight: false,
      },
      {
        href: '/',
        name: 'Lorem ipsum',
        highlight: false,
      },
    ],
  },
  {
    title: 'Produtos',
    items: [
      {
        href: '/',
        name: 'Lorem ipsum',
        highlight: false,
      },
      {
        href: '/',
        name: 'Lorem ipsum',
        highlight: false,
      },
      {
        href: '/',
        name: 'Lorem ipsum',
        highlight: false,
      },
    ],
  },
  {
    title: 'Scanner Facial',
    items: [
      {
        href: '/',
        name: 'Faça agora',
        highlight: true,
      },
    ],
  },
]

type LinkItem = {
  href: string
  name: string
  highlight: boolean
}

interface LinksListProps {
  items: LinkItem[]
}

function LinksList({ items }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <li key={item.name} className="list__item">
          <Link
            variant="footer"
            to={item.href}
            className={item.highlight ? 'highlight-link' : ''}
          >
            {item.name}
          </Link>
          {item.highlight && (
            <UIIcon
              component={<Icon width={17} height={17} name="FooterLinkArrow" />}
            />
          )}
        </li>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className="footer__links">
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <div className="footer__links-columns">
          {links.map((section) => (
            <nav key={section.title}>
              <p className="title-sub-subsection">{section.title}</p>
              <LinksList items={section.items} />
            </nav>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FooterLinks
