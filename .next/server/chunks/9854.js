'use strict'
exports.id = 9854
exports.ids = [9854]
exports.modules = {
  /***/ 9854: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ w: () => /* binding */ useProductLink,
      /* harmony export */
    })
    /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(8460)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(5971)

    const useProductLink = ({ index, product, selectedOffer }) => {
      const { slug } = product
      const {
        currency: { code },
      } = (0, _session__WEBPACK_IMPORTED_MODULE_1__ /* .useSession */.kP)()
      const onClick = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        ;(0,
        _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ /* .sendAnalyticsEvent */._)(
          {
            name: 'select_item',
            params: {
              items: [
                {
                  item_id: product.isVariantOf.productGroupID,
                  item_name: product.isVariantOf.name,
                  item_brand: product.brand.name,
                  item_variant: product.sku,
                  index,
                  price: product.offers.offers[selectedOffer].price,
                  discount:
                    product.offers.offers[selectedOffer].listPrice -
                    product.offers.offers[selectedOffer].price,
                  currency: code,
                  item_variant_name: product.name,
                  product_reference_id: product.gtin,
                },
              ],
            },
          }
        )
        ;(0,
        _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ /* .sendAnalyticsEvent */._)(
          {
            name: 'search_select_item',
            params: {
              url: window.location.href,
              items: [
                {
                  item_id: product.isVariantOf.productGroupID,
                  item_variant: product.sku,
                  index,
                },
              ],
            },
          }
        )
      }, [code, product, index, selectedOffer])
      return {
        href: `/${slug}/p`,
        onClick,
        'data-testid': 'product-link',
      }
    }

    /***/
  },
}
