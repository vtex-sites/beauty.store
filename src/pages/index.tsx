import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
// import RenderCMS from 'src/components/RenderCMS'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import HomeBanner from 'src/components/sections/HomeBanner'
import Incentives from 'src/components/sections/Incentives'
import Mosaic from 'src/components/sections/Mosaic'
import { Helmet } from 'react-helmet'
import ShelfsWithTabs from 'src/components/sections/ShelfsWithTabs'
import BannerAndShelf from 'src/components/sections/BannerAndShelf'

export type Props = PageProps<HomePageQueryQuery>

/**
 * Do not use this approach in production:
 *
 * Sometimes people delete content from the CMS on our test account, breaking our CI.
 * Since publishing new content depends on the CI, we get enter a deadlock. This prevents this deadlock
 */
// const fallbackContent = [
//   {
//     data: {
//       title: 'New Products Available',
//       subtitle:
//         'At FastStore you can shop the best tech of 2022. Enjoy and get 10% off on your first purchase.',
//       linkText: 'See all',
//       link: '/',
//       imageSrc:
//         'https://storeframework.vtexassets.com/arquivos/ids/190897/Photo.jpg',
//       imageAlt: 'Quest 2 Controller on a table',
//     },
//     name: 'Hero',
//   },
// ]

function Page(props: Props) {
  const {
    data: { site },
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
        linkTags={[
          { rel: 'preconnect', href: 'https://beauty.vteximg.com.br/' },
        ]}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <Helmet>
        <link rel="stylesheet" href="/css/home.css" />
        <link
          rel="preload"
          as="image"
          href="https://beauty.vteximg.com.br/arquivos/home-banner-01.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://beauty.vteximg.com.br/arquivos/home-banner-mobile-01.jpg"
        />
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

      <HomeBanner
        banner={{
          imageBanner:
            'https://beauty.vteximg.com.br/arquivos/home-banner-01.jpg',
          imageBannerMobile:
            'https://beauty.vteximg.com.br/arquivos/home-banner-mobile-01.jpg',
          title: 'Cuide da sua pele com produtos feitos para você!',
          subtitle:
            'Através do nosso scanner, você consegue identificar o seu perfil de beleza',
          link: '/scanner',
          quote:
            'Quando comecei a usar os produtos indicados pela beauty minha pele e cabelo mudaram totalmente! Recomendo para as minhas amigas sempre!',
          seeMoreTitle: 'Serum treatment',
          seeMoreLink: '/',
        }}
      />
      <Incentives
        incentives={[
          {
            icon: 'Truck',
            title: 'Frete Grátis',
            text: 'Lorem ipsum dolor sit amet consectetur.',
          },
          {
            icon: 'CustomProduct',
            title: 'Produtos personalizados',
            text: 'Lorem ipsum dolor sit amet consectetur.',
          },
          {
            icon: 'FullCare',
            title: 'Cuidado completo',
            text: 'Lorem ipsum dolor sit amet consectetur.',
          },
        ]}
      />
      <ShelfsWithTabs />
      <Mosaic
        topic="Scanner Facial"
        title="Descubra a sua rotina skincare ideal com o scanner facial beauty"
        buttonLink="/scanner"
        buttonLabel="Faça o seu agora"
        desktopImages={[
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-01.jpg',
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-02.jpg',
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-03.jpg',
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-04.jpg',
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-05.jpg',
        ]}
        mobileImages={[
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-mobile-01.jpg',
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-mobile-02.jpg',
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-mobile-03.jpg?v',
          'https://beauty.vteximg.com.br/arquivos/mosaico-banner-mobile-05.jpg?v',
        ]}
      />
      <BannerAndShelf />
      {/* CMS Sections */}

      {/* <RenderCMS sections={cmsHome?.sections ?? fallbackContent} /> */}
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
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
