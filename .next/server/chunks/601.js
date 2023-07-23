exports.id = 601
exports.ids = [601]
exports.modules = {
  /***/ 601: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ ui_QuantitySelector_QuantitySelector,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/QuantitySelector/QuantitySelector.js
    var QuantitySelector = __webpack_require__(9902)
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/QuantitySelector/quantity-selector.module.scss
    var quantity_selector_module = __webpack_require__(597)
    var quantity_selector_module_default = /*#__PURE__*/ __webpack_require__.n(
      quantity_selector_module
    )
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/QuantitySelector/QuantitySelector.tsx
    function QuantitySelector_QuantitySelector({
      max,
      min = 1,
      initial,
      disabled = false,
      onChange,
    }) {
      const { 0: quantity, 1: setQuantity } = (0, external_react_.useState)(
        initial ?? min
      )
      const isLeftDisabled = quantity === min
      const isRightDisabled = quantity === max

      const changeQuantity = (increaseValue) => {
        const quantityValue = validateQuantityBounds(quantity + increaseValue)
        onChange?.(quantityValue)
        setQuantity(quantityValue)
      }

      const increase = () => changeQuantity(1)

      const decrease = () => changeQuantity(-1)

      function validateQuantityBounds(n) {
        const maxValue = min ? Math.max(n, min) : n
        return max ? Math.min(maxValue, max) : maxValue
      }

      function validateInput(e) {
        const val = e.currentTarget.value

        if (!Number.isNaN(Number(val))) {
          setQuantity(() => {
            const quantityValue = validateQuantityBounds(Number(val))
            onChange?.(quantityValue)
            return quantityValue
          })
        }
      }

      ;(0, external_react_.useEffect)(() => {
        initial && setQuantity(initial)
      }, [initial])
      return /*#__PURE__*/ jsx_runtime_.jsx(QuantitySelector /* default */.Z, {
        'data-fs-quantity-selector': disabled ? 'disabled' : 'true',
        className: quantity_selector_module_default().fsQuantitySelector,
        quantity: quantity,
        leftButtonProps: {
          onClick: decrease,
          disabled: isLeftDisabled || disabled,
          icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
            name: 'Minus',
            width: 16,
            height: 16,
            weight: 'bold',
          }),
          testId: 'store-quantity-selector-left',
        },
        rightButtonProps: {
          onClick: increase,
          disabled: isRightDisabled || disabled,
          icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
            name: 'Plus',
            width: 16,
            height: 16,
            weight: 'bold',
          }),
          testId: 'store-quantity-selector-right',
        },
        inputProps: {
          onChange: validateInput,
          readOnly: false,
          disabled,
        },
      })
    }
    /* harmony default export */ const ui_QuantitySelector_QuantitySelector =
      /*#__PURE__*/ (0, external_react_.memo)(QuantitySelector_QuantitySelector) // CONCATENATED MODULE: ./src/components/ui/QuantitySelector/index.ts

    /***/
  },

  /***/ 597: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-quantity-selector': 'quantity-selector_fs-quantity-selector__DMDQM',
      fsQuantitySelector: 'quantity-selector_fs-quantity-selector__DMDQM',
    }

    /***/
  },
}
