exports.id = 8872
exports.ids = [8872]
exports.modules = {
  /***/ 2834: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var src_components_ui_Tiles__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(599)
          /* harmony import */ var src_components_product_ProductCard__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(1729)
          /* harmony import */ var src_components_skeletons_ProductTilesSkeleton__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(638)
          /* harmony import */ var src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(4867)
          /* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(8879)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(997)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__
            )
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_6__,
            ])
          src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_6__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]
          const _excluded = ['title']

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

          const NUMBER_ITEMS_TO_EXPAND_FIRST = 3
          const NUMBER_ITEMS_TO_EXPAND_FIRST_TWO = 2

          const getRatio = (products, idx) => {
            const expandsFirstTile =
              products === NUMBER_ITEMS_TO_EXPAND_FIRST && idx === 0
            const expandsFirstTwoTile =
              products === NUMBER_ITEMS_TO_EXPAND_FIRST_TWO &&
              (idx === 0 || idx === 1)

            if (expandsFirstTile || expandsFirstTwoTile) {
              return 4 / 3
            }

            return 3 / 4
          }

          const ProductTiles = (_ref) => {
            let { title } = _ref,
              variables = _objectWithoutProperties(_ref, _excluded)

            const viewedOnce = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
              false
            )
            const { ref, inView } = (0,
            react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__.useInView)()
            const products = (0,
            src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_6__ /* .useProductsQuery */.kN)(
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
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
              _Section__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
              {
                className: 'layout__section layout__content',
                ref: ref,
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                    'h2',
                    {
                      className: 'text__title-section',
                      children: title,
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                    'div',
                    {
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                          src_components_skeletons_ProductTilesSkeleton__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                          {
                            variant: 'wide',
                            loading: !products,
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                src_components_ui_Tiles__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                                {
                                  children: productEdges.map((product, idx) =>
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                      src_components_ui_Tiles__WEBPACK_IMPORTED_MODULE_3__ /* .Tile */.n,
                                      {
                                        children:
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                            src_components_product_ProductCard__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                                            {
                                              'data-testid': 'tile-card',
                                              product: product.node,
                                              index: idx + 1,
                                              variant: 'wide',
                                              aspectRatio: getRatio(
                                                productEdges.length,
                                                idx
                                              ),
                                            }
                                          ),
                                      },
                                      product.node.id
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
            ProductTiles
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 8872: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
              /* reexport safe */ _ProductTiles__WEBPACK_IMPORTED_MODULE_0__.Z,
            /* harmony export */
          })
          /* harmony import */ var _ProductTiles__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(2834)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _ProductTiles__WEBPACK_IMPORTED_MODULE_0__,
            ])
          _ProductTiles__WEBPACK_IMPORTED_MODULE_0__ = (
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

  /***/ 638: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      s: () => /* reexport */ ProductTileSkeleton_ProductTileSkeleton,
      Z: () => /* reexport */ ProductTilesSkeleton_ProductTilesSkeleton,
    })

    // EXTERNAL MODULE: ./src/components/ui/Tiles/index.ts + 1 modules
    var Tiles = __webpack_require__(599)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/skeletons/ProductTilesSkeleton/ProductTilesSkeleton.tsx
    // TODO: // Replace it when items number become dynamically defined

    const DEFAULT_ITEMS_NUMBER = 3

    function ProductTilesSkeleton({
      children,
      loading = true,
      variant = 'default',
    }) {
      return loading
        ? /*#__PURE__*/ jsx_runtime_.jsx(Tiles /* default */.Z, {
            children: Array.from(
              {
                length: DEFAULT_ITEMS_NUMBER,
              },
              (_, index) =>
                /*#__PURE__*/ jsx_runtime_.jsx(
                  Tiles /* Tile */.n,
                  {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      ProductTileSkeleton_ProductTileSkeleton,
                      {
                        index: index + 1,
                        variant: variant,
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

    /* harmony default export */ const ProductTilesSkeleton_ProductTilesSkeleton =
      ProductTilesSkeleton
    // EXTERNAL MODULE: ./src/components/skeletons/Skeleton/index.ts + 1 modules
    var Skeleton = __webpack_require__(1129)
    // EXTERNAL MODULE: ./src/components/skeletons/Shimmer/index.ts + 1 modules
    var Shimmer = __webpack_require__(6146)
    // EXTERNAL MODULE: ./src/components/skeletons/ProductTilesSkeleton/ProductTileSkeleton/product-tile-skeleton.module.scss
    var product_tile_skeleton_module = __webpack_require__(2731)
    var product_tile_skeleton_module_default =
      /*#__PURE__*/ __webpack_require__.n(product_tile_skeleton_module) // CONCATENATED MODULE: ./src/components/skeletons/ProductTilesSkeleton/ProductTileSkeleton/ProductTileSkeleton.tsx
    function ProductTileSkeleton({ index, bordered, variant = 'default' }) {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        'data-fs-product-tile-skeleton': true,
        className: product_tile_skeleton_module_default().fsProductTileSkeleton,
        'data-fs-product-tile-skeleton-index': index,
        'data-fs-product-tile-skeleton-variant': variant,
        'data-fs-product-tile-skeleton-bordered': bordered,
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx('div', {
            'data-fs-product-tile-skeleton-image': true,
            'data-fs-product-tile-skeleton-index': index,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
              variant: 'image',
            }),
          }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-product-tile-skeleton-content': true,
            'data-fs-product-tile-skeleton-index': index,
            children: [
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                'data-fs-product-tile-skeleton-text': true,
                'data-fs-product-tile-skeleton-index': index,
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                    variant: 'text',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                    'data-fs-product-tile-skeleton-price': true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      Skeleton /* default */.Z,
                      {
                        variant: 'text',
                      }
                    ),
                  }),
                ],
              }),
              /*#__PURE__*/ jsx_runtime_.jsx('div', {
                'data-fs-product-tile-skeleton-badge': true,
                'data-fs-product-tile-skeleton-index': index,
                children: /*#__PURE__*/ jsx_runtime_.jsx(
                  Skeleton /* default */.Z,
                  {
                    variant: 'badge',
                  }
                ),
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(Shimmer /* default */.Z, {}),
        ],
      })
    }

    /* harmony default export */ const ProductTileSkeleton_ProductTileSkeleton =
      ProductTileSkeleton // CONCATENATED MODULE: ./src/components/skeletons/ProductTilesSkeleton/ProductTileSkeleton/index.ts // CONCATENATED MODULE: ./src/components/skeletons/ProductTilesSkeleton/index.ts

    /***/
  },

  /***/ 599: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      n: () => /* reexport */ Tile /* default */.Z,
      Z: () => /* reexport */ ui_Tiles_Tiles,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/organisms/Tiles/Tiles.js
    var Tiles = __webpack_require__(4961)
    // EXTERNAL MODULE: ./src/components/ui/Tiles/tiles.module.scss
    var tiles_module = __webpack_require__(9728)
    var tiles_module_default = /*#__PURE__*/ __webpack_require__.n(tiles_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Tiles/Tiles.tsx
    const _excluded = ['children']

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

    const Tiles_Tiles = (_ref) => {
      let { children } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      return /*#__PURE__*/ jsx_runtime_.jsx(
        Tiles /* default */.Z,
        _objectSpread(
          _objectSpread(
            {
              className: tiles_module_default().fsTiles,
            },
            otherProps
          ),
          {},
          {
            children: children,
          }
        )
      )
    }

    /* harmony default export */ const ui_Tiles_Tiles = Tiles_Tiles
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/organisms/Tiles/Tile.js
    var Tile = __webpack_require__(1783) // CONCATENATED MODULE: ./src/components/ui/Tiles/index.ts

    /***/
  },

  /***/ 2731: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-product-tile-skeleton':
        'product-tile-skeleton_fs-product-tile-skeleton___HloN',
      fsProductTileSkeleton:
        'product-tile-skeleton_fs-product-tile-skeleton___HloN',
    }

    /***/
  },

  /***/ 9728: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-tiles': 'tiles_fs-tiles__N15Au',
      fsTiles: 'tiles_fs-tiles__N15Au',
    }

    /***/
  },
}
