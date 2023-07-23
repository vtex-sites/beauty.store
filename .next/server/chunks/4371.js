exports.id = 4371
exports.ids = [4371]
exports.modules = {
  /***/ 85: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      C: () => /* reexport */ Filter_Filter,
    })

    // UNUSED EXPORTS: FilterSlider

    // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/search/useSearch.js + 1 modules
    var useSearch = __webpack_require__(7794)
    // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/search/facets.js
    var search_facets = __webpack_require__(3291)
    // EXTERNAL MODULE: ./src/sdk/ui/Provider.tsx
    var Provider = __webpack_require__(8869)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/List/List.js
    var List = __webpack_require__(8164)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Label/Label.js
    var Label = __webpack_require__(571)
    // EXTERNAL MODULE: ./src/components/ui/Accordion/index.ts + 2 modules
    var Accordion = __webpack_require__(367)
    // EXTERNAL MODULE: ./src/components/ui/Badge/index.ts + 3 modules
    var Badge = __webpack_require__(4851)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Checkbox/Checkbox.js
    var Checkbox = __webpack_require__(9030)
    // EXTERNAL MODULE: ./src/components/ui/Checkbox/checkbox.module.scss
    var checkbox_module = __webpack_require__(2762)
    var checkbox_module_default =
      /*#__PURE__*/ __webpack_require__.n(checkbox_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Checkbox/Checkbox.tsx
    const _excluded = ['partial']

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

    function Checkbox_Checkbox(_ref) {
      let { partial } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      return /*#__PURE__*/ jsx_runtime_.jsx(
        Checkbox /* default */.Z,
        _objectSpread(
          {
            className: checkbox_module_default().fsCheckbox,
            'data-fs-checkbox-partial': partial,
          },
          otherProps
        )
      )
    }

    /* harmony default export */ const ui_Checkbox_Checkbox = Checkbox_Checkbox // CONCATENATED MODULE: ./src/components/ui/Checkbox/index.ts
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/PriceRange/PriceRange.js + 1 modules
    var PriceRange = __webpack_require__(4685)
    // EXTERNAL MODULE: ./src/sdk/product/useFormattedPrice.ts
    var useFormattedPrice = __webpack_require__(5346)
    // EXTERNAL MODULE: ./src/components/ui/PriceRange/price-range.module.scss
    var price_range_module = __webpack_require__(7980)
    var price_range_module_default =
      /*#__PURE__*/ __webpack_require__.n(price_range_module)
    // EXTERNAL MODULE: ./src/components/ui/InputText/index.ts + 1 modules
    var InputText = __webpack_require__(1224) // CONCATENATED MODULE: ./src/components/ui/PriceRange/PriceRange.tsx
    const PriceRange_excluded = ['min', 'max', 'onEnd', 'step']

    function PriceRange_ownKeys(object, enumerableOnly) {
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

    function PriceRange_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? PriceRange_ownKeys(Object(source), !0).forEach(function (key) {
              PriceRange_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : PriceRange_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function PriceRange_defineProperty(obj, key, value) {
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

    function PriceRange_objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = PriceRange_objectWithoutPropertiesLoose(source, excluded)
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

    function PriceRange_objectWithoutPropertiesLoose(source, excluded) {
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

    function PriceRange_PriceRange(_ref) {
      let { min, max, onEnd, step = 10 } = _ref,
        otherProps = PriceRange_objectWithoutProperties(
          _ref,
          PriceRange_excluded
        )

      const formatter = (0, useFormattedPrice /* usePriceFormatter */.o)({
        decimals: false,
      })
      const minAbsoluteFormatted = (0,
      useFormattedPrice /* useFormattedPrice */.P)(Math.round(min.absolute))
      const maxAbsoluteFormatted = (0,
      useFormattedPrice /* useFormattedPrice */.P)(Math.ceil(max.absolute))
      const inputMinRef = (0, external_react_.useRef)(null)
      const inputMaxRef = (0, external_react_.useRef)(null)
      const priceRangeRef = (0, external_react_.useRef)()
      const { 0: inputMinError, 1: setInputMinError } = (0,
      external_react_.useState)()
      const { 0: inputMaxError, 1: setInputMaxError } = (0,
      external_react_.useState)()
      const { 0: priceRange, 1: setPriceRange } = (0, external_react_.useState)(
        {
          min: Math.round(min.selected),
          max: Math.ceil(max.selected),
        }
      )

      function onChangePriceRange(value) {
        setInputMinError(undefined)
        setInputMaxError(undefined)
        setPriceRange({
          min: value.min,
          max: value.max,
        })

        if (inputMinRef.current?.value) {
          inputMinRef.current.value = String(value.min)
        }

        if (inputMaxRef.current?.value) {
          inputMaxRef.current.value = String(value.max)
        }
      }

      function onChangeInputMin(value) {
        setInputMinError(undefined)

        if (Number(value) < min.absolute) {
          return
        }

        if (Number(value) > priceRange.max) {
          setInputMinError(`Min price can't be greater than max`)
        }

        setPriceRange(
          PriceRange_objectSpread(
            PriceRange_objectSpread({}, priceRange),
            {},
            {
              min: Number(value),
            }
          )
        )
        priceRangeRef.current?.setPriceRangeValues(
          PriceRange_objectSpread(
            PriceRange_objectSpread({}, priceRange),
            {},
            {
              min: Number(value),
            }
          )
        )
      }

      function onChangeInputMax(value) {
        setInputMaxError(undefined)

        if (Number(value) > max.absolute) {
          return
        }

        if (Number(value) < priceRange.min) {
          setInputMaxError(`Max price can't be smaller than min`)
        }

        setPriceRange(
          PriceRange_objectSpread(
            PriceRange_objectSpread({}, priceRange),
            {},
            {
              max: Number(value),
            }
          )
        )
        priceRangeRef.current?.setPriceRangeValues(
          PriceRange_objectSpread(
            PriceRange_objectSpread({}, priceRange),
            {},
            {
              max: Number(value),
            }
          )
        )
      }

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        className: price_range_module_default().fsPriceRange,
        'data-fs-price-range': true,
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-price-range-absolute-values': true,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx('span', {
                children: minAbsoluteFormatted,
              }),
              /*#__PURE__*/ jsx_runtime_.jsx('span', {
                children: maxAbsoluteFormatted,
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(
            PriceRange /* default */.Z,
            PriceRange_objectSpread(
              {
                ref: priceRangeRef,
                min: min,
                max: max,
                formatter: formatter,
                className: price_range_module_default().fsPriceRange,
                onEnd: (value) => {
                  onEnd?.(value)
                  onChangePriceRange(value)
                },
              },
              otherProps
            )
          ),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-price-range-inputs': true,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(InputText /* default */.Z, {
                id: 'price-range-min',
                step: step,
                label: 'Min',
                type: 'number',
                inputMode: 'numeric',
                error: inputMinError,
                inputRef: inputMinRef,
                min: Math.round(min.absolute),
                max: Math.ceil(priceRange.max),
                value: Math.round(priceRange.min),
                onChange: (e) => onChangeInputMin(e.target.value),
                onBlur: () => !inputMinError && onEnd?.(priceRange),
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(InputText /* default */.Z, {
                id: 'price-range-max',
                label: 'Max',
                step: step,
                type: 'number',
                inputMode: 'numeric',
                error: inputMaxError,
                inputRef: inputMaxRef,
                max: Math.ceil(max.absolute),
                min: Math.round(priceRange.min),
                value: Math.ceil(priceRange.max),
                onChange: (e) => onChangeInputMax(e.target.value),
                onBlur: () => !inputMaxError && onEnd?.(priceRange),
              }),
            ],
          }),
        ],
      })
    }

    /* harmony default export */ const ui_PriceRange_PriceRange =
      PriceRange_PriceRange // CONCATENATED MODULE: ./src/components/ui/PriceRange/index.ts
    // EXTERNAL MODULE: ./src/components/search/Filter/facets.module.scss
    var facets_module = __webpack_require__(8209)
    var facets_module_default =
      /*#__PURE__*/ __webpack_require__.n(facets_module) // CONCATENATED MODULE: ./src/components/search/Filter/Facets.tsx
    const formatRange = (min, max) => `${min.toFixed(2)}-to-${max.toFixed(2)}`

    function Facets({
      testId,
      facets,
      indicesExpanded,
      onFacetChange,
      onAccordionChange,
    }) {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        className: facets_module_default().fsFacets,
        'data-fs-filter': true,
        'data-testid': testId,
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx('h2', {
            className: 'text__title-mini-alt',
            'data-fs-facets-title': true,
            children: 'Filters',
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(Accordion /* default */.Z, {
            expandedIndices: indicesExpanded,
            onChange: onAccordionChange,
            'data-fs-facets-accordion': true,
            children: facets.map((facet, index) => {
              const isExpanded = indicesExpanded.has(index)
              const { __typename: type, label } = facet
              return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                Accordion /* AccordionItem */.Q,
                {
                  prefixId: testId,
                  testId: `${testId}-accordion`,
                  isExpanded: isExpanded,
                  buttonLabel: label,
                  'data-type': type,
                  'data-fs-facets-accordion-item': true,
                  children: [
                    type === 'StoreFacetBoolean' &&
                      isExpanded &&
                      /*#__PURE__*/ jsx_runtime_.jsx(List /* default */.Z, {
                        'data-fs-facets-list': true,
                        children: facet.values.map((item) => {
                          const id = `${testId}-${facet.label}-${item.label}`
                          return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                            'li',
                            {
                              'data-fs-facets-list-item': true,
                              children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(
                                  ui_Checkbox_Checkbox,
                                  {
                                    id: id,
                                    checked: item.selected,
                                    onChange: () =>
                                      onFacetChange(
                                        {
                                          key: facet.key,
                                          value: item.value,
                                        },
                                        'BOOLEAN'
                                      ),
                                    'data-fs-facets-list-item-checkbox': true,
                                    'data-testid': `${testId}-accordion-panel-checkbox`,
                                    'data-value': item.value,
                                    'data-quantity': item.quantity,
                                  }
                                ),
                                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                                  Label /* default */.Z,
                                  {
                                    htmlFor: id,
                                    className: 'text__title-mini-alt',
                                    'data-fs-facets-list-item-label': true,
                                    children: [
                                      item.label,
                                      ' ',
                                      /*#__PURE__*/ jsx_runtime_.jsx(
                                        Badge /* Badge */.C,
                                        {
                                          'data-fs-facets-list-item-badge': true,
                                          children: item.quantity,
                                        }
                                      ),
                                    ],
                                  }
                                ),
                              ],
                            },
                            id
                          )
                        }),
                      }),
                    type === 'StoreFacetRange' &&
                      isExpanded &&
                      /*#__PURE__*/ jsx_runtime_.jsx(ui_PriceRange_PriceRange, {
                        min: facet.min,
                        max: facet.max,
                        onEnd: (v) =>
                          onFacetChange(
                            {
                              key: facet.key,
                              value: formatRange(v.min, v.max),
                            },
                            'RANGE'
                          ),
                      }),
                  ],
                },
                `${label}-${index}`
              )
            }),
          }),
        ],
      })
    }

    /* harmony default export */ const Filter_Facets = Facets
    // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
    var Button = __webpack_require__(1310)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/SlideOver/index.ts + 1 modules
    var SlideOver = __webpack_require__(5731)
    // EXTERNAL MODULE: ./src/sdk/ui/useFadeEffect.ts
    var useFadeEffect = __webpack_require__(5112)
    // EXTERNAL MODULE: ./src/components/search/Filter/filter-slider.module.scss
    var filter_slider_module = __webpack_require__(4618)
    var filter_slider_module_default =
      /*#__PURE__*/ __webpack_require__.n(filter_slider_module) // CONCATENATED MODULE: ./src/components/search/Filter/FilterSlider.tsx
    function FilterSlider_ownKeys(object, enumerableOnly) {
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

    function FilterSlider_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? FilterSlider_ownKeys(Object(source), !0).forEach(function (key) {
              FilterSlider_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : FilterSlider_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function FilterSlider_defineProperty(obj, key, value) {
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

    function FilterSlider({ facets, testId, dispatch, expanded, selected }) {
      const { closeFilter } = (0, Provider /* useUI */.l)()
      const { fade, fadeOut } = (0, useFadeEffect /* useFadeEffect */.b)()
      const { resetInfiniteScroll, setState, state } = (0,
      useSearch /* useSearch */.R)()
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(SlideOver /* default */.Z, {
        isOpen: true,
        fade: fade,
        onDismiss: fadeOut,
        size: 'partial',
        direction: 'rightSide',
        className: filter_slider_module_default().fsFilterSlider,
        onTransitionEnd: () => fade === 'out' && closeFilter(),
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-filter-slider-content': true,
            children: [
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
                'data-fs-filter-slider-header': true,
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                    className: 'text__lead',
                    children: 'Filters',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                    'data-fs-filter-slider-header-icon': true,
                    'aria-label': 'Close Filters',
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                      name: 'X',
                      width: 32,
                      height: 32,
                    }),
                    onClick: () => {
                      dispatch({
                        type: 'selectFacets',
                        payload: state.selectedFacets,
                      })
                      fadeOut()
                    },
                  }),
                ],
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(Filter_Facets, {
                facets: facets,
                testId: `mobile-${testId}`,
                indicesExpanded: expanded,
                onFacetChange: (facet, type) =>
                  type === 'BOOLEAN'
                    ? dispatch({
                        type: 'toggleFacet',
                        payload: facet,
                      })
                    : dispatch({
                        type: 'setFacet',
                        payload: {
                          facet,
                          unique: true,
                        },
                      }),
                onAccordionChange: (index) =>
                  dispatch({
                    type: 'toggleExpanded',
                    payload: index,
                  }),
              }),
            ],
          }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('footer', {
            'data-fs-filter-slider-footer': true,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                'data-fs-filter-slider-footer-button-clear': true,
                variant: 'secondary',
                onClick: () =>
                  dispatch({
                    type: 'selectFacets',
                    payload: [],
                  }),
                children: 'Clear All',
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                'data-fs-filter-slider-footer-button-apply': true,
                variant: 'primary',
                'data-testid': 'filter-slider-button-apply',
                onClick: () => {
                  resetInfiniteScroll(0)
                  setState(
                    FilterSlider_objectSpread(
                      FilterSlider_objectSpread({}, state),
                      {},
                      {
                        selectedFacets: selected,
                        page: 0,
                      }
                    )
                  )
                  fadeOut()
                },
                children: 'Apply',
              }),
            ],
          }),
        ],
      })
    }

    /* harmony default export */ const Filter_FilterSlider = FilterSlider // CONCATENATED MODULE: ./src/components/search/Filter/useFilter.ts
    const useFilter_excluded = ['value']

    function useFilter_objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = useFilter_objectWithoutPropertiesLoose(source, excluded)
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

    function useFilter_objectWithoutPropertiesLoose(source, excluded) {
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

    function useFilter_ownKeys(object, enumerableOnly) {
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

    function useFilter_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? useFilter_ownKeys(Object(source), !0).forEach(function (key) {
              useFilter_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : useFilter_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function useFilter_defineProperty(obj, key, value) {
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

    const reducer = (state, action) => {
      const { expanded, selected } = state
      const { type, payload } = action

      switch (type) {
        case 'toggleExpanded': {
          if (expanded.has(payload)) {
            expanded.delete(payload)
          } else {
            expanded.add(payload)
          }

          return useFilter_objectSpread(
            useFilter_objectSpread({}, state),
            {},
            {
              expanded: new Set(expanded),
            }
          )
        }

        case 'selectFacets': {
          if (payload !== selected) {
            return useFilter_objectSpread(
              useFilter_objectSpread({}, state),
              {},
              {
                selected: payload,
              }
            )
          }

          break
        }

        case 'toggleFacet': {
          return useFilter_objectSpread(
            useFilter_objectSpread({}, state),
            {},
            {
              selected: (0, search_facets /* toggleFacet */.wB)(
                state.selected,
                payload
              ),
            }
          )
        }

        case 'setFacet': {
          return useFilter_objectSpread(
            useFilter_objectSpread({}, state),
            {},
            {
              selected: (0, search_facets /* setFacet */.uL)(
                state.selected,
                payload.facet,
                payload.unique
              ),
            }
          )
        }

        default:
          throw new Error(`Action ${type} not implemented`)
      }

      return state
    }

    const useFilter = (allFacets) => {
      const {
        state: { selectedFacets },
      } = (0, useSearch /* useSearch */.R)()
      const {
        0: { selected, expanded },
        1: dispatch,
      } = (0, external_react_.useReducer)(reducer, null, () => ({
        expanded: new Set([]),
        selected: selectedFacets,
      }))
      const selectedMap = (0, external_react_.useMemo)(
        () =>
          selected.reduce((acc, facet) => {
            if (!acc.has(facet.key)) {
              acc.set(facet.key, new Map())
            }

            acc.get(facet.key)?.set(facet.value, facet)
            return acc
          }, new Map()),
        [selected]
      )
      const facets = (0, external_react_.useMemo)(
        () =>
          allFacets.map((facet) => {
            if (facet.__typename === 'StoreFacetBoolean') {
              return useFilter_objectSpread(
                useFilter_objectSpread({}, facet),
                {},
                {
                  values: facet.values.map((_ref) => {
                    let { value } = _ref,
                      rest = useFilter_objectWithoutProperties(
                        _ref,
                        useFilter_excluded
                      )

                    return useFilter_objectSpread(
                      useFilter_objectSpread({}, rest),
                      {},
                      {
                        value,
                        selected: Boolean(
                          selectedMap.get(facet.key)?.has(value)
                        ),
                      }
                    )
                  }),
                }
              )
            }

            return facet
          }),
        [allFacets, selectedMap]
      )
      ;(0, external_react_.useEffect)(() => {
        dispatch({
          type: 'selectFacets',
          payload: selectedFacets,
        })
      }, [selectedFacets])
      return {
        facets,
        selected,
        expanded,
        dispatch,
      }
    } // CONCATENATED MODULE: ./src/components/search/Filter/Filter.tsx
    function Filter_ownKeys(object, enumerableOnly) {
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

    function Filter_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? Filter_ownKeys(Object(source), !0).forEach(function (key) {
              Filter_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : Filter_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function Filter_defineProperty(obj, key, value) {
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

    function Filter({ facets: allFacets, testId = 'store-filter' }) {
      const filter = useFilter(allFacets)
      const { resetInfiniteScroll, state, setState } = (0,
      useSearch /* useSearch */.R)()
      const { filter: displayFilter } = (0, Provider /* useUI */.l)()
      const { facets, expanded, dispatch } = filter
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx('div', {
            className: 'hidden-mobile',
            children: /*#__PURE__*/ jsx_runtime_.jsx(Filter_Facets, {
              facets: facets,
              testId: `desktop-${testId}`,
              indicesExpanded: expanded,
              onFacetChange: (facet, type) => {
                setState(
                  Filter_objectSpread(
                    Filter_objectSpread({}, state),
                    {},
                    {
                      selectedFacets:
                        type === 'BOOLEAN'
                          ? (0, search_facets /* toggleFacet */.wB)(
                              state.selectedFacets,
                              facet
                            )
                          : (0, search_facets /* setFacet */.uL)(
                              state.selectedFacets,
                              facet,
                              true
                            ),
                      page: 0,
                    }
                  )
                )
                resetInfiniteScroll(0)
              },
              onAccordionChange: (index) =>
                dispatch({
                  type: 'toggleExpanded',
                  payload: index,
                }),
            }),
          }),
          displayFilter &&
            /*#__PURE__*/ jsx_runtime_.jsx(
              Filter_FilterSlider,
              Filter_objectSpread(
                Filter_objectSpread({}, filter),
                {},
                {
                  testId: testId,
                }
              )
            ),
        ],
      })
    }

    const fragment = 'unknown'
    /* harmony default export */ const Filter_Filter = Filter // CONCATENATED MODULE: ./src/components/search/Filter/index.ts

    /***/
  },

  /***/ 5963: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ Sort_Sort,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/search/useSearch.js + 1 modules
    var useSearch = __webpack_require__(7794)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Label/Label.js
    var Label = __webpack_require__(571)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Select/Select.js
    var Select = __webpack_require__(5853)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/Select/select.module.scss
    var select_module = __webpack_require__(9503)
    var select_module_default =
      /*#__PURE__*/ __webpack_require__.n(select_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Select/Select.tsx
    const _excluded = [
      'id',
      'className',
      'options',
      'onChange',
      'label',
      'value',
      'aria-label',
      'testId',
    ]

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

    function Select_Select(_ref) {
      let {
          id,
          className,
          options,
          onChange,
          label,
          value,
          'aria-label': ariaLabel,
          testId,
        } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        'data-fs-select': true,
        className: `${select_module_default().fsSelect} ${className}`,
        children: [
          label &&
            /*#__PURE__*/ jsx_runtime_.jsx(Label /* default */.Z, {
              'data-fs-select-label': true,
              htmlFor: id,
              children: label,
            }),
          /*#__PURE__*/ jsx_runtime_.jsx(
            Select /* default */.Z,
            _objectSpread(
              _objectSpread(
                {
                  'data-testid': testId,
                  onChange: onChange,
                  value: value,
                  'aria-label': ariaLabel,
                  id: id,
                },
                otherProps
              ),
              {},
              {
                children: Object.keys(options).map((key) =>
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    'option',
                    {
                      value: key,
                      children: options[key],
                    },
                    key
                  )
                ),
              }
            )
          ),
          /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
            'data-fs-select-icon': true,
            name: 'CaretDown',
            width: 18,
            height: 18,
            weight: 'bold',
          }),
        ],
      })
    }

    /* harmony default export */ const ui_Select_Select = Select_Select // CONCATENATED MODULE: ./src/components/ui/Select/index.ts // CONCATENATED MODULE: ./src/components/search/Sort/Sort.tsx
    function Sort_ownKeys(object, enumerableOnly) {
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

    function Sort_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? Sort_ownKeys(Object(source), !0).forEach(function (key) {
              Sort_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : Sort_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function Sort_defineProperty(obj, key, value) {
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

    const OptionsMap = {
      price_desc: 'Price, descending',
      price_asc: 'Price, ascending',
      orders_desc: 'Top sales',
      name_asc: 'Name, A-Z',
      name_desc: 'Name, Z-A',
      release_desc: 'Release date',
      discount_desc: 'Discount',
      score_desc: 'Relevance',
    }
    const keys = Object.keys(OptionsMap)

    function Sort() {
      const { state, setState } = (0, useSearch /* useSearch */.R)()
      return /*#__PURE__*/ jsx_runtime_.jsx(ui_Select_Select, {
        id: 'sort-select',
        className: 'sort / text__title-mini-alt',
        label: 'Sort by',
        options: OptionsMap,
        onChange: (e) => {
          const sort = keys[e.target.selectedIndex]
          setState(
            Sort_objectSpread(
              Sort_objectSpread({}, state),
              {},
              {
                sort,
                page: 0,
              }
            )
          )
        },
        value: state.sort,
        testId: 'search-sort',
      })
    }

    /* harmony default export */ const Sort_Sort = Sort // CONCATENATED MODULE: ./src/components/search/Sort/index.ts

    /***/
  },

  /***/ 3769: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ sections_Breadcrumb_Breadcrumb,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./src/components/ui/Breadcrumb/index.ts + 6 modules
    var Breadcrumb = __webpack_require__(6923)
    // EXTERNAL MODULE: ./src/components/sections/Section/index.ts + 1 modules
    var Section = __webpack_require__(8879)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/sections/Breadcrumb/Breadcrumb.tsx
    function Breadcrumb_Breadcrumb({ breadcrumbList, name }) {
      const fallback = [
        {
          item: '/',
          name,
          position: 1,
        },
      ]
      const list = breadcrumbList ?? fallback
      return /*#__PURE__*/ jsx_runtime_.jsx(Section /* default */.Z, {
        className: 'layout__content',
        children: /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb /* default */.Z, {
          breadcrumbList: list,
        }),
      })
    }

    /* harmony default export */ const sections_Breadcrumb_Breadcrumb =
      /*#__PURE__*/ (0, external_react_.memo)(Breadcrumb_Breadcrumb) // CONCATENATED MODULE: ./src/components/sections/Breadcrumb/index.ts

    /***/
  },

  /***/ 5878: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var src_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(1310)
    /* harmony import */ var src_components_ui_EmptyState__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(9509)
    /* harmony import */ var src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(2478)
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(997)
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__
      )

    function EmptyGallery() {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
        src_components_ui_EmptyState__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
        {
          variant: 'rounded',
          children: [
            /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)('header', {
              'data-fs-empty-state-title': true,
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                  src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                  {
                    name: 'CircleWavyWarning',
                    width: 56,
                    height: 56,
                    weight: 'thin',
                  }
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                  'p',
                  {
                    children: 'Nothing matches with your search',
                  }
                ),
              ],
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
              src_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__ /* .ButtonLink */.ZP,
              {
                'data-fs-empty-state-link': true,
                href: '/office',
                variant: 'secondary',
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                  src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                  {
                    name: 'CircleWavyWarning',
                    width: 18,
                    height: 18,
                    weight: 'bold',
                  }
                ),
                iconPosition: 'left',
                children: 'Browse Offers',
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
              src_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__ /* .ButtonLink */.ZP,
              {
                'data-fs-empty-state-link': true,
                href: '/technology',
                variant: 'secondary',
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                  src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                  {
                    name: 'RocketLaunch',
                    width: 18,
                    height: 18,
                    weight: 'bold',
                  }
                ),
                iconPosition: 'left',
                children: 'Just Arrived',
              }
            ),
          ],
        }
      )
    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = EmptyGallery

    /***/
  },

  /***/ 8273: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_18__ =
            __webpack_require__(7794)
          /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(6641)
          /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              next_seo__WEBPACK_IMPORTED_MODULE_0__
            )
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            )
          /* harmony import */ var src_components_search_Filter__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(85)
          /* harmony import */ var src_components_search_Sort__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(5963)
          /* harmony import */ var src_components_skeletons_FilterSkeleton__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(5473)
          /* harmony import */ var src_components_skeletons_ProductGridSkeleton__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(9913)
          /* harmony import */ var src_components_skeletons_Skeleton__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(1129)
          /* harmony import */ var src_components_ui_Button__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(1310)
          /* harmony import */ var src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(2478)
          /* harmony import */ var src_sdk_tests_mark__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(2541)
          /* harmony import */ var src_sdk_ui_Provider__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(8869)
          /* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(8879)
          /* harmony import */ var _EmptyGallery__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(5878)
          /* harmony import */ var _product_gallery_module_scss__WEBPACK_IMPORTED_MODULE_19__ =
            __webpack_require__(2304)
          /* harmony import */ var _product_gallery_module_scss__WEBPACK_IMPORTED_MODULE_19___default =
            /*#__PURE__*/ __webpack_require__.n(
              _product_gallery_module_scss__WEBPACK_IMPORTED_MODULE_19__
            )
          /* harmony import */ var _useDelayedFacets__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(3740)
          /* harmony import */ var _useDelayedPagination__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(9361)
          /* harmony import */ var _useGalleryQuery__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(3840)
          /* harmony import */ var _usePageProducts__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(763)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ =
            __webpack_require__(997)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__
            )
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _useGalleryQuery__WEBPACK_IMPORTED_MODULE_15__,
              _usePageProducts__WEBPACK_IMPORTED_MODULE_16__,
            ])
          ;[
            _useGalleryQuery__WEBPACK_IMPORTED_MODULE_15__,
            _usePageProducts__WEBPACK_IMPORTED_MODULE_16__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__

          const GalleryPage = /*#__PURE__*/ (0,
          react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() =>
            Promise.all(
              /* import() */ [
                __webpack_require__.e(6595),
                __webpack_require__.e(462),
                __webpack_require__.e(9504),
                __webpack_require__.e(9854),
                __webpack_require__.e(4310),
                __webpack_require__.e(8872),
                __webpack_require__.e(3746),
              ]
            ).then(__webpack_require__.bind(__webpack_require__, 3746))
          )

          const GalleryPageSkeleton =
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
              src_components_skeletons_ProductGridSkeleton__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
              {
                loading: true,
              }
            )

          function ProductGallery({ title, searchTerm }) {
            const { openFilter } = (0,
            src_sdk_ui_Provider__WEBPACK_IMPORTED_MODULE_10__ /* .useUI */.l)()
            const { pages, addNextPage, addPrevPage } = (0,
            _faststore_sdk__WEBPACK_IMPORTED_MODULE_18__ /* .useSearch */.R)()
            const { data } = (0,
            _useGalleryQuery__WEBPACK_IMPORTED_MODULE_15__ /* .useGalleryQuery */.r)()
            const facets = (0,
            _useDelayedFacets__WEBPACK_IMPORTED_MODULE_13__ /* .useDelayedFacets */.u)(
              data
            )
            const totalCount = data?.search.products.pageInfo.totalCount ?? 0
            const { next, prev } = (0,
            _useDelayedPagination__WEBPACK_IMPORTED_MODULE_14__ /* .useDelayedPagination */.g)(
              totalCount
            )
            ;(0,
            _usePageProducts__WEBPACK_IMPORTED_MODULE_16__ /* .useProductsPrefetch */.F)(
              prev ? prev.cursor : null
            )
            ;(0,
            _usePageProducts__WEBPACK_IMPORTED_MODULE_16__ /* .useProductsPrefetch */.F)(
              next ? next.cursor : null
            )

            if (data && totalCount === 0) {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                _Section__WEBPACK_IMPORTED_MODULE_11__ /* ["default"] */.Z,
                {
                  'data-testid': 'product-gallery',
                  className: `${
                    _product_gallery_module_scss__WEBPACK_IMPORTED_MODULE_19___default()
                      .fsProductListing
                  } layout__content`,
                  'data-fs-product-listing': true,
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                      _EmptyGallery__WEBPACK_IMPORTED_MODULE_12__ /* ["default"] */.Z,
                      {}
                    ),
                }
              )
            }

            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
              _Section__WEBPACK_IMPORTED_MODULE_11__ /* ["default"] */.Z,
              {
                'data-testid': 'product-gallery',
                className: `${
                  _product_gallery_module_scss__WEBPACK_IMPORTED_MODULE_19___default()
                    .fsProductListing
                } layout__content-full`,
                'data-fs-product-listing': true,
                children: [
                  searchTerm &&
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                      'header',
                      {
                        'data-fs-product-listing-search-term': true,
                        className: 'layout__content',
                        children: /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                          'h1',
                          {
                            children: [
                              'Showing results for: ',
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                'span',
                                {
                                  children: searchTerm,
                                }
                              ),
                            ],
                          }
                        ),
                      }
                    ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)('div', {
                    'data-fs-product-listing-content-grid': true,
                    className: 'layout__content',
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                        'div',
                        {
                          'data-fs-product-listing-filters': true,
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                              src_components_skeletons_FilterSkeleton__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                              {
                                loading: facets?.length === 0,
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                    src_components_search_Filter__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.C,
                                    {
                                      facets: facets,
                                    }
                                  ),
                              }
                            ),
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                        'div',
                        {
                          'data-fs-product-listing-results-count': true,
                          'data-count': totalCount,
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                              src_components_skeletons_Skeleton__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                              {
                                shimmer: true,
                                variant: 'text',
                                loading: !data,
                                'data-fs-product-listing-results-count-skeleton': true,
                                children: /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                                  'h2',
                                  {
                                    'data-testid': 'total-product-count',
                                    children: [totalCount, ' Results'],
                                  }
                                ),
                              }
                            ),
                        }
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                        'div',
                        {
                          'data-fs-product-listing-sort': true,
                          children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                              src_components_skeletons_Skeleton__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                              {
                                shimmer: true,
                                variant: 'text',
                                loading: facets?.length === 0,
                                'data-fs-product-listing-sort-skeleton': true,
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                    src_components_search_Sort__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                                    {}
                                  ),
                              }
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                              src_components_skeletons_Skeleton__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                              {
                                shimmer: true,
                                variant: 'button',
                                loading: facets?.length === 0,
                                'data-fs-product-listing-filter-button-skeleton': true,
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                    src_components_ui_Button__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Co,
                                    {
                                      variant: 'tertiary',
                                      'data-testid': 'open-filter-button',
                                      icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                        src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.Z,
                                        {
                                          name: 'FadersHorizontal',
                                          width: 16,
                                          height: 16,
                                        }
                                      ),
                                      iconPosition: 'left',
                                      'aria-label': 'Open Filters',
                                      onClick: openFilter,
                                      children: 'Filters',
                                    }
                                  ),
                              }
                            ),
                          ],
                        }
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                        'div',
                        {
                          'data-fs-product-listing-results': true,
                          children: [
                            prev !== false &&
                              /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                                'div',
                                {
                                  'data-fs-product-listing-pagination': 'top',
                                  children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                      next_seo__WEBPACK_IMPORTED_MODULE_0__.NextSeo,
                                      {
                                        additionalLinkTags: [
                                          {
                                            rel: 'prev',
                                            href: prev.link,
                                          },
                                        ],
                                      }
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                      src_components_ui_Button__WEBPACK_IMPORTED_MODULE_7__ /* .ButtonLink */.ZP,
                                      {
                                        onClick: (e) => {
                                          e.currentTarget.blur()
                                          e.preventDefault()
                                          addPrevPage()
                                        },
                                        href: prev.link,
                                        rel: 'prev',
                                        variant: 'secondary',
                                        iconPosition: 'left',
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                          src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.Z,
                                          {
                                            name: 'ArrowLeft',
                                            width: 16,
                                            height: 16,
                                            weight: 'bold',
                                          }
                                        ),
                                        children: 'Previous Page',
                                      }
                                    ),
                                  ],
                                }
                              ),
                            data
                              ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                  react__WEBPACK_IMPORTED_MODULE_1__.Suspense,
                                  {
                                    fallback: GalleryPageSkeleton,
                                    children: pages.map((page) =>
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                        GalleryPage,
                                        {
                                          showSponsoredProducts: false,
                                          page: page,
                                          title: title,
                                        },
                                        `gallery-page-${page}`
                                      )
                                    ),
                                  }
                                )
                              : GalleryPageSkeleton,
                            next !== false &&
                              /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
                                'div',
                                {
                                  'data-fs-product-listing-pagination':
                                    'bottom',
                                  children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                      next_seo__WEBPACK_IMPORTED_MODULE_0__.NextSeo,
                                      {
                                        additionalLinkTags: [
                                          {
                                            rel: 'next',
                                            href: next.link,
                                          },
                                        ],
                                      }
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(
                                      src_components_ui_Button__WEBPACK_IMPORTED_MODULE_7__ /* .ButtonLink */.ZP,
                                      {
                                        'data-testid': 'show-more',
                                        onClick: (e) => {
                                          e.currentTarget.blur()
                                          e.preventDefault()
                                          addNextPage()
                                        },
                                        href: next.link,
                                        rel: 'next',
                                        variant: 'secondary',
                                        children: 'Load more products',
                                      }
                                    ),
                                  ],
                                }
                              ),
                          ],
                        }
                      ),
                    ],
                  }),
                ],
              }
            )
          }

          ProductGallery.displayName = 'ProductGallery'
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
          src_sdk_tests_mark__WEBPACK_IMPORTED_MODULE_9__ /* .mark */.B)(
            ProductGallery
          )
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 2618: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
              /* reexport safe */ _ProductGallery__WEBPACK_IMPORTED_MODULE_0__.Z,
            /* harmony export */
          })
          /* harmony import */ var _ProductGallery__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(8273)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _ProductGallery__WEBPACK_IMPORTED_MODULE_0__,
            ])
          _ProductGallery__WEBPACK_IMPORTED_MODULE_0__ = (
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

  /***/ 3740: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ u: () => /* binding */ useDelayedFacets,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const useDelayedFacets = (data) => {
      const facets = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)([])
      return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (data) {
          facets.current = data.search.facets
        }

        return facets.current
      }, [data, facets])
    }

    /***/
  },

  /***/ 9361: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ g: () => /* binding */ useDelayedPagination,
      /* harmony export */
    })
    /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(2549)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const useDelayedPagination = (totalCount) => {
      const pagination = (0,
      _faststore_sdk__WEBPACK_IMPORTED_MODULE_1__ /* .usePagination */.h)(
        totalCount
      )
      const { 0: pag, 1: setPag } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => ({
        next: false,
        prev: false,
      }))
      ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setPag(pagination)
      }, [pagination])
      return pag
    }

    /***/
  },

  /***/ 3840: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ r: () => /* binding */ useGalleryQuery,
            /* harmony export */
          })
          /* unused harmony export query */
          /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(7794)
          /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(8460)
          /* harmony import */ var src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(7732)
          /* harmony import */ var src_sdk_session__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(5971)
          /* harmony import */ var _sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(4867)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_0__,
              _sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_2__,
            ])
          ;[
            src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_0__,
            _sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_2__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__

          /**
           * This query is run on the browser and contains
           * the current search state of the user
           */

          const query = 'ProductGalleryQuery'
          const useGalleryQuery = () => {
            const {
              state: { term, sort, selectedFacets },
              itemsPerPage,
            } = (0,
            _faststore_sdk__WEBPACK_IMPORTED_MODULE_3__ /* .useSearch */.R)()
            const { locale } = (0,
            src_sdk_session__WEBPACK_IMPORTED_MODULE_1__ /* .useSession */.kP)()
            const localizedVariables = (0,
            _sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_2__ /* .useLocalizedVariables */.yb)(
              {
                first: itemsPerPage,
                after: '0',
                sort,
                term: term ?? '',
                selectedFacets,
              }
            )
            return (0,
            src_sdk_graphql_useQuery__WEBPACK_IMPORTED_MODULE_0__ /* .useQuery */.aM)(
              query,
              localizedVariables,
              {
                onSuccess: (data) => {
                  if (data && term) {
                    ;(0,
                    _faststore_sdk__WEBPACK_IMPORTED_MODULE_4__ /* .sendAnalyticsEvent */._)(
                      {
                        name: 'intelligent_search_query',
                        params: {
                          locale,
                          term,
                          url: window.location.href,
                          logicalOperator:
                            data.search.metadata?.logicalOperator ?? 'and',
                          isTermMisspelled:
                            data.search.metadata?.isTermMisspelled ?? false,
                          totalCount: data.search.products.pageInfo.totalCount,
                        },
                      }
                    )
                  }
                },
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

  /***/ 763: /***/ (module, __webpack_exports__, __webpack_require__) => {
    'use strict'
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ F: () => /* binding */ useProductsPrefetch,
            /* harmony export */ r: () => /* binding */ useProducts,
            /* harmony export */
          })
          /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(7794)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(6689)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            )
          /* harmony import */ var src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(4867)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_1__,
            ])
          src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_1__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]

          const useProductsPrefetch = (page) => {
            const {
              itemsPerPage,
              state: { sort, term, selectedFacets },
            } = (0,
            _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ /* .useSearch */.R)()
            const prefetch = (0,
            src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_1__ /* .useProductsQueryPrefetch */.BG)(
              {
                first: itemsPerPage,
                after: (itemsPerPage * (page ?? 0)).toString(),
                sort,
                term: term ?? '',
                selectedFacets,
              }
            )
            ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
              if (page !== null) {
                prefetch()
              }
            }, [page, prefetch])
          }
          const useProducts = (page) => {
            const {
              itemsPerPage,
              state: { sort, term, selectedFacets },
            } = (0,
            _faststore_sdk__WEBPACK_IMPORTED_MODULE_2__ /* .useSearch */.R)()
            const productList = (0,
            src_sdk_product_useProductsQuery__WEBPACK_IMPORTED_MODULE_1__ /* .useProductsQuery */.kN)(
              {
                first: itemsPerPage,
                after: (itemsPerPage * page).toString(),
                sort,
                term: term ?? '',
                selectedFacets,
              },
              {
                suspense: true,
              }
            )
            return productList?.edges
          }
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 5473: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ FilterSkeleton_FilterSkeleton,
    })

    // EXTERNAL MODULE: ./src/components/skeletons/Shimmer/index.ts + 1 modules
    var Shimmer = __webpack_require__(6146)
    // EXTERNAL MODULE: ./src/components/skeletons/Skeleton/index.ts + 1 modules
    var Skeleton = __webpack_require__(1129)
    // EXTERNAL MODULE: ./src/components/skeletons/FilterSkeleton/filter-skeleton.module.scss
    var filter_skeleton_module = __webpack_require__(5445)
    var filter_skeleton_module_default = /*#__PURE__*/ __webpack_require__.n(
      filter_skeleton_module
    )
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/skeletons/FilterSkeleton/FilterSkeleton.tsx
    function FilterSkeleton({ children, loading = true }) {
      return loading
        ? /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            className: filter_skeleton_module_default().fsFilterSkeleton,
            'data-fs-filter-skeleton': true,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                shimmer: true,
                variant: 'text',
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                'data-fs-filter-skeleton-content': true,
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                    variant: 'text',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                    variant: 'text',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Skeleton /* default */.Z, {
                    variant: 'text',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Shimmer /* default */.Z, {}),
                ],
              }),
            ],
          })
        : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children,
          })
    }

    /* harmony default export */ const FilterSkeleton_FilterSkeleton =
      FilterSkeleton // CONCATENATED MODULE: ./src/components/skeletons/FilterSkeleton/index.ts

    /***/
  },

  /***/ 9913: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ ProductGridSkeleton_ProductGridSkeleton,
    })

    // EXTERNAL MODULE: ./src/constants.ts
    var constants = __webpack_require__(8459)
    // EXTERNAL MODULE: ./src/components/product/ProductGrid/product-grid.module.scss
    var product_grid_module = __webpack_require__(4920)
    var product_grid_module_default =
      /*#__PURE__*/ __webpack_require__.n(product_grid_module)
    // EXTERNAL MODULE: ./src/components/skeletons/ProductCardSkeleton/index.ts + 1 modules
    var ProductCardSkeleton = __webpack_require__(3288)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/skeletons/ProductGridSkeleton/ProductGridSkeleton.tsx
    function ProductGridSkeleton({ children, loading = true }) {
      return loading
        ? /*#__PURE__*/ jsx_runtime_.jsx('ul', {
            className: product_grid_module_default().fsProductGrid,
            children: Array.from(
              {
                length: constants /* ITEMS_PER_PAGE */.g,
              },
              (_, index) =>
                /*#__PURE__*/ jsx_runtime_.jsx(
                  'li',
                  {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      ProductCardSkeleton /* default */.Z,
                      {
                        bordered: true,
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

    /* harmony default export */ const ProductGridSkeleton_ProductGridSkeleton =
      ProductGridSkeleton // CONCATENATED MODULE: ./src/components/skeletons/ProductGridSkeleton/index.ts

    /***/
  },

  /***/ 9509: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ EmptyState_EmptyState,
    })

    // EXTERNAL MODULE: ./src/components/ui/EmptyState/empty-state.module.scss
    var empty_state_module = __webpack_require__(8098)
    var empty_state_module_default =
      /*#__PURE__*/ __webpack_require__.n(empty_state_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/EmptyState/EmptyState.tsx
    function EmptyState({ children, variant = 'default' }) {
      return /*#__PURE__*/ jsx_runtime_.jsx('section', {
        className: empty_state_module_default().fsEmptyState,
        'data-fs-empty-state': true,
        'data-fs-empty-state-variant': variant,
        children: children,
      })
    }

    /* harmony default export */ const EmptyState_EmptyState = EmptyState // CONCATENATED MODULE: ./src/components/ui/EmptyState/index.ts

    /***/
  },

  /***/ 1523: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ j: () => /* binding */ useApplySearchState,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(1853)
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_1__
      )

    const useApplySearchState = () => {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)()
      return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        (url) => router.push(`${url.pathname}${url.search}`),
        [router]
      )
    }

    /***/
  },

  /***/ 4920: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-product-grid': 'product-grid_fs-product-grid__SF25P',
      fsProductGrid: 'product-grid_fs-product-grid__SF25P',
    }

    /***/
  },

  /***/ 8209: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-facets': 'facets_fs-facets__Hva9t',
      fsFacets: 'facets_fs-facets__Hva9t',
    }

    /***/
  },

  /***/ 4618: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-filter-slider': 'filter-slider_fs-filter-slider__bHe2U',
      fsFilterSlider: 'filter-slider_fs-filter-slider__bHe2U',
    }

    /***/
  },

  /***/ 2304: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-product-listing': 'product-gallery_fs-product-listing__BBpw4',
      fsProductListing: 'product-gallery_fs-product-listing__BBpw4',
    }

    /***/
  },

  /***/ 5445: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-filter-skeleton': 'filter-skeleton_fs-filter-skeleton___kwHE',
      fsFilterSkeleton: 'filter-skeleton_fs-filter-skeleton___kwHE',
    }

    /***/
  },

  /***/ 2762: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-checkbox': 'checkbox_fs-checkbox___dMkL',
      fsCheckbox: 'checkbox_fs-checkbox___dMkL',
    }

    /***/
  },

  /***/ 8098: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-empty-state': 'empty-state_fs-empty-state__F7Xul',
      fsEmptyState: 'empty-state_fs-empty-state__F7Xul',
    }

    /***/
  },

  /***/ 7980: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-price-range': 'price-range_fs-price-range__bdS9v',
      fsPriceRange: 'price-range_fs-price-range__bdS9v',
    }

    /***/
  },

  /***/ 9503: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-select': 'select_fs-select__ol0C_',
      fsSelect: 'select_fs-select__ol0C_',
    }

    /***/
  },
}
