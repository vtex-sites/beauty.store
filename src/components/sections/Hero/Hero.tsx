import React from 'react'
import UIHero, {
  HeroContent,
  HeroImage,
  HeroLink,
} from 'src/components/sections/Hero/components'
import Image from 'src/components/ui/Image/Image'
import { LinkButton } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import RichText from 'src/components/common/RichText'

import Section from '../../common/Section'
import Container from '../../common/Container'

interface HeroProps {
  title: string
  subtitle?: string
  paragraph: string
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
        <UIHero isInverted={isInverted}>
          <HeroImage>
            <Image
              loading="lazy"
              data={false}
              src={imageSrc}
              alt={imageAlt}
              width={743}
              height={860}
            />
          </HeroImage>
          <HeroContent aria-labelledby="hero-heading">
            <div className="hero-content-wrapper / grid-content">
              <div className="hero-content-info">
                <h2 id="hero-heading" className="title-hero">
                  {title}
                </h2>

                <h4 className="subtitle-hero">{subtitle}</h4>
                <RichText className="text-body-big" text={paragraph} />
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
