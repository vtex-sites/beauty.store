import React from 'react'
import Icon from 'src/components/ui/Icon'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'

const Incentives = () => {
  return (
    <Section className="incentives">
      <Container>
        <ul className="incentives__list">
          <li className="incentives__item">
            <div className="incentives__icon">
              <Icon name="Truck" width={42} height={42} />
            </div>

            <div>
              <h5 className="incentives__title">Frete Grátis</h5>

              <p className="incentives__text">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </li>

          <li className="incentives__item">
            <div className="incentives__icon">
              <Icon name="Truck" width={42} height={42} />
            </div>

            <div>
              <h5 className="incentives__title">Frete Grátis</h5>

              <p className="incentives__text">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </li>

          <li className="incentives__item">
            <div className="incentives__icon">
              <Icon name="Truck" width={42} height={42} />
            </div>

            <div>
              <h5 className="incentives__title">Frete Grátis</h5>

              <p className="incentives__text">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  )
}

export default Incentives
