;(() => {
  var exports = {}
  exports.id = 330
  exports.ids = [330]
  exports.modules = {
    /***/ 8570: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* reexport */ ScrollToTopButton_ScrollToTopButton,
      })

      // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
      var Icon = __webpack_require__(2478)
      // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
      var Button = __webpack_require__(1310)
      // EXTERNAL MODULE: ./src/components/sections/Section/index.ts + 1 modules
      var Section = __webpack_require__(8879)
      // EXTERNAL MODULE: ./src/components/sections/ScrollToTopButton/scroll-to-top-button.module.scss
      var scroll_to_top_button_module = __webpack_require__(9856)
      var scroll_to_top_button_module_default =
        /*#__PURE__*/ __webpack_require__.n(scroll_to_top_button_module)
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/sections/ScrollToTopButton/ScrollToTopButton.tsx
      function ScrollToTopButton({
        text = 'Scroll to top',
        icon = /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
          name: 'CaretUp',
          width: 16,
          height: 16,
          weight: 'bold',
        }),
        iconPosition = 'left',
      }) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Section /* default */.Z, {
          className: scroll_to_top_button_module_default().fsScrollToTopButton,
          children: /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
            variant: 'secondary',
            icon: icon,
            iconPosition: iconPosition,
            onClick: () => window.scrollTo(0, 0),
            children: text,
          }),
        })
      }

      /* harmony default export */ const ScrollToTopButton_ScrollToTopButton =
        ScrollToTopButton // CONCATENATED MODULE: ./src/components/sections/ScrollToTopButton/index.ts

      /***/
    },

    /***/ 1875: /***/ (module, __webpack_exports__, __webpack_require__) => {
      'use strict'
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__)
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */ getStaticPaths: () =>
                /* binding */ getStaticPaths,
              /* harmony export */ getStaticProps: () =>
                /* binding */ getStaticProps,
              /* harmony export */
            })
            /* harmony import */ var _faststore_api__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(5363)
            /* harmony import */ var _faststore_api__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                _faststore_api__WEBPACK_IMPORTED_MODULE_0__
              )
            /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_15__ =
              __webpack_require__(2888)
            /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_16__ =
              __webpack_require__(3364)
            /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_17__ =
              __webpack_require__(6321)
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(6641)
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_seo__WEBPACK_IMPORTED_MODULE_1__
              )
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(1853)
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_router__WEBPACK_IMPORTED_MODULE_2__
              )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6689)
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_3__
              )
            /* harmony import */ var src_components_sections_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(3769)
            /* harmony import */ var src_components_sections_Hero__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(9712)
            /* harmony import */ var src_components_sections_ProductGallery__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(2618)
            /* harmony import */ var src_components_sections_ProductShelf__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(7104)
            /* harmony import */ var src_components_sections_ScrollToTopButton__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(8570)
            /* harmony import */ var src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(2478)
            /* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_18__ =
              __webpack_require__(8459)
            /* harmony import */ var src_sdk_search_state__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(1523)
            /* harmony import */ var src_sdk_tests_mark__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(2541)
            /* harmony import */ var src_server__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(9685)
            /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(6182)
            /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_13___default =
              /*#__PURE__*/ __webpack_require__.n(
                _store_config__WEBPACK_IMPORTED_MODULE_13__
              )
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                src_components_sections_ProductGallery__WEBPACK_IMPORTED_MODULE_6__,
                src_components_sections_ProductShelf__WEBPACK_IMPORTED_MODULE_7__,
                src_server__WEBPACK_IMPORTED_MODULE_12__,
              ])
            ;[
              src_components_sections_ProductGallery__WEBPACK_IMPORTED_MODULE_6__,
              src_components_sections_ProductShelf__WEBPACK_IMPORTED_MODULE_7__,
              src_server__WEBPACK_IMPORTED_MODULE_12__,
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object)
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object)
                enumerableOnly &&
                  (symbols = symbols.filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(
                      object,
                      sym
                    ).enumerable
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

            const useSearchParams = ({ collection }) => {
              const selectedFacets = collection?.meta.selectedFacets
              const { asPath } = (0,
              next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)()
              const hrefState = (0,
              react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
                const newState = (0,
                _faststore_sdk__WEBPACK_IMPORTED_MODULE_15__ /* .parse */.Q)(
                  new URL(asPath, 'http://localhost')
                ) // In case we are in an incomplete url

                if (newState.selectedFacets.length === 0) {
                  newState.selectedFacets = selectedFacets
                }

                return (0,
                _faststore_sdk__WEBPACK_IMPORTED_MODULE_16__ /* ["default"] */.Z)(
                  newState
                ).href
              }, [asPath, selectedFacets])
              return (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(
                () =>
                  (0,
                  _faststore_sdk__WEBPACK_IMPORTED_MODULE_15__ /* .parse */.Q)(
                    new URL(hrefState)
                  ),
                [hrefState]
              )
            }

            function Page(props) {
              const { collection } = props
              const router = (0,
              next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)()
              const applySearchState = (0,
              src_sdk_search_state__WEBPACK_IMPORTED_MODULE_10__ /* .useApplySearchState */.j)()
              const searchParams = useSearchParams(props)
              const { page } = searchParams
              const title =
                collection?.seo.title ??
                _store_config__WEBPACK_IMPORTED_MODULE_13___default().seo.title
              const description =
                collection?.seo.description ??
                _store_config__WEBPACK_IMPORTED_MODULE_13___default().seo.title
              const pageQuery = page !== 0 ? `?page=${page}` : ''
              const [pathname] = router.asPath.split('?')
              const canonical = `${
                _store_config__WEBPACK_IMPORTED_MODULE_13___default().storeUrl
              }${pathname}${pageQuery}`
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(
                _faststore_sdk__WEBPACK_IMPORTED_MODULE_17__ /* .Provider */.z,
                _objectSpread(
                  _objectSpread(
                    {
                      onChange: applySearchState,
                      itemsPerPage:
                        src_constants__WEBPACK_IMPORTED_MODULE_18__ /* .ITEMS_PER_PAGE */.g,
                    },
                    searchParams
                  ),
                  {},
                  {
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                        next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo,
                        {
                          title: title,
                          description: description,
                          titleTemplate:
                            _store_config__WEBPACK_IMPORTED_MODULE_13___default()
                              .seo.titleTemplate,
                          canonical: canonical,
                          openGraph: {
                            type: 'website',
                            title,
                            description,
                          },
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                        next_seo__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbJsonLd,
                        {
                          itemListElements:
                            collection?.breadcrumbList.itemListElement ?? [],
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                        src_components_sections_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                        {
                          breadcrumbList:
                            collection?.breadcrumbList.itemListElement,
                          name: title,
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                        src_components_sections_Hero__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                        {
                          variant: 'secondary',
                          title: title,
                          subtitle: `All the amazing ${title} from the brands we partner with.`,
                          imageSrc:
                            'https://storeframework.vtexassets.com/arquivos/ids/190897/Photo.jpg',
                          imageAlt: 'Quest 2 Controller on a table',
                          icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                            src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_9__ /* ["default"] */.Z,
                            {
                              name: 'Headphones',
                              width: 48,
                              height: 48,
                              weight: 'thin',
                            }
                          ),
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                        src_components_sections_ProductGallery__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                        {
                          title: title,
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                        src_components_sections_ProductShelf__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
                        {
                          first:
                            src_constants__WEBPACK_IMPORTED_MODULE_18__ /* .ITEMS_PER_SECTION */.K,
                          sort: 'score_desc',
                          title: 'You might also like',
                          withDivisor: true,
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                        src_components_sections_ScrollToTopButton__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.Z,
                        {}
                      ),
                    ],
                  }
                )
              )
            }

            const query = 'ServerCollectionPageQuery'
            const getStaticProps = async ({ params }) => {
              const { data, errors = [] } = await (0,
              src_server__WEBPACK_IMPORTED_MODULE_12__ /* .execute */.h)({
                variables: {
                  slug: params?.slug.join('/') ?? '',
                },
                operationName: query,
              })
              const notFound = errors.find(
                _faststore_api__WEBPACK_IMPORTED_MODULE_0__.isNotFoundError
              )

              if (notFound) {
                return {
                  notFound: true,
                }
              }

              if (errors.length > 0) {
                throw errors[0]
              }

              return {
                props: data,
              }
            }
            const getStaticPaths = async () => {
              return {
                paths: [],
                fallback: 'blocking',
              }
            }
            Page.displayName = 'Page'
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
            src_sdk_tests_mark__WEBPACK_IMPORTED_MODULE_11__ /* .mark */.B)(
              Page
            )
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 9856: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-scroll-to-top-button':
          'scroll-to-top-button_fs-scroll-to-top-button__KrFt7',
        fsScrollToTopButton:
          'scroll-to-top-button_fs-scroll-to-top-button__KrFt7',
      }

      /***/
    },

    /***/ 5363: /***/ (module) => {
      'use strict'
      module.exports = require('@faststore/api')

      /***/
    },

    /***/ 5490: /***/ (module) => {
      'use strict'
      module.exports = require('@faststore/graphql-utils')

      /***/
    },

    /***/ 7343: /***/ (module) => {
      'use strict'
      module.exports = require('graphql')

      /***/
    },

    /***/ 3430: /***/ (module) => {
      'use strict'
      module.exports = require('idb-keyval')

      /***/
    },

    /***/ 6641: /***/ (module) => {
      'use strict'
      module.exports = require('next-seo')

      /***/
    },

    /***/ 3280: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/app-router-context.js')

      /***/
    },

    /***/ 2796: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/head-manager-context.js')

      /***/
    },

    /***/ 3539: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/i18n/detect-domain-locale.js')

      /***/
    },

    /***/ 4014: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js')

      /***/
    },

    /***/ 8524: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/is-plain-object.js')

      /***/
    },

    /***/ 8020: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/mitt.js')

      /***/
    },

    /***/ 4406: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/page-path/denormalize-page-path.js')

      /***/
    },

    /***/ 4964: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router-context.js')

      /***/
    },

    /***/ 3431: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/add-locale.js')

      /***/
    },

    /***/ 1751: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/add-path-prefix.js')

      /***/
    },

    /***/ 6220: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/compare-states.js')

      /***/
    },

    /***/ 299: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/format-next-pathname-info.js')

      /***/
    },

    /***/ 3938: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/format-url.js')

      /***/
    },

    /***/ 9565: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js')

      /***/
    },

    /***/ 5789: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/get-next-pathname-info.js')

      /***/
    },

    /***/ 1897: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/is-bot.js')

      /***/
    },

    /***/ 1428: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js')

      /***/
    },

    /***/ 8854: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/parse-path.js')

      /***/
    },

    /***/ 1292: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js')

      /***/
    },

    /***/ 4567: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/path-has-prefix.js')

      /***/
    },

    /***/ 979: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js')

      /***/
    },

    /***/ 3297: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/remove-trailing-slash.js')

      /***/
    },

    /***/ 6052: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js')

      /***/
    },

    /***/ 4226: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js')

      /***/
    },

    /***/ 5052: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js')

      /***/
    },

    /***/ 9232: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/utils.js')

      /***/
    },

    /***/ 968: /***/ (module) => {
      'use strict'
      module.exports = require('next/head')

      /***/
    },

    /***/ 1853: /***/ (module) => {
      'use strict'
      module.exports = require('next/router')

      /***/
    },

    /***/ 6689: /***/ (module) => {
      'use strict'
      module.exports = require('react')

      /***/
    },

    /***/ 6405: /***/ (module) => {
      'use strict'
      module.exports = require('react-dom')

      /***/
    },

    /***/ 9785: /***/ (module) => {
      'use strict'
      module.exports = require('react-intersection-observer')

      /***/
    },

    /***/ 997: /***/ (module) => {
      'use strict'
      module.exports = require('react/jsx-runtime')

      /***/
    },

    /***/ 3823: /***/ (module) => {
      'use strict'
      module.exports = require('tabbable')

      /***/
    },

    /***/ 9664: /***/ (module) => {
      'use strict'
      module.exports = import('@envelop/core')

      /***/
    },

    /***/ 7886: /***/ (module) => {
      'use strict'
      module.exports = import('@envelop/graphql-jit')

      /***/
    },

    /***/ 4656: /***/ (module) => {
      'use strict'
      module.exports = import('@envelop/parser-cache')

      /***/
    },

    /***/ 6093: /***/ (module) => {
      'use strict'
      module.exports = import('@envelop/validation-cache')

      /***/
    },

    /***/ 5941: /***/ (module) => {
      'use strict'
      module.exports = import('swr')

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [
      676, 3132, 4221, 6595, 354, 2457, 3924, 889, 7826, 6182, 9504, 702, 7821,
      1224, 7732, 9854, 6881, 4310, 367, 6923, 7104, 9840, 4371, 350, 9712,
    ],
    () => __webpack_exec__(1875)
  )
  module.exports = __webpack_exports__
})()
