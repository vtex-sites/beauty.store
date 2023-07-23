;(() => {
  var exports = {}
  exports.id = 2103
  exports.ids = [2103]
  exports.modules = {
    /***/ 7394: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* reexport */ product_OutOfStock_OutOfStock,
      })

      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/organisms/OutOfStock/OutOfStock.js
      var OutOfStock = __webpack_require__(3861)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/organisms/OutOfStock/OutOfStockTitle.js
      var OutOfStockTitle = __webpack_require__(5338)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/organisms/OutOfStock/OutOfStockMessage.js
      var OutOfStockMessage = __webpack_require__(7192)
      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689)
      // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
      var Button = __webpack_require__(1310)
      // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
      var Icon = __webpack_require__(2478)
      // EXTERNAL MODULE: ./src/components/ui/InputText/index.ts + 1 modules
      var InputText = __webpack_require__(1224)
      // EXTERNAL MODULE: ./src/components/product/OutOfStock/out-of-stock.module.scss
      var out_of_stock_module = __webpack_require__(6207)
      var out_of_stock_module_default =
        /*#__PURE__*/ __webpack_require__.n(out_of_stock_module)
      // EXTERNAL MODULE: ./src/sdk/session/index.ts
      var session = __webpack_require__(5971)
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/product/OutOfStock/OutOfStock.tsx
      function OutOfStock_OutOfStock(props) {
        const { postalCode } = (0, session /* useSession */.kP)()
        const defaultButtonText = 'Notify me'
        const defaultIconName = 'BellRinging'
        const { 0: btnText, 1: setBtnText } = (0, external_react_.useState)(
          defaultButtonText
        )
        const { 0: buttonIconName, 1: setButtonIconName } = (0,
        external_react_.useState)(defaultIconName)
        const { 0: disabled, 1: setDisabled } = (0, external_react_.useState)(
          false
        )
        const { 0: email, 1: setEmail } = (0, external_react_.useState)('')
        const { 0: error, 1: setError } = (0, external_react_.useState)('')
        const {
          title = postalCode ? 'Unavailable in Your Location' : 'Out of Stock',
          notificationMsg = 'Notify me when available',
          buttonText = btnText,
          buttonIcon = /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
            name: buttonIconName,
            width: 16,
            height: 16,
          }),
          notificationMsgIcon = /*#__PURE__*/ jsx_runtime_.jsx(
            Icon /* default */.Z,
            {
              name: defaultIconName,
              width: 16,
              height: 16,
            }
          ),
          onSubmit,
        } = props

        const reset = () => {
          setButtonIconName(defaultIconName)
          setBtnText(defaultButtonText)
          setDisabled(false)
          setEmail('')
          setError('')
        }

        const handleSubmit = (event) => {
          event.preventDefault()
          setDisabled(true)
          setButtonIconName('Ellipsis')

          try {
            onSubmit(email)
            setButtonIconName('Checked')
            setBtnText('Subscribed successfully')
          } catch (err) {
            setError(err.message)
          } finally {
            // Return to original state after 2s
            setTimeout(reset, 2000)
          }
        }

        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
          OutOfStock /* default */.Z,
          {
            'data-fs-out-of-stock': true,
            className: out_of_stock_module_default().fsOutOfStock,
            onSubmit: handleSubmit,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(
                OutOfStockTitle /* OutOfStockTitle */._,
                {
                  'data-fs-out-of-stock-title': true,
                  children: title,
                }
              ),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                OutOfStockMessage /* OutOfStockMessage */.w,
                {
                  'data-fs-out-of-stock-message': true,
                  children: [notificationMsgIcon, ' ', notificationMsg],
                }
              ),
              /*#__PURE__*/ jsx_runtime_.jsx(InputText /* default */.Z, {
                id: 'out-of-stock-email',
                value: email,
                label: 'Email',
                'aria-label': 'Email',
                error: error,
                onChange: (e) => {
                  setError('')
                  setEmail(e.target.value)
                },
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                'data-fs-out-of-stock-button': true,
                type: 'submit',
                disabled: disabled,
                variant: 'primary',
                icon: buttonIcon,
                iconPosition: 'left',
                children: buttonText,
              }),
            ],
          }
        )
      }

      /* harmony default export */ const product_OutOfStock_OutOfStock =
        OutOfStock_OutOfStock // CONCATENATED MODULE: ./src/components/product/OutOfStock/index.ts

      /***/
    },

    /***/ 2951: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
            /* harmony import */ var _BannerText__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(7100)
            /* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(7191)
            /* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(8879)
            /* harmony import */ var _banner_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(6308)
            /* harmony import */ var _banner_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_4___default =
              /*#__PURE__*/ __webpack_require__.n(
                _banner_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_4__
              )
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _Newsletter__WEBPACK_IMPORTED_MODULE_1__,
              ])
            _Newsletter__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            function BannerNewsletter() {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                _Section__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                {
                  className: 'layout__content',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)('div', {
                    className:
                      _banner_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_4___default()
                        .fsBannerNewsletter,
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                        _BannerText__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                        {
                          title: 'Get to Know Our Next Release',
                          caption:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit nisi, vehicula in turpis sit amet, posuere aliquam nisl. ',
                          actionLabel: 'Shop Now',
                          actionPath: '/',
                          variant: 'secondary',
                          colorVariant: 'light',
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                        _Newsletter__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                        {
                          title: 'Get News and Special Offers!',
                          description:
                            'Receive our news and promotions in advance. Enjoy and get 10% off your first purchase. For more information click here.',
                          card: true,
                        }
                      ),
                    ],
                  }),
                }
              )
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              BannerNewsletter
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 994: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
            /* harmony import */ var _ProductShelf__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(7104)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _ProductShelf__WEBPACK_IMPORTED_MODULE_1__,
              ])
            _ProductShelf__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            const CrossSellingShelf = ({ items, title, context, kind }) => {
              const selectedFacets = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                () => [
                  {
                    key: kind,
                    value: context.isVariantOf.productGroupID,
                  },
                ],
                [kind, context.isVariantOf.productGroupID]
              )
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                _ProductShelf__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                {
                  first: items,
                  title: title,
                  selectedFacets: selectedFacets,
                }
              )
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              CrossSellingShelf
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 7990: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
                /* reexport safe */ _CrossSellingShelf__WEBPACK_IMPORTED_MODULE_0__.Z,
              /* harmony export */
            })
            /* harmony import */ var _CrossSellingShelf__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(994)
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _CrossSellingShelf__WEBPACK_IMPORTED_MODULE_0__,
              ])
            _CrossSellingShelf__WEBPACK_IMPORTED_MODULE_0__ = (
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

    /***/ 4870: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* reexport */ ProducDetailsContent_ProductDetailsContent,
      })

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Table/Table.js
      var Table = __webpack_require__(2)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Table/TableBody.js
      var TableBody = __webpack_require__(9506)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Table/TableRow.js
      var TableRow = __webpack_require__(967)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Table/TableCell.js
      var TableCell = __webpack_require__(3623)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Icon/Icon.js
      var Icon = __webpack_require__(1007)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/List/List.js
      var List = __webpack_require__(8164)
      // EXTERNAL MODULE: ./src/components/ui/Accordion/index.ts + 2 modules
      var Accordion = __webpack_require__(367)
      // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
      var ui_Icon = __webpack_require__(2478)
      // EXTERNAL MODULE: ./src/components/sections/ProducDetailsContent/product-details-content.module.scss
      var product_details_content_module = __webpack_require__(7558)
      var product_details_content_module_default =
        /*#__PURE__*/ __webpack_require__.n(product_details_content_module)
      // EXTERNAL MODULE: ./src/components/sections/Section/index.ts + 1 modules
      var Section = __webpack_require__(8879)
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/sections/ProducDetailsContent/ProductDetailsContent.tsx
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

      /**
       * Maps 'initiallyExpanded' prop values to indices
       */
      const INITIALLY_EXPANDED_MAP = {
        first: [0],
        all: [0, 1, 2, 3],
        none: [],
      }
      /**
       * Default article labels
       */

      const DEFAULT_LABELS = {
        description: 'Description',
        about: 'About this product',
        highlights: 'Product highlights',
        learnMore: 'Learn More',
      }

      function ProductDetailsContent({
        initiallyExpanded = 'first',
        labels: propLabels = {},
      }) {
        const { 0: indices, 1: setIndices } = (0, external_react_.useState)(
          new Set(INITIALLY_EXPANDED_MAP[initiallyExpanded])
        )

        const onChange = (index) => {
          setIndices((currentIndices) => {
            const newIndices = new Set(currentIndices)

            if (currentIndices.has(index)) {
              newIndices.delete(index)
            } else {
              newIndices.add(index)
            }

            return newIndices
          })
        }

        const labels = _objectSpread(
          _objectSpread({}, DEFAULT_LABELS),
          propLabels
        )

        return /*#__PURE__*/ jsx_runtime_.jsx(Section /* default */.Z, {
          className:
            product_details_content_module_default().fsProductDetailsContent,
          'data-fs-product-details-content': true,
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
            Accordion /* default */.Z,
            {
              expandedIndices: indices,
              onChange: onChange,
              'aria-label': 'Product Details Content',
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(
                  Accordion /* AccordionItem */.Q,
                  {
                    as: 'article',
                    index: 0,
                    isExpanded: indices.has(0),
                    buttonLabel: /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                      className: 'text__title-subsection',
                      children: labels.description,
                    }),
                    'data-fs-product-details-description': true,
                    prefixId: 'product-details-content',
                    children: /*#__PURE__*/ jsx_runtime_.jsx('p', {
                      className: 'text__body',
                      children:
                        'Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black.',
                    }),
                  }
                ),
                /*#__PURE__*/ jsx_runtime_.jsx(
                  Accordion /* AccordionItem */.Q,
                  {
                    as: 'article',
                    index: 1,
                    isExpanded: indices.has(1),
                    buttonLabel: /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                      className: 'text__title-subsection',
                      children: labels.about,
                    }),
                    'data-fs-product-details-about': true,
                    prefixId: 'product-details-content',
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      Table /* default */.Z,
                      {
                        cellPadding: 0,
                        cellSpacing: 0,
                        className: 'text__title-mini-alt',
                        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                          TableBody /* default */.Z,
                          {
                            children: [
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                TableRow /* default */.Z,
                                {
                                  children: [
                                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                      TableCell /* default */.Z,
                                      {
                                        variant: 'header',
                                        children: [
                                          /*#__PURE__*/ jsx_runtime_.jsx(
                                            Icon /* default */.Z,
                                            {
                                              'data-fs-accordion-item-button-icon': true,
                                              component:
                                                /*#__PURE__*/ jsx_runtime_.jsx(
                                                  ui_Icon /* default */.Z,
                                                  {
                                                    name: 'Ruler',
                                                    width: 18,
                                                    height: 18,
                                                  }
                                                ),
                                            }
                                          ),
                                          /*#__PURE__*/ jsx_runtime_.jsx(
                                            'span',
                                            {
                                              children: 'Width',
                                            }
                                          ),
                                        ],
                                      }
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        children: '1.50m',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                TableRow /* default */.Z,
                                {
                                  children: [
                                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                      TableCell /* default */.Z,
                                      {
                                        variant: 'header',
                                        children: [
                                          /*#__PURE__*/ jsx_runtime_.jsx(
                                            Icon /* default */.Z,
                                            {
                                              'data-fs-accordion-item-button-icon': true,
                                              component:
                                                /*#__PURE__*/ jsx_runtime_.jsx(
                                                  ui_Icon /* default */.Z,
                                                  {
                                                    name: 'Ruler',
                                                    width: 18,
                                                    height: 18,
                                                  }
                                                ),
                                            }
                                          ),
                                          'Height',
                                        ],
                                      }
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        children: '1.50m',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                TableRow /* default */.Z,
                                {
                                  children: [
                                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                      TableCell /* default */.Z,
                                      {
                                        variant: 'header',
                                        children: [
                                          /*#__PURE__*/ jsx_runtime_.jsx(
                                            Icon /* default */.Z,
                                            {
                                              'data-fs-accordion-item-button-icon': true,
                                              component:
                                                /*#__PURE__*/ jsx_runtime_.jsx(
                                                  ui_Icon /* default */.Z,
                                                  {
                                                    name: 'Ruler',
                                                    width: 18,
                                                    height: 18,
                                                  }
                                                ),
                                            }
                                          ),
                                          'Dimensions',
                                        ],
                                      }
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        children: '7.27 x 3.03 x 9.94 inches',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                TableRow /* default */.Z,
                                {
                                  children: [
                                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                      TableCell /* default */.Z,
                                      {
                                        variant: 'header',
                                        children: [
                                          /*#__PURE__*/ jsx_runtime_.jsx(
                                            Icon /* default */.Z,
                                            {
                                              'data-fs-accordion-item-button-icon': true,
                                              component:
                                                /*#__PURE__*/ jsx_runtime_.jsx(
                                                  ui_Icon /* default */.Z,
                                                  {
                                                    name: 'Bag',
                                                    width: 18,
                                                    height: 18,
                                                  }
                                                ),
                                            }
                                          ),
                                          'Weight',
                                        ],
                                      }
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        children: '12oz',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                TableRow /* default */.Z,
                                {
                                  children: [
                                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                      TableCell /* default */.Z,
                                      {
                                        variant: 'header',
                                        children: [
                                          /*#__PURE__*/ jsx_runtime_.jsx(
                                            Icon /* default */.Z,
                                            {
                                              'data-fs-accordion-item-button-icon': true,
                                              component:
                                                /*#__PURE__*/ jsx_runtime_.jsx(
                                                  ui_Icon /* default */.Z,
                                                  {
                                                    name: 'RocketLaunch',
                                                    width: 18,
                                                    height: 18,
                                                  }
                                                ),
                                            }
                                          ),
                                          'Days to ship',
                                        ],
                                      }
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        children: '11 Days',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                TableRow /* default */.Z,
                                {
                                  children: [
                                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                      TableCell /* default */.Z,
                                      {
                                        variant: 'header',
                                        children: [
                                          /*#__PURE__*/ jsx_runtime_.jsx(
                                            Icon /* default */.Z,
                                            {
                                              'data-fs-accordion-item-button-icon': true,
                                              component:
                                                /*#__PURE__*/ jsx_runtime_.jsx(
                                                  ui_Icon /* default */.Z,
                                                  {
                                                    name: 'CircleWavyCheck',
                                                    width: 18,
                                                    height: 18,
                                                  }
                                                ),
                                            }
                                          ),
                                          'Estimated',
                                        ],
                                      }
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        children: 'Nov 10th',
                                      }
                                    ),
                                  ],
                                }
                              ),
                            ],
                          }
                        ),
                      }
                    ),
                  }
                ),
                /*#__PURE__*/ jsx_runtime_.jsx(
                  Accordion /* AccordionItem */.Q,
                  {
                    as: 'article',
                    className: 'text__body',
                    index: 2,
                    isExpanded: indices.has(2),
                    buttonLabel: /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                      className: 'text__title-subsection',
                      children: labels.highlights,
                    }),
                    'data-fs-product-details-highlights': true,
                    prefixId: 'product-details-content',
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                      List /* default */.Z,
                      {
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Industry-leading noise canceling with Dual Noise Sensor technology',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback)',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Touch Sensor controls to pause play skip tracks, control volume, activate your voice assistant, and answer phone calls',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Speak-to-chat technology automatically reduces volume during conversations',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Superior call quality with precise voice pickup',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Wearing detection pauses playback when headphones are removed',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children: 'Seamless multiple-device pairing',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Adaptive Sound Control provides a personalized listening experience',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('li', {
                            children:
                              'Updated design relieves pressure for long-lasting comfort',
                          }),
                        ],
                      }
                    ),
                  }
                ),
                /*#__PURE__*/ jsx_runtime_.jsx(
                  Accordion /* AccordionItem */.Q,
                  {
                    as: 'article',
                    index: 3,
                    isExpanded: indices.has(3),
                    buttonLabel: /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                      className: 'text__title-subsection',
                      children: labels.learnMore,
                    }),
                    'data-fs-product-details-learn-more': true,
                    prefixId: 'product-details-content',
                    children: /*#__PURE__*/ jsx_runtime_.jsx('p', {
                      className: 'text__body',
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.',
                    }),
                  }
                ),
              ],
            }
          ),
        })
      }

      /* harmony default export */ const ProducDetailsContent_ProductDetailsContent =
        ProductDetailsContent // CONCATENATED MODULE: ./src/components/sections/ProducDetailsContent/index.ts

      /***/
    },

    /***/ 1644: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
            /* unused harmony export fragment */
            /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_18__ =
              __webpack_require__(8460)
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(6689)
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_0__
              )
            /* harmony import */ var src_components_product_OutOfStock__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(7394)
            /* harmony import */ var src_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(4851)
            /* harmony import */ var src_components_ui_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6923)
            /* harmony import */ var src_components_ui_Button__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(1310)
            /* harmony import */ var src_components_ui_ImageGallery__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(1803)
            /* harmony import */ var src_components_ui_Price__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(7902)
            /* harmony import */ var src_components_ui_ProductTitle__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(5653)
            /* harmony import */ var src_components_ui_QuantitySelector__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(601)
            /* harmony import */ var src_components_ui_ShippingSimulation__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(7281)
            /* harmony import */ var src_components_ui_SkuSelector__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(7152)
            /* harmony import */ var src_sdk_cart_useBuyButton__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(8892)
            /* harmony import */ var src_sdk_product_useFormattedPrice__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(5346)
            /* harmony import */ var src_sdk_product_useProduct__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(3874)
            /* harmony import */ var src_sdk_session__WEBPACK_IMPORTED_MODULE_14__ =
              __webpack_require__(5971)
            /* harmony import */ var _ProducDetailsContent__WEBPACK_IMPORTED_MODULE_15__ =
              __webpack_require__(4870)
            /* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_16__ =
              __webpack_require__(8879)
            /* harmony import */ var _product_details_module_scss__WEBPACK_IMPORTED_MODULE_19__ =
              __webpack_require__(841)
            /* harmony import */ var _product_details_module_scss__WEBPACK_IMPORTED_MODULE_19___default =
              /*#__PURE__*/ __webpack_require__.n(
                _product_details_module_scss__WEBPACK_IMPORTED_MODULE_19__
              )
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                src_sdk_product_useProduct__WEBPACK_IMPORTED_MODULE_13__,
              ])
            src_sdk_product_useProduct__WEBPACK_IMPORTED_MODULE_13__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]
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

            function ProductDetails({ context: staleProduct }) {
              const { currency } = (0,
              src_sdk_session__WEBPACK_IMPORTED_MODULE_14__ /* .useSession */.kP)()
              const { 0: addQuantity, 1: setAddQuantity } = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(1) // Stale while revalidate the product for fetching the new price etc

              const { data, isValidating } = (0,
              src_sdk_product_useProduct__WEBPACK_IMPORTED_MODULE_13__ /* .useProduct */.i)(
                staleProduct.id,
                {
                  product: staleProduct,
                }
              )

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
                  isVariantOf: { name, productGroupID: productId, skuVariants },
                  image: productImages,
                  offers: {
                    offers: [{ availability, price, listPrice, seller }],
                    lowPrice,
                  },
                  breadcrumbList: breadcrumbs,
                  additionalProperty,
                },
              } = data
              const buyDisabled = availability !== 'https://schema.org/InStock'
              const buyProps = (0,
              src_sdk_cart_useBuyButton__WEBPACK_IMPORTED_MODULE_11__ /* .useBuyButton */.Q)(
                {
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
                    additionalProperty,
                  },
                }
              )
              ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                ;(0,
                _faststore_sdk__WEBPACK_IMPORTED_MODULE_18__ /* .sendAnalyticsEvent */._)(
                  {
                    name: 'view_item',
                    params: {
                      currency: currency.code,
                      value: price,
                      items: [
                        {
                          item_id: isVariantOf.productGroupID,
                          item_name: isVariantOf.name,
                          item_brand: brand.name,
                          item_variant: sku,
                          price,
                          discount: listPrice - price,
                          currency: currency.code,
                          item_variant_name: variantName,
                          product_reference_id: gtin,
                        },
                      ],
                    },
                  }
                )
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
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                _Section__WEBPACK_IMPORTED_MODULE_16__ /* ["default"] */.Z,
                {
                  className: `${
                    _product_details_module_scss__WEBPACK_IMPORTED_MODULE_19___default()
                      .fsProductDetails
                  } layout__content layout__section`,
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                      src_components_ui_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                      {
                        breadcrumbList: breadcrumbs.itemListElement,
                      }
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                      'section',
                      {
                        'data-fs-product-details-body': true,
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                            'header',
                            {
                              'data-fs-product-details-title': true,
                              'data-fs-product-details-section': true,
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                  src_components_ui_ProductTitle__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
                                  {
                                    title:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                        'h1',
                                        {
                                          children: name,
                                        }
                                      ),
                                    label:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                        src_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2__ /* .DiscountBadge */.F,
                                        {
                                          listPrice: listPrice,
                                          spotPrice: lowPrice,
                                          big: true,
                                        }
                                      ),
                                    refNumber: productId,
                                  }
                                ),
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                            src_components_ui_ImageGallery__WEBPACK_IMPORTED_MODULE_5__ /* .ImageGallery */.hJ,
                            {
                              'data-fs-product-details-gallery': true,
                              images: productImages,
                            }
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                            'section',
                            {
                              'data-fs-product-details-info': true,
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                                  'section',
                                  {
                                    'data-fs-product-details-settings': true,
                                    'data-fs-product-details-section': true,
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                                        'section',
                                        {
                                          'data-fs-product-details-values': true,
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                                              'div',
                                              {
                                                'data-fs-product-details-prices': true,
                                                children: [
                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                                    src_components_ui_Price__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                                                    {
                                                      value: listPrice,
                                                      formatter:
                                                        src_sdk_product_useFormattedPrice__WEBPACK_IMPORTED_MODULE_12__ /* .useFormattedPrice */.P,
                                                      testId: 'list-price',
                                                      'data-value': listPrice,
                                                      variant: 'listing',
                                                      classes: 'text__legend',
                                                      SRText: 'Original price:',
                                                    }
                                                  ),
                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                                    src_components_ui_Price__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                                                    {
                                                      value: lowPrice,
                                                      formatter:
                                                        src_sdk_product_useFormattedPrice__WEBPACK_IMPORTED_MODULE_12__ /* .useFormattedPrice */.P,
                                                      testId: 'price',
                                                      'data-value': lowPrice,
                                                      variant: 'spot',
                                                      classes: 'text__lead',
                                                      SRText: 'Sale Price:',
                                                    }
                                                  ),
                                                ],
                                              }
                                            ),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                              src_components_ui_QuantitySelector__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.Z,
                                              {
                                                min: 1,
                                                max: 10,
                                                onChange: setAddQuantity,
                                              }
                                            ),
                                          ],
                                        }
                                      ),
                                      skuVariants &&
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                          src_components_ui_SkuSelector__WEBPACK_IMPORTED_MODULE_10__ /* ["default"] */.Z,
                                          {
                                            slugsMap: skuVariants.slugsMap,
                                            availableVariations:
                                              skuVariants.availableVariations,
                                            activeVariations:
                                              skuVariants.activeVariations,
                                            'data-fs-product-details-selectors': true,
                                          }
                                        ),
                                      isValidating
                                        ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                            AddToCartLoadingSkeleton,
                                            {}
                                          )
                                        : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                            src_components_ui_Button__WEBPACK_IMPORTED_MODULE_4__ /* .ButtonBuy */.JQ,
                                            _objectSpread(
                                              _objectSpread(
                                                {
                                                  disabled: buyDisabled,
                                                },
                                                buyProps
                                              ),
                                              {},
                                              {
                                                children: 'Add to Cart',
                                              }
                                            )
                                          ),
                                      !availability &&
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                          src_components_product_OutOfStock__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                                          {
                                            onSubmit: (email) => {
                                              console.info(email)
                                            },
                                          }
                                        ),
                                    ],
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                  src_components_ui_ShippingSimulation__WEBPACK_IMPORTED_MODULE_9__ /* ["default"] */.Z,
                                  {
                                    'data-fs-product-details-section': true,
                                    'data-fs-product-details-shipping': true,
                                    shippingItem: {
                                      id,
                                      quantity: addQuantity,
                                      seller: seller.identifier,
                                    },
                                  }
                                ),
                              ],
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                            _ProducDetailsContent__WEBPACK_IMPORTED_MODULE_15__ /* ["default"] */.Z,
                            {}
                          ),
                        ],
                      }
                    ),
                  ],
                }
              )
            }

            function AddToCartLoadingSkeleton() {
              // Generated via https://skeletonreact.com/.
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)('svg', {
                role: 'img',
                width: '100%',
                height: '48',
                'aria-labelledby': 'loading-aria',
                viewBox: '0 0 112 48',
                preserveAspectRatio: 'none',
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                    'title',
                    {
                      id: 'loading-aria',
                      children: 'Loading...',
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                    'rect',
                    {
                      x: '0',
                      y: '0',
                      width: '100%',
                      height: '100%',
                      clipPath: 'url(#clip-path)',
                      style: {
                        fill: 'url("#fill")',
                      },
                    }
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                    'defs',
                    {
                      children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                          'clipPath',
                          {
                            id: 'clip-path',
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                'rect',
                                {
                                  x: '0',
                                  y: '0',
                                  rx: '2',
                                  ry: '2',
                                  width: '112',
                                  height: '48',
                                }
                              ),
                          }
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                          'linearGradient',
                          {
                            id: 'fill',
                            children: [
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                'stop',
                                {
                                  offset: '0.599964',
                                  stopColor: '#f3f3f3',
                                  stopOpacity: '1',
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                      'animate',
                                      {
                                        attributeName: 'offset',
                                        values: '-2; -2; 1',
                                        keyTimes: '0; 0.25; 1',
                                        dur: '2s',
                                        repeatCount: 'indefinite',
                                      }
                                    ),
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                'stop',
                                {
                                  offset: '1.59996',
                                  stopColor: '#ecebeb',
                                  stopOpacity: '1',
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                      'animate',
                                      {
                                        attributeName: 'offset',
                                        values: '-1; -1; 2',
                                        keyTimes: '0; 0.25; 1',
                                        dur: '2s',
                                        repeatCount: 'indefinite',
                                      }
                                    ),
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                'stop',
                                {
                                  offset: '2.59996',
                                  stopColor: '#f3f3f3',
                                  stopOpacity: '1',
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                      'animate',
                                      {
                                        attributeName: 'offset',
                                        values: '0; 0; 3',
                                        keyTimes: '0; 0.25; 1',
                                        dur: '2s',
                                        repeatCount: 'indefinite',
                                      }
                                    ),
                                }
                              ),
                            ],
                          }
                        ),
                      ],
                    }
                  ),
                ],
              })
            }

            const fragment = 'unknown'
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              ProductDetails
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 3220: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
                /* reexport safe */ _ProductDetails__WEBPACK_IMPORTED_MODULE_0__.Z,
              /* harmony export */
            })
            /* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(1644)
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _ProductDetails__WEBPACK_IMPORTED_MODULE_0__,
              ])
            _ProductDetails__WEBPACK_IMPORTED_MODULE_0__ = (
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

    /***/ 1803: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        hJ: () => /* reexport */ ImageGallery_ImageGallery,
        ZA: () => /* reexport */ ImageGallery_ImageGallerySelector,
        _I: () => /* reexport */ ImageGallery_ImageZoom,
      })

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/IconButton/IconButton.js
      var IconButton = __webpack_require__(3634)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Button/Button.js
      var Button = __webpack_require__(5815)
      // EXTERNAL MODULE: external "react-intersection-observer"
      var external_react_intersection_observer_ = __webpack_require__(9785)
      // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
      var Icon = __webpack_require__(2478)
      // EXTERNAL MODULE: ./src/components/ui/Image/index.ts
      var Image = __webpack_require__(6193)
      // EXTERNAL MODULE: ./src/components/ui/ImageGallery/image-gallery-selector.module.scss
      var image_gallery_selector_module = __webpack_require__(9265)
      var image_gallery_selector_module_default =
        /*#__PURE__*/ __webpack_require__.n(image_gallery_selector_module)
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/ImageGallery/ImageGallerySelector.tsx
      const SCROLL_MARGIN_VALUE = 400

      const moveScroll = (container, value) => {
        if (container) {
          if (container.scrollHeight > container.clientHeight) {
            // TODO: Temporary workaround for scroll-behavior with scrollTop – Safari 15.4) https://developer.apple.com/forums/thread/703294
            container.style.overflow = 'auto'
            window.requestAnimationFrame(() =>
              container.scrollTo({
                top: value,
                behavior: 'smooth',
              })
            )
            setTimeout(() => (container.style.overflow = 'hidden'), 2000)
          } else {
            container.scrollLeft += value
          }
        }
      }

      const hasScroll = (container) => {
        if (container) {
          return (
            container.scrollHeight > container.clientHeight ||
            container.scrollWidth > container.clientWidth
          )
        }

        return false
      }

      function ImageGallerySelector({ images, onSelect, currentImageIdx }) {
        const elementsRef = (0, external_react_.useRef)(null)
        const elementHasScroll = hasScroll(elementsRef.current)
        const { ref: firstImageRef, inView: firstImageInView } = (0,
        external_react_intersection_observer_.useInView)({
          threshold: 1,
        })
        const { ref: lastImageRef, inView: lastImageInView } = (0,
        external_react_intersection_observer_.useInView)({
          threshold: 1,
        })
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('section', {
          'data-fs-image-gallery-selector': true,
          className:
            image_gallery_selector_module_default().fsImageGallerySelector,
          'aria-roledescription': 'carousel',
          'aria-label': 'Product images',
          children: [
            elementHasScroll &&
              !firstImageInView &&
              /*#__PURE__*/ jsx_runtime_.jsx(IconButton /* default */.Z, {
                'data-fs-image-gallery-selector-control-button': true,
                'aria-label': 'backward slide image selector',
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                  name: 'ArrowLeft',
                  width: 24,
                  height: 24,
                }),
                onClick: () =>
                  moveScroll(elementsRef.current, -SCROLL_MARGIN_VALUE),
              }),
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              'data-fs-image-gallery-selector-elements': true,
              ref: elementsRef,
              children: images.map((image, idx) => {
                const ref =
                  idx === 0
                    ? firstImageRef
                    : idx === images.length - 1
                    ? lastImageRef
                    : null
                return /*#__PURE__*/ jsx_runtime_.jsx(
                  Button /* default */.Z,
                  {
                    'aria-label': `${image.alternateName} - Image ${
                      idx + 1
                    } of ${images.length}`,
                    onClick: () => onSelect(idx),
                    'data-fs-image-gallery-selector-thumbnail':
                      idx === currentImageIdx ? 'selected' : 'true',
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      Image /* Image */.E,
                      {
                        ref: ref,
                        src: image.url,
                        alt: image.alternateName,
                        loading: idx === 0 ? 'eager' : 'lazy',
                        sizes: '(max-width: 72px) 25vw, 30vw',
                        width: 72,
                        height: 72,
                      }
                    ),
                  },
                  idx
                )
              }),
            }),
            elementHasScroll &&
              !lastImageInView &&
              /*#__PURE__*/ jsx_runtime_.jsx(IconButton /* default */.Z, {
                'data-fs-image-gallery-selector-control-button': true,
                'aria-label': 'forward slide image selector',
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                  name: 'ArrowLeft',
                  width: 24,
                  height: 24,
                }),
                onClick: () =>
                  moveScroll(elementsRef.current, +SCROLL_MARGIN_VALUE),
              }),
          ],
        })
      }

      /* harmony default export */ const ImageGallery_ImageGallerySelector =
        ImageGallerySelector
      // EXTERNAL MODULE: ./src/components/ui/ImageGallery/image-gallery.module.scss
      var image_gallery_module = __webpack_require__(3910)
      var image_gallery_module_default =
        /*#__PURE__*/ __webpack_require__.n(image_gallery_module) // CONCATENATED MODULE: ./src/components/ui/ImageGallery/ImageGallery.tsx
      const _excluded = ['images']

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

      function ImageGallery(_ref) {
        let { images } = _ref,
          otherProps = _objectWithoutProperties(_ref, _excluded)

        const { 0: selectedImageIdx, 1: setSelectedImageIdx } = (0,
        external_react_.useState)(0)
        const currentImage = images[selectedImageIdx]
        const hasSelector = images.length > 1
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
          'section',
          _objectSpread(
            _objectSpread(
              {
                'data-fs-image-gallery': hasSelector
                  ? 'with-selector'
                  : 'without-selector',
                className: image_gallery_module_default().fsImageGallery,
              },
              otherProps
            ),
            {},
            {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ImageGallery_ImageZoom, {
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    Image /* Image */.E,
                    {
                      src: currentImage.url,
                      alt: currentImage.alternateName,
                      sizes: '(max-width: 804px) 25vw, 30vw',
                      width: 804,
                      height: 804 * (3 / 4),
                      loading: 'eager',
                      fetchPriority: 'high',
                    }
                  ),
                }),
                hasSelector &&
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    ImageGallery_ImageGallerySelector,
                    {
                      images: images,
                      currentImageIdx: selectedImageIdx,
                      onSelect: setSelectedImageIdx,
                    }
                  ),
              ],
            }
          )
        )
      }

      /* harmony default export */ const ImageGallery_ImageGallery =
        ImageGallery // CONCATENATED MODULE: ./src/components/ui/ImageGallery/ImageZoom.tsx
      const ImageZoom = ({ children }) => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [' ', children, ' '],
        })
      }

      /* harmony default export */ const ImageGallery_ImageZoom = ImageZoom // CONCATENATED MODULE: ./src/components/ui/ImageGallery/index.ts

      /***/
    },

    /***/ 5653: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* reexport */ ui_ProductTitle_ProductTitle,
      })

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/ProductTitle/ProductTitle.js
      var ProductTitle = __webpack_require__(3724)
      // EXTERNAL MODULE: ./src/components/ui/ProductTitle/product-title.module.scss
      var product_title_module = __webpack_require__(4265)
      var product_title_module_default =
        /*#__PURE__*/ __webpack_require__.n(product_title_module)
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/ProductTitle/ProductTitle.tsx
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

      function ProductTitle_ProductTitle(_ref) {
        let otherProps = Object.assign({}, _ref)
        return /*#__PURE__*/ jsx_runtime_.jsx(
          ProductTitle /* default */.Z,
          _objectSpread(
            {
              className: product_title_module_default().fsProductTitle,
            },
            otherProps
          )
        )
      }

      /* harmony default export */ const ui_ProductTitle_ProductTitle =
        /*#__PURE__*/ (0, external_react_.memo)(ProductTitle_ProductTitle) // CONCATENATED MODULE: ./src/components/ui/ProductTitle/index.ts

      /***/
    },

    /***/ 7281: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* reexport */ ShippingSimulation_ShippingSimulation,
      })

      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Table/Table.js
      var Table = __webpack_require__(2)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Table/TableBody.js
      var TableBody = __webpack_require__(9506)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Table/TableRow.js
      var TableRow = __webpack_require__(967)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Table/TableCell.js
      var TableCell = __webpack_require__(3623)
      // EXTERNAL MODULE: ./src/components/ui/Price/index.ts + 1 modules
      var Price = __webpack_require__(7902)
      // EXTERNAL MODULE: ./src/sdk/product/useFormattedPrice.ts
      var useFormattedPrice = __webpack_require__(5346)
      // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
      var Icon = __webpack_require__(2478)
      // EXTERNAL MODULE: ./src/components/ui/InputText/index.ts + 1 modules
      var InputText = __webpack_require__(1224)
      // EXTERNAL MODULE: ./src/components/ui/Link/index.ts + 1 modules
      var Link = __webpack_require__(1093)
      // EXTERNAL MODULE: ./src/components/ui/ShippingSimulation/shipping-simulation.module.scss
      var shipping_simulation_module = __webpack_require__(214)
      var shipping_simulation_module_default =
        /*#__PURE__*/ __webpack_require__.n(shipping_simulation_module)
      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689)
      // EXTERNAL MODULE: ./src/sdk/session/index.ts
      var session = __webpack_require__(5971)
      // EXTERNAL MODULE: ./src/sdk/graphql/request.ts
      var request = __webpack_require__(180) // CONCATENATED MODULE: ./src/sdk/shipping/index.ts
      const query = 'ShippingSimulationQuery'
      const getShippingSimulation = async ({ items, postalCode, country }) => {
        const data = await (0, request /* request */.W)(query, {
          items,
          postalCode,
          country,
        })
        return data.shipping
      }
      /* harmony default export */ const shipping =
        /* unused pure expression or super */ null && getShippingSimulation // CONCATENATED MODULE: ./src/components/ui/ShippingSimulation/useShippingSimulation.ts
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

      const createEmptySimulation = () => ({
        input: {
          postalCode: '',
          displayClearButton: false,
          errorMessage: '',
        },
        shippingSimulation: {
          location: '',
          options: [],
        },
      })

      const reducer = (state, action) => {
        const { type } = action

        switch (type) {
          case 'clear': {
            return createEmptySimulation()
          }

          case 'update': {
            const { payload } = action
            return {
              input: _objectSpread(
                _objectSpread({}, state.input),
                payload.input
              ),
              shippingSimulation: _objectSpread(
                _objectSpread({}, state.shippingSimulation),
                payload.shippingSimulation
              ),
            }
          }

          case 'onInput': {
            const { payload } = action
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                input: _objectSpread({}, payload),
              }
            )
          }

          case 'onError': {
            const { payload } = action
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                input: _objectSpread(_objectSpread({}, state.input), payload),
              }
            )
          }

          default:
            throw new Error(`Action ${type} not implemented`)
        }
      }

      function getShippingInformation(shipping) {
        const location =
          [shipping?.address?.neighborhood, shipping?.address?.city]
            .filter(Boolean)
            .join(' / ') ?? ''
        const options = shipping?.logisticsInfo?.[0]?.slas ?? []
        return [location, options]
      }

      const useShippingSimulation = (shippingItem) => {
        const { postalCode: sessionPostalCode, country } = (0,
        session /* useSession */.kP)()
        const {
          0: { input, shippingSimulation },
          1: dispatch,
        } = (0, external_react_.useReducer)(
          reducer,
          null,
          createEmptySimulation
        )
        const { postalCode: shippingPostalCode } = input
        ;(0, external_react_.useEffect)(() => {
          if (!sessionPostalCode || shippingPostalCode) {
            return
          } // Use sessionPostalCode if there is no shippingPostalCode

          async function fetchShipping() {
            const shipping = await getShippingSimulation({
              country,
              postalCode: sessionPostalCode ?? '',
              items: [shippingItem],
            })
            const [location, options] = getShippingInformation(shipping)
            dispatch({
              type: 'update',
              payload: {
                input: {
                  postalCode: sessionPostalCode ?? '',
                  displayClearButton: true,
                  errorMessage: '',
                },
                shippingSimulation: {
                  location,
                  options,
                },
              },
            })
          }

          fetchShipping() // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [sessionPostalCode])
        const handleSubmit = (0, external_react_.useCallback)(async () => {
          try {
            const shipping = await getShippingSimulation({
              country,
              postalCode: shippingPostalCode ?? '',
              items: [shippingItem],
            })
            const [location, options] = getShippingInformation(shipping)
            dispatch({
              type: 'update',
              payload: {
                input: {
                  displayClearButton: true,
                  errorMessage: '',
                },
                shippingSimulation: {
                  location,
                  options,
                },
              },
            })
          } catch (error) {
            dispatch({
              type: 'onError',
              payload: {
                displayClearButton: true,
                errorMessage: 'You entered an invalid Postal Code',
              },
            })
          }
        }, [shippingPostalCode])
        const handleOnInput = (0, external_react_.useCallback)((e) => {
          const currentValue = e.currentTarget.value

          if (currentValue) {
            dispatch({
              type: 'onInput',
              payload: {
                postalCode: currentValue,
                displayClearButton: false,
                errorMessage: '',
              },
            })
          } else {
            dispatch({
              type: 'clear',
            })
          }
        }, [])
        return {
          input,
          shippingSimulation,
          dispatch,
          handleSubmit,
          handleOnInput,
        }
      }
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/ShippingSimulation/ShippingSimulation.tsx
      const _excluded = ['testId', 'shippingItem']

      function ShippingSimulation_ownKeys(object, enumerableOnly) {
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

      function ShippingSimulation_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? ShippingSimulation_ownKeys(Object(source), !0).forEach(function (
                key
              ) {
                ShippingSimulation_defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ShippingSimulation_ownKeys(Object(source)).forEach(function (
                key
              ) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                )
              })
        }
        return target
      }

      function ShippingSimulation_defineProperty(obj, key, value) {
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

      function ShippingSimulation(_ref) {
        let { testId = 'store-shipping-simulation', shippingItem } = _ref,
          otherProps = _objectWithoutProperties(_ref, _excluded)

        const {
          dispatch,
          input,
          shippingSimulation,
          handleSubmit,
          handleOnInput,
        } = useShippingSimulation(shippingItem)
        const {
          postalCode: shippingPostalCode,
          displayClearButton,
          errorMessage,
        } = input
        const { location: shippingLocation, options: shippingOptions } =
          shippingSimulation
        const formatter = (0, useFormattedPrice /* usePriceFormatter */.o)()
        const hasShippingOptions =
          !!shippingOptions && shippingOptions.length > 0
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
          'section',
          ShippingSimulation_objectSpread(
            ShippingSimulation_objectSpread(
              {
                className:
                  shipping_simulation_module_default().fsShippingSimulation,
                'data-fs-shipping-simulation': true,
                'data-fs-shipping-simulation-empty': !hasShippingOptions
                  ? 'true'
                  : 'false',
                'data-testid': testId,
              },
              otherProps
            ),
            {},
            {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                  className: 'text__title-subsection',
                  'data-fs-shipping-simulation-title': true,
                  children: 'Shipping',
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(InputText /* default */.Z, {
                  actionable: true,
                  error: errorMessage,
                  id: 'shipping-postal-code',
                  label: 'Postal Code',
                  value: shippingPostalCode,
                  onInput: handleOnInput,
                  onSubmit: handleSubmit,
                  onClear: () =>
                    dispatch({
                      type: 'clear',
                    }),
                  displayClearButton: displayClearButton,
                }),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Link /* default */.Z, {
                  href: '/',
                  'data-fs-shipping-simulation-link': true,
                  children: [
                    "I don't know my Postal Code",
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                      name: 'ArrowSquareOut',
                      width: 18,
                      height: 18,
                    }),
                  ],
                }),
                hasShippingOptions &&
                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                      /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
                        'data-fs-shipping-simulation-header': true,
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx('h3', {
                            'data-fs-shipping-simulation-subtitle': true,
                            children: 'Shipping options',
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('p', {
                            className: 'text__body',
                            'data-fs-shipping-simulation-location': true,
                            children: shippingLocation,
                          }),
                        ],
                      }),
                      /*#__PURE__*/ jsx_runtime_.jsx(Table /* default */.Z, {
                        'data-fs-shipping-simulation-table': true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(
                          TableBody /* default */.Z,
                          {
                            children: shippingOptions.map((option) =>
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                TableRow /* default */.Z,
                                {
                                  'data-fs-shipping-simulation-table-row': true,
                                  children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        'data-fs-shipping-simulation-table-cell': true,
                                        children: option.carrier,
                                      }
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        'data-fs-shipping-simulation-table-cell': true,
                                        children: option.localizedEstimates,
                                      }
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx(
                                      TableCell /* default */.Z,
                                      {
                                        'data-fs-shipping-simulation-table-cell': true,
                                        children:
                                          option.price &&
                                          /*#__PURE__*/ jsx_runtime_.jsx(
                                            Price /* default */.Z,
                                            {
                                              formatter: formatter,
                                              value: option.price,
                                              SRText: 'price',
                                            }
                                          ),
                                      }
                                    ),
                                  ],
                                },
                                option.carrier
                              )
                            ),
                          }
                        ),
                      }),
                    ],
                  }),
              ],
            }
          )
        )
      }

      /* harmony default export */ const ShippingSimulation_ShippingSimulation =
        ShippingSimulation // CONCATENATED MODULE: ./src/components/ui/ShippingSimulation/index.ts

      /***/
    },

    /***/ 7152: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* reexport */ SkuSelector_Selectors,
      })

      // UNUSED EXPORTS: SkuSelector

      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/SkuSelector/SkuSelector.js + 1 modules
      var SkuSelector = __webpack_require__(1843)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/RadioGroup/RadioOption.js + 1 modules
      var RadioOption = __webpack_require__(3464)
      // EXTERNAL MODULE: ./src/components/ui/Image/index.ts
      var Image = __webpack_require__(6193)
      // EXTERNAL MODULE: ./src/components/ui/SkuSelector/sku-selector.module.scss
      var sku_selector_module = __webpack_require__(118)
      var sku_selector_module_default =
        /*#__PURE__*/ __webpack_require__.n(sku_selector_module)
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/SkuSelector/SkuSelector.tsx
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

      function SkuSelector_SkuSelector(_ref) {
        let props = Object.assign({}, _ref)
        const { options, activeValue, variant } = props
        return /*#__PURE__*/ jsx_runtime_.jsx(
          SkuSelector /* default */.Z,
          _objectSpread(
            _objectSpread(
              {
                className: sku_selector_module_default().fsSkuSelector,
              },
              props
            ),
            {},
            {
              children: options.map((option, index) => {
                return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                  RadioOption /* default */.Z,
                  {
                    'data-fs-sku-selector-option': true,
                    label: option.label,
                    value: option.value,
                    disabled: option.disabled,
                    checked: option.value === activeValue,
                    children: [
                      variant === 'label' &&
                        /*#__PURE__*/ jsx_runtime_.jsx('span', {
                          children: option.value,
                        }),
                      variant === 'image' &&
                        'src' in option &&
                        /*#__PURE__*/ jsx_runtime_.jsx('span', {
                          children: /*#__PURE__*/ jsx_runtime_.jsx(
                            Image /* Image */.E,
                            {
                              src: option.src ?? '',
                              alt: option.alt,
                              width: 20,
                              height: 20,
                              loading: 'lazy',
                              'data-fs-sku-selector-option-image': true,
                            }
                          ),
                        }),
                    ],
                  },
                  String(index)
                )
              }),
            }
          )
        )
      }

      /* harmony default export */ const ui_SkuSelector_SkuSelector =
        SkuSelector_SkuSelector
      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__(1853) // CONCATENATED MODULE: ./src/components/ui/SkuSelector/skuVariants.ts
      function skuVariants_ownKeys(object, enumerableOnly) {
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

      function skuVariants_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? skuVariants_ownKeys(Object(source), !0).forEach(function (key) {
                skuVariants_defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : skuVariants_ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                )
              })
        }
        return target
      }

      function skuVariants_defineProperty(obj, key, value) {
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

      function getSkuSlug(slugsMap, selectedVariations, dominantVariation) {
        const slugsMapKey = Object.entries(selectedVariations).flat().join('-')

        if (slugsMapKey in slugsMap) {
          return slugsMap[slugsMapKey]
        }

        const possibleVariants = Object.keys(slugsMap)
        const firstVariationForDominantValue = possibleVariants.find((slug) =>
          slug.includes(
            `${dominantVariation}-${selectedVariations[dominantVariation]}`
          )
        )
        return slugsMap[firstVariationForDominantValue ?? possibleVariants[0]]
      }
      function navigateToSku({
        router,
        slugsMap,
        dominantSku,
        selectorsState,
        updatedVariationName,
        updatedVariationValue,
      }) {
        const whereTo = `/${getSkuSlug(
          slugsMap,
          skuVariants_objectSpread(
            skuVariants_objectSpread({}, selectorsState),
            {},
            {
              [updatedVariationName]: updatedVariationValue,
            }
          ),
          dominantSku
        )}/p`

        if (whereTo === window.location.pathname) {
          return
        }

        router.push(whereTo)
      } // CONCATENATED MODULE: ./src/components/ui/SkuSelector/Selectors.tsx
      const _excluded = ['slugsMap', 'availableVariations', 'activeVariations'],
        _excluded2 = ['Color']

      function Selectors_ownKeys(object, enumerableOnly) {
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

      function Selectors_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? Selectors_ownKeys(Object(source), !0).forEach(function (key) {
                Selectors_defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : Selectors_ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                )
              })
        }
        return target
      }

      function Selectors_defineProperty(obj, key, value) {
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

      /**
       * Name of the property that's considered **dominant**. Which means that all
       * other varying properties will be filtered according to the current value
       * of this property.
       *
       * Ex: If `Red` is the current value for the 'Color' variation, we'll only
       * render possible values for 'Size' that are available in `Red`.
       */
      const DOMINANT_SKU_SELECTOR_PROPERTY = 'Color'

      function Selectors(_ref) {
        let { slugsMap, availableVariations, activeVariations } = _ref,
          otherProps = _objectWithoutProperties(_ref, _excluded)

        const router = (0, router_.useRouter)() // 'Color' variants are singled-out here because they will always be rendered
        // as 'image' variants. And they're also the 'dominant' variants in our store.

        const { Color: colorOptions } = availableVariations,
          otherSkuVariants = _objectWithoutProperties(
            availableVariations,
            _excluded2
          )

        function handleOnChange(e, updatedVariationName) {
          const newVariationValue = e.currentTarget.value
          navigateToSku({
            router,
            slugsMap,
            updatedVariationName,
            selectorsState: activeVariations,
            updatedVariationValue: newVariationValue,
            dominantSku: DOMINANT_SKU_SELECTOR_PROPERTY,
          })
        }

        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
          'section',
          Selectors_objectSpread(
            Selectors_objectSpread({}, otherProps),
            {},
            {
              children: [
                colorOptions &&
                  /*#__PURE__*/ jsx_runtime_.jsx(ui_SkuSelector_SkuSelector, {
                    label: 'Color',
                    variant: 'image',
                    options: colorOptions,
                    activeValue: activeVariations.Color,
                    onChange: (e) => handleOnChange(e, 'Color'),
                  }),
                otherSkuVariants &&
                  Object.keys(otherSkuVariants).map((skuVariant) =>
                    /*#__PURE__*/ jsx_runtime_.jsx(
                      ui_SkuSelector_SkuSelector,
                      {
                        variant: 'label',
                        label: skuVariant,
                        options: otherSkuVariants[skuVariant],
                        activeValue: activeVariations[skuVariant],
                        onChange: (e) => handleOnChange(e, skuVariant),
                      },
                      skuVariant
                    )
                  ),
              ],
            }
          )
        )
      }

      /* harmony default export */ const SkuSelector_Selectors = Selectors // CONCATENATED MODULE: ./src/components/ui/SkuSelector/index.ts

      /***/
    },

    /***/ 5779: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(6641)
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_seo__WEBPACK_IMPORTED_MODULE_1__
              )
            /* harmony import */ var src_components_cms_RenderPageSections__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(701)
            /* harmony import */ var src_components_sections_BannerNewsletter_BannerNewsletter__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(2951)
            /* harmony import */ var src_components_sections_CrossSellingShelf__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(7990)
            /* harmony import */ var src_components_sections_ProductDetails__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(3220)
            /* harmony import */ var src_sdk_session__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(5971)
            /* harmony import */ var src_sdk_tests_mark__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(2541)
            /* harmony import */ var src_server__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(9685)
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
                src_components_sections_BannerNewsletter_BannerNewsletter__WEBPACK_IMPORTED_MODULE_3__,
                src_components_sections_CrossSellingShelf__WEBPACK_IMPORTED_MODULE_4__,
                src_components_sections_ProductDetails__WEBPACK_IMPORTED_MODULE_5__,
                src_server__WEBPACK_IMPORTED_MODULE_8__,
              ])
            ;[
              src_components_sections_BannerNewsletter_BannerNewsletter__WEBPACK_IMPORTED_MODULE_3__,
              src_components_sections_CrossSellingShelf__WEBPACK_IMPORTED_MODULE_4__,
              src_components_sections_ProductDetails__WEBPACK_IMPORTED_MODULE_5__,
              src_server__WEBPACK_IMPORTED_MODULE_8__,
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
             * Sections: Components imported from each store's custom components and '../components/sections' only.
             * Do not import or render components from any other folder in here.
             */

            const COMPONENTS = _objectSpread(
              {
                ProductDetails:
                  src_components_sections_ProductDetails__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                BannerNewsletter:
                  src_components_sections_BannerNewsletter_BannerNewsletter__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                CrossSellingShelf:
                  src_components_sections_CrossSellingShelf__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
              },
              src_customizations__WEBPACK_IMPORTED_MODULE_10__ /* ["default"] */.Z
            )

            function Page({ product, sections }) {
              const { currency } = (0,
              src_sdk_session__WEBPACK_IMPORTED_MODULE_6__ /* .useSession */.kP)()
              const { seo } = product
              const title =
                seo.title ||
                _store_config__WEBPACK_IMPORTED_MODULE_11___default().seo.title
              const description =
                seo.description ||
                _store_config__WEBPACK_IMPORTED_MODULE_11___default().seo
                  .description
              const canonical = `${
                _store_config__WEBPACK_IMPORTED_MODULE_11___default().storeUrl
              }${seo.canonical}`
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(
                      next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo,
                      {
                        title: title,
                        description: description,
                        canonical: canonical,
                        openGraph: {
                          type: 'og:product',
                          url: canonical,
                          title,
                          description,
                          images: product.image.map((img) => ({
                            url: img.url,
                            alt: img.alternateName,
                          })),
                        },
                        additionalMetaTags: [
                          {
                            property: 'product:price:amount',
                            content:
                              product.offers.lowPrice?.toString() ?? undefined,
                          },
                          {
                            property: 'product:price:currency',
                            content: currency.code,
                          },
                        ],
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(
                      next_seo__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbJsonLd,
                      {
                        itemListElements:
                          product.breadcrumbList.itemListElement,
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(
                      next_seo__WEBPACK_IMPORTED_MODULE_1__.ProductJsonLd,
                      {
                        productName: product.name,
                        description: product.description,
                        brand: product.brand.name,
                        sku: product.sku,
                        gtin: product.gtin,
                        releaseDate: product.releaseDate,
                        images: product.image.map((img) => img.url), // Somehow, Google does not understand this valid Schema.org schema, so we need to do conversions
                        offersType: 'AggregateOffer',
                        offers: _objectSpread(
                          _objectSpread(
                            _objectSpread({}, product.offers),
                            product.offers.offers[0]
                          ),
                          {},
                          {
                            url: canonical,
                          }
                        ),
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(
                      src_components_cms_RenderPageSections__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                      {
                        context: product,
                        sections: sections,
                        components: COMPONENTS,
                      }
                    ),
                  ],
                }
              )
            }

            const query = 'ServerProductPageQuery'
            const getStaticProps = async ({ params, previewData }) => {
              const slug = params?.slug ?? ''
              const [cmsPage, searchResult] = await Promise.all([
                (0,
                src_server_cms__WEBPACK_IMPORTED_MODULE_9__ /* .getPage */.f)(
                  _objectSpread(
                    _objectSpread(
                      {},
                      previewData?.contentType === 'pdp' ? previewData : null
                    ),
                    {},
                    {
                      contentType: 'pdp',
                    }
                  )
                ),
                (0, src_server__WEBPACK_IMPORTED_MODULE_8__ /* .execute */.h)({
                  variables: {
                    slug,
                  },
                  operationName: query,
                }),
              ])
              const { data, errors = [] } = searchResult
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
                props: _objectSpread(_objectSpread({}, data), cmsPage),
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
            src_sdk_tests_mark__WEBPACK_IMPORTED_MODULE_7__ /* .mark */.B)(Page)
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 8892: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Q: () => /* binding */ useBuyButton,
        /* harmony export */
      })
      /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(8460)
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(6689)
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
      /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(5971)
      /* harmony import */ var _ui_Provider__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(8869)
      /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(7566)

      const useBuyButton = (item) => {
        const { openCart } = (0,
        _ui_Provider__WEBPACK_IMPORTED_MODULE_2__ /* .useUI */.l)()
        const {
          currency: { code },
        } = (0, _session__WEBPACK_IMPORTED_MODULE_1__ /* .useSession */.kP)()
        const onClick = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
          (e) => {
            e.preventDefault()

            if (!item) {
              return
            }

            ;(0,
            _faststore_sdk__WEBPACK_IMPORTED_MODULE_4__ /* .sendAnalyticsEvent */._)(
              {
                name: 'add_to_cart',
                params: {
                  currency: code,
                  // TODO: In the future, we can explore more robust ways of
                  // calculating the value (gift items, discounts, etc.).
                  value: item.price * item.quantity,
                  items: [
                    {
                      item_id: item.itemOffered.isVariantOf.productGroupID,
                      item_name: item.itemOffered.isVariantOf.name,
                      item_brand: item.itemOffered.brand.name,
                      item_variant: item.itemOffered.sku,
                      quantity: item.quantity,
                      price: item.price,
                      discount: item.listPrice - item.price,
                      currency: code,
                      item_variant_name: item.itemOffered.name,
                      product_reference_id: item.itemOffered.gtin,
                    },
                  ],
                },
              }
            )
            _index__WEBPACK_IMPORTED_MODULE_3__ /* .cartStore.addItem */.i8
              .addItem(item)
            openCart()
          },
          [code, item, openCart]
        )
        return {
          onClick,
          'data-testid': 'buy-button',
          'data-sku': item?.itemOffered.sku,
          'data-seller': item?.seller.identifier,
        }
      }

      /***/
    },

    /***/ 3874: /***/ (module, __webpack_exports__, __webpack_require__) => {
      'use strict'
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ i: () => /* binding */ useProduct,
              /* harmony export */
            })
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(6689)
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_0__
              )
            /* harmony import */ var _graphql_useQuery__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(7732)
            /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(5971)
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _graphql_useQuery__WEBPACK_IMPORTED_MODULE_1__,
              ])
            _graphql_useQuery__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            const query = 'BrowserProductQuery'
            const useProduct = (productID, fallbackData) => {
              const { channel, locale } = (0,
              _session__WEBPACK_IMPORTED_MODULE_2__ /* .useSession */.kP)()
              const variables = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
                if (!channel) {
                  throw new Error(
                    `useProduct: 'channel' from session is an empty string.`
                  )
                }

                return {
                  locator: [
                    {
                      key: 'id',
                      value: productID,
                    },
                    {
                      key: 'channel',
                      value: channel,
                    },
                    {
                      key: 'locale',
                      value: locale,
                    },
                  ],
                }
              }, [channel, locale, productID])
              return (0,
              _graphql_useQuery__WEBPACK_IMPORTED_MODULE_1__ /* .useQuery */.aM)(
                query,
                variables,
                {
                  fallbackData,
                  revalidateOnMount: true,
                }
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

    /***/ 6207: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-out-of-stock': 'out-of-stock_fs-out-of-stock__opAqy',
        fsOutOfStock: 'out-of-stock_fs-out-of-stock__opAqy',
      }

      /***/
    },

    /***/ 6308: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-banner-newsletter': 'banner-newsletter_fs-banner-newsletter__45gCy',
        fsBannerNewsletter: 'banner-newsletter_fs-banner-newsletter__45gCy',
      }

      /***/
    },

    /***/ 7558: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-product-details-content':
          'product-details-content_fs-product-details-content__Azb_u',
        fsProductDetailsContent:
          'product-details-content_fs-product-details-content__Azb_u',
      }

      /***/
    },

    /***/ 841: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-product-details': 'product-details_fs-product-details__KhD0C',
        fsProductDetails: 'product-details_fs-product-details__KhD0C',
      }

      /***/
    },

    /***/ 9265: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-image-gallery-selector':
          'image-gallery-selector_fs-image-gallery-selector__MgI11',
        fsImageGallerySelector:
          'image-gallery-selector_fs-image-gallery-selector__MgI11',
      }

      /***/
    },

    /***/ 3910: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-image-gallery': 'image-gallery_fs-image-gallery__qtBsI',
        fsImageGallery: 'image-gallery_fs-image-gallery__qtBsI',
      }

      /***/
    },

    /***/ 4265: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-product-title': 'product-title_fs-product-title__xP2Uv',
        fsProductTitle: 'product-title_fs-product-title__xP2Uv',
      }

      /***/
    },

    /***/ 214: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-shipping-simulation':
          'shipping-simulation_fs-shipping-simulation__IOQSO',
        fsShippingSimulation:
          'shipping-simulation_fs-shipping-simulation__IOQSO',
      }

      /***/
    },

    /***/ 118: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-sku-selector': 'sku-selector_fs-sku-selector__UDDZ8',
        fsSkuSelector: 'sku-selector_fs-sku-selector__UDDZ8',
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

    /***/ 6676: /***/ (module) => {
      'use strict'
      module.exports = require('@vtex/client-cms')

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
  var __webpack_require__ = require('../../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [
      676, 3132, 4221, 6595, 354, 2457, 9902, 1559, 8910, 6182, 9504, 702, 7821,
      1224, 7732, 9854, 6881, 4310, 367, 6923, 7104, 8194, 350, 601,
    ],
    () => __webpack_exec__(5779)
  )
  module.exports = __webpack_exports__
})()
