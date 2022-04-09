import React from 'react'
import { Image } from 'src/components/ui/Image'

interface Props {
  images: Array<{
    url: string
    alternateName: string
  }>
}

const GalleryImage = ({ images }: Props) => {
  return (
    <>
      {images.map((image, id) => (
        <Image
          key={`${image.url}_${id}`}
          preload
          loading="eager"
          src={image.url}
          alt={image.alternateName}
          width={360}
          height={270}
          sizes="(max-width: 768px) 25vw, 50vw"
        />
      ))}
    </>
  )
}

export default GalleryImage
