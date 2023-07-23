'use strict'
;(() => {
  var exports = {}
  exports.id = 5405
  exports.ids = [5405]
  exports.modules = {
    /***/ 2178: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(6689)
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

      const Incentive = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
        function Incentive(
          { testId = 'store-incentive', children, ...otherProps },
          ref
        ) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            Object.assign(
              { ref: ref, 'data-fs-incentive': true, 'data-testid': testId },
              otherProps
            ),
            children
          )
        }
      )
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Incentive
      //# sourceMappingURL=Incentive.js.map

      /***/
    },

    /***/ 8646: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      /* harmony import */ var _Incentives__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(5247)
      /* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(8879)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(997)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__
        )

      function IncentivesHeader({ incentives }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
          _Section__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
          {
            children:
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                _Incentives__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                {
                  incentives: incentives,
                  colored: true,
                }
              ),
          }
        )
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        IncentivesHeader

      /***/
    },

    /***/ 3639: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
              /* harmony export */ getStaticProps: () =>
                /* binding */ getStaticProps,
              /* harmony export */
            })
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(6641)
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_seo__WEBPACK_IMPORTED_MODULE_0__
              )
            /* harmony import */ var src_components_cms_RenderPageSections__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(701)
            /* harmony import */ var src_components_sections_BannerText__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(7100)
            /* harmony import */ var src_components_sections_Hero__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(9712)
            /* harmony import */ var src_components_sections_Incentives_IncentivesHeader__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(8646)
            /* harmony import */ var src_components_sections_Newsletter__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(7191)
            /* harmony import */ var src_components_sections_ProductShelf__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(7104)
            /* harmony import */ var src_components_sections_ProductTiles__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(8872)
            /* harmony import */ var src_sdk_tests_mark__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(2541)
            /* harmony import */ var src_server_cms__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(5764)
            /* harmony import */ var src_customizations__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(777)
            /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(6182)
            /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_11___default =
              /*#__PURE__*/ __webpack_require__.n(
                _store_config__WEBPACK_IMPORTED_MODULE_11__
              )
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                src_components_sections_Newsletter__WEBPACK_IMPORTED_MODULE_5__,
                src_components_sections_ProductShelf__WEBPACK_IMPORTED_MODULE_6__,
                src_components_sections_ProductTiles__WEBPACK_IMPORTED_MODULE_7__,
              ])
            ;[
              src_components_sections_Newsletter__WEBPACK_IMPORTED_MODULE_5__,
              src_components_sections_ProductShelf__WEBPACK_IMPORTED_MODULE_6__,
              src_components_sections_ProductTiles__WEBPACK_IMPORTED_MODULE_7__,
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

            /**
             * Sections: Components imported from each store's custom components and '../components/sections'.
             * Do not import or render components from any other folder in here.
             */

            const COMPONENTS = _objectSpread(
              {
                Hero: src_components_sections_Hero__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                BannerText:
                  src_components_sections_BannerText__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                IncentivesHeader:
                  src_components_sections_Incentives_IncentivesHeader__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                ProductShelf:
                  src_components_sections_ProductShelf__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                ProductTiles:
                  src_components_sections_ProductTiles__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
                Newsletter:
                  src_components_sections_Newsletter__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
              },
              src_customizations__WEBPACK_IMPORTED_MODULE_10__ /* ["default"] */.Z
            )

            function Page({ sections, settings }) {
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(
                      next_seo__WEBPACK_IMPORTED_MODULE_0__.NextSeo,
                      {
                        title: settings.seo.title,
                        description: settings.seo.description,
                        titleTemplate:
                          _store_config__WEBPACK_IMPORTED_MODULE_11___default()
                            .seo.titleTemplate,
                        canonical:
                          settings.seo.canonical ??
                          _store_config__WEBPACK_IMPORTED_MODULE_11___default()
                            .storeUrl,
                        openGraph: {
                          type: 'website',
                          url: _store_config__WEBPACK_IMPORTED_MODULE_11___default()
                            .storeUrl,
                          title: settings.seo.title,
                          description: settings.seo.description,
                        },
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(
                      next_seo__WEBPACK_IMPORTED_MODULE_0__.SiteLinksSearchBoxJsonLd,
                      {
                        url: _store_config__WEBPACK_IMPORTED_MODULE_11___default()
                          .storeUrl,
                        potentialActions: [
                          {
                            target: `${
                              _store_config__WEBPACK_IMPORTED_MODULE_11___default()
                                .storeUrl
                            }/s/?q`,
                            queryInput: 'search_term_string',
                          },
                        ],
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(
                      src_components_cms_RenderPageSections__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                      {
                        sections: sections,
                        components: COMPONENTS,
                      }
                    ),
                  ],
                }
              )
            }

            const getStaticProps = async ({ previewData }) => {
              const page = await (0,
              src_server_cms__WEBPACK_IMPORTED_MODULE_9__ /* .getPage */.f)(
                _objectSpread(
                  _objectSpread(
                    {},
                    previewData?.contentType === 'home' && previewData
                  ),
                  {},
                  {
                    contentType: 'home',
                  }
                )
              )
              return {
                props: page,
              }
            }
            Page.displayName = 'Page'
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
            src_sdk_tests_mark__WEBPACK_IMPORTED_MODULE_8__ /* .mark */.B)(Page)
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 5490: /***/ (module) => {
      module.exports = require('@faststore/graphql-utils')

      /***/
    },

    /***/ 6676: /***/ (module) => {
      module.exports = require('@vtex/client-cms')

      /***/
    },

    /***/ 3430: /***/ (module) => {
      module.exports = require('idb-keyval')

      /***/
    },

    /***/ 6641: /***/ (module) => {
      module.exports = require('next-seo')

      /***/
    },

    /***/ 3280: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/app-router-context.js')

      /***/
    },

    /***/ 2796: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/head-manager-context.js')

      /***/
    },

    /***/ 3539: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/detect-domain-locale.js')

      /***/
    },

    /***/ 4014: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js')

      /***/
    },

    /***/ 8524: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js')

      /***/
    },

    /***/ 8020: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/mitt.js')

      /***/
    },

    /***/ 4406: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/page-path/denormalize-page-path.js')

      /***/
    },

    /***/ 4964: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router-context.js')

      /***/
    },

    /***/ 3431: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/add-locale.js')

      /***/
    },

    /***/ 1751: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/add-path-prefix.js')

      /***/
    },

    /***/ 6220: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/compare-states.js')

      /***/
    },

    /***/ 299: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/format-next-pathname-info.js')

      /***/
    },

    /***/ 3938: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/format-url.js')

      /***/
    },

    /***/ 9565: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js')

      /***/
    },

    /***/ 5789: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-next-pathname-info.js')

      /***/
    },

    /***/ 1897: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-bot.js')

      /***/
    },

    /***/ 1428: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js')

      /***/
    },

    /***/ 8854: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-path.js')

      /***/
    },

    /***/ 1292: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js')

      /***/
    },

    /***/ 4567: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/path-has-prefix.js')

      /***/
    },

    /***/ 979: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js')

      /***/
    },

    /***/ 3297: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/remove-trailing-slash.js')

      /***/
    },

    /***/ 6052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js')

      /***/
    },

    /***/ 4226: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js')

      /***/
    },

    /***/ 5052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js')

      /***/
    },

    /***/ 9232: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/utils.js')

      /***/
    },

    /***/ 968: /***/ (module) => {
      module.exports = require('next/head')

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react')

      /***/
    },

    /***/ 9785: /***/ (module) => {
      module.exports = require('react-intersection-observer')

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime')

      /***/
    },

    /***/ 5941: /***/ (module) => {
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
      676, 3132, 6595, 354, 462, 1559, 7826, 6182, 9504, 702, 7821, 1224, 7732,
      9854, 6881, 4310, 7104, 8194, 8872, 9712, 5247,
    ],
    () => __webpack_exec__(3639)
  )
  module.exports = __webpack_exports__
})()
