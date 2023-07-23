exports.id = 8194
exports.ids = [8194]
exports.modules = {
  /***/ 701: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ cms_RenderPageSections,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689) // CONCATENATED MODULE: ./src/components/cms/SectionBoundary.tsx
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

    class SectionBoundary extends external_react_.Component {
      constructor(...args) {
        super(...args)

        _defineProperty(this, 'state', {
          hasError: false,
          error: null,
        })
      }

      static getDerivedStateFromError(error) {
        return {
          hasError: true,
          error,
        }
      }

      componentDidCatch(error, errorInfo) {
        console.error(
          `Error while rendering section ${this.props.name} with:\n${error.message} ${errorInfo.componentStack}`
        ) // TODO: Add fetch in here so we can know which sections are failing on our dashboard
      }

      render() {
        if (this.state.hasError && true) {
          return null
        }

        return this.props.children
      }
    }

    /* harmony default export */ const cms_SectionBoundary = SectionBoundary
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/cms/RenderPageSections.tsx
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
              RenderPageSections_defineProperty(target, key, source[key])
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

    function RenderPageSections_defineProperty(obj, key, value) {
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

    /* eslint-disable @typescript-eslint/no-explicit-any */

    const RenderPageSections = ({ sections = [], context, components }) =>
      /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: sections.map(({ name, data }, index) => {
          const Component = components[name]

          if (!Component) {
            console.info(
              `Could not find component for block ${name}. Add a new component for this block or remove it from the CMS`
            )
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
          }

          return /*#__PURE__*/ jsx_runtime_.jsx(
            cms_SectionBoundary,
            {
              name: name,
              children: /*#__PURE__*/ jsx_runtime_.jsx(
                Component,
                _objectSpread(
                  _objectSpread({}, data),
                  {},
                  {
                    context: context,
                  }
                )
              ),
            },
            `cms-section-${index}`
          )
        }),
      })

    /* harmony default export */ const cms_RenderPageSections =
      RenderPageSections

    /***/
  },

  /***/ 7100: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ BannerText_BannerText,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Banner/Banner.js
    var Banner = __webpack_require__(8232)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Banner/BannerContent.js
    var BannerContent = __webpack_require__(8839)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Banner/BannerLink.js
    var BannerLink = __webpack_require__(9349)
    // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
    var Button = __webpack_require__(1310)
    // EXTERNAL MODULE: ./src/components/sections/Section/index.ts + 1 modules
    var Section = __webpack_require__(8879)
    // EXTERNAL MODULE: ./src/components/sections/BannerText/banner-text.module.scss
    var banner_text_module = __webpack_require__(1133)
    var banner_text_module_default =
      /*#__PURE__*/ __webpack_require__.n(banner_text_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/sections/BannerText/BannerText.tsx
    function BannerText({
      title,
      caption,
      actionPath,
      actionLabel,
      variant = 'primary',
      colorVariant = 'main',
    }) {
      return /*#__PURE__*/ jsx_runtime_.jsx(Section /* default */.Z, {
        className: 'layout__section',
        children: /*#__PURE__*/ jsx_runtime_.jsx(Banner /* default */.Z, {
          className: banner_text_module_default().fsBannerText,
          'data-fs-banner-text': true,
          'data-fs-banner-text-variant': variant,
          'data-fs-banner-text-color-variant': colorVariant,
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
            BannerContent /* default */.Z,
            {
              'data-fs-banner-text-content': true,
              className: 'layout__content',
              children: [
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  'data-fs-banner-text-heading': true,
                  'data-fs-banner-text-color-variant': colorVariant,
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                      children: title,
                    }),
                    variant === 'secondary' &&
                      caption &&
                      /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        children: caption,
                      }),
                  ],
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BannerLink /* default */.Z, {
                  'data-fs-banner-text-link': true,
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    Button /* ButtonLink */.ZP,
                    {
                      href: actionPath,
                      variant: variant,
                      inverse: colorVariant === 'main',
                      children: actionLabel,
                    }
                  ),
                }),
              ],
            }
          ),
        }),
      })
    }

    /* harmony default export */ const BannerText_BannerText = BannerText // CONCATENATED MODULE: ./src/components/sections/BannerText/index.ts

    /***/
  },

  /***/ 8170: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var _faststore_ui__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(2223)
          /* harmony import */ var src_sdk_ui_Provider__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(8869)
          /* harmony import */ var src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(2478)
          /* harmony import */ var src_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(1310)
          /* harmony import */ var src_components_ui_Link__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(1093)
          /* harmony import */ var src_components_ui_InputText__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(1224)
          /* harmony import */ var src_sdk_newsletter_useNewsletter__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(5822)
          /* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(8879)
          /* harmony import */ var _newsletter_module_scss__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(5192)
          /* harmony import */ var _newsletter_module_scss__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              _newsletter_module_scss__WEBPACK_IMPORTED_MODULE_9__
            )
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(997)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__
            )
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_newsletter_useNewsletter__WEBPACK_IMPORTED_MODULE_6__,
            ])
          src_sdk_newsletter_useNewsletter__WEBPACK_IMPORTED_MODULE_6__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]
          const _excluded = ['title', 'description', 'card', 'lite']

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

          const Newsletter = /*#__PURE__*/ (0,
          react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Newsletter(
            _ref,
            ref
          ) {
            let { title, description, card = false, lite = false } = _ref,
              otherProps = _objectWithoutProperties(_ref, _excluded)

            const { subscribeUser, loading, data } = (0,
            src_sdk_newsletter_useNewsletter__WEBPACK_IMPORTED_MODULE_6__ /* .useNewsletter */.u)()
            const nameInputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
              null
            )
            const emailInputRef = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null)
            const { pushToast } = (0,
            src_sdk_ui_Provider__WEBPACK_IMPORTED_MODULE_1__ /* .useUI */.l)()

            const handleSubmit = (event) => {
              event.preventDefault()
              subscribeUser({
                data: {
                  name: nameInputRef.current?.value ?? '',
                  email: emailInputRef.current?.value ?? '',
                },
              })

              if (data?.subscribeToNewsletter?.id) {
                pushToast({
                  title: 'Hooray!',
                  message: 'Thank for your subscription.',
                  status: 'INFO',
                  icon: 'CircleWavyCheck',
                })
              } else {
                pushToast({
                  title: 'Oops.',
                  message: 'Something went wrong. Please Try again.',
                  status: 'ERROR',
                  icon: 'CircleWavyWarning',
                })
              }

              const formElement = event.currentTarget
              formElement.reset()
            }

            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
              _Section__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
              {
                'data-fs-newsletter': card ? 'card' : '',
                className: `layout__section ${
                  _newsletter_module_scss__WEBPACK_IMPORTED_MODULE_9___default()
                    .fsNewsletter
                }`,
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                  _faststore_ui__WEBPACK_IMPORTED_MODULE_10__ /* ["default"] */.Z,
                  _objectSpread(
                    _objectSpread(
                      {
                        'data-fs-newsletter-form': true,
                        ref: ref,
                        onSubmit: handleSubmit,
                      },
                      otherProps
                    ),
                    {},
                    {
                      className: 'layout__content',
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                          'header',
                          {
                            'data-fs-newsletter-header': true,
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                                'h3',
                                {
                                  children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                      src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                                      {
                                        name: 'Envelop',
                                        width: 32,
                                        height: 32,
                                      }
                                    ),
                                    title,
                                  ],
                                }
                              ),
                              description &&
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                                  'span',
                                  {
                                    children: [' ', description],
                                  }
                                ),
                            ],
                          }
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                          'div',
                          {
                            'data-fs-newsletter-controls': true,
                            children: lite
                              ? /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                                  {
                                    children: [
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                        src_components_ui_InputText__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                        {
                                          inputRef: emailInputRef,
                                          id: 'newsletter-email',
                                          label: 'Your Email',
                                          type: 'email',
                                          required: true,
                                          actionable: true,
                                          onSubmit: () => undefined,
                                          onClear: () => undefined,
                                          buttonActionText: 'Subscribe',
                                          displayClearButton: false,
                                        }
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                                        'span',
                                        {
                                          'data-fs-newsletter-addendum': true,
                                          children: [
                                            'By subscribing to our newsletter you agree to to our',
                                            ' ',
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                              src_components_ui_Link__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                                              {
                                                href: '/',
                                                inverse: true,
                                                variant: 'inline',
                                                children: 'Privacy Policy.',
                                              }
                                            ),
                                          ],
                                        }
                                      ),
                                    ],
                                  }
                                )
                              : /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                                  {
                                    children: [
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                        src_components_ui_InputText__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                        {
                                          inputRef: nameInputRef,
                                          id: 'newsletter-name',
                                          label: 'Your Name',
                                          required: true,
                                        }
                                      ),
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                        src_components_ui_InputText__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                        {
                                          inputRef: emailInputRef,
                                          id: 'newsletter-email',
                                          label: 'Your Email',
                                          type: 'email',
                                          required: true,
                                        }
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                                        'span',
                                        {
                                          'data-fs-newsletter-addendum': true,
                                          children: [
                                            'By subscribing to our newsletter you agree to to our',
                                            ' ',
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                              src_components_ui_Link__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                                              {
                                                href: '/',
                                                inverse: true,
                                                variant: 'inline',
                                                children: 'Privacy Policy.',
                                              }
                                            ),
                                          ],
                                        }
                                      ),
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(
                                        src_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Co,
                                        {
                                          variant: 'secondary',
                                          inverse: true,
                                          type: 'submit',
                                          children: loading
                                            ? 'Loading...'
                                            : 'Subscribe',
                                        }
                                      ),
                                    ],
                                  }
                                ),
                          }
                        ),
                      ],
                    }
                  )
                ),
              }
            )
          })
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            Newsletter
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 7191: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
              /* reexport safe */ _Newsletter__WEBPACK_IMPORTED_MODULE_0__.Z,
            /* harmony export */
          })
          /* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(8170)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _Newsletter__WEBPACK_IMPORTED_MODULE_0__,
            ])
          _Newsletter__WEBPACK_IMPORTED_MODULE_0__ = (
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

  /***/ 777: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {}

    /***/
  },

  /***/ 8597: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ t: () => /* binding */ useLazyQuery,
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

          const useLazyQuery = (operationName, variables, options) => {
            const response = (0, swr__WEBPACK_IMPORTED_MODULE_0__['default'])(
              (0, _useQuery__WEBPACK_IMPORTED_MODULE_2__ /* .getKey */.km)(
                operationName,
                variables
              ),
              () => null,
              _useQuery__WEBPACK_IMPORTED_MODULE_2__ /* .DEFAULT_OPTIONS */.WN
            )

            const execute = async (queryVariables) => {
              const data = await (0,
              _request__WEBPACK_IMPORTED_MODULE_1__ /* .request */.W)(
                operationName,
                queryVariables,
                options
              )
              response.mutate(data, false)
            }

            return [execute, response]
          }
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 5822: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ u: () => /* binding */ useNewsletter,
            /* harmony export */
          })
          /* unused harmony export mutation */
          /* harmony import */ var _graphql_useLazyQuery__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(8597)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _graphql_useLazyQuery__WEBPACK_IMPORTED_MODULE_0__,
            ])
          _graphql_useLazyQuery__WEBPACK_IMPORTED_MODULE_0__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]

          const mutation = 'SubscribeToNewsletter'
          const useNewsletter = () => {
            const [subscribeUser, { data, error, isValidating: loading }] = (0,
            _graphql_useLazyQuery__WEBPACK_IMPORTED_MODULE_0__ /* .useLazyQuery */.t)(
              mutation,
              {
                data: {
                  name: '',
                  email: '',
                },
              }
            )
            return {
              subscribeUser,
              data,
              error,
              loading,
            }
          }
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 5764: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ f: () => /* binding */ getPage,
      /* harmony export */
    })
    /* unused harmony export clientCMS */
    /* harmony import */ var _vtex_client_cms__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6676)
    /* harmony import */ var _vtex_client_cms__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        _vtex_client_cms__WEBPACK_IMPORTED_MODULE_0__
      )
    /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(6182)
    /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _store_config__WEBPACK_IMPORTED_MODULE_1__
      )

    const clientCMS =
      new (_vtex_client_cms__WEBPACK_IMPORTED_MODULE_0___default())({
        workspace:
          _store_config__WEBPACK_IMPORTED_MODULE_1___default().api.workspace,
        tenant:
          _store_config__WEBPACK_IMPORTED_MODULE_1___default().api.storeId,
      })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isLocator = (x) =>
      typeof x.contentType === 'string' &&
      (typeof x.releaseId === 'string' || typeof x.documentId === 'string')

    const getPage = async (options) => {
      const result = await (isLocator(options)
        ? clientCMS.getCMSPage(options).then((page) => ({
            data: [page],
          }))
        : clientCMS.getCMSPagesByContentType(
            options.contentType,
            options.filters
          ))
      const pages = result.data

      if (!pages[0]) {
        throw new Error(
          `Missing content on the CMS for content type ${
            options.contentType
          }. Add content before proceeding. Context: ${JSON.stringify(
            options,
            null,
            2
          )}`
        )
      }

      if (pages.length !== 1) {
        throw new Error(
          `Multiple content defined on the CMS for content type ${
            options.contentType
          }. Remove duplicated content before proceeding. Context: ${JSON.stringify(
            options,
            null,
            2
          )}`
        )
      }

      return pages[0]
    }

    /***/
  },

  /***/ 1133: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-banner-text': 'banner-text_fs-banner-text__65Ydx',
      fsBannerText: 'banner-text_fs-banner-text__65Ydx',
    }

    /***/
  },

  /***/ 5192: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-newsletter': 'newsletter_fs-newsletter__W9mZZ',
      fsNewsletter: 'newsletter_fs-newsletter__W9mZZ',
    }

    /***/
  },
}
