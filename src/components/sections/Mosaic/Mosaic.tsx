import React from 'react'
import Section from 'src/components/common/Section'
import Link from 'src/components/ui/Link'
import { Image } from 'src/components/ui/Image'
import SkeletonElement from 'src/components/skeletons/SkeletonElement'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'

interface MosaicProps {
  topic: string
  title: string
  buttonLink: string
  buttonLabel: string
  desktopImages: string[]
  mobileImages: string[]
}

const Mosaic = (props: MosaicProps) => {
  const { topic, title, buttonLink, buttonLabel, desktopImages, mobileImages } =
    props

  const { isWidescreen } = useWidescreen()

  return (
    <Section className="mosaic">
      <div className="mosaic__container">
        <SkeletonElement type="full" loading={isWidescreen === null} shimmer>
          <div className="mosaic__grid">
            <div className="mosaic-call">
              <h3 className="mosaic-call__topic">{topic}</h3>
              <h2 className="mosaic-call__title">{title}</h2>
              <Link to={buttonLink}>{buttonLabel}</Link>
            </div>

            {isWidescreen ? (
              <>
                {desktopImages.length > 0 &&
                  desktopImages.map((desktopImage, index) => {
                    return (
                      <div key={index} className="mosaic__image-wrapper">
                        <Image
                          className="mosaic__image"
                          src={desktopImage}
                          alt={`${index}ª imagem do mosaico`}
                          width={index === 3 ? 483 : 300}
                          height={314}
                        />
                      </div>
                    )
                  })}
              </>
            ) : (
              <div className="mosaic__images">
                {mobileImages.length > 0 &&
                  mobileImages.map((mobileImage, index) => {
                    return (
                      <div
                        key={index}
                        className={`mosaic__image-wrapper mosaic__image-wrapper--${index}`}
                      >
                        <Image
                          className="mosaic__image"
                          src={mobileImage}
                          alt={`${index}ª imagem do mosaico`}
                          width={184}
                          height={184}
                        />
                      </div>
                    )
                  })}
              </div>
            )}
          </div>
        </SkeletonElement>
      </div>
    </Section>
  )
}

export default Mosaic
