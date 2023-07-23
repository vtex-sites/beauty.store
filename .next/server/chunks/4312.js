exports.id = 4312
exports.ids = [4312]
exports.modules = {
  /***/ 1612: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var src_components_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(7204)
          /* harmony import */ var src_sdk_search_useSuggestions__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6344)
          /* harmony import */ var _SearchHistory__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(1979)
          /* harmony import */ var _SearchTop__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(107)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(997)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__
            )
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_search_useSuggestions__WEBPACK_IMPORTED_MODULE_1__,
              _SearchTop__WEBPACK_IMPORTED_MODULE_3__,
            ])
          ;[
            src_sdk_search_useSuggestions__WEBPACK_IMPORTED_MODULE_1__,
            _SearchTop__WEBPACK_IMPORTED_MODULE_3__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__
          const _excluded = ['term', 'style']

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

          function SearchDropdown(_ref) {
            let { term = '', style } = _ref,
              otherProps = _objectWithoutProperties(_ref, _excluded)

            const { terms, products, isLoading } = (0,
            src_sdk_search_useSuggestions__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z)(
              term
            )

            if (term.length === 0 && !isLoading) {
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                      _SearchHistory__WEBPACK_IMPORTED_MODULE_2__ /* .SearchHistory */.Z,
                      {}
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                      _SearchTop__WEBPACK_IMPORTED_MODULE_3__ /* .SearchTop */.S,
                      {}
                    ),
                  ],
                }
              )
            }

            if (isLoading) {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                'p',
                {
                  'data-fs-search-input-loading-text': true,
                  children: 'Loading...',
                }
              )
            }

            if (terms.length === 0 && products.length === 0) {
              return null
            }

            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
              src_components_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
              _objectSpread(
                {
                  term: term,
                  terms: terms,
                  products: products,
                },
                otherProps
              )
            )
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            SearchDropdown
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 4312: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
            /* harmony export */ default: () =>
              /* reexport safe */ _SearchDropdown__WEBPACK_IMPORTED_MODULE_0__.Z,
            /* harmony export */
          })
          /* harmony import */ var _SearchDropdown__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(1612)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _SearchDropdown__WEBPACK_IMPORTED_MODULE_0__,
            ])
          _SearchDropdown__WEBPACK_IMPORTED_MODULE_0__ = (
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

  /***/ 1979: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ SearchHistory_SearchHistory,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/List/List.js
    var List = __webpack_require__(8164)
    // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
    var Button = __webpack_require__(1310)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/Link/index.ts + 1 modules
    var Link = __webpack_require__(1093)
    // EXTERNAL MODULE: ./src/sdk/search/useSearchHistory.ts
    var useSearchHistory = __webpack_require__(5098)
    // EXTERNAL MODULE: ./src/sdk/search/useSearchInput.tsx
    var useSearchInput = __webpack_require__(3588)
    // EXTERNAL MODULE: ./src/components/search/search.module.scss
    var search_module = __webpack_require__(4850)
    var search_module_default =
      /*#__PURE__*/ __webpack_require__.n(search_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/search/SearchHistory/SearchHistory.tsx
    const SearchHistory = () => {
      const { onSearchInputSelection } = (0, useSearchInput /* default */.ZP)()
      const { searchHistory, clearSearchHistory } = (0,
      useSearchHistory /* default */.Z)()

      if (!searchHistory.length) {
        return null
      }

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('section', {
        'data-fs-search-section': true,
        className: search_module_default().fsSearch,
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-search-header': true,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx('p', {
                'data-fs-search-title': true,
                children: 'History',
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                variant: 'tertiary',
                onClick: clearSearchHistory,
                children: 'Clear History',
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(List /* default */.Z, {
            variant: 'ordered',
            children: searchHistory.map((item) =>
              /*#__PURE__*/ jsx_runtime_.jsx(
                'li',
                {
                  'data-fs-search-item': true,
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    Link /* default */.Z,
                    {
                      'data-fs-search-item-link': true,
                      variant: 'display',
                      href: item.path,
                      onClick: () =>
                        onSearchInputSelection?.(item.term, item.path),
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                          name: 'Clock',
                          width: 18,
                          height: 18,
                          'data-fs-search-item-icon': true,
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx('span', {
                          children: item.term,
                        }),
                      ],
                    }
                  ),
                },
                item.term
              )
            ),
          }),
        ],
      })
    }

    /* harmony default export */ const SearchHistory_SearchHistory =
      SearchHistory // CONCATENATED MODULE: ./src/components/search/SearchHistory/index.ts

    /***/
  },

  /***/ 7204: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ SearchSuggestions_SearchSuggestions,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/List/List.js
    var List = __webpack_require__(8164)
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Card/Card.js
    var Card = __webpack_require__(2497)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Card/CardContent.js
    var CardContent = __webpack_require__(4492)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Card/CardImage.js
    var CardImage = __webpack_require__(3438)
    // EXTERNAL MODULE: ./src/components/ui/Image/index.ts
    var Image = __webpack_require__(6193)
    // EXTERNAL MODULE: ./src/components/ui/Link/index.ts + 1 modules
    var Link = __webpack_require__(1093)
    // EXTERNAL MODULE: ./src/components/ui/Price/index.ts + 1 modules
    var Price = __webpack_require__(7902)
    // EXTERNAL MODULE: ./src/sdk/product/useFormattedPrice.ts
    var useFormattedPrice = __webpack_require__(5346)
    // EXTERNAL MODULE: ./src/sdk/product/useProductLink.ts
    var useProductLink = __webpack_require__(9854)
    // EXTERNAL MODULE: ./src/sdk/search/useSearchInput.tsx
    var useSearchInput = __webpack_require__(3588)
    // EXTERNAL MODULE: ./src/components/search/SearchProductCard/search-product-card.module.scss
    var search_product_card_module = __webpack_require__(6996)
    var search_product_card_module_default =
      /*#__PURE__*/ __webpack_require__.n(search_product_card_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/search/SearchProductCard/SearchProductCard.tsx
    const _excluded = ['product', 'index'],
      _excluded2 = ['onClick', 'href']

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

    function SearchProductCard(_ref) {
      let { product, index } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      const { onSearchInputSelection } = (0, useSearchInput /* default */.ZP)()

      const _useProductLink = (0, useProductLink /* useProductLink */.w)({
          product,
          selectedOffer: 0,
          index,
        }),
        { onClick, href } = _useProductLink,
        linkProps = _objectWithoutProperties(_useProductLink, _excluded2)

      const {
        isVariantOf: { name },
        image: [img],
        offers: {
          lowPrice: spotPrice,
          offers: [{ listPrice }],
        },
      } = product
      return /*#__PURE__*/ jsx_runtime_.jsx(
        Card /* default */.Z,
        _objectSpread(
          _objectSpread(
            {
              'data-fs-search-product-card': true,
              className:
                search_product_card_module_default().fsSearchProductCard,
              'data-testid': 'search-product-card',
            },
            otherProps
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime_.jsx(
              Link /* default */.Z,
              _objectSpread(
                _objectSpread({}, linkProps),
                {},
                {
                  'data-fs-search-product-card-link': true,
                  href: href,
                  title: name,
                  variant: 'display',
                  onClick: () => {
                    onClick()
                    onSearchInputSelection?.(name, href)
                  },
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    CardContent /* default */.Z,
                    {
                      'data-fs-search-product-card-content': true,
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          CardImage /* default */.Z,
                          {
                            'data-fs-search-product-card-image': true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(
                              Image /* Image */.E,
                              {
                                src: img.url,
                                alt: img.alternateName,
                                width: 56,
                                height: 56,
                              }
                            ),
                          }
                        ),
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                          'data-fs-search-product-card-summary': true,
                          children: [
                            /*#__PURE__*/ jsx_runtime_.jsx('p', {
                              className: 'text__title-mini',
                              'data-fs-search-product-card-title': true,
                              children: name,
                            }),
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)('span', {
                              'data-fs-search-product-card-prices': true,
                              children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(
                                  Price /* default */.Z,
                                  {
                                    value: listPrice,
                                    formatter:
                                      useFormattedPrice /* useFormattedPrice */.P,
                                    testId: 'list-price',
                                    'data-value': listPrice,
                                    variant: 'listing',
                                    classes: 'text__legend',
                                    SRText: 'Original price:',
                                  }
                                ),
                                /*#__PURE__*/ jsx_runtime_.jsx(
                                  Price /* default */.Z,
                                  {
                                    value: spotPrice,
                                    formatter:
                                      useFormattedPrice /* useFormattedPrice */.P,
                                    testId: 'price',
                                    'data-value': spotPrice,
                                    variant: 'spot',
                                    classes: 'text__title-mini',
                                    SRText: 'Price:',
                                  }
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }
                  ),
                }
              )
            ),
          }
        )
      )
    }

    /* harmony default export */ const SearchProductCard_SearchProductCard =
      SearchProductCard // CONCATENATED MODULE: ./src/components/search/SearchProductCard/index.ts
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/search/search.module.scss
    var search_module = __webpack_require__(4850)
    var search_module_default =
      /*#__PURE__*/ __webpack_require__.n(search_module) // CONCATENATED MODULE: ./src/components/search/SearchSuggestions/SearchSuggestions.tsx
    const SearchSuggestions_excluded = ['testId', 'term', 'terms', 'products']

    function SearchSuggestions_ownKeys(object, enumerableOnly) {
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

    function SearchSuggestions_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? SearchSuggestions_ownKeys(Object(source), !0).forEach(function (
              key
            ) {
              SearchSuggestions_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : SearchSuggestions_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function SearchSuggestions_defineProperty(obj, key, value) {
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

    function SearchSuggestions_objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = SearchSuggestions_objectWithoutPropertiesLoose(
        source,
        excluded
      )
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

    function SearchSuggestions_objectWithoutPropertiesLoose(source, excluded) {
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

    function formatSearchTerm(indexSubstring, searchTerm, suggestion) {
      if (indexSubstring === 0) {
        return searchTerm
          .split('')
          .map((char, idx) =>
            idx === 0 && suggestion.indexOf(char.toUpperCase()) === 0
              ? char.toUpperCase()
              : char.toLowerCase()
          )
          .join('')
      }

      return searchTerm.toLowerCase()
    }

    function handleSuggestions(suggestion, searchTerm) {
      const suggestionSubstring = suggestion
        .toLowerCase()
        .split(searchTerm.toLowerCase())
      return /*#__PURE__*/ jsx_runtime_.jsx('p', {
        children: suggestionSubstring.map((substring, indexSubstring) =>
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
            external_react_.Fragment,
            {
              children: [
                substring.length > 0 &&
                  /*#__PURE__*/ jsx_runtime_.jsx('b', {
                    'data-fs-search-item-bold': true,
                    children:
                      indexSubstring === 0
                        ? substring.charAt(0).toUpperCase() + substring.slice(1)
                        : substring,
                  }),
                indexSubstring !== suggestionSubstring.length - 1 &&
                  formatSearchTerm(indexSubstring, searchTerm, suggestion),
              ],
            },
            [substring, indexSubstring].join()
          )
        ),
      })
    }

    function SearchSuggestions(_ref) {
      let {
          testId = 'suggestions',
          term = '',
          terms = [],
          products = [],
        } = _ref,
        otherProps = SearchSuggestions_objectWithoutProperties(
          _ref,
          SearchSuggestions_excluded
        )

      const { onSearchInputSelection } = (0, useSearchInput /* default */.ZP)()
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
        'section',
        SearchSuggestions_objectSpread(
          SearchSuggestions_objectSpread(
            {
              'data-testid': testId,
              'data-fs-search': true,
              className: search_module_default().fsSearch,
            },
            otherProps
          ),
          {},
          {
            children: [
              terms.length > 0 &&
                /*#__PURE__*/ jsx_runtime_.jsx(List /* default */.Z, {
                  'data-fs-search-section': 'terms',
                  children: terms?.map(({ value: suggestion }) =>
                    /*#__PURE__*/ jsx_runtime_.jsx(
                      'li',
                      {
                        'data-fs-search-item': true,
                        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                          Link /* default */.Z,
                          {
                            'data-fs-search-item-link': true,
                            href: (0, useSearchInput /* formatSearchPath */.uc)(
                              suggestion
                            ),
                            onClick: () => {
                              onSearchInputSelection?.(
                                suggestion,
                                (0, useSearchInput /* formatSearchPath */.uc)(
                                  suggestion
                                )
                              )
                            },
                            children: [
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                Icon /* default */.Z,
                                {
                                  name: 'MagnifyingGlass',
                                  width: 18,
                                  height: 18,
                                  'data-fs-search-item-icon': true,
                                }
                              ),
                              handleSuggestions(suggestion, term),
                            ],
                          }
                        ),
                      },
                      suggestion
                    )
                  ),
                }),
              products.length > 0 &&
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  'data-fs-search-section': true,
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      'data-fs-search-header': true,
                      children: /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        'data-fs-search-title': true,
                        children: 'Suggested Products',
                      }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(List /* default */.Z, {
                      children: products.map((product, index) =>
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          'li',
                          {
                            'data-fs-search-item': true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(
                              SearchProductCard_SearchProductCard,
                              {
                                product: product,
                                index: index,
                              }
                            ),
                          },
                          product.id
                        )
                      ),
                    }),
                  ],
                }),
            ],
          }
        )
      )
    }

    /* harmony default export */ const SearchSuggestions_SearchSuggestions =
      SearchSuggestions // CONCATENATED MODULE: ./src/components/search/SearchSuggestions/index.ts

    /***/
  },

  /***/ 5299: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var _faststore_ui__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(8164)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(6689)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            )
          /* harmony import */ var src_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(4851)
          /* harmony import */ var src_components_ui_Link__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(1093)
          /* harmony import */ var src_sdk_search_useSearchInput__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(3588)
          /* harmony import */ var src_sdk_search_useTopSearch__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(1363)
          /* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(4850)
          /* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _search_module_scss__WEBPACK_IMPORTED_MODULE_6__
            )
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(997)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__
            )
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_search_useTopSearch__WEBPACK_IMPORTED_MODULE_4__,
            ])
          src_sdk_search_useTopSearch__WEBPACK_IMPORTED_MODULE_4__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]
          const _excluded = ['testId', 'topTerms']

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

          const SearchTop = /*#__PURE__*/ (0,
          react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function SearchTop(
            _ref,
            ref
          ) {
            let { testId = 'top-search', topTerms } = _ref,
              otherProps = _objectWithoutProperties(_ref, _excluded)

            const { onSearchInputSelection } = (0,
            src_sdk_search_useSearchInput__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)()
            const { terms, isLoading } = (0,
            src_sdk_search_useTopSearch__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z)(
              topTerms
            )

            if (terms.length === 0) {
              return null
            }

            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
              'section',
              _objectSpread(
                _objectSpread(
                  {
                    ref: ref,
                    'data-testid': testId,
                    'data-fs-search-section': true,
                    className:
                      _search_module_scss__WEBPACK_IMPORTED_MODULE_6___default()
                        .fsSearch,
                  },
                  otherProps
                ),
                {},
                {
                  children: isLoading
                    ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                        'p',
                        {
                          'data-fs-search-input-loading-text': true,
                          children: 'Loading...',
                        }
                      )
                    : /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
                        {
                          children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                              'div',
                              {
                                'data-fs-search-header': true,
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                                    'p',
                                    {
                                      'data-fs-search-title': true,
                                      children: 'Top Search',
                                    }
                                  ),
                              }
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                              _faststore_ui__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
                              {
                                variant: 'ordered',
                                children: terms.map((term, index) =>
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                                    'li',
                                    {
                                      'data-fs-search-item': true,
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                                        src_components_ui_Link__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                                        {
                                          'data-fs-search-item-link': true,
                                          variant: 'display',
                                          href: (0,
                                          src_sdk_search_useSearchInput__WEBPACK_IMPORTED_MODULE_3__ /* .formatSearchPath */.uc)(
                                            term.value
                                          ),
                                          onClick: () =>
                                            onSearchInputSelection?.(
                                              term.value,
                                              (0,
                                              src_sdk_search_useSearchInput__WEBPACK_IMPORTED_MODULE_3__ /* .formatSearchPath */.uc)(
                                                term.value
                                              )
                                            ),
                                          children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                                              src_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1__ /* .Badge */.C,
                                              {
                                                'data-fs-search-badge': true,
                                                variant: 'info',
                                                children: index + 1,
                                              }
                                            ),
                                            term.value,
                                          ],
                                        }
                                      ),
                                    },
                                    term.value
                                  )
                                ),
                              }
                            ),
                          ],
                        }
                      ),
                }
              )
            )
          })
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            SearchTop
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 107: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ S: () =>
              /* reexport safe */ _SearchTop__WEBPACK_IMPORTED_MODULE_0__.Z,
            /* harmony export */
          })
          /* harmony import */ var _SearchTop__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5299)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _SearchTop__WEBPACK_IMPORTED_MODULE_0__,
            ])
          _SearchTop__WEBPACK_IMPORTED_MODULE_0__ = (
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

  /***/ 6344: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(8460)
          /* harmony import */ var src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(7732)
          /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(5971)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_1__,
            ])
          src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_1__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]

          const MAX_SUGGESTIONS = 5
          const query = 'SearchSuggestionsQuery'

          function useSuggestions(term, limit = MAX_SUGGESTIONS) {
            const { channel, locale } = (0,
            _session__WEBPACK_IMPORTED_MODULE_2__ /* .useSession */.kP)()
            const variables = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
              () => ({
                term,
                selectedFacets: [
                  {
                    key: 'channel',
                    value: channel ?? '',
                  },
                  {
                    key: 'locale',
                    value: locale,
                  },
                ],
              }),
              [term, locale, channel]
            )
            const { data, error } = (0,
            src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_1__ /* .useQuery */.aM)(
              query,
              variables,
              {
                onSuccess: (callbackData) => {
                  if (callbackData && term) {
                    ;(0,
                    _faststore_sdk__WEBPACK_IMPORTED_MODULE_3__ /* .sendAnalyticsEvent */._)(
                      {
                        name: 'intelligent_search_query',
                        params: {
                          locale,
                          term,
                          url: window.location.href,
                          logicalOperator:
                            callbackData.search.metadata?.logicalOperator ??
                            'and',
                          isTermMisspelled:
                            callbackData.search.metadata?.isTermMisspelled ??
                            false,
                          totalCount:
                            callbackData.search.products.pageInfo.totalCount,
                        },
                      }
                    )
                  }
                },
              }
            )
            return {
              terms: (data?.search.suggestions.terms ?? []).slice(0, limit),
              products: (data?.search.suggestions.products ?? []).slice(
                0,
                limit
              ),
              isLoading: !error && !data,
            }
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            useSuggestions
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 1363: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(7732)
          /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(5971)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_0__,
            ])
          src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_0__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]

          const MAX_TOP_SEARCH_TERMS = 5
          const query = 'TopSearchSuggestionsQuery'

          function useTopSearch(
            initialTerms = [],
            limit = MAX_TOP_SEARCH_TERMS
          ) {
            const { channel, locale } = (0,
            _session__WEBPACK_IMPORTED_MODULE_1__ /* .useSession */.kP)()
            const { data, error } = (0,
            src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_0__ /* .useQuery */.aM)(
              query,
              {
                term: '',
                selectedFacets: [
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
            )
            return {
              terms: (data?.search.suggestions.terms ?? initialTerms).slice(
                0,
                limit
              ),
              isLoading: !error && !data,
            }
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            useTopSearch
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 6996: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-search-product-card':
        'search-product-card_fs-search-product-card__MOsNW',
      fsSearchProductCard: 'search-product-card_fs-search-product-card__MOsNW',
    }

    /***/
  },

  /***/ 4850: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-search': 'search_fs-search__DRhxy',
      fsSearch: 'search_fs-search__DRhxy',
    }

    /***/
  },
}
