import React, { useState } from 'react'
import { Icon as UIIcon, List as UIList } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

const links = [
  {
    title: 'A Beauty',
    highlight: false,
    items: [
      {
        href: '/',
        name: 'Quem somos',
      },
      {
        href: '/',
        name: 'Trabalhe Conosco',
      },
      {
        href: '/',
        name: 'Fale Conosco',
      },
    ],
  },
  {
    title: 'Produtos',
    highlight: false,
    items: [
      {
        href: '/',
        name: 'Para a pele',
      },
      {
        href: '/',
        name: 'Para o cabelo',
      },
      {
        href: '/',
        name: 'Acessórios',
      },
    ],
  },
  {
    title: 'Scanner Facial',
    highlight: true,
    items: [
      {
        href: '/',
        name: 'Faça agora',
      },
    ],
  },
]

type LinkItem = {
  href: string
  name: string
}

interface LinksListProps {
  highlight: boolean
  items: LinkItem[]
}

function LinksList({ items, highlight }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <li key={item.name} className="links-list-item">
          <Link
            variant="footer"
            to={item.href}
            className={highlight ? 'highlight' : ''}
          >
            {item.name}
            {highlight && (
              <UIIcon
                component={
                  <Icon width={17} height={17} name="FooterLinkArrow" />
                }
              />
            )}
          </Link>
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
    <>
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => {
            if (section.highlight) {
              return (
                <nav key={section.title}>
                  <p className="title-sub-subsection highlight">
                    {section.title}
                  </p>
                  <LinksList
                    items={section.items}
                    highlight={section.highlight}
                  />
                </nav>
              )
            }

            return (
              <AccordionItem
                key={section.title}
                isExpanded={indicesExpanded.has(index)}
                buttonLabel={section.title}
              >
                <LinksList
                  items={section.items}
                  highlight={section.highlight}
                />
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>

      {links.map((section) => (
        <nav key={section.title} className="hidden-mobile">
          <p className="title-sub-subsection">{section.title}</p>
          <LinksList items={section.items} highlight={section.highlight} />
        </nav>
      ))}
    </>
  )
}

export default FooterLinks
