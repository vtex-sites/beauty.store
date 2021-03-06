/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import { graphql, navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { DiscountBadge } from 'src/components/ui/Badge'
import Breadcrumb from 'src/components/ui/Breadcrumb'
import BuyButton from 'src/components/ui/BuyButton'
import Price from 'src/components/ui/Price'
import ProductTitle from 'src/components/ui/ProductTitle'
import QuantitySelector from 'src/components/ui/QuantitySelector'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProduct } from 'src/sdk/product/useProduct'
import type { ProductDetailsFragment_ProductFragment } from '@generated/graphql'
import type { CurrencyCode, ViewItemEvent } from '@faststore/sdk'
import type { AnalyticsItem } from 'src/sdk/analytics/types'
import ImageGallery from 'src/components/ui/ImageGallery'
import Container from 'src/components/common/Container'
import SkuSelector from 'src/components/ui/SkuSelector'
import ScannerLink from 'src/components/common/ScannerLink'
import SocialNetwork from 'src/components/common/SocialNetwork'

import Section from '../../common/Section'

interface Props {
  product: ProductDetailsFragment_ProductFragment
}

function ProductDetails({ product: staleProduct }: Props) {
  const { currency } = useSession()
  const [addQuantity, setAddQuantity] = useState(1)

  const socialNetworks: any = [
    {
      active: true,
      width: 14,
      height: 18,
      link: '/',
      label: 'Pinterest',
    },
    {
      active: true,
      width: 16,
      height: 16,
      link: '/',
      label: 'Instagram',
    },
    {
      active: true,
      width: 18,
      height: 18,
      link: '/',
      label: 'Whatsapp',
    },
    {
      active: true,
      width: 14,
      height: 18,
      link: '/',
      label: 'Pinterest',
    },
    {
      active: true,
      width: 16,
      height: 12,
      link: '/',
      label: 'Email',
    },
  ]

  // Stale while revalidate the product for fetching the new price etc
  const { data, isValidating } = useProduct(staleProduct.id, {
    product: staleProduct,
  })

  if (!data) {
    throw new Error('NotFound')
  }

  const {
    product: {
      id,
      sku,
      gtin,
      name: variantName,
      brand,
      isVariantOf,
      isVariantOf: { name, complementName, variants },
      image: productImages,
      offers: {
        offers: [{ availability, price, listPrice, seller }],
        lowPrice,
      },
      breadcrumbList: breadcrumbs,
    },
  } = data

  const skuOptions =
    variants !== undefined && variants !== null
      ? variants.map((variant: any) => {
          return {
            alt: variant.name,
            src:
              variant.images !== null
                ? variant.images[0]?.value?.replace(
                    'vteximg.com.br',
                    'vtexassets.com'
                  )
                : '',
            label: variant.name,
            link: variant.link,
          }
        })
      : []

  const buyDisabled = availability !== 'https://schema.org/InStock'

  const buyProps = useBuyButton({
    id,
    price,
    listPrice,
    seller,
    quantity: addQuantity,
    itemOffered: {
      sku,
      name: variantName,
      gtin,
      image: productImages,
      brand,
      isVariantOf,
    },
  })

  useEffect(() => {
    sendAnalyticsEvent<ViewItemEvent<AnalyticsItem>>({
      name: 'view_item',
      params: {
        currency: currency.code as CurrencyCode,
        value: price,
        items: [
          {
            item_id: isVariantOf.productGroupID,
            item_name: isVariantOf.name,
            item_brand: brand.name,
            item_variant: sku,
            price,
            discount: listPrice - price,
            currency: currency.code as CurrencyCode,
            item_variant_name: variantName,
            product_reference_id: gtin,
          },
        ],
      },
    })
  }, [
    isVariantOf.productGroupID,
    isVariantOf.name,
    brand.name,
    sku,
    price,
    listPrice,
    currency.code,
    variantName,
    gtin,
  ])

  return (
    <Section className="product-details">
      <Container>
        <Breadcrumb breadcrumbList={breadcrumbs.itemListElement} />

        <section className="product-details__contents">
          <section className="product-details__image">
            <ImageGallery images={productImages} />
          </section>
          <section className="product-details__body">
            <header className="product-details__title">
              <ProductTitle
                title={<h1 className="title-product">{name}</h1>}
                label={
                  <DiscountBadge listPrice={listPrice} spotPrice={lowPrice} />
                }
                complementName={complementName}
              />
            </header>

            <section className="product-details__settings">
              <section className="product-details__values">
                <div className="product-details__prices">
                  <Price
                    value={listPrice}
                    formatter={useFormattedPrice}
                    testId="list-price"
                    data-value={listPrice}
                    variant="listing"
                    classes="text-body-small"
                    SRText="Original price:"
                  />
                  <Price
                    value={lowPrice}
                    formatter={useFormattedPrice}
                    testId="price"
                    data-value={lowPrice}
                    variant="spot"
                    classes="title-display"
                    SRText="Sale Price:"
                  />
                </div>
              </section>

              <SkuSelector
                variant="image"
                options={skuOptions}
                onChange={(e) => {
                  const option = (skuOptions as any).find(
                    (opt: any) => opt.label === e.currentTarget.value
                  )

                  navigate(option.link)
                }}
                defaultSku={variantName}
              />

              <QuantitySelector min={1} max={10} onChange={setAddQuantity} />

              <ScannerLink promotion={10} />

              {/* NOTE: A loading skeleton had to be used to avoid a Lighthouse's
              non-composited animation violation due to the button transitioning its
              background color when changing from its initial disabled to active state.
              See full explanation on commit https://git.io/JyXV5. */}
              {isValidating ? (
                <AddToCartLoadingSkeleton />
              ) : (
                <BuyButton disabled={buyDisabled} {...buyProps}>
                  Comprar
                </BuyButton>
              )}

              <SocialNetwork networks={socialNetworks} />
            </section>
          </section>
        </section>
      </Container>
    </Section>
  )
}

function AddToCartLoadingSkeleton() {
  // Generated via https://skeletonreact.com/.
  return (
    <svg
      role="img"
      width="100%"
      height="48"
      aria-labelledby="loading-aria"
      viewBox="0 0 112 48"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" rx="2" ry="2" width="112" height="48" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export const fragment = graphql`
  fragment ProductDetailsFragment_product on StoreProduct {
    id: productID
    sku
    name
    gtin
    description

    isVariantOf {
      productGroupID
      name
      complementName

      additionalProperty {
        name
        value
      }

      installment {
        count
        value
      }

      variants {
        id
        name
        link
        stock
        attributes {
          value
          key
        }
        images {
          value
        }
      }

      specifications {
        key
        value
      }
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
        seller {
          identifier
        }
      }
    }

    breadcrumbList {
      itemListElement {
        item
        name
        position
      }
    }
  }
`

export default ProductDetails
