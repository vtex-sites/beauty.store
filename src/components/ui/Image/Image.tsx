import React, { memo } from 'react'
import { Helmet } from 'react-helmet-async'

import { useImage } from './useImage'
import type { ImageOptions } from './useImage'

interface Props extends ImageOptions {
  data?: boolean
  preload?: boolean
}

function Image({ preload = false, data = true, ...otherProps }: Props) {
  const imgProps = useImage(otherProps)
  const { src, sizes = '100vw', srcSet } = imgProps

  return (
    <>
      {preload && (
        <Helmet
          link={[
            {
              as: 'image',
              rel: 'preload',
              href: src,
              imagesrcset: srcSet,
              imagesizes: sizes,
            } as any,
          ]}
        />
      )}
      <img
        {...(data && { 'data-store-image': true })}
        {...imgProps}
        alt={imgProps.alt}
      />
    </>
  )
}

Image.displayName = 'Image'
export default memo(Image)
