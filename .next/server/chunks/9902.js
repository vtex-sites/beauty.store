'use strict'
exports.id = 9902
exports.ids = [9902]
exports.modules = {
  /***/ 3634: /***/ (
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
    /* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(5815)
    /* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1007)

    const IconButton = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function IconButton(
        { icon, testId = 'store-icon-button', ...buttonProps },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          _atoms_Button__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
          Object.assign(
            { ref: ref, 'data-fs-icon-button': true, testId: testId },
            buttonProps
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _atoms_Icon__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
            { component: icon }
          )
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = IconButton
    //# sourceMappingURL=IconButton.js.map

    /***/
  },

  /***/ 9902: /***/ (
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
    /* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(8607)
    /* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(3634)

    const QuantitySelector = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function QuantitySelector(
        {
          quantity,
          testId = 'store-quantity-selector',
          leftButtonProps,
          inputProps,
          rightButtonProps,
          ...otherProps
        },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          Object.assign(
            {
              'data-fs-quantity-selector': true,
              'data-testid': testId,
              ref: ref,
            },
            otherProps
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _IconButton__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
            Object.assign(
              {
                'aria-controls': 'quantity-selector-input',
                'aria-label': 'Decrement Quantity',
                'data-quantity-selector-button': 'left',
              },
              leftButtonProps
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _atoms_Input__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
            Object.assign(
              {
                'aria-label': 'Quantity',
                'data-quantity-selector-input': true,
                id: 'quantity-selector-input',
                value: quantity,
              },
              inputProps
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _IconButton__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
            Object.assign(
              {
                'aria-controls': 'quantity-selector-input',
                'aria-label': 'Increment Quantity',
                'data-quantity-selector-button': 'right',
              },
              rightButtonProps
            )
          )
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      QuantitySelector
    //# sourceMappingURL=QuantitySelector.js.map

    /***/
  },
}
