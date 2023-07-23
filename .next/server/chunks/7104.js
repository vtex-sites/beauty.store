exports.id = 7104
exports.ids = [7104]
exports.modules = {
  /***/ 8569: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          })
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(6689)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            )
          /* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(9785)
          /* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__
            )
          /* harmony import */ var src_sdk_analytics_hooks_useViewItemListEvent__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(5184)
          /* harmony import */ var src_components_skeletons_ProductShelfSkeleton__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(9201)
          /* harmony import */ var src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(4867)
          /* harmony import */ var _product_ProductCard__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(1729)
          /* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(8879)
          /* harmony import */ var _product_shelf_module_scss__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(3656)
          /* harmony import */ var _product_shelf_module_scss__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _product_shelf_module_scss__WEBPACK_IMPORTED_MODULE_8__
            )
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(997)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__
            )
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_4__,
            ])
          src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_4__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]
          const _excluded = ['title', 'withDivisor']

          function _objectWithoutProperties(source, excluded) {
            if (source == null) return {}
            var target = _objectWithoutPropertiesLoose(source, excluded)
            var key, i
            if (Object.getOwnPropertySymbols) {
              var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
              for (i = 0; i < sourceSymbolKeys.length; i++) {
                key = sourceSymbolKeys[i]
                if (excluded.indexOf(key) >= 0) continue
                if (!Object.prototype.propertyIsEnumerable.call(source, key))
                  continue
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

          function ProductShelf(_ref) {
            let { title, withDivisor = false } = _ref,
              variables = _objectWithoutProperties(_ref, _excluded)

            const viewedOnce = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
              false
            )
            const { ref, inView } = (0,
            react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__.useInView)()
            const products = (0,
            src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_4__ /* .useProductsQuery */.kN)(
              variables
            )
            const productEdges = products?.edges ?? []
            const { sendViewItemListEvent } = (0,
            src_sdk_analytics_hooks_useViewItemListEvent__WEBPACK_IMPORTED_MODULE_2__ /* .useViewItemListEvent */.m)(
              {
                products: productEdges,
                title,
                page: 0,
                pageSize: 0,
              }
            )
            ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
              if (inView && !viewedOnce.current && productEdges.length) {
                sendViewItemListEvent()
                viewedOnce.current = true
              }
            }, [inView, productEdges.length, sendViewItemListEvent])

            if (products?.edges.length === 0) {
              return null
            }

            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
              _Section__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
              {
                className: `layout__section ${
                  withDivisor ? 'section__divisor' : ''
                }`,
                ref: ref,
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                    'h2',
                    {
                      className: 'text__title-section layout__content',
                      children: title,
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                    'div',
                    {
                      className:
                        _product_shelf_module_scss__WEBPACK_IMPORTED_MODULE_8___default()
                          .fsProductShelf,
                      'data-fs-product-shelf': true,
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                          src_components_skeletons_ProductShelfSkeleton__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                          {
                            loading: products === undefined,
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                                'ul',
                                {
                                  'data-fs-product-shelf-items': true,
                                  className: 'layout__content',
                                  children: productEdges.map((product, idx) =>
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                                      'li',
                                      {
                                        children:
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                                            _product_ProductCard__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                            {
                                              product: product.node,
                                              index: idx + 1,
                                            }
                                          ),
                                      },
                                      `${product.node.id}`
                                    )
                                  ),
                                }
                              ),
                          }
                        ),
                    }
                  ),
                ],
              }
            )
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            ProductShelf
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 7104: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ Z: () =>
              /* reexport safe */ _ProductShelf__WEBPACK_IMPORTED_MODULE_0__.Z,
            /* harmony export */
          })
          /* harmony import */ var _ProductShelf__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(8569)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _ProductShelf__WEBPACK_IMPORTED_MODULE_0__,
            ])
          _ProductShelf__WEBPACK_IMPORTED_MODULE_0__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]

          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 9201: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ ProductShelfSkeleton_ProductShelfSkeleton,
    })

    // EXTERNAL MODULE: ./src/constants.ts
    var constants = __webpack_require__(8459)
    // EXTERNAL MODULE: ./src/components/sections/ProductShelf/product-shelf.module.scss
    var product_shelf_module = __webpack_require__(3656)
    var product_shelf_module_default =
      /*#__PURE__*/ __webpack_require__.n(product_shelf_module)
    // EXTERNAL MODULE: ./src/components/skeletons/ProductCardSkeleton/index.ts + 1 modules
    var ProductCardSkeleton = __webpack_require__(3288)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/skeletons/ProductShelfSkeleton/ProductShelfSkeleton.tsx
    function ProductShelfSkeleton({ children, loading = true }) {
      return loading
        ? /*#__PURE__*/ jsx_runtime_.jsx('ul', {
            'data-fs-product-shelf-items': true,
            className: `layout__content ${
              product_shelf_module_default().fsProductShelf
            }`,
            children: Array.from(
              {
                length: constants /* ITEMS_PER_SECTION */.K,
              },
              (_, index) =>
                /*#__PURE__*/ jsx_runtime_.jsx(
                  'li',
                  {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      ProductCardSkeleton /* default */.Z,
                      {
                        sectioned: true,
                      }
                    ),
                  },
                  String(index)
                )
            ),
          })
        : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children,
          })
    }

    /* harmony default export */ const ProductShelfSkeleton_ProductShelfSkeleton =
      ProductShelfSkeleton // CONCATENATED MODULE: ./src/components/skeletons/ProductShelfSkeleton/index.ts

    /***/
  },

  /***/ 3656: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-product-shelf': 'product-shelf_fs-product-shelf__65g4z',
      fsProductShelf: 'product-shelf_fs-product-shelf__65g4z',
    }

    /***/
  },
}
