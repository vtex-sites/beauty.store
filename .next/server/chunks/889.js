'use strict'
exports.id = 889
exports.ids = [889]
exports.modules = {
  /***/ 6321: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      _: () => /* binding */ Context,
      z: () => /* binding */ Provider,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    var external_react_default =
      /*#__PURE__*/ __webpack_require__.n(external_react_)
    // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/utils/error.js
    var error = __webpack_require__(670) // CONCATENATED MODULE: ./node_modules/@faststore/sdk/dist/search/useInfiniteSearchState.js
    const reducer = (state, action) => {
      switch (action.type) {
        case 'addPrev': {
          const prev = state[0] - 1
          return [prev, ...state]
        }
        case 'addNext': {
          const next = Number(state[state.length - 1]) + 1
          return [...state, next]
        }
        case 'reset': {
          const { payload } = action
          return [payload]
        }
        default:
          throw new error /* SDKError */.q('Unknown action for infinite search')
      }
    }
    const useSearchInfiniteState = (initialPage) => {
      const [pages, dispatch] = (0, external_react_.useReducer)(
        reducer,
        undefined,
        () => [initialPage]
      )
      const actions = (0, external_react_.useMemo)(
        () => ({
          addPrevPage: () => dispatch({ type: 'addPrev' }),
          addNextPage: () => dispatch({ type: 'addNext' }),
          resetInfiniteScroll: (page) =>
            dispatch({ type: 'reset', payload: page }),
        }),
        []
      )
      return { pages, ...actions }
    }
    //# sourceMappingURL=useInfiniteSearchState.js.map
    // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/search/useSearchState.js
    var useSearchState = __webpack_require__(3264) // CONCATENATED MODULE: ./node_modules/@faststore/sdk/dist/search/Provider.js
    const Context = (0, external_react_.createContext)(undefined)
    const Provider = ({ children, itemsPerPage, onChange, ...rest }) => {
      const { state, ...searchActions } = (0,
      useSearchState /* useSearchState */.X)(rest, onChange)
      const { pages, ...infiniteActions } = useSearchInfiniteState(state.page)
      const value = (0, external_react_.useMemo)(
        () => ({
          state,
          ...searchActions,
          pages,
          ...infiniteActions,
          itemsPerPage,
        }),
        [infiniteActions, itemsPerPage, pages, searchActions, state]
      )
      return external_react_default().createElement(
        Context.Provider,
        { value: value },
        children
      )
    }
    //# sourceMappingURL=Provider.js.map

    /***/
  },

  /***/ 3291: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ uL: () => /* binding */ setFacet,
      /* harmony export */ wB: () => /* binding */ toggleFacet,
      /* harmony export */ wb: () => /* binding */ isSearchSort,
      /* harmony export */
    })
    /* unused harmony exports removeFacet, toggleFacets */
    /* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(670)

    const sortKeys = new Set([
      'price_desc',
      'price_asc',
      'orders_desc',
      'name_desc',
      'name_asc',
      'release_desc',
      'discount_desc',
      'score_desc',
    ])
    const isSearchSort = (x) => sortKeys.has(x)
    const removeFacet = (facets, facet) => {
      const { value } = facet
      const index = facets.findIndex((x) => x.value === value)
      if (index < 0) {
        throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__ /* .SDKError */.q(
          `Cannot remove ${value} from search params`
        )
      }
      return facets.filter((_, it) => it === 0 || it !== index)
    }
    const setFacet = (facets, facet, unique) => {
      if (unique === true) {
        const index = facets.findIndex((f) => f.key === facet.key)
        if (index > -1) {
          return facets.map((f, it) => (it === index ? facet : f))
        }
      }
      return [...facets, facet]
    }
    const toggleFacet = (facets, item) => {
      const found = facets.find(
        (facet) => facet.key === item.key && facet.value === item.value
      )
      if (found !== undefined) {
        return removeFacet(facets, item)
      }
      return setFacet(facets, item, false)
    }
    const toggleFacets = (facets, items) =>
      items.reduce((acc, curr) => toggleFacet(acc, curr), facets)
    //# sourceMappingURL=facets.js.map

    /***/
  },

  /***/ 2888: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Q: () => /* binding */ parse,
      /* harmony export */
    })
    /* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(670)
    /* harmony import */ var _facets__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(3291)
    /* harmony import */ var _useSearchState__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(3264)

    const parse = ({ pathname, searchParams }) => {
      const state = (0,
      _useSearchState__WEBPACK_IMPORTED_MODULE_0__ /* .initialize */.j)({
        base: pathname,
        term: searchParams.get('q') ?? null,
        sort: searchParams.get('sort') ?? undefined,
        page: Number(searchParams.get('page') ?? 0),
      })
      if (
        !(0, _facets__WEBPACK_IMPORTED_MODULE_1__ /* .isSearchSort */.wb)(
          state.sort
        )
      ) {
        throw new _utils_error__WEBPACK_IMPORTED_MODULE_2__ /* .SDKError */.q(
          `Uknown sorting option ${state.sort}`
        )
      }
      const facets = searchParams.get('facets')?.split(',') ?? []
      for (const facet of facets) {
        const values = searchParams.getAll(facet)
        for (const value of values) {
          state.selectedFacets = (0,
          _facets__WEBPACK_IMPORTED_MODULE_1__ /* .setFacet */.uL)(
            state.selectedFacets,
            {
              key: facet,
              value,
            }
          )
        }
      }
      return state
    }
    //# sourceMappingURL=serializer.js.map

    /***/
  },

  /***/ 2549: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ h: () => /* binding */ usePagination,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(3364)
    /* harmony import */ var _useSearch__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(7794)

    const getLink = (state) => {
      const { pathname, search } = (0,
      _utils_format__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z)(state)
      return `${pathname}${search}`
    }
    const usePagination = (totalItems) => {
      const { pages, itemsPerPage, state } = (0,
      _useSearch__WEBPACK_IMPORTED_MODULE_2__ /* .useSearch */.R)()
      const total = Math.ceil(totalItems / itemsPerPage)
      const next = Number(pages[pages.length - 1]) + 1
      const prev = pages[0] - 1
      return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
        () => ({
          next: next < total && {
            cursor: next,
            link: getLink({ ...state, page: next }),
          },
          prev: prev > -1 && {
            cursor: prev,
            link: getLink({ ...state, page: prev }),
          },
        }),
        [next, prev, state, total]
      )
    }
    //# sourceMappingURL=usePagination.js.map

    /***/
  },

  /***/ 7794: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      R: () => /* binding */ useSearch,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/search/Provider.js + 1 modules
    var Provider = __webpack_require__(6321)
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/utils/error.js
    var error = __webpack_require__(670) // CONCATENATED MODULE: ./node_modules/@faststore/sdk/dist/utils/useContext.js
    /**
     * @description Like React.useContext but throws when the context's value === undefined.
     * This is useful when you want to force the context to be present in the React's tree before using it
     */
    const useContext = (context) => {
      const value = (0, external_react_.useContext)(context)
      if (value !== undefined) {
        return value
      }
      throw new error /* SDKError */.q(
        `${context.displayName ?? 'Context'} needs to be on the React tree`
      )
    } // CONCATENATED MODULE: ./node_modules/@faststore/sdk/dist/search/useSearch.js
    //# sourceMappingURL=useContext.js.map
    const useSearch = () => useContext(Provider /* Context */._)
    //# sourceMappingURL=useSearch.js.map

    /***/
  },

  /***/ 9030: /***/ (
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

    const Checkbox = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Checkbox({ testId = 'store-checkbox', ...otherProps }, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'input',
          Object.assign(
            {
              ref: ref,
              'data-fs-checkbox': true,
              'data-testid': testId,
              type: 'checkbox',
            },
            otherProps
          )
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Checkbox
    //# sourceMappingURL=Checkbox.js.map

    /***/
  },

  /***/ 5853: /***/ (
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

    const Select = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Select(
        { children, testId = 'store-select', ...otherProps },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'select',
          Object.assign(
            { ref: ref, 'data-fs-select': true, 'data-testid': testId },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Select
    //# sourceMappingURL=Select.js.map

    /***/
  },

  /***/ 4685: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ PriceRange_PriceRange,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    var external_react_default =
      /*#__PURE__*/ __webpack_require__.n(external_react_)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Price/Price.js
    var Price = __webpack_require__(5880) // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/atoms/Slider/Slider.js
    /**
     * This code is inspired by the work of [sandra-lewis](https://codesandbox.io/u/sandra-lewis)
     */

    const percent = (value, min, max) =>
      Math.round(((value - min) / (max - min)) * 100)
    const Slider = (0, external_react_.forwardRef)(function Slider(
      {
        min,
        max,
        onChange,
        onEnd,
        testId = 'store-slider',
        getAriaValueText,
        className,
        step,
        minValueLabelComponent,
        maxValueLabelComponent,
      },
      ref
    ) {
      const widthPercent = (0, external_react_.useMemo)(
        () => (max.absolute - min.absolute) / 100,
        [max.absolute, min.absolute]
      )
      const [minPercent, setMinPercent] = (0, external_react_.useState)(() =>
        percent(min.selected, min.absolute, max.absolute)
      )
      const [maxPercent, setMaxPercent] = (0, external_react_.useState)(() =>
        percent(max.selected, min.absolute, max.absolute)
      )
      const [minVal, setMinVal] = (0, external_react_.useState)(() =>
        Math.round(min.absolute + minPercent * widthPercent)
      )
      const [maxVal, setMaxVal] = (0, external_react_.useState)(() =>
        Math.round(min.absolute + maxPercent * widthPercent)
      )
      ;(0, external_react_.useImperativeHandle)(ref, () => ({
        setSliderValues: (values) => {
          const sliderMinValue = Math.min(Number(values.min), maxVal)
          setMinVal(sliderMinValue)
          setMinPercent(percent(sliderMinValue, min.absolute, max.absolute))
          if (values.max > max.absolute) {
            setMaxVal(max.absolute)
            setMaxPercent(percent(max.absolute, min.absolute, max.absolute))
            return
          }
          const sliderMaxValue = Math.max(Number(values.max), minVal)
          setMaxVal(sliderMaxValue)
          setMaxPercent(percent(sliderMaxValue, min.absolute, max.absolute))
        },
      }))
      return external_react_default().createElement(
        'div',
        { 'data-fs-slider': true, 'data-testid': testId, className: className },
        external_react_default().createElement('div', {
          'data-slider-range': true,
          style: {
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          },
        }),
        external_react_default().createElement('input', {
          type: 'range',
          min: Math.round(min.absolute),
          max: Math.round(max.absolute),
          value: minVal,
          step: step,
          onMouseUp: () => onEnd?.({ min: minVal, max: maxVal }),
          onTouchEnd: () => onEnd?.({ min: minVal, max: maxVal }),
          onChange: (event) => {
            const minValue = Math.min(Number(event.target.value), maxVal)
            setMinVal(minValue)
            setMinPercent(percent(minValue, min.absolute, max.absolute))
            onChange?.({ min: minValue, max: maxVal })
          },
          'data-slider-thumb': 'left',
          'aria-valuemin': min.absolute,
          'aria-valuemax': max.absolute,
          'aria-valuenow': minVal,
          'aria-label': String(minVal),
          'aria-labelledby': getAriaValueText?.(minVal, 'min'),
        }),
        minValueLabelComponent && minValueLabelComponent(minVal),
        external_react_default().createElement('input', {
          type: 'range',
          min: Math.round(min.absolute),
          max: Math.round(max.absolute),
          value: maxVal,
          step: step,
          onMouseUp: () => onEnd?.({ min: minVal, max: maxVal }),
          onTouchEnd: () => onEnd?.({ min: minVal, max: maxVal }),
          onChange: (event) => {
            const maxValue = Math.max(Number(event.target.value), minVal)
            setMaxVal(maxValue)
            setMaxPercent(percent(maxValue, min.absolute, max.absolute))
            onChange?.({ min: minVal, max: maxValue })
          },
          'data-slider-thumb': 'right',
          'aria-valuemin': min.absolute,
          'aria-valuemax': max.absolute,
          'aria-valuenow': maxVal,
          'aria-label': String(maxVal),
          'aria-labelledby': getAriaValueText?.(maxVal, 'max'),
        }),
        maxValueLabelComponent && maxValueLabelComponent(maxVal)
      )
    })
    /* harmony default export */ const Slider_Slider = Slider // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/PriceRange/PriceRange.js
    //# sourceMappingURL=Slider.js.map
    const PriceRange = (0, external_react_.forwardRef)(function PriceRange(
      {
        className,
        formatter,
        max,
        min,
        step,
        onChange,
        onEnd,
        testId = 'store-price-range',
        variant,
        'aria-label': ariaLabel,
      },
      ref
    ) {
      const sliderRef = (0, external_react_.useRef)()
      ;(0, external_react_.useImperativeHandle)(ref, () => ({
        setPriceRangeValues: (values) => {
          onChange?.(values)
          sliderRef.current?.setSliderValues(values)
        },
      }))
      return external_react_default().createElement(
        'div',
        {
          'data-fs-price-range': true,
          'data-testid': testId,
          className: className,
        },
        external_react_default().createElement(Slider_Slider, {
          ref: sliderRef,
          min: min,
          max: max,
          step: step,
          onEnd: onEnd,
          'aria-label': ariaLabel,
          onChange: (value) => onChange?.(value),
          minValueLabelComponent: (minValue) => {
            const minPercent = (minValue / max.absolute) * 100
            return external_react_default().createElement(
              Price /* default */.Z,
              {
                value: minValue,
                variant: variant,
                formatter: formatter,
                'data-price-range-value-label': 'min',
                style: {
                  position: 'absolute',
                  left: `calc(${minPercent}% + (${8 - minPercent * 0.2}px))`,
                },
              }
            )
          },
          maxValueLabelComponent: (maxValue) => {
            const maxPercent = (maxValue / max.absolute) * 100
            return external_react_default().createElement(
              Price /* default */.Z,
              {
                formatter: formatter,
                variant: variant,
                value: maxValue,
                'data-price-range-value-label': 'max',
                style: {
                  position: 'absolute',
                  left: `calc(${maxPercent}% + (${8 - maxPercent * 0.2}px))`,
                },
              }
            )
          },
        })
      )
    })
    /* harmony default export */ const PriceRange_PriceRange = PriceRange
    //# sourceMappingURL=PriceRange.js.map

    /***/
  },
}
