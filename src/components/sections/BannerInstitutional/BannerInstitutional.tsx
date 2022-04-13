import { Banner, BannerImage } from '@faststore/ui'
import React from 'react'
import { Image } from 'src/components/ui/Image'
import type { HTMLAttributes } from 'react'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'
import Section from 'src/components/common/Section'
import RichText from 'src/components/common/RichText'
import SkeletonElement from 'src/components/skeletons/SkeletonElement'

export interface BannerInstitutionalProps
  extends HTMLAttributes<HTMLDivElement> {
  widthDesktop: number
  heightDesktop: number
  imageSrcDesktop: string
  imageAltDesktop: string
  bannerTitle: string
  bannerDescription: string
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
  bannerTitle,
  bannerDescription,

  widthMobile,
  heightMobile,
  imageSrcMobile,
  imageAltMobile,
}: BannerInstitutionalProps) {
  const { isWidescreen } = useWidescreen('(max-width: 768px)')
  const bannerProps = isWidescreen
    ? {
        width: widthMobile,
        height: heightMobile,
        src: imageSrcMobile,
        alt: imageAltMobile,
      }
    : {
        width: widthDesktop,
        height: heightDesktop,
        src: imageSrcDesktop,
        alt: imageAltDesktop,
      }

  return (
    <Section className="banner-institutional">
      <SkeletonElement type="image" loading={isWidescreen === null} shimmer>
        <Banner>
          <BannerImage>
            <Image preload loading="eager" {...bannerProps} />
          </BannerImage>
        </Banner>

        <div className="BannerTextWrapper">
          <RichText className="BannerTitle" text={bannerTitle} />
          <RichText className="BannerDescription" text={bannerDescription} />
        </div>
      </SkeletonElement>
    </Section>
  )
}

export default BannerInstitutional
