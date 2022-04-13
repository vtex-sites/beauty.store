import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { ScannerPageQuery } from '@generated/graphql'
import ScannerPresenter from 'src/components/sections/ScannerPresenter'
import ScannerResults from 'src/components/sections/ScannerResults'
import { StepperProvider } from 'src/contexts/StepperContext'
import { ScannerProvider } from 'src/contexts/ScannerContext'
import Stepper from 'src/components/common/Stepper'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
import SkeletonElement from 'src/components/skeletons/SkeletonElement'
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
      <div className="scanner__container">
        <SkeletonElement type="image" loading={isWidescreen === null} shimmer>
          <StepperProvider>
            <ScannerProvider>
              <Stepper>
                <ScannerResults />

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
              </Stepper>
            </ScannerProvider>
          </StepperProvider>
        </SkeletonElement>
      </div>
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
