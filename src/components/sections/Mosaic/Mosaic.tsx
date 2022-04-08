import React from 'react'
import Section from 'src/components/common/Section'
import Link from 'src/components/ui/Link'

const Mosaic = () => {
  return (
    <Section className="mosaic">
      <div className="mosaic__grid">
        <div className="mosaic-call">
          <h3 className="mosaic-call__topic">Scanner Facial</h3>

          <h2 className="mosaic-call__title">
            Descubra a sua rotina skincare ideal com o scanner facial beauty
          </h2>

          <Link to="/scanner">Faça o seu agora</Link>
        </div>

        <div>
          <img className="mosaic__image" src="/mosaico-banner-01.jpg" alt="" />
        </div>

        <div>
          <img className="mosaic__image" src="/mosaico-banner-02.jpg" alt="" />
        </div>

        <div>
          <img className="mosaic__image" src="/mosaico-banner-03.jpg" alt="" />
        </div>

        <div>
          <img className="mosaic__image" src="/mosaico-banner-04.jpg" alt="" />
        </div>

        <div>
          <img className="mosaic__image" src="/mosaico-banner-05.jpg" alt="" />
        </div>
      </div>
    </Section>
  )
}

export default Mosaic
