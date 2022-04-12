import { Banner, BannerImage } from '@faststore/ui'
import React from 'react'
import { Image } from 'src/components/ui/Image'
import type { HTMLAttributes } from 'react'
import Section from 'src/components/common/Section'

export interface BannerInstitutionalProps
  extends HTMLAttributes<HTMLDivElement> {
  widthDesktop: number
  heightDesktop: number
  imageSrcDesktop: string
  imageAltDesktop: string
  widthMobile: number
  heightMobile: number
  imageSrcMobile: string
  imageAltMobile: string
}

function BannerInstitutional({
  widthDesktop,
  heightDesktop,
  imageSrcDesktop,
  imageAltDesktop,

  widthMobile,
  heightMobile,
  imageSrcMobile,
  imageAltMobile,
}: BannerInstitutionalProps) {
  return (
    <Section className="grid-section banner-institutional">
      <Banner>
        <BannerImage>
          <div className="hidden-tablet">
            <Image
              width={widthDesktop}
              height={heightDesktop}
              src={imageSrcDesktop}
              alt={imageAltDesktop}
            />
          </div>
          <div className="display-tablet">
            <Image
              width={widthMobile}
              height={heightMobile}
              src={imageSrcMobile}
              alt={imageAltMobile}
            />
          </div>
        </BannerImage>
      </Banner>
    </Section>
  )
}

export default BannerInstitutional
