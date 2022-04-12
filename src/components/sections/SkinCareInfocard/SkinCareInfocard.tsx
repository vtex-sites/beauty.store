import React from 'react'
import Container from 'src/components/common/Container'
import { Image } from 'src/components/ui/Image'
import Icon from 'src/components/ui/Icon'
import InfocardIcon from 'src/components/ui/InfocardIcon'
import Button from 'src/components/ui/Button'
import Link from 'src/components/ui/Link'

function SkinCareInfocard() {
  const userIcon = <Icon name="UserCheck" width={39} height={39} />
  const dollarIcon = <Icon name="DollarSign" width={36} height={32} />
  const heartIcon = <Icon name="Heart" width={35} height={35} />
  const tagIcon = <Icon name="Tag" width={38} height={38} />

  return (
    <Container>
      <div className="infocard-skin-wrapper">
        <div className="infocard-skin">
          <div className="infocard-skin__images">
            <Image
              data={false}
              alt="mãos segurando um frasco com conta gotas"
              src="https://beauty.vtexassets.com/arquivos/skin-care-01.png"
              width={261}
              height={261}
            />
            <Image
              data={false}
              alt="mulher aplicando um produto de beleza no rosto"
              src="https://beauty.vtexassets.com/arquivos/skin-care-02.png"
              width={261}
              height={261}
            />
          </div>
          <div className="infocard-skin__block">
            <h2 className="block__title">Descubra sua rotina skincare</h2>
            <span className="block__subtitle">
              através do nosso scanner facial, direcionamos produtos ideais para
              a sua pele.
            </span>

            <div className="infocard-grid">
              <InfocardIcon label="personalizado para você" icon={userIcon} />
              <InfocardIcon label="ótimo custo benefício" icon={dollarIcon} />
              <InfocardIcon label="receba dicas de cuidados" icon={heartIcon} />
              <InfocardIcon label="descontos exclusivos" icon={tagIcon} />
            </div>

            <div className="infocard-button-container">
              <Link
                as="a"
                href="/scanner"
                title="Faça agora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="infocard-button">
                  <span className="infocard-button-label">faça agora</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SkinCareInfocard
