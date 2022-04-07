import React from 'react'
import Icon from 'src/components/ui/Icon'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'

interface IncentivesProps {
  incentives: IncentiveProps[]
}

interface IncentiveProps {
  icon: string
  title: string
  text: string
}

const Incentives = (props: IncentivesProps) => {
  const { incentives } = props

  return incentives ? (
    <Section className="incentives">
      <Container>
        <ul className="incentives__list">
          {incentives.length > 0 &&
            incentives.map((incentive, index) => {
              const { icon, title, text } = incentive

              return (
                <li key={index} className="incentive">
                  <div className="incentive__icon">
                    <Icon name={icon} width={42} height={42} />
                  </div>

                  <div>
                    <h5 className="incentive__title">{title}</h5>
                    <p className="incentive__text">{text}</p>
                  </div>
                </li>
              )
            })}
        </ul>
      </Container>
    </Section>
  ) : null
}

export default Incentives
