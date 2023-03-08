import React from 'react'
import CtaButton from 'src/components/ui/CtaButton'
import { Banner, BannerImage } from '@faststore/ui'
import { useStepper } from 'src/contexts/StepperContext'
import SkeletonElement from 'src/components/skeletons/SkeletonElement'
import { useWidescreen } from 'src/sdk/ui/useWidescreen'

interface Props {
  title: string
  message: string
  imgDesktop: string
  imgMobile: string
  buttonText: string
}

function ScannerPresenter({
  title,
  message,
  imgDesktop,
  imgMobile,
  buttonText,
}: Props) {
  const { goToNextStep } = useStepper()
  const { isWidescreen } = useWidescreen('(max-width: 960px)')

  return (
    <section className="scanner">
      <SkeletonElement type="full" loading={isWidescreen === null} shimmer>
        <div className="scanner__img-wrapper">
          <Banner>
            <BannerImage>
              <img
                loading="eager"
                src={isWidescreen ? imgMobile : imgDesktop}
                alt="Scanner"
                width={isWidescreen ? 375 : 1440}
                height={isWidescreen ? 745 : 840}
              />
            </BannerImage>
          </Banner>
          {/* <img
            className="scanner__img"
            width={1440}
            height={1228}
            src={img}
            alt="Scanner"
          /> */}
        </div>
        <div className="scanner-cta">
          <h1 className="scanner-cta__title">{title}</h1>
          <p className="scanner-cta__msg">{message}</p>
          <CtaButton text={buttonText} handleClick={goToNextStep} />
        </div>
      </SkeletonElement>
    </section>
  )
}

export default ScannerPresenter
