import React from 'react'

import Section from '../../common/Section'

interface HomeBannerProps {
  imageBanner: string
  imageBannerMobile: string
  title: string
  subtitle: string
  link: string
}

const HomeBanner = ({ imageBanner }: HomeBannerProps) => {
  // console.log(imageBanner,imageBannerMobile, title, subtitle, link)
  return (
    <Section>
      <div> {`${imageBanner}`} </div>
    </Section>
  )
}

export default HomeBanner
