import React from 'react'
import { Banner, BannerImage } from '@faststore/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'src/components/common/Container'
import Section from 'src/components/common/Section'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
// import { Image } from 'src/components/ui/Image'
import { Pagination, Navigation } from 'swiper'

interface HomeBannerItems {
  banners: HomeBannerProps[]
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

const HomeBanner = ({ banners }: HomeBannerItems) => {
  const widescreen = useWidescreen('(max-width: 960px)')

  return (
    <Section className="home-banner">
      <Swiper
        direction={widescreen.isWidescreen ? 'horizontal' : 'vertical'}
        pagination={{
          type: 'progressbar',
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="swiper-home-banner"
      >
        <div className="home-banner-counter home-banner-counter-first-slide">
          <span>01</span>
        </div>
        <div className="home-banner-counter home-banner-counter-last-slide">
          <span>{`0${banners.length}`.slice(-2)}</span>
        </div>
        {banners?.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div className="home-banner-container">
              <Banner>
                <BannerImage>
                  <img
                    loading="eager"
                    src={
                      widescreen.isWidescreen
                        ? banner.imageBannerMobile
                        : banner.imageBanner
                    }
                    alt={banner.title}
                    width={widescreen.isWidescreen ? 375 : 1440}
                    height={widescreen.isWidescreen ? 646 : 818}
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
                    <a href={banner.link} className="home-banner-main-link">
                      <span>Veja agora</span>
                    </a>
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
                    <a
                      href={banner.seeMoreLink}
                      className="home-banner-see-more"
                    >
                      <span className="home-banner-see-more-suptext">
                        confira
                      </span>
                      <p className="home-banner-see-more-text">
                        {banner.seeMoreTitle}
                      </p>
                    </a>
                  )}
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  )
}

export default HomeBanner
