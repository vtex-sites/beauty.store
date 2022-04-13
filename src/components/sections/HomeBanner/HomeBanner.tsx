import React from 'react'
import { Banner, BannerImage } from '@faststore/ui'
import Container from 'src/components/common/Container'
import Section from 'src/components/common/Section'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
// import { Image } from 'src/components/ui/Image'
import SkeletonElement from 'src/components/skeletons/SkeletonElement'
import Link from 'src/components/ui/Link'

interface HomeBannerItems {
  banner: HomeBannerProps
}
interface HomeBannerProps {
  imageBanner: string
  imageBannerMobile: string
  title: string
  subtitle: string
  link: string
  quote: string
  seeMoreTitle: string
  seeMoreLink: string
}

const HomeBanner = ({ banner }: HomeBannerItems) => {
  const { isWidescreen } = useWidescreen('(max-width: 960px)')

  return (
    <>
      <Section className="home-banner">
        <SkeletonElement type="full" loading={isWidescreen === null} shimmer>
          <div className="home-banner-container">
            <Banner>
              <BannerImage>
                <img
                  loading="eager"
                  src={
                    isWidescreen ? banner.imageBannerMobile : banner.imageBanner
                  }
                  alt={banner.title}
                  width={isWidescreen ? 375 : 1440}
                  height={isWidescreen ? 646 : 818}
                />
              </BannerImage>
            </Banner>
            <div className="home-banner-info">
              <Container>
                <div className="home-banner-main">
                  <h2 className="home-banner-main-title">{banner.title}</h2>
                  {banner.subtitle && (
                    <p className="home-banner-main-subtitle">
                      {banner.subtitle}
                    </p>
                  )}
                  <Link
                    as="a"
                    title="Link para o scanner"
                    href={banner.link}
                    className="home-banner-main-link"
                  >
                    <span>Veja agora</span>
                  </Link>
                </div>
                {banner.quote && (
                  <div className="home-banner-quote">
                    <div className="home-banner-quote-wrapper">
                      <span className="home-banner-quote-caractere">“</span>
                      <p className="home-banner-quote-text">{banner.quote}</p>
                    </div>
                  </div>
                )}
                {banner.seeMoreLink && banner.seeMoreTitle && (
                  <Link
                    as="a"
                    title="Link para o veja mais"
                    href={banner.seeMoreLink}
                    className="home-banner-see-more"
                  >
                    <span className="home-banner-see-more-suptext">
                      confira
                    </span>
                    <p className="home-banner-see-more-text">
                      {banner.seeMoreTitle}
                    </p>
                  </Link>
                )}
              </Container>
            </div>
          </div>
        </SkeletonElement>
      </Section>
    </>
  )
}

export default HomeBanner
