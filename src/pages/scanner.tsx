import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { ScannerPageQuery } from '@generated/graphql'
import ScannerPresenter from 'src/components/sections/ScannerPresenter'
import ScannerStep from 'src/components/sections/ScannerStep'
// import ScannerResults from 'src/components/sections/ScannerResults'
import { StepperProvider } from 'src/contexts/StepperContext'
import { ScannerProvider } from 'src/contexts/ScannerContext'
import Stepper from 'src/components/common/Stepper'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
import { Helmet } from 'react-helmet'

export type Props = PageProps<ScannerPageQuery>
function Page(props: Props) {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const { locale } = useSession()
  const { isWidescreen } = useWidescreen('(min-width: 724px)')
  let imgSrc = '/scanner-presentation.png'

  if (!isWidescreen) {
    imgSrc = '/scanner-presentation-mobile.png'
  }

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`
  const stepTipoDePele = [
    {
      title: 'Pele Seca',
      description:
        'Normalmente tem poros pouco visíveis, aspecto opaco com pouca luminosidade, costuma ser mais áspera ao toque e tem maior propensão a descamação e vermelhidão',
      imageSrc: '/pele/pele-seca.jpg',
    },
    {
      title: 'Pele Mista',
      description:
        'Apresenta caracterísitcas oleosas e poros dilatados na "Zona T" do rosto (testa, nariz e queixo) e, em contrapartida, textura aveludada, sem brilho excessivo ou até com toque seco, nas outras regiões',
      imageSrc: '/pele/pele-mista.jpg',
    },
    {
      title: 'Pele Oleosa',
      description:
        'A pele oleosa é aquela com um aspecto mais brilhoso e espesso, possui toque untoso e apresenta maior quantidade de poros dilatados por todo o rosto',
      imageSrc: '/pele/pele-oleosa.jpg',
    },
    {
      title: 'Pele Normal',
      description:
        'Tem textura aveludada, não apresenta excesso de brilho nem costuma sofrer ressecamento ou descamação. Geralmente tem poros pequenos e pouco visíveis, e é lisa ao toque',
      imageSrc: '/pele/pele-normal.jpg',
    },
  ]

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <Helmet>
        <link rel="stylesheet" href="/css/scanner.css" />
      </Helmet>
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <StepperProvider>
        <ScannerProvider>
          <Stepper>
            {/* <ScannerResults /> */}
            <ScannerPresenter
              title="Vamos descobrir seu perfil de beleza?"
              message="Agora, realizaremos algumas perguntas sobre a sua pele para entendermos as características individuais da sua pele."
              img={imgSrc}
              buttonText="Começar"
            />
            <ScannerPresenter
              title="Seu perfil de pele está pronto"
              message="Através do nosso teste conseguimos definir a melhor rotina para o seu perfil de beleza. Aproveite os descontos e dicas."
              img={imgSrc}
              buttonText="Acessar"
            />
            <ScannerStep
              title="Como você definiria sua pele?"
              message="Escola uma das opções abaixo:"
              img="/scanner-step1.jpg"
              buttonText="Continuar"
              stepOptions={stepTipoDePele}
              // stepSpecification="tipo-de-pele"
            />
          </Stepper>
        </ScannerProvider>
      </StepperProvider>
    </>
  )
}

export const query = graphql`
  query ScannerPage {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
  }
`
Page.displayName = 'Page'
export default mark(Page)
