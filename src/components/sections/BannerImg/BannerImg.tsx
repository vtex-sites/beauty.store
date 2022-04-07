import { Banner, BannerImage } from '@faststore/ui'
import React from 'react'
import { Image } from 'src/components/ui/Image'
import type { InputHTMLAttributes } from 'react'
import Section from 'src/components/common/Section'

export interface BannerImgProps extends InputHTMLAttributes<HTMLDivElement> {
  width: number
  height: number
  src: string
  alt: string
}

function BannerImg({ className, width, height, src, alt }: BannerImgProps) {
  return (
    <Section className={`grid-section ${className}`}>
      <Banner>
        <BannerImage>
          <Image width={width} height={height} src={src} alt={alt} />
        </BannerImage>
      </Banner>
    </Section>
  )
}

export default BannerImg
