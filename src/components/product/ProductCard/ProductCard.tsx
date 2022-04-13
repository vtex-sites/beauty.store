import {
  Card as UICard,
  CardActions as UICardActions,
  CardContent as UICardContent,
  CardImage as UICardImage,
} from '@faststore/ui'
import { graphql, Link } from 'gatsby'
import React, { memo } from 'react'
import { Image } from 'src/components/ui/Image'
import Price from 'src/components/ui/Price'
import BuyButton from 'src/components/ui/BuyButton'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProductLink } from 'src/sdk/product/useProductLink'
import type { ProductSummary_ProductFragment } from '@generated/graphql'

type Variant = 'horizontal' | 'vertical'

interface Props {
  product: ProductSummary_ProductFragment
  index: number
  bordered?: boolean
  variant?: Variant
  aspectRatio?: number
}

function ProductCard({
  product,
  index,
  variant = 'vertical',
  bordered = false,
  aspectRatio = 1,
  ...otherProps
}: Props) {
  const {
    id,
    sku,
    name: variantName,
    gtin,
    brand,
    isVariantOf,
    isVariantOf: { name },
    image: productImages,
    offers: {
      lowPrice: spotPrice,
      offers: [{ price, listPrice, availability, seller }],
    },
  } = product

  const buyProps = useBuyButton({
    id,
    price,
    listPrice,
    seller,
    quantity: 1,
    itemOffered: {
      sku,
      name: variantName,
      gtin,
      image: productImages,
      brand,
      isVariantOf,
    },
  })

  const linkProps = useProductLink({ product, selectedOffer: 0, index })
  const outOfStock = availability !== 'https://schema.org/InStock'
  const hasDiscount = listPrice !== spotPrice

  return (
    <UICard
      className="product-card"
      data-card-variant={variant}
      data-card-bordered={bordered}
      data-card-out-of-stock={outOfStock}
      {...otherProps}
    >
      <UICardImage>
        <Image
          loading="lazy"
          src={productImages[0].url}
          alt={productImages[0].alternateName}
          width={360}
          height={360 / aspectRatio}
          data-product-image
          sizes="(max-width: 768px) 25vw, 30vw"
        />
      </UICardImage>
      <UICardContent>
        <div className="product-card__heading">
          <h3 className="product-card__title / title-small">
            <Link {...linkProps} title={name}>
              {name}
            </Link>
          </h3>
          <div className="product-card__bottom">
            <div className="product-card__prices">
              {hasDiscount && (
                <Price
                  value={listPrice}
                  formatter={useFormattedPrice}
                  testId="list-price"
                  data-value={listPrice}
                  variant="listing"
                  classes="text-body-small"
                  SRText="Original price:"
                />
              )}

              <Price
                value={spotPrice}
                formatter={useFormattedPrice}
                testId="price"
                data-value={spotPrice}
                variant="spot"
                classes="text-body"
                SRText="Sale Price:"
              />
            </div>
            <UICardActions>
              <BuyButton {...buyProps} />
            </UICardActions>
          </div>
        </div>
      </UICardContent>
    </UICard>
  )
}

export const fragment = graphql`
  fragment ProductSummary_product on StoreProduct {
    id: productID
    slug
    sku
    brand {
      brandName: name
    }
    name
    gtin

    isVariantOf {
      productGroupID
      name
    }

    image {
      url
      alternateName
    }

    brand {
      name
    }

    offers {
      lowPrice
      offers {
        availability
        price
        listPrice
        quantity
        seller {
          identifier
        }
      }
    }
  }
`

export default memo(ProductCard)
