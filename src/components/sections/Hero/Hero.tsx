import React from 'react'
import UIHero, {
  HeroContent,
  HeroImage,
  HeroLink,
} from 'src/components/sections/Hero/components'
import Image from 'src/components/ui/Image/Image'
import { LinkButton } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'

import Section from '../../common/Section'
import Container from '../../common/Container'

type Variant = 'default' | 'small'

interface HeroProps {
  title: string
  subtitle?: string
  paragraph: string
  variant?: Variant
  isInverted: boolean
  linkText?: string
  link?: string
  icon?: JSX.Element
  imageSrc: string
  imageAlt: string
}

const Hero = ({
  title,
  subtitle,
  paragraph,
  variant = 'default',
  isInverted,
  linkText,
  link,
  icon,
  imageAlt,
  imageSrc,
}: HeroProps) => {
  return (
    <Section>
      <Container>
        <UIHero data-hero-variant={variant} isInverted={isInverted}>
          <HeroImage>
            <Image
              preload
              loading="eager"
              src={imageSrc}
              alt={imageAlt}
              width={743}
              height={860}
              sizes="(max-width: 768px) 70vw, 50vw"
            />
          </HeroImage>
          <HeroContent aria-labelledby="hero-heading">
            <div className="hero-content-wrapper / grid-content">
              <div className="hero-content-info">
                <h2
                  id="hero-heading"
                  className={
                    variant === 'default' ? 'title-hero' : 'title-hero-small'
                  }
                >
                  {title}
                </h2>

                <h4
                  className={
                    variant === 'default'
                      ? 'subtitle-hero'
                      : 'subtitle-hero-small'
                  }
                >
                  {subtitle}
                </h4>
                <p className="text-body-big">{paragraph}</p>
                {!!link && (
                  <HeroLink>
                    <LinkButton to={link} inverse>
                      {linkText}{' '}
                      <Icon name="ArrowRight" width={24} height={24} />
                    </LinkButton>
                  </HeroLink>
                )}
              </div>
              {!!icon && <div className="hero-content-icon">{icon}</div>}
            </div>
          </HeroContent>
        </UIHero>
      </Container>
    </Section>
  )
}

export default Hero
