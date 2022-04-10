import React, { useState } from 'react'
import { Image } from 'src/components/ui/Image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, FreeMode, Thumbs } from 'swiper'
import type { Swiper as ISwiper } from 'swiper'

interface Props {
  images: Array<{
    url: string
    alternateName: string
  }>
}

const ImageGallery = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null)

  return (
    <>
      <Swiper
        direction="vertical"
        pagination={{
          type: 'progressbar',
        }}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Pagination, Navigation, Thumbs]}
        className="swiper-image-gallery"
      >
        {images.map((image, id) => (
          <SwiperSlide key={`${image.url}_${id}`}>
            <Image
              preload
              loading="eager"
              src={image.url}
              alt={image.alternateName}
              width={680}
              height={680}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={2}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-image-gallery-thumbs"
      >
        {images.map((image, id) => (
          <SwiperSlide key={`${image.url}_${id}`}>
            <Image
              data={false}
              preload
              loading="eager"
              src={image.url}
              alt={image.alternateName}
              width={71}
              height={71}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ImageGallery
