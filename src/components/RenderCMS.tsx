import React from 'react'
import BannerText from 'src/components/sections/BannerText'
import Hero from 'src/components/sections/Hero'
import Incentives from 'src/components/sections/Incentives'
import HomeBanner from 'src/components/sections/HomeBanner'
import Mosaic from 'src/components/sections/Mosaic'
import type { ComponentType } from 'react'

/**
 * Sections: Components imported from '../components/sections' only.
 * Do not import or render components from any other folder in here.
 */
const COMPONENTS: Record<string, ComponentType<any>> = {
  Hero,
  HomeBanner,
  BannerText,
  Incentives,
  Mosaic,
}

interface Props {
  sections?: Array<{ name: string; data: unknown }>
}

function RenderCMS({ sections }: Props) {
  return (
    <>
      {sections?.map(({ name, data }, index) => {
        const Component = COMPONENTS[name]

        if (!Component) {
          return null
        }

        return <Component key={`cms-section-${index}`} {...data} />
      })}
    </>
  )
}

export default RenderCMS
