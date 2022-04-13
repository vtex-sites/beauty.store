import React from 'react'
import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import RenderCMS from 'src/components/RenderCMS'
// import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { InstitutionalPageQueryQuery } from '@generated/graphql'
import { Helmet } from 'react-helmet'

export type Props = PageProps<InstitutionalPageQueryQuery>

function Page(props: Props) {
  const {
    data: { site, cmsInstitutional },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

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
      <Helmet>
        <link rel="stylesheet" href="/css/a-beauty.css" />
      </Helmet>

      {cmsInstitutional && <RenderCMS sections={cmsInstitutional?.sections} />}
    </>
  )
}

export const query = graphql`
  query InstitutionalPageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }

    cmsInstitutional {
      sections {
        name
        data
      }
    }
  }
`

export default Page
