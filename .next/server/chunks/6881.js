exports.id = 6881
exports.ids = [6881]
exports.modules = {
  /***/ 8879: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ Section_Section,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/sections/Section/Section.tsx
    const _excluded = ['className']

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

    const Section = /*#__PURE__*/ (0, external_react_.forwardRef)(
      function Section(_ref, ref) {
        let { className = '' } = _ref,
          otherProps = _objectWithoutProperties(_ref, _excluded)

        return /*#__PURE__*/ jsx_runtime_.jsx(
          'section',
          _objectSpread(
            {
              ref: ref,
              className: `section ${className}`,
            },
            otherProps
          )
        )
      }
    )
    /* harmony default export */ const Section_Section = Section // CONCATENATED MODULE: ./src/components/sections/Section/index.ts

    /***/
  },

  /***/ 3288: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ ProductCardSkeleton_ProductCardSkeleton,
    })

    // EXTERNAL MODULE: ./src/components/skeletons/Shimmer/index.ts + 1 modules
    var Shimmer = __webpack_require__(6146)
    // EXTERNAL MODULE: ./src/components/skeletons/Skeleton/index.ts + 1 modules
    var Skeleton = __webpack_require__(1129)
    // EXTERNAL MODULE: ./src/components/skeletons/ProductCardSkeleton/product-card-skeleton.module.scss
    var product_card_skeleton_module = __webpack_require__(1207)
    var product_card_skeleton_module_default =
      /*#__PURE__*/ __webpack_require__.n(product_card_skeleton_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/skeletons/ProductCardSkeleton/ProductCardSkeleton.tsx
    function ProductCardSkeleton({
      bordered,
      sectioned,
      displayButton,
      variant = 'default',
    }) {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        className: product_card_skeleton_module_default().fsProductCardSkeleton,
        'data-fs-product-card-skeleton': true,
        'data-fs-product-card-skeleton-variant': variant,
        'data-fs-product-card-skeleton-bordered': bordered,
        'data-fs-product-card-skeleton-sectioned': sectioned,
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx('div', {
            'data-fs-product-card-skeleton-image': true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
              variant: 'image',
            }),
          }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-product-card-skeleton-content': true,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                variant: 'text',
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                variant: 'text',
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                variant: 'badge',
              }),
              displayButton &&
                /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                  variant: 'button',
                }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(Shimmer /* default */.Z, {}),
        ],
      })
    }

    /* harmony default export */ const ProductCardSkeleton_ProductCardSkeleton =
      ProductCardSkeleton // CONCATENATED MODULE: ./src/components/skeletons/ProductCardSkeleton/index.ts

    /***/
  },

  /***/ 6146: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ Shimmer_Shimmer,
    })

    // EXTERNAL MODULE: ./src/components/skeletons/Shimmer/shimmer.module.scss
    var shimmer_module = __webpack_require__(6013)
    var shimmer_module_default =
      /*#__PURE__*/ __webpack_require__.n(shimmer_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/skeletons/Shimmer/Shimmer.tsx
    function Shimmer() {
      return /*#__PURE__*/ jsx_runtime_.jsx('div', {
        className: shimmer_module_default().fsShimmer,
        'data-fs-shimmer-wrapper': true,
        children: /*#__PURE__*/ jsx_runtime_.jsx('div', {
          'data-fs-shimmer': true,
        }),
      })
    }

    /* harmony default export */ const Shimmer_Shimmer = Shimmer // CONCATENATED MODULE: ./src/components/skeletons/Shimmer/index.ts

    /***/
  },

  /***/ 1129: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ skeletons_Skeleton_Skeleton,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Skeleton/Skeleton.js
    var Skeleton = __webpack_require__(9229)
    // EXTERNAL MODULE: ./src/components/skeletons/Shimmer/index.ts + 1 modules
    var Shimmer = __webpack_require__(6146)
    // EXTERNAL MODULE: ./src/components/skeletons/Skeleton/skeleton.module.scss
    var skeleton_module = __webpack_require__(5189)
    var skeleton_module_default =
      /*#__PURE__*/ __webpack_require__.n(skeleton_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/skeletons/Skeleton/Skeleton.tsx
    const _excluded = ['variant', 'children', 'loading', 'shimmer']

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

    function Skeleton_Skeleton(_ref) {
      let { variant, children, loading = true, shimmer = false } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      return loading
        ? /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-skeleton-wrapper': true,
            className: skeleton_module_default().fsSkeleton,
            'data-fs-skeleton-shimmer': shimmer,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(
                Skeleton /* default */.Z,
                _objectSpread(
                  {
                    'data-fs-skeleton': true,
                    'data-fs-skeleton-variant': variant,
                  },
                  otherProps
                )
              ),
              shimmer &&
                /*#__PURE__*/ jsx_runtime_.jsx(Shimmer /* default */.Z, {}),
            ],
          })
        : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children,
          })
    }

    /* harmony default export */ const skeletons_Skeleton_Skeleton =
      Skeleton_Skeleton // CONCATENATED MODULE: ./src/components/skeletons/Skeleton/index.ts

    /***/
  },

  /***/ 8459: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ K: () => /* binding */ ITEMS_PER_SECTION,
      /* harmony export */ g: () => /* binding */ ITEMS_PER_PAGE,
      /* harmony export */
    })
    const ITEMS_PER_PAGE = 12
    const ITEMS_PER_SECTION = 5

    /***/
  },

  /***/ 2953: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ p: () => /* binding */ prefetchQuery,
            /* harmony export */
          })
          /* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5941)
          /* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(180)
          /* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(7732)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              swr__WEBPACK_IMPORTED_MODULE_0__,
              _useQuery__WEBPACK_IMPORTED_MODULE_2__,
            ])
          ;[
            swr__WEBPACK_IMPORTED_MODULE_0__,
            _useQuery__WEBPACK_IMPORTED_MODULE_2__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__
          const _excluded = ['cache']

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

          const prefetchQuery = (operationName, variables, _ref) => {
            let { cache } = _ref,
              options = _objectWithoutProperties(_ref, _excluded)

            const key = (0,
            _useQuery__WEBPACK_IMPORTED_MODULE_2__ /* .getKey */.km)(
              operationName,
              variables
            )

            if (cache.get(key)) {
              return
            }

            ;(0, swr__WEBPACK_IMPORTED_MODULE_0__.mutate)(
              key,
              (0, _request__WEBPACK_IMPORTED_MODULE_1__ /* .request */.W)(
                operationName,
                variables,
                options
              )
            )
          }
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 4867: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ BG: () =>
              /* binding */ useProductsQueryPrefetch,
            /* harmony export */ kN: () => /* binding */ useProductsQuery,
            /* harmony export */ yb: () => /* binding */ useLocalizedVariables,
            /* harmony export */
          })
          /* unused harmony export query */
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(6689)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            )
          /* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(5941)
          /* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(8459)
          /* harmony import */ var _graphql_prefetchQuery__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(2953)
          /* harmony import */ var _graphql_useQuery__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(7732)
          /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(5971)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              swr__WEBPACK_IMPORTED_MODULE_1__,
              _graphql_prefetchQuery__WEBPACK_IMPORTED_MODULE_2__,
              _graphql_useQuery__WEBPACK_IMPORTED_MODULE_3__,
            ])
          ;[
            swr__WEBPACK_IMPORTED_MODULE_1__,
            _graphql_prefetchQuery__WEBPACK_IMPORTED_MODULE_2__,
            _graphql_useQuery__WEBPACK_IMPORTED_MODULE_3__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__
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

          const query = 'ProductsQuery'

          const toArray = (x) => (Array.isArray(x) ? x : x ? [x] : [])

          const useLocalizedVariables = ({
            first,
            after,
            sort,
            term,
            selectedFacets,
          }) => {
            const { channel, locale } = (0,
            _session__WEBPACK_IMPORTED_MODULE_4__ /* .useSession */.kP)()
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
              const facets = toArray(selectedFacets)
              return {
                first:
                  first ??
                  src_constants__WEBPACK_IMPORTED_MODULE_5__ /* .ITEMS_PER_SECTION */.K,
                after: after ?? '0',
                sort: sort ?? 'score_desc',
                term: term ?? '',
                selectedFacets: [
                  ...facets,
                  {
                    key: 'channel',
                    value: channel ?? '',
                  },
                  {
                    key: 'locale',
                    value: locale,
                  },
                ],
              }
            }, [selectedFacets, first, after, sort, term, channel, locale])
          }
          /**
           * Use this hook for fetching a list of products, like in search results and shelves
           */

          const useProductsQuery = (variables, options) => {
            const localizedVariables = useLocalizedVariables(variables)
            const { data } = (0,
            _graphql_useQuery__WEBPACK_IMPORTED_MODULE_3__ /* .useQuery */.aM)(
              query,
              localizedVariables,
              _objectSpread(
                {
                  fallbackData: null,
                  suspense: true,
                },
                options
              )
            )
            return data?.search?.products
          }
          const useProductsQueryPrefetch = (variables, options) => {
            const localizedVariables = useLocalizedVariables(variables)
            const { cache } = (0,
            swr__WEBPACK_IMPORTED_MODULE_1__.useSWRConfig)()
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
              () =>
                (0,
                _graphql_prefetchQuery__WEBPACK_IMPORTED_MODULE_2__ /* .prefetchQuery */.p)(
                  query,
                  localizedVariables,
                  _objectSpread(
                    {
                      cache,
                    },
                    options
                  )
                ),
              [localizedVariables, cache, options]
            )
          }
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 1207: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-product-card-skeleton':
        'product-card-skeleton_fs-product-card-skeleton__fPdHb',
      fsProductCardSkeleton:
        'product-card-skeleton_fs-product-card-skeleton__fPdHb',
    }

    /***/
  },

  /***/ 6013: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-shimmer': 'shimmer_fs-shimmer__f_bCv',
      fsShimmer: 'shimmer_fs-shimmer__f_bCv',
      loading: 'shimmer_loading__puIUN',
    }

    /***/
  },

  /***/ 5189: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-skeleton': 'skeleton_fs-skeleton__7QcBX',
      fsSkeleton: 'skeleton_fs-skeleton__7QcBX',
    }

    /***/
  },
}
