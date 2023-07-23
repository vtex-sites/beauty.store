;(() => {
  var exports = {}
  exports.id = 2888
  exports.ids = [2888]
  exports.modules = {
    /***/ 4503: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* reexport */ ui_Alert_Alert,
      })

      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Alert/Alert.js
      var Alert = __webpack_require__(839)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Icon/Icon.js
      var Icon = __webpack_require__(1007)
      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689)
      // EXTERNAL MODULE: ./src/components/ui/Link/index.ts + 1 modules
      var Link = __webpack_require__(1093)
      // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
      var Button = __webpack_require__(1310)
      // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
      var ui_Icon = __webpack_require__(2478)
      // EXTERNAL MODULE: ./src/components/ui/Alert/alert.module.scss
      var alert_module = __webpack_require__(2454)
      var alert_module_default =
        /*#__PURE__*/ __webpack_require__.n(alert_module)
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Alert/Alert.tsx
      const _excluded = ['children', 'icon', 'dismissible', 'link', 'onClose']

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

      function Alert_Alert(_ref) {
        let { children, icon, dismissible, link, onClose } = _ref,
          otherProps = _objectWithoutProperties(_ref, _excluded)

        const handleClose = (0, external_react_.useCallback)(
          (event) => {
            if (event.defaultPrevented) {
              return
            }

            onClose?.(event)
          },
          [onClose]
        )
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
          Alert /* default */.Z,
          _objectSpread(
            _objectSpread(
              {
                'data-fs-alert': true,
                'data-fs-alert-dismissible': dismissible,
                className: alert_module_default().fsAlert,
              },
              otherProps
            ),
            {},
            {
              children: [
                icon &&
                  /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                    component: icon,
                  }),
                /*#__PURE__*/ jsx_runtime_.jsx('p', {
                  'data-fs-alert-content': true,
                  children: children,
                }),
                link &&
                  /*#__PURE__*/ jsx_runtime_.jsx(Link /* default */.Z, {
                    'data-fs-alert-link': true,
                    variant: 'inline',
                    href: link.to,
                    children: link.text,
                  }),
                dismissible &&
                  /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                    'data-fs-alert-button': true,
                    'aria-label': 'Close',
                    onClick: handleClose,
                    children: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                        ui_Icon /* default */.Z,
                        {
                          name: 'X',
                          width: 18,
                          height: 18,
                          weight: 'bold',
                        }
                      ),
                    }),
                  }),
              ],
            }
          )
        )
      }

      /* harmony default export */ const ui_Alert_Alert = Alert_Alert // CONCATENATED MODULE: ./src/components/ui/Alert/index.ts

      /***/
    },

    /***/ 4750: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__)

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ _app,
      }) // CONCATENATED MODULE: external "nextjs-progressbar"

      const external_nextjs_progressbar_namespaceObject = require('nextjs-progressbar')
      var external_nextjs_progressbar_default =
        /*#__PURE__*/ __webpack_require__.n(
          external_nextjs_progressbar_namespaceObject
        )
      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689)
      // EXTERNAL MODULE: ./src/components/ui/Alert/index.ts + 1 modules
      var Alert = __webpack_require__(4503)
      // EXTERNAL MODULE: ./src/sdk/tests/mark.tsx
      var mark = __webpack_require__(2541)
      // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
      var Icon = __webpack_require__(2478)
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/common/Alert/Alert.tsx
      function Alert_Alert({
        icon,
        content,
        link,
        dismissible = false,
        children,
      }) {
        const { 0: displayAlert, 1: setDisplayAlert } = (0,
        external_react_.useState)(true)
        const onAlertClose = (0, external_react_.useCallback)(
          () => setDisplayAlert(false),
          [setDisplayAlert]
        )

        if (displayAlert === false) {
          return null
        }

        return /*#__PURE__*/ jsx_runtime_.jsx(Alert /* default */.Z, {
          icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
            name: icon,
            width: 24,
            height: 24,
          }),
          dismissible: dismissible,
          onClose: onAlertClose,
          link: link,
          children: content ?? children,
        })
      }

      Alert_Alert.displayName = 'Alert'
      /* harmony default export */ const common_Alert_Alert = (0,
      mark /* mark */.B)(Alert_Alert) // CONCATENATED MODULE: ./src/components/common/Alert/index.ts
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/List/List.js
      var List = __webpack_require__(8164)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/PaymentMethods/PaymentMethods.js
      var PaymentMethods = __webpack_require__(3719)
      // EXTERNAL MODULE: ./src/components/ui/Logo/logo.module.scss
      var logo_module = __webpack_require__(4374)
      var logo_module_default = /*#__PURE__*/ __webpack_require__.n(logo_module) // CONCATENATED MODULE: ./src/components/ui/Logo/Logo.tsx
      function Logo() {
        return /*#__PURE__*/ jsx_runtime_.jsx('span', {
          className: logo_module_default().fsLogo,
          'data-fs-logo': true,
          role: 'img',
          'aria-label': 'BaseStore logo',
        })
      }

      /* harmony default export */ const Logo_Logo = Logo // CONCATENATED MODULE: ./src/components/ui/Logo/index.ts
      // EXTERNAL MODULE: ./src/components/sections/Incentives/Incentives.tsx
      var Incentives = __webpack_require__(5247) // CONCATENATED MODULE: ./src/components/sections/Incentives/incentivesMock.ts
      const incentivesMockHeader = [
        {
          icon: 'Truck',
          title: 'Buy online',
          firstLineText: 'Get Free Shipping',
        },
        {
          icon: 'Calendar',
          title: 'Free return',
          firstLineText: '30 days to return',
        },
        {
          icon: 'Gift',
          title: 'Gift cards',
          firstLineText: '$20 / $30 / $50',
        },
        {
          icon: 'Storefront',
          title: 'Physical Stores',
          firstLineText: '+40 Stores in Brazil',
        },
        {
          icon: 'ShieldCheck',
          title: 'Buy online',
          firstLineText: 'Get Free Shipping',
        },
      ]
      const incentivesMockFooter = [
        {
          icon: 'ShieldCheck',
          firstLineText: 'Trusted',
          secondLineText: 'by Safecon',
        },
        {
          icon: 'Medal',
          firstLineText: 'Quality',
          secondLineText: 'Products',
        },
        {
          icon: 'CircleWavyCheck',
          firstLineText: '3-year',
          secondLineText: 'Guarantee',
        },
        {
          icon: 'Storefront',
          firstLineText: 'Pickup',
          secondLineText: 'Options',
        },
        {
          icon: 'Truck',
          firstLineText: 'Free',
          secondLineText: 'Shippping',
        },
      ] // CONCATENATED MODULE: ./src/components/sections/Incentives/IncentivesFooter.tsx
      function IncentivesFooter() {
        return /*#__PURE__*/ jsx_runtime_.jsx(Incentives /* default */.Z, {
          incentives: incentivesMockFooter,
        })
      }

      /* harmony default export */ const Incentives_IncentivesFooter =
        IncentivesFooter
      // EXTERNAL MODULE: ./src/components/ui/Link/index.ts + 1 modules
      var Link = __webpack_require__(1093)
      // EXTERNAL MODULE: ./src/components/ui/SROnly/index.ts + 1 modules
      var SROnly = __webpack_require__(2252)
      // EXTERNAL MODULE: ./src/components/common/Footer/footer.module.scss
      var footer_module = __webpack_require__(1893)
      var footer_module_default =
        /*#__PURE__*/ __webpack_require__.n(footer_module)
      // EXTERNAL MODULE: ./src/components/ui/Accordion/index.ts + 2 modules
      var Accordion = __webpack_require__(367) // CONCATENATED MODULE: ./src/components/common/Footer/FooterLinks.tsx
      const links = [
        {
          title: 'Our company',
          items: [
            {
              href: '/',
              name: 'About Us',
            },
            {
              href: '/',
              name: 'Our Blog',
            },
            {
              href: '/',
              name: 'Stores',
            },
            {
              href: '/',
              name: 'Work With Us',
            },
          ],
        },
        {
          title: 'Orders & Purchases',
          items: [
            {
              href: '/',
              name: 'Check Order Status',
            },
            {
              href: '/',
              name: 'Returns and Exchanges',
            },
            {
              href: '/',
              name: 'Product Recall',
            },
            {
              href: '/',
              name: 'Gift Cards',
            },
          ],
        },
        {
          title: 'Support & Services',
          items: [
            {
              href: '/',
              name: 'Support Center',
            },
            {
              href: '/',
              name: 'Schedule a Service',
            },
            {
              href: '/',
              name: 'Contact Us',
            },
          ],
        },
        {
          title: 'Partnerships',
          items: [
            {
              href: '/',
              name: 'Affiliate Program',
            },
            {
              href: '/',
              name: 'Advertise with US',
            },
            {
              href: '/',
              name: 'Market Place',
            },
          ],
        },
      ]

      function LinksList({ items }) {
        return /*#__PURE__*/ jsx_runtime_.jsx(List /* default */.Z, {
          children: items.map((item) =>
            /*#__PURE__*/ jsx_runtime_.jsx(
              'li',
              {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Link /* default */.Z, {
                  variant: 'footer',
                  href: item.href,
                  children: item.name,
                }),
              },
              item.name
            )
          ),
        })
      }

      function FooterLinks() {
        const { 0: indicesExpanded, 1: setIndicesExpanded } = (0,
        external_react_.useState)(new Set([]))

        const onChange = (index) => {
          if (indicesExpanded.has(index)) {
            indicesExpanded.delete(index)
            setIndicesExpanded(new Set(indicesExpanded))
          } else {
            setIndicesExpanded(new Set(indicesExpanded.add(index)))
          }
        }

        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('section', {
          className: footer_module_default().fsFooter,
          'data-fs-footer-links': true,
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              className: 'display-mobile',
              children: /*#__PURE__*/ jsx_runtime_.jsx(
                Accordion /* default */.Z,
                {
                  expandedIndices: indicesExpanded,
                  onChange: onChange,
                  children: links.map((section, index) =>
                    /*#__PURE__*/ jsx_runtime_.jsx(
                      Accordion /* AccordionItem */.Q,
                      {
                        isExpanded: indicesExpanded.has(index),
                        buttonLabel: section.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinksList, {
                          items: section.items,
                        }),
                      },
                      section.title
                    )
                  ),
                }
              ),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              className: 'hidden-mobile',
              children: /*#__PURE__*/ jsx_runtime_.jsx('nav', {
                'data-fs-footer-links-columns': true,
                children: links.map((section) =>
                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    'div',
                    {
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('p', {
                          'data-fs-footer-title': true,
                          children: section.title,
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinksList, {
                          items: section.items,
                        }),
                      ],
                    },
                    section.title
                  )
                ),
              }),
            }),
          ],
        })
      }

      /* harmony default export */ const Footer_FooterLinks = FooterLinks // CONCATENATED MODULE: ./src/components/common/Footer/Footer.tsx
      function Footer({
        sectionIncentives = true,
        sectionSocial = true,
        sectionPaymentMethods = true,
      }) {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('footer', {
          'data-fs-footer': true,
          'data-fs-footer-incentives': sectionIncentives,
          'data-fs-footer-social': sectionSocial,
          'data-fs-footer-payment-methods': sectionPaymentMethods,
          className: `${footer_module_default().fsFooter} layout__content-full`,
          children: [
            sectionIncentives &&
              /*#__PURE__*/ jsx_runtime_.jsx(Incentives_IncentivesFooter, {}),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
              'data-fs-footer-nav': true,
              className: 'layout__content',
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterLinks, {}),
                sectionSocial &&
                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)('section', {
                    'data-fs-footer-social': true,
                    children: [
                      /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        'data-fs-footer-title': true,
                        children: 'Follow us',
                      }),
                      /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                        List /* default */.Z,
                        {
                          variant: 'unordered',
                          children: [
                            /*#__PURE__*/ jsx_runtime_.jsx('li', {
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                Link /* default */.Z,
                                {
                                  variant: 'footer',
                                  href: 'https://www.facebook.com/',
                                  title: 'Facebook',
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '24px',
                                      height: '24px',
                                      name: 'Facebook',
                                    }
                                  ),
                                }
                              ),
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('li', {
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                Link /* default */.Z,
                                {
                                  variant: 'footer',
                                  href: 'https://www.instagram.com/',
                                  title: 'Instagram',
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '24px',
                                      height: '24px',
                                      name: 'Instagram',
                                    }
                                  ),
                                }
                              ),
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('li', {
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                Link /* default */.Z,
                                {
                                  variant: 'footer',
                                  href: 'https://www.pinterest.com/',
                                  title: 'Pinterest',
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '24px',
                                      height: '24px',
                                      name: 'Pinterest',
                                    }
                                  ),
                                }
                              ),
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx('li', {
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                Link /* default */.Z,
                                {
                                  variant: 'footer',
                                  href: 'https://twitter.com/',
                                  title: 'Twitter',
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '24px',
                                      height: '24px',
                                      name: 'Twitter',
                                    }
                                  ),
                                }
                              ),
                            }),
                          ],
                        }
                      ),
                    ],
                  }),
              ],
            }),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
              'data-fs-footer-note': true,
              className: 'layout__content',
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Logo_Logo, {}),
                sectionPaymentMethods &&
                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    PaymentMethods /* default */.Z,
                    {
                      'data-fs-footer-payment-methods': true,
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('p', {
                          'data-fs-footer-title': true,
                          children: 'Payment Methods',
                        }),
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                          List /* default */.Z,
                          {
                            children: [
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('li', {
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '34px',
                                      height: '24px',
                                      name: 'Visa',
                                    }
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    SROnly /* default */.Z,
                                    {
                                      text: 'Visa',
                                    }
                                  ),
                                ],
                              }),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('li', {
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '34px',
                                      height: '24px',
                                      name: 'Diners',
                                    }
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    SROnly /* default */.Z,
                                    {
                                      text: 'Diners Club',
                                    }
                                  ),
                                ],
                              }),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('li', {
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '34px',
                                      height: '24px',
                                      name: 'Mastercard',
                                    }
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    SROnly /* default */.Z,
                                    {
                                      text: 'Mastercard',
                                    }
                                  ),
                                ],
                              }),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('li', {
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '34px',
                                      height: '24px',
                                      name: 'EloCard',
                                    }
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    SROnly /* default */.Z,
                                    {
                                      text: 'Elo Card',
                                    }
                                  ),
                                ],
                              }),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('li', {
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '34px',
                                      height: '24px',
                                      name: 'PayPal',
                                    }
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    SROnly /* default */.Z,
                                    {
                                      text: 'PayPal',
                                    }
                                  ),
                                ],
                              }),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('li', {
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '34px',
                                      height: '24px',
                                      name: 'Stripe',
                                    }
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    SROnly /* default */.Z,
                                    {
                                      text: 'Stripe',
                                    }
                                  ),
                                ],
                              }),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('li', {
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '34px',
                                      height: '24px',
                                      name: 'GooglePay',
                                    }
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    SROnly /* default */.Z,
                                    {
                                      text: 'Google Pay',
                                    }
                                  ),
                                ],
                              }),
                              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('li', {
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      width: '34px',
                                      height: '24px',
                                      name: 'ApplePay',
                                    }
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    SROnly /* default */.Z,
                                    {
                                      text: 'Apple Pay',
                                    }
                                  ),
                                ],
                              }),
                            ],
                          }
                        ),
                      ],
                    }
                  ),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  'data-fs-footer-copyright': true,
                  className: 'text__legend',
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx('p', {
                      children: 'This website uses VTEX technology',
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('p', {
                      children:
                        'In-store price may vary. Prices and offers are subject to change. 2021 Store name. All rights reserved. Store is a trademark of Store and its affiliated companies.',
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('address', {
                      children: 'Mount St, 000, New York / NY - 00000.',
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      Footer.displayName = 'Footer'
      /* harmony default export */ const Footer_Footer = (0, mark /* mark */.B)(
        Footer
      ) // CONCATENATED MODULE: ./src/components/common/Footer/index.ts
      // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
      var Button = __webpack_require__(1310)
      // EXTERNAL MODULE: ./src/sdk/ui/Provider.tsx
      var Provider = __webpack_require__(8869)
      // EXTERNAL MODULE: ./src/sdk/cart/index.ts
      var cart = __webpack_require__(7566) // CONCATENATED MODULE: ./src/sdk/cart/useCartToggleButton.ts
      const useCartToggleButton = () => {
        const { totalItems } = (0, cart /* useCart */.jD)()
        const {
          cart: displayCart,
          openCart,
          closeCart,
        } = (0, Provider /* useUI */.l)()
        const onClick = (0, external_react_.useCallback)(() => {
          if (displayCart) {
            closeCart()
          } else {
            openCart()
          }
        }, [closeCart, displayCart, openCart])
        return {
          onClick,
          'data-testid': 'cart-toggle',
          'data-items': totalItems,
        }
      } // CONCATENATED MODULE: ./src/components/cart/CartToggle/CartToggle.tsx
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

      function CartToggle() {
        const btnProps = useCartToggleButton()
        const totalItems = btnProps['data-items']
        return /*#__PURE__*/ jsx_runtime_.jsx(
          Button /* default */.Co,
          _objectSpread(
            {
              'data-fs-cart-toggle': true,
              counter: totalItems,
              'aria-label': `Cart with ${totalItems} items`,
              icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                name: 'ShoppingCart',
                width: 32,
                height: 32,
              }),
            },
            btnProps
          )
        )
      }

      /* harmony default export */ const CartToggle_CartToggle = CartToggle // CONCATENATED MODULE: ./src/components/cart/CartToggle/index.ts
      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__(1853)
      // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/analytics/sendAnalyticsEvent.js
      var sendAnalyticsEvent = __webpack_require__(8460)
      // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/SearchInput/SearchInput.js
      var SearchInput_SearchInput = __webpack_require__(5414)
      // EXTERNAL MODULE: ./src/sdk/search/useSearchHistory.ts
      var useSearchHistory = __webpack_require__(5098)
      // EXTERNAL MODULE: ./src/sdk/search/useSearchInput.tsx
      var useSearchInput = __webpack_require__(3588) // CONCATENATED MODULE: ./src/sdk/ui/useOnClickOutside.ts
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      function useOnClickOutside(ref, handler) {
        ;(0, external_react_.useEffect)(
          () => {
            const listener = (event) => {
              if (!ref.current || ref.current.contains(event.target)) {
                return
              }

              handler(event)
            }

            document.addEventListener('mousedown', listener)
            document.addEventListener('touchstart', listener)
            return () => {
              document.removeEventListener('mousedown', listener)
              document.removeEventListener('touchstart', listener)
            }
          },
          /**
           * Add ref and handler to effect dependencies.
           * It's worth noting that because passed in handler is a new
           * function on every render that will cause this effect
           * callback/cleanup to run every render. It's not a big deal
           * but to optimize you can wrap handler in useCallback before
           * passing it into this hook.
           */
          [ref, handler]
        )
      }
      // EXTERNAL MODULE: ./src/components/search/SearchInput/search-input.module.scss
      var search_input_module = __webpack_require__(7098)
      var search_input_module_default =
        /*#__PURE__*/ __webpack_require__.n(search_input_module) // CONCATENATED MODULE: ./src/components/search/SearchInput/SearchInput.tsx
      const _excluded = ['onSearchClick', 'buttonTestId', 'containerStyle']

      function SearchInput_ownKeys(object, enumerableOnly) {
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

      function SearchInput_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? SearchInput_ownKeys(Object(source), !0).forEach(function (key) {
                SearchInput_defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : SearchInput_ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                )
              })
        }
        return target
      }

      function SearchInput_defineProperty(obj, key, value) {
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

      const SearchDropdown = /*#__PURE__*/ (0, external_react_.lazy)(() =>
        Promise.all(
          /* import() */ [
            __webpack_require__.e(5591),
            __webpack_require__.e(9504),
            __webpack_require__.e(702),
            __webpack_require__.e(7732),
            __webpack_require__.e(9854),
            __webpack_require__.e(4312),
          ]
        ).then(__webpack_require__.bind(__webpack_require__, 4312))
      )

      const sendAnalytics = async (term) => {
        ;(0, sendAnalyticsEvent /* sendAnalyticsEvent */._)({
          name: 'search',
          params: {
            search_term: term,
          },
        })
      }

      const SearchInput = /*#__PURE__*/ (0, external_react_.forwardRef)(
        function SearchInput(_ref, ref) {
          let {
              onSearchClick,
              buttonTestId = 'store-search-button',
              containerStyle,
            } = _ref,
            otherProps = _objectWithoutProperties(_ref, _excluded)

          const { 0: searchQuery, 1: setSearchQuery } = (0,
          external_react_.useState)('')
          const searchQueryDeferred = (0, external_react_.useDeferredValue)(
            searchQuery
          )
          const { 0: searchDropdownVisible, 1: setSearchDropdownVisible } = (0,
          external_react_.useState)(false)
          const searchRef = (0, external_react_.useRef)(null)
          const { addToSearchHistory } = (0, useSearchHistory /* default */.Z)()
          const router = (0, router_.useRouter)()
          ;(0, external_react_.useImperativeHandle)(ref, () => ({
            resetSearchInput: () => setSearchQuery(''),
          }))

          const onSearchInputSelection = (term, path) => {
            addToSearchHistory({
              term,
              path,
            })
            sendAnalytics(term)
            setSearchDropdownVisible(false)
            setSearchQuery(term)
          }

          useOnClickOutside(searchRef, () => setSearchDropdownVisible(false))
          return /*#__PURE__*/ jsx_runtime_.jsx('div', {
            ref: searchRef,
            'data-fs-search-input-wrapper': true,
            className: search_input_module_default().fsSearchInput,
            'data-fs-search-input-dropdown-visible': searchDropdownVisible,
            style: containerStyle,
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
              useSearchInput /* SearchInputProvider */.wX,
              {
                onSearchInputSelection: onSearchInputSelection,
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    SearchInput_SearchInput /* default */.Z,
                    SearchInput_objectSpread(
                      {
                        'data-fs-search-input': true,
                        ref: ref,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(
                          Icon /* default */.Z,
                          {
                            name: 'MagnifyingGlass',
                            onClick: onSearchClick,
                            'data-testid': buttonTestId,
                          }
                        ),
                        placeholder: 'Search everything at the store',
                        onChange: (e) => setSearchQuery(e.target.value),
                        onSubmit: (term) => {
                          const path = (0,
                          useSearchInput /* formatSearchPath */.uc)(term)
                          onSearchInputSelection(term, path)
                          router.push(path)
                        },
                        onFocus: () => setSearchDropdownVisible(true),
                        value: searchQuery,
                      },
                      otherProps
                    )
                  ),
                  searchDropdownVisible &&
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                      fallback: null,
                      children: /*#__PURE__*/ jsx_runtime_.jsx('div', {
                        'data-fs-search-input-dropdown-wrapper': true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(
                          SearchDropdown,
                          {
                            term: searchQueryDeferred,
                          }
                        ),
                      }),
                    }),
                ],
              }
            ),
          })
        }
      )
      /* harmony default export */ const search_SearchInput_SearchInput =
        SearchInput // CONCATENATED MODULE: ./src/components/search/SearchInput/index.ts // CONCATENATED MODULE: ./src/sdk/ui/useScrollDirection.ts
      function useScrollDirection() {
        const { 0: scrollDirection, 1: setScrollDirection } = (0,
        external_react_.useState)('')
        const { 0: isPending, 1: startTransition } = (0,
        external_react_.useTransition)()
        ;(0, external_react_.useEffect)(() => {
          let lastScrollY = window.scrollY

          const updateScrollDirection = () => {
            const { scrollY } = window
            const direction = scrollY > lastScrollY ? 'down' : 'up'

            if (
              !isPending &&
              direction !== scrollDirection &&
              (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
            ) {
              startTransition(() => setScrollDirection(direction))
            }

            lastScrollY = scrollY > 0 ? scrollY : 0
          }

          window.addEventListener('scroll', updateScrollDirection)
          return () =>
            window.removeEventListener('scroll', updateScrollDirection)
        }, [isPending, scrollDirection])
        return scrollDirection
      }
      // EXTERNAL MODULE: ./src/components/common/Navbar/navbar.module.scss
      var navbar_module = __webpack_require__(3460)
      var navbar_module_default =
        /*#__PURE__*/ __webpack_require__.n(navbar_module)
      // EXTERNAL MODULE: ./src/components/ui/SlideOver/index.ts + 1 modules
      var SlideOver = __webpack_require__(5731)
      // EXTERNAL MODULE: ./src/sdk/ui/useFadeEffect.ts
      var useFadeEffect = __webpack_require__(5112)
      // EXTERNAL MODULE: ./src/components/common/Navbar/navbar-slider.module.scss
      var navbar_slider_module = __webpack_require__(4325)
      var navbar_slider_module_default =
        /*#__PURE__*/ __webpack_require__.n(navbar_slider_module)
      // EXTERNAL MODULE: ./src/sdk/session/index.ts
      var session = __webpack_require__(5971) // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationButton/RegionalizationButton.tsx
      function RegionButton() {
        const { openModal } = (0, Provider /* useUI */.l)()
        const { postalCode } = (0, session /* useSession */.kP)()
        return /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
          'data-fs-regionalization-button': true,
          variant: 'tertiary',
          size: 'small',
          icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
            name: 'MapPin',
            width: 24,
            height: 24,
          }),
          iconPosition: 'left',
          onClick: openModal,
          children: /*#__PURE__*/ jsx_runtime_.jsx('span', {
            children: postalCode ?? 'Set your location',
          }),
        })
      }

      /* harmony default export */ const RegionalizationButton = RegionButton // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationButton/index.ts
      // EXTERNAL MODULE: ./src/components/common/Navbar/navlinks.module.scss
      var navlinks_module = __webpack_require__(844)
      var navlinks_module_default =
        /*#__PURE__*/ __webpack_require__.n(navlinks_module) // CONCATENATED MODULE: ./src/components/common/Navbar/NavLinks.tsx
      const collections = [
        {
          name: 'Office',
          href: '/office',
        },
        {
          name: 'Home Appliances',
          href: '/kitchen---home-appliances',
        },
        {
          name: 'Computer and Software',
          href: '/computer---software',
        },
        {
          name: 'Technology',
          href: '/technology',
        },
      ]

      function NavLinks({ onClickLink, classes = '' }) {
        return /*#__PURE__*/ jsx_runtime_.jsx('nav', {
          className: `${navlinks_module_default().fsNavlinks} ${classes}`,
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            className: 'layout__content',
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(RegionalizationButton, {}),
              /*#__PURE__*/ jsx_runtime_.jsx(List /* default */.Z, {
                'data-fs-navlinks-list': true,
                children: collections.map(({ href, name }) =>
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    'li',
                    {
                      'data-fs-navlinks-list-item': true,
                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                        Link /* default */.Z,
                        {
                          'data-fs-navlinks-link': true,
                          variant: 'display',
                          href: href,
                          onClick: onClickLink,
                          children: name,
                        }
                      ),
                    },
                    name
                  )
                ),
              }),
            ],
          }),
        })
      }

      /* harmony default export */ const Navbar_NavLinks = (0,
      mark /* mark */.B)(NavLinks) // CONCATENATED MODULE: ./src/components/common/Navbar/NavbarSlider.tsx
      function NavbarSlider() {
        const { closeNavbar } = (0, Provider /* useUI */.l)()
        const { fade, fadeOut } = (0, useFadeEffect /* useFadeEffect */.b)()
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(SlideOver /* default */.Z, {
          isOpen: true,
          fade: fade,
          onDismiss: fadeOut,
          size: 'full',
          direction: 'leftSide',
          className: navbar_slider_module_default().fsNavbarSlider,
          onTransitionEnd: () => fade === 'out' && closeNavbar(),
          children: [
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
              'data-fs-navbar-slider-header': true,
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Link /* default */.Z, {
                  href: '/',
                  onClick: fadeOut,
                  'aria-label': 'Go to FastStore home',
                  title: 'Go to FastStore home',
                  'data-fs-navbar-slider-logo': true,
                  children: /*#__PURE__*/ jsx_runtime_.jsx(Logo_Logo, {}),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                  'data-fs-navbar-slider-button': true,
                  'aria-label': 'Close Menu',
                  icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                    name: 'X',
                    width: 32,
                    height: 32,
                  }),
                  onClick: fadeOut,
                }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              'data-fs-navbar-slider-content': true,
              children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavLinks, {
                onClickLink: fadeOut,
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('footer', {
              'data-fs-navbar-slider-footer': true,
              children: /*#__PURE__*/ jsx_runtime_.jsx(
                external_react_.Suspense,
                {
                  fallback: /*#__PURE__*/ jsx_runtime_.jsx(
                    Button /* ButtonSignInFallback */.AC,
                    {}
                  ),
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    Button /* ButtonSignIn */.p4,
                    {}
                  ),
                }
              ),
            }),
          ],
        })
      }

      /* harmony default export */ const Navbar_NavbarSlider = (0,
      mark /* mark */.B)(NavbarSlider) // CONCATENATED MODULE: ./src/components/common/Navbar/Navbar.tsx
      function Navbar() {
        const scrollDirection = useScrollDirection()
        const { openNavbar, navbar: displayNavbar } = (0,
        Provider /* useUI */.l)()
        const searchMobileRef = (0, external_react_.useRef)(null)
        const { 0: searchExpanded, 1: setSearchExpanded } = (0,
        external_react_.useState)(false)

        const handlerExpandSearch = () => {
          setSearchExpanded(true)
          searchMobileRef.current?.inputRef?.focus()
        }

        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
          'data-fs-navbar': true,
          'data-fs-navbar-scroll': scrollDirection,
          className: `${navbar_module_default().fsNavbar} layout__content-full`,
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx('section', {
              'data-fs-navbar-header': true,
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                className: 'layout__content',
                'data-fs-navbar-row': true,
                children: [
                  !searchExpanded &&
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                      jsx_runtime_.Fragment,
                      {
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            Button /* default */.Co,
                            {
                              'data-fs-navbar-button-menu': true,
                              'aria-label': 'Open Menu',
                              icon: /*#__PURE__*/ jsx_runtime_.jsx(
                                Icon /* default */.Z,
                                {
                                  name: 'List',
                                  width: 32,
                                  height: 32,
                                }
                              ),
                              onClick: openNavbar,
                            }
                          ),
                          /*#__PURE__*/ jsx_runtime_.jsx(Link /* default */.Z, {
                            href: '/',
                            'aria-label': 'Go to Faststore home',
                            title: 'Go to Faststore home',
                            'data-fs-navbar-logo': true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(
                              Logo_Logo,
                              {}
                            ),
                          }),
                        ],
                      }
                    ),
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    search_SearchInput_SearchInput,
                    {}
                  ),
                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                    'data-fs-navbar-buttons': true,
                    'data-fs-navbar-search-expanded': searchExpanded,
                    children: [
                      searchExpanded &&
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          Button /* default */.Co,
                          {
                            'data-fs-button-collapse': true,
                            'aria-label': 'Collapse search bar',
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(
                              Icon /* default */.Z,
                              {
                                name: 'CaretLeft',
                                width: 32,
                                height: 32,
                              }
                            ),
                            onClick: () => {
                              setSearchExpanded(false)
                              searchMobileRef.current?.resetSearchInput()
                            },
                          }
                        ),
                      /*#__PURE__*/ jsx_runtime_.jsx(
                        search_SearchInput_SearchInput,
                        {
                          placeholder: '',
                          ref: searchMobileRef,
                          testId: 'store-input-mobile',
                          buttonTestId: 'store-input-mobile-button',
                          onSearchClick: handlerExpandSearch,
                        }
                      ),
                      /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                        fallback: /*#__PURE__*/ jsx_runtime_.jsx(
                          Button /* ButtonSignInFallback */.AC,
                          {}
                        ),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(
                          Button /* ButtonSignIn */.p4,
                          {}
                        ),
                      }),
                      /*#__PURE__*/ jsx_runtime_.jsx(CartToggle_CartToggle, {}),
                    ],
                  }),
                ],
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavLinks, {
              classes: 'hidden-mobile',
            }),
            displayNavbar &&
              /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavbarSlider, {}),
          ],
        })
      }

      Navbar.displayName = 'Navbar'
      /* harmony default export */ const Navbar_Navbar = (0, mark /* mark */.B)(
        Navbar
      ) // CONCATENATED MODULE: ./src/components/common/Navbar/index.ts // CONCATENATED MODULE: ./src/components/common/Toast/Toast.tsx
      const UIToast = /*#__PURE__*/ (0, external_react_.lazy)(() =>
        __webpack_require__
          .e(/* import() */ 6307)
          .then(__webpack_require__.bind(__webpack_require__, 6307))
      )

      function Toast() {
        const { toasts, pushToast } = (0, Provider /* useUI */.l)()
        const { messages } = (0, cart /* useCart */.jD)()
        /**
         * Send cart notifications to toast in case the cart
         * returns warnings
         */

        ;(0, external_react_.useEffect)(() => {
          if (!messages) {
            return
          }

          messages.forEach((message) =>
            pushToast({
              message: message.text,
              status: message.status,
            })
          )
        }, [messages, pushToast])
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children:
            toasts.length > 0 &&
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
              fallback: null,
              children: /*#__PURE__*/ jsx_runtime_.jsx(UIToast, {}),
            }),
        })
      }

      /* harmony default export */ const Toast_Toast = Toast // CONCATENATED MODULE: ./src/components/common/Toast/index.ts
      // EXTERNAL MODULE: ./src/components/regionalization/RegionalizationBar/regionalization-bar.module.scss
      var regionalization_bar_module = __webpack_require__(3707)
      var regionalization_bar_module_default =
        /*#__PURE__*/ __webpack_require__.n(regionalization_bar_module) // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationBar/RegionalizationBar.tsx
      const RegionalizationBar_excluded = ['classes']

      function RegionalizationBar_ownKeys(object, enumerableOnly) {
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

      function RegionalizationBar_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? RegionalizationBar_ownKeys(Object(source), !0).forEach(function (
                key
              ) {
                RegionalizationBar_defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : RegionalizationBar_ownKeys(Object(source)).forEach(function (
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

      function RegionalizationBar_defineProperty(obj, key, value) {
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

      function RegionalizationBar_objectWithoutProperties(source, excluded) {
        if (source == null) return {}
        var target = RegionalizationBar_objectWithoutPropertiesLoose(
          source,
          excluded
        )
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

      function RegionalizationBar_objectWithoutPropertiesLoose(
        source,
        excluded
      ) {
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

      function RegionBar(_ref) {
        let { classes } = _ref,
          otherProps = RegionalizationBar_objectWithoutProperties(
            _ref,
            RegionalizationBar_excluded
          )

        const { openModal } = (0, Provider /* useUI */.l)()
        const { postalCode } = (0, session /* useSession */.kP)()
        return /*#__PURE__*/ jsx_runtime_.jsx(
          'div',
          RegionalizationBar_objectSpread(
            RegionalizationBar_objectSpread(
              {
                'data-fs-regionalization-bar': true,
                className: `${classes} ${
                  regionalization_bar_module_default().fsRegionalizationBar
                }`,
              },
              otherProps
            ),
            {},
            {
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                Button /* default */.Co,
                {
                  onClick: openModal,
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                      name: 'MapPin',
                      width: 24,
                      height: 24,
                    }),
                    postalCode
                      ? /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                          jsx_runtime_.Fragment,
                          {
                            children: [
                              /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                'data-fs-regionalization-bar-postal-code': true,
                                children: postalCode,
                              }),
                              /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                'data-fs-regionalization-bar-cta': true,
                                children: 'Edit',
                              }),
                            ],
                          }
                        )
                      : /*#__PURE__*/ jsx_runtime_.jsx('span', {
                          'data-fs-regionalization-bar-message': true,
                          children: 'Set your location',
                        }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                      name: 'CaretRight',
                      width: 24,
                      height: 24,
                    }),
                  ],
                }
              ),
            }
          )
        )
      }

      /* harmony default export */ const RegionalizationBar = RegionBar // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationBar/index.ts // CONCATENATED MODULE: ./src/Layout.tsx
      const CartSidebar = /*#__PURE__*/ (0, external_react_.lazy)(() =>
        Promise.all(
          /* import() */ [
            __webpack_require__.e(9902),
            __webpack_require__.e(2332),
            __webpack_require__.e(9504),
            __webpack_require__.e(702),
            __webpack_require__.e(601),
            __webpack_require__.e(648),
          ]
        ).then(__webpack_require__.bind(__webpack_require__, 648))
      )
      const RegionModal = /*#__PURE__*/ (0, external_react_.lazy)(() =>
        Promise.all(
          /* import() */ [
            __webpack_require__.e(1224),
            __webpack_require__.e(9730),
          ]
        ).then(__webpack_require__.bind(__webpack_require__, 3318))
      )

      function Layout({ children }) {
        const { cart: displayCart, modal: displayModal } = (0,
        Provider /* useUI */.l)()
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(common_Alert_Alert, {
              icon: 'Bell',
              link: {
                text: 'Buy now',
                to: '/office',
              },
              dismissible: true,
              children: [
                'Get 10% off today:\xA0',
                /*#__PURE__*/ jsx_runtime_.jsx('span', {
                  children: 'NEW10',
                }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Toast_Toast, {}),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)('main', {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(RegionalizationBar, {
                  classes: 'display-mobile',
                }),
                children,
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {}),
            displayCart &&
              /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                fallback: null,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CartSidebar, {}),
              }),
            displayModal &&
              /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                fallback: null,
                children: /*#__PURE__*/ jsx_runtime_.jsx(RegionModal, {}),
              }),
          ],
        })
      }

      /* harmony default export */ const src_Layout = Layout
      // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/analytics/useAnalyticsEvent.js
      var useAnalyticsEvent = __webpack_require__(6751)
      // EXTERNAL MODULE: ./store.config.js
      var store_config = __webpack_require__(6182)
      var store_config_default =
        /*#__PURE__*/ __webpack_require__.n(store_config) // CONCATENATED MODULE: ./src/sdk/analytics/index.tsx
      if (false) {
      }

      const AnalyticsHandler = () => {
        ;(0, useAnalyticsEvent /* useAnalyticsEvent */.W)((event) => {
          // Cleans the ecommerce object before pushing a new one
          // This prevents the new data from getting merged with the previous one
          // which could lead do inaccurate and old data being sent with events
          //
          // source: https://developers.google.com/tag-manager/ecommerce-ga4?hl=pt-br#clearing_the_ecommerce_object
          window.dataLayer.push({
            ecommerce: null,
          })
          window.dataLayer.push({
            event: event.name,
            ecommerce: event.params,
          })
          __webpack_require__(3982)(
            `./${store_config_default().platform}`
          ).then(({ default: sendEvent }) => {
            sendEvent(event)
          })
        })
        return null
      }
      /* harmony default export */ const analytics = AnalyticsHandler // CONCATENATED MODULE: ./src/sdk/error/ErrorBoundary/ErrorBoundary.tsx
      function ErrorBoundary_defineProperty(obj, key, value) {
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

      const getReloads = () =>
        Number(window.sessionStorage.getItem('store:reloads') ?? '0')

      const setReloads = (reloads) =>
        window.sessionStorage.setItem('store:reloads', `${reloads}`)

      const canRecover = () => getReloads() < 2

      const isFrameworkLevelError = (error) => error?.name === 'ChunkLoadError'

      if (false) {
      }

      class ErrorBoundary extends external_react_.Component {
        constructor(...args) {
          super(...args)

          ErrorBoundary_defineProperty(this, 'state', {
            hasError: false,
            error: null,
          })
        }

        static getDerivedStateFromError(error) {
          return {
            hasError: true,
            error,
          }
        } // We can't accurately type the error here, since it could vary depending on
        // what caused it. This is not standardized.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        componentDidCatch(error, errorInfo) {
          console.error(
            `React Error: ${error.message} ${errorInfo.componentStack}`
          )
          const errorId = 'unknown' // prevent infinite loop

          if (
            window.location.pathname.startsWith('/404') ||
            window.location.pathname.startsWith('/500')
          ) {
            return
          }

          const from = encodeURIComponent(window.location.pathname)
          const is404 = error?.extensions?.exception?.status === 404

          if (isFrameworkLevelError(error) && canRecover()) {
            setReloads(getReloads() + 1)
            window.location.reload()
          } else if (is404) {
            window.location.href = `/404?from=${from}`
          } else {
            window.location.href = `/500?from=${from}&errorId=${errorId}`
          }
        }

        render() {
          if (this.state.hasError && true) {
            return null
          }

          return this.props.children
        }
      }

      /* harmony default export */ const ErrorBoundary_ErrorBoundary =
        ErrorBoundary // CONCATENATED MODULE: ./src/sdk/error/ErrorBoundary/index.ts // CONCATENATED MODULE: ./src/pages/_app.tsx
      function _app_ownKeys(object, enumerableOnly) {
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

      function _app_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? _app_ownKeys(Object(source), !0).forEach(function (key) {
                _app_defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : _app_ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                )
              })
        }
        return target
      }

      function _app_defineProperty(obj, key, value) {
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

      function App({ Component, pageProps }) {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
          ErrorBoundary_ErrorBoundary,
          {
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(
                external_nextjs_progressbar_default(),
                {
                  color: 'var(--fs-color-primary-bkg);',
                  showOnShallow: false,
                  options: {
                    showSpinner: false,
                  },
                }
              ),
              /*#__PURE__*/ jsx_runtime_.jsx(analytics, {}),
              /*#__PURE__*/ jsx_runtime_.jsx(Provider /* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(src_Layout, {
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    Component,
                    _app_objectSpread({}, pageProps)
                  ),
                }),
              }),
            ],
          }
        )
      }

      /* harmony default export */ const _app = App

      /***/
    },

    /***/ 5098: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => /* binding */ useSearchHistory,
        /* harmony export */
      })
      /* unused harmony export searchHistoryStore */
      /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(7244)
      /* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(3818)

      const searchHistoryStore = (0,
      _faststore_sdk__WEBPACK_IMPORTED_MODULE_1__ /* .createStore */.M)(
        [],
        `fs::searchHistory`
      )
      const MAX_HISTORY_SIZE = 4
      function useSearchHistory(maxHistorySize = MAX_HISTORY_SIZE) {
        const searchHistory = (0,
        _useStore__WEBPACK_IMPORTED_MODULE_0__ /* .useStore */.o)(
          searchHistoryStore
        )

        function addToSearchHistory(newHistory) {
          const set = new Set()
          const newHistoryArray = [newHistory, ...searchHistory]
            .slice(0, maxHistorySize)
            .filter((item) => !set.has(item.term) && set.add(item.term), set)
          searchHistoryStore.set(newHistoryArray)
        }

        function clearSearchHistory() {
          searchHistoryStore.set([])
        }

        return {
          searchHistory,
          addToSearchHistory,
          clearSearchHistory,
        }
      }

      /***/
    },

    /***/ 3588: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ ZP: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */ uc: () => /* binding */ formatSearchPath,
        /* harmony export */ wX: () => /* binding */ SearchInputProvider,
        /* harmony export */
      })
      /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(3364)
      /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(3264)
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(6689)
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(997)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__
        )

      const formatSearchPath = (term) => {
        const { pathname, search } = (0,
        _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z)(
          (0, _faststore_sdk__WEBPACK_IMPORTED_MODULE_3__ /* .initialize */.j)({
            term,
            base: '/s',
          })
        )
        return `${pathname}${search}`
      }
      const SearchInputContext = /*#__PURE__*/ (0,
      react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null)
      function SearchInputProvider({ onSearchInputSelection, children }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
          SearchInputContext.Provider,
          {
            value: {
              onSearchInputSelection,
            },
            children: children,
          }
        )
      }

      const useSearchInput = () => {
        const context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
          SearchInputContext
        )

        if (!context) {
          throw new Error('Do not use outside the SearchInputContext context.')
        }

        return context
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        useSearchInput

      /***/
    },

    /***/ 1893: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-footer': 'footer_fs-footer__ivJqk',
        fsFooter: 'footer_fs-footer__ivJqk',
      }

      /***/
    },

    /***/ 4325: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-navbar-slider': 'navbar-slider_fs-navbar-slider__bAYHh',
        fsNavbarSlider: 'navbar-slider_fs-navbar-slider__bAYHh',
      }

      /***/
    },

    /***/ 3460: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-navbar': 'navbar_fs-navbar__JA7gD',
        fsNavbar: 'navbar_fs-navbar__JA7gD',
      }

      /***/
    },

    /***/ 844: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-navlinks': 'navlinks_fs-navlinks__nbR4q',
        fsNavlinks: 'navlinks_fs-navlinks__nbR4q',
      }

      /***/
    },

    /***/ 3707: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-regionalization-bar':
          'regionalization-bar_fs-regionalization-bar__VW9YM',
        fsRegionalizationBar:
          'regionalization-bar_fs-regionalization-bar__VW9YM',
      }

      /***/
    },

    /***/ 7098: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-search-input': 'search-input_fs-search-input__qJpVA',
        fsSearchInput: 'search-input_fs-search-input__qJpVA',
      }

      /***/
    },

    /***/ 2454: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-alert': 'alert_fs-alert__sS2Fy',
        fsAlert: 'alert_fs-alert__sS2Fy',
      }

      /***/
    },

    /***/ 4374: /***/ (module) => {
      // Exports
      module.exports = {
        'fs-logo': 'logo_fs-logo__4mmCZ',
        fsLogo: 'logo_fs-logo__4mmCZ',
      }

      /***/
    },

    /***/ 3982: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var map = {
        './vtex': [3664, 5098],
        './vtex/': [3664, 5098],
        './vtex/index': [3664, 5098],
        './vtex/index.ts': [3664, 5098],
        './vtex/search': [9143, 9143],
        './vtex/search.ts': [9143, 9143],
      }
      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(() => {
            var e = new Error("Cannot find module '" + req + "'")
            e.code = 'MODULE_NOT_FOUND'
            throw e
          })
        }

        var ids = map[req],
          id = ids[0]
        return __webpack_require__.e(ids[1]).then(() => {
          return __webpack_require__(id)
        })
      }
      webpackAsyncContext.keys = () => Object.keys(map)
      webpackAsyncContext.id = 3982
      module.exports = webpackAsyncContext

      /***/
    },

    /***/ 5490: /***/ (module) => {
      'use strict'
      module.exports = require('@faststore/graphql-utils')

      /***/
    },

    /***/ 3430: /***/ (module) => {
      'use strict'
      module.exports = require('idb-keyval')

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
    [676, 3132, 4221, 3924, 7103, 6182, 7821, 367, 9840, 5247],
    () => __webpack_exec__(4750)
  )
  module.exports = __webpack_exports__
})()
