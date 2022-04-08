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

        <div className="mosaic__image-wrapper">
          <img className="mosaic__image" src="/mosaico-banner-01.jpg" alt="" />
        </div>

        <div className="mosaic__image-wrapper">
          <img className="mosaic__image" src="/mosaico-banner-02.jpg" alt="" />
        </div>

        <div className="mosaic__image-wrapper">
          <img className="mosaic__image" src="/mosaico-banner-03.jpg" alt="" />
        </div>

        <div className="mosaic__image-wrapper">
          <img className="mosaic__image" src="/mosaico-banner-04.jpg" alt="" />
        </div>

        <div className="mosaic__image-wrapper">
          <img className="mosaic__image" src="/mosaico-banner-05.jpg" alt="" />
        </div>

        {/* <div className="mosaic__images">
          <div className="mosaic__image-wrapper mosaic__image-wrapper--1">
            <img
              className="mosaic__image"
              src="/mosaico-banner-01.jpg"
              alt=""
            />
          </div>

          <div className="mosaic__image-wrapper mosaic__image-wrapper--2">
            <img
              className="mosaic__image"
              src="/mosaico-banner-02.jpg"
              alt=""
            />
          </div>

          <div className="mosaic__image-wrapper mosaic__image-wrapper--3">
            <img
              className="mosaic__image"
              src="/mosaico-banner-03.jpg"
              alt=""
            />
          </div>

          <div className="mosaic__image-wrapper mosaic__image-wrapper--4">
            <img
              className="mosaic__image"
              src="/mosaico-banner-05.jpg"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </Section>
  )
}

export default Mosaic
