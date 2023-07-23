exports.id = 702
exports.ids = [702]
exports.modules = {
  /***/ 4851: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      C: () => /* reexport */ ui_Badge_Badge,
      F: () => /* reexport */ Badge_DiscountBadge,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689) // CONCATENATED MODULE: ./src/sdk/product/useDiscountPercent.ts
    const useDiscountPercent = (listPrice, spotPrice) => {
      return (0, external_react_.useMemo)(() => {
        const diff = listPrice - spotPrice
        const discount = (diff * 100) / listPrice
        return Math.round(discount)
      }, [spotPrice, listPrice])
    }
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Badge/Badge.js
    var Badge = __webpack_require__(4914)
    // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
    var Button = __webpack_require__(1310)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/Badge/badge.module.scss
    var badge_module = __webpack_require__(1046)
    var badge_module_default = /*#__PURE__*/ __webpack_require__.n(badge_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Badge/Badge.tsx
    const _excluded = ['variant', 'children', 'onClose', 'big', 'actionable']

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

    const Badge_Badge = (_ref) => {
      let {
          variant = 'neutral',
          children,
          onClose,
          big = false,
          actionable = false,
        } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
        Badge /* default */.Z,
        _objectSpread(
          _objectSpread(
            {
              className: badge_module_default().fsBadge,
              'data-fs-badge': big ? 'big' : '',
              'data-fs-badge-variant': variant,
              'data-fs-badge-actionable': actionable,
            },
            otherProps
          ),
          {},
          {
            children: [
              actionable &&
                /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                  'aria-label': 'Remove',
                  'data-fs-badge-button': true,
                  onClick: onClose,
                  icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                    name: 'X',
                    width: 18,
                    height: 18,
                    weight: 'bold',
                  }),
                  iconPosition: 'left',
                }),
              /*#__PURE__*/ jsx_runtime_.jsx('div', {
                'data-fs-badge-wrapper': true,
                children: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                  children: children,
                }),
              }),
            ],
          }
        )
      )
    }

    /* harmony default export */ const ui_Badge_Badge = Badge_Badge // CONCATENATED MODULE: ./src/components/ui/Badge/DiscountBadge.tsx
    const DiscountBadge = ({
      listPrice,
      spotPrice,
      big = false,
      thresholdLow = 15,
      thresholdHigh = 40,
    }) => {
      const discountPercent = useDiscountPercent(listPrice, spotPrice)

      if (discountPercent === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
      }

      const discountVariant =
        discountPercent <= thresholdLow
          ? 'low'
          : discountPercent <= thresholdHigh
          ? 'medium'
          : 'high'
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(ui_Badge_Badge, {
        big: big,
        'data-fs-discount-badge-variant': discountVariant,
        children: [discountPercent, '% off'],
      })
    }

    /* harmony default export */ const Badge_DiscountBadge = /*#__PURE__*/ (0,
    external_react_.memo)(DiscountBadge) // CONCATENATED MODULE: ./src/components/ui/Badge/index.ts

    /***/
  },

  /***/ 5346: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ P: () => /* binding */ useFormattedPrice,
      /* harmony export */ o: () => /* binding */ usePriceFormatter,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(5971)

    const usePriceFormatter = ({ decimals } = {}) => {
      const { currency, locale } = (0,
      _session__WEBPACK_IMPORTED_MODULE_1__ /* .useSession */.kP)()
      return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        (price) =>
          Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency.code,
            minimumFractionDigits: decimals ? 2 : 0,
          }).format(price),
        [currency.code, locale, decimals]
      )
    }
    const useFormattedPrice = (price) => {
      const formatter = usePriceFormatter()
      return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
        () => formatter(price),
        [formatter, price]
      )
    }

    /***/
  },

  /***/ 1046: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-badge': 'badge_fs-badge__yPdhR',
      fsBadge: 'badge_fs-badge__yPdhR',
    }

    /***/
  },
}
