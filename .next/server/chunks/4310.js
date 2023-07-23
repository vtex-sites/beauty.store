exports.id = 4310
exports.ids = [4310]
exports.modules = {
  /***/ 1729: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ product_ProductCard_ProductCard,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/ProductCard/ProductCard.js
    var ProductCard = __webpack_require__(1201)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/ProductCard/ProductCardImage.js
    var ProductCardImage = __webpack_require__(5885)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/ProductCard/ProductCardContent.js
    var ProductCardContent = __webpack_require__(7599)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/ProductCard/ProductCardActions.js
    var ProductCardActions = __webpack_require__(4147)
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./src/components/ui/Link/index.ts + 1 modules
    var Link = __webpack_require__(1093)
    // EXTERNAL MODULE: ./src/components/ui/Badge/index.ts + 3 modules
    var Badge = __webpack_require__(4851)
    // EXTERNAL MODULE: ./src/components/ui/Image/index.ts
    var Image = __webpack_require__(6193)
    // EXTERNAL MODULE: ./src/components/ui/Price/index.ts + 1 modules
    var Price = __webpack_require__(7902)
    // EXTERNAL MODULE: ./src/sdk/product/useFormattedPrice.ts
    var useFormattedPrice = __webpack_require__(5346)
    // EXTERNAL MODULE: ./src/sdk/product/useProductLink.ts
    var useProductLink = __webpack_require__(9854)
    // EXTERNAL MODULE: ./src/components/product/ProductCard/product-card.module.scss
    var product_card_module = __webpack_require__(2300)
    var product_card_module_default =
      /*#__PURE__*/ __webpack_require__.n(product_card_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/product/ProductCard/ProductCard.tsx
    const _excluded = [
      'product',
      'index',
      'variant',
      'bordered',
      'aspectRatio',
      'ButtonBuy',
    ]

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)
        enumerableOnly &&
          (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })),
          keys.push.apply(keys, symbols)
      }
      return keys
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? ownKeys(Object(source), !0).forEach(function (key) {
              _defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      } else {
        obj[key] = value
      }
      return obj
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = _objectWithoutPropertiesLoose(source, excluded)
      var key, i
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i]
          if (excluded.indexOf(key) >= 0) continue
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
          target[key] = source[key]
        }
      }
      return target
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {}
      var target = {}
      var sourceKeys = Object.keys(source)
      var key, i
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key]
      }
      return target
    }

    function ProductCard_ProductCard(_ref) {
      let {
          product,
          index,
          variant = 'default',
          bordered = false,
          aspectRatio = 1,
          ButtonBuy,
        } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      const {
        sku,
        isVariantOf: { name },
        image: [img],
        offers: {
          lowPrice: spotPrice,
          offers: [{ listPrice, availability }],
        },
      } = product
      const linkProps = (0, useProductLink /* useProductLink */.w)({
        product,
        selectedOffer: 0,
        index,
      })
      const outOfStock = availability !== 'https://schema.org/InStock'
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
        ProductCard /* default */.Z,
        _objectSpread(
          _objectSpread(
            {
              'data-fs-product-card': true,
              'data-fs-product-card-variant': variant,
              'data-fs-product-card-bordered': bordered,
              'data-fs-product-card-actionable': !!ButtonBuy,
              'data-fs-product-card-sku': sku,
              className: product_card_module_default().fsProductCard,
            },
            otherProps
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(ProductCardImage /* default */.Z, {
                'data-fs-product-card-image': true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Image /* Image */.E, {
                  src: img.url,
                  alt: img.alternateName,
                  width: 360,
                  height: 360 / aspectRatio,
                  sizes: '(max-width: 768px) 25vw, 30vw',
                  loading: 'lazy',
                }),
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                ProductCardContent /* default */.Z,
                {
                  'data-fs-product-card-content': true,
                  children: [
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                      'data-fs-product-card-heading': true,
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('h3', {
                          'data-fs-product-card-title': true,
                          children: /*#__PURE__*/ jsx_runtime_.jsx(
                            Link /* default */.Z,
                            _objectSpread(
                              _objectSpread({}, linkProps),
                              {},
                              {
                                title: name,
                                children: name,
                              }
                            )
                          ),
                        }),
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                          'data-fs-product-card-prices': true,
                          children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(
                              Price /* default */.Z,
                              {
                                value: listPrice,
                                formatter:
                                  useFormattedPrice /* useFormattedPrice */.P,
                                testId: 'list-price',
                                'data-value': listPrice,
                                variant: 'listing',
                                classes: 'text__legend',
                                SRText: 'Original price:',
                              }
                            ),
                            /*#__PURE__*/ jsx_runtime_.jsx(
                              Price /* default */.Z,
                              {
                                value: spotPrice,
                                formatter:
                                  useFormattedPrice /* useFormattedPrice */.P,
                                testId: 'price',
                                'data-value': spotPrice,
                                variant: 'spot',
                                classes: 'text__body',
                                SRText: 'Sale Price:',
                              }
                            ),
                          ],
                        }),
                      ],
                    }),
                    outOfStock
                      ? /*#__PURE__*/ jsx_runtime_.jsx(Badge /* Badge */.C, {
                          children: 'Out of stock',
                        })
                      : /*#__PURE__*/ jsx_runtime_.jsx(
                          Badge /* DiscountBadge */.F,
                          {
                            listPrice: listPrice,
                            spotPrice: spotPrice,
                          }
                        ),
                    !!ButtonBuy &&
                      /*#__PURE__*/ jsx_runtime_.jsx(
                        ProductCardActions /* default */.Z,
                        {
                          'data-fs-product-card-actions': true,
                          children: ButtonBuy,
                        }
                      ),
                  ],
                }
              ),
            ],
          }
        )
      )
    }

    const fragment = 'unknown'
    /* harmony default export */ const product_ProductCard_ProductCard =
      /*#__PURE__*/ (0, external_react_.memo)(ProductCard_ProductCard) // CONCATENATED MODULE: ./src/components/product/ProductCard/index.ts

    /***/
  },

  /***/ 5184: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ m: () => /* binding */ useViewItemListEvent,
      /* harmony export */
    })
    /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(8460)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var src_sdk_session__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(5971)

    const useViewItemListEvent = ({ products, title, page, pageSize }) => {
      const {
        currency: { code },
      } = (0,
      src_sdk_session__WEBPACK_IMPORTED_MODULE_1__ /* .useSession */.kP)()
      const sendViewItemListEvent = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        ;(0,
        _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ /* .sendAnalyticsEvent */._)(
          {
            name: 'view_item_list',
            params: {
              item_list_name: title,
              item_list_id: title,
              items: products.map(({ node: product }, index) => ({
                item_id: product.isVariantOf.productGroupID,
                item_name: product.isVariantOf.name,
                item_brand: product.brand.name,
                item_variant: product.sku,
                price: product.offers.offers[0].price,
                index: page * pageSize + index + 1,
                discount:
                  product.offers.offers[0].listPrice -
                  product.offers.offers[0].price,
                currency: code,
                item_variant_name: product.name,
                product_reference_id: product.gtin,
              })),
            },
          }
        )
      }, [code, products, title, page, pageSize])
      return {
        sendViewItemListEvent,
      }
    }

    /***/
  },

  /***/ 2300: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-product-card': 'product-card_fs-product-card__1pxGU',
      fsProductCard: 'product-card_fs-product-card__1pxGU',
    }

    /***/
  },
}
