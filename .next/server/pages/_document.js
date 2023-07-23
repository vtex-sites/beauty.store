'use strict'
;(() => {
  var exports = {}
  exports.id = 660
  exports.ids = [660]
  exports.modules = {
    /***/ 3714: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(997)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
        )

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

      const GTM_DEBUG_QUERY_STRING = 'gtm_debug'

      const useSnippet = (opts) => `${
        opts.partytownScript ? '!' : ''
      }window.location.search.includes('${GTM_DEBUG_QUERY_STRING}=')&&
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 })(window,document,'script',${JSON.stringify(
   opts.dataLayerName ?? 'dataLayer'
 )},${JSON.stringify(opts.containerId)});`
      /**
       * Google Tag Manager script adapted to be executed only when necessary.
       *
       * The first script adds the GTM script to partytown. It is meant for when regular users
       * are browsing the website, so that loading and executing it doesn't affect performance
       *
       * The second script is meant for GTM debugging. Since debugging GTM inside partytown still doesn't work,
       * it is only executed when the url includes the gtm_debug query string.
       *
       * Since the query string isn't accessible during SSR, the decision of which script should be executed
       * is bundled with the script, and that's why we need to include both. The script isn't GTM itself, but
       * the code who will, after being executed, add the GTM script to the page.
       *
       * https://developers.google.com/tag-manager/quickstart
       */

      function GoogleTagManager(props) {
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          {
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'script',
                {
                  type: 'text/partytown',
                  dangerouslySetInnerHTML: {
                    __html: useSnippet(
                      _objectSpread(
                        _objectSpread({}, props),
                        {},
                        {
                          partytownScript: true,
                        }
                      )
                    ),
                  },
                },
                'gtm.partytown'
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'script',
                {
                  type: 'text/javascript',
                  dangerouslySetInnerHTML: {
                    __html: useSnippet(
                      _objectSpread(
                        _objectSpread({}, props),
                        {},
                        {
                          partytownScript: false,
                        }
                      )
                    ),
                  },
                },
                'gtm'
              ),
            ],
          }
        )
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        GoogleTagManager

      /***/
    },

    /***/ 1696: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
            /* harmony import */ var _builder_io_partytown_react__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(4037)
            /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(6182)
            /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                _store_config__WEBPACK_IMPORTED_MODULE_1__
              )
            /* harmony import */ var _GoogleTagManager__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(3714)
            /* harmony import */ var _vtex__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(4393)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _builder_io_partytown_react__WEBPACK_IMPORTED_MODULE_0__,
              ])
            _builder_io_partytown_react__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            const isString = (obj) => typeof obj === 'string'

            const gtmContainerId =
              _store_config__WEBPACK_IMPORTED_MODULE_1___default().analytics
                ?.gtmContainerId
            const includeGTM = typeof gtmContainerId === 'string'
            const includeVTEX =
              _store_config__WEBPACK_IMPORTED_MODULE_1___default().platform ===
              'vtex'

            if (false) {
            }

            function ThirdPartyScripts() {
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                {
                  children: [
                    includeGTM &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                        _GoogleTagManager__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                        {
                          containerId: gtmContainerId,
                        }
                      ),
                    includeVTEX &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                        _vtex__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                        {}
                      ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                      _builder_io_partytown_react__WEBPACK_IMPORTED_MODULE_0__.Partytown,
                      {
                        // Variables to forward to from main to worker
                        forward: [
                          includeGTM && 'dataLayer.push',
                          includeVTEX && 'sendrc',
                        ].filter(isString),
                      },
                      'partytown'
                    ),
                  ],
                }
              )
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              ThirdPartyScripts
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 6975: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ Z: () =>
                /* reexport safe */ _ThirdPartyScripts__WEBPACK_IMPORTED_MODULE_0__.Z,
              /* harmony export */
            })
            /* harmony import */ var _ThirdPartyScripts__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(1696)
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _ThirdPartyScripts__WEBPACK_IMPORTED_MODULE_0__,
              ])
            _ThirdPartyScripts__WEBPACK_IMPORTED_MODULE_0__ = (
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

    /***/ 4393: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(997)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
        )

      function VTEX() {
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          {
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'script',
                {
                  type: 'text/partytown',
                  dangerouslySetInnerHTML: {
                    __html: `
    window.sendrc=function(en,ed){window.NavigationCapture&&window.NavigationCapture.sendEvent(en,ed)};
    `,
                  },
                },
                'vtexrc.js-init'
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'script',
                {
                  type: 'text/partytown',
                  async: true,
                  src: 'https://io.vtex.com.br/rc/rc.js',
                },
                'vtexrc.js-script'
              ),
            ],
          }
        )
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = VTEX

      /***/
    },

    /***/ 5910: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(997)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
        )

      /* eslint-disable @next/next/no-page-custom-font */
      function WebFonts() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          {}
        )
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = WebFonts

      /***/
    },

    /***/ 9820: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
              /* harmony export */
            })
            /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(6859)
            /* harmony import */ var src_fonts_WebFonts__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(5910)
            /* harmony import */ var src_components_ThirdPartyScripts__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(6975)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                src_components_ThirdPartyScripts__WEBPACK_IMPORTED_MODULE_2__,
              ])
            src_components_ThirdPartyScripts__WEBPACK_IMPORTED_MODULE_2__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            function Document() {
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                next_document__WEBPACK_IMPORTED_MODULE_0__.Html,
                {
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                      next_document__WEBPACK_IMPORTED_MODULE_0__.Head,
                      {
                        children: [
                          !process.env.DISABLE_3P_SCRIPTS &&
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                              src_components_ThirdPartyScripts__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                              {}
                            ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                            src_fonts_WebFonts__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                            {}
                          ),
                        ],
                      }
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                      'body',
                      {
                        className: 'theme',
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                            next_document__WEBPACK_IMPORTED_MODULE_0__.Main,
                            {}
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                            next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript,
                            {}
                          ),
                        ],
                      }
                    ),
                  ],
                }
              )
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              Document
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 4140: /***/ (module) => {
      module.exports = require('next/dist/server/get-page-files.js')

      /***/
    },

    /***/ 9716: /***/ (module) => {
      module.exports = require('next/dist/server/htmlescape.js')

      /***/
    },

    /***/ 6368: /***/ (module) => {
      module.exports = require('next/dist/server/utils.js')

      /***/
    },

    /***/ 6724: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/constants.js')

      /***/
    },

    /***/ 8743: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/html-context.js')

      /***/
    },

    /***/ 8524: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js')

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react')

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime')

      /***/
    },

    /***/ 4037: /***/ (module) => {
      module.exports = import('@builder.io/partytown/react')

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(0, [676, 6859, 6182], () =>
    __webpack_exec__(9820)
  )
  module.exports = __webpack_exports__
})()
