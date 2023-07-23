'use strict'
exports.id = 8910
exports.ids = [8910]
exports.modules = {
  /***/ 3724: /***/ (
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

    const ProductTitle = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function ProductTitle(
        {
          title,
          label,
          refTag = 'Ref.: ',
          refNumber,
          testId = 'store-product-title',
          ...otherProps
        },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'header',
          Object.assign(
            { ref: ref, 'data-fs-product-title': true, 'data-testid': testId },
            otherProps
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { 'data-fs-product-title-header': true },
            title,
            !!label && label
          ),
          refNumber &&
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'p',
              { 'data-fs-product-title-addendum': true },
              refTag,
              refNumber
            )
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ProductTitle
    //# sourceMappingURL=ProductTitle.js.map

    /***/
  },

  /***/ 3464: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ RadioGroup_RadioOption,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    var external_react_default =
      /*#__PURE__*/ __webpack_require__.n(external_react_) // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/atoms/Radio/Radio.js
    const Radio = (0, external_react_.forwardRef)(function Radio(
      { testId = 'store-radio', ...otherProps },
      ref
    ) {
      return external_react_default().createElement(
        'input',
        Object.assign(
          {
            ref: ref,
            'data-fs-radio': true,
            'data-testid': testId,
            type: 'radio',
          },
          otherProps
        )
      )
    })
    /* harmony default export */ const Radio_Radio = Radio
    //# sourceMappingURL=Radio.js.map
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/RadioGroup/useRadioGroup.js
    var useRadioGroup = __webpack_require__(894) // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/RadioGroup/RadioOption.js
    const RadioOption = (0, external_react_.forwardRef)(function RadioOption(
      { label, value, children, testId = 'store-radio-option', ...otherProps },
      ref
    ) {
      const { name, selectedValue, onChange } = (0,
      useRadioGroup /* useRadioGroup */.a)()
      return external_react_default().createElement(
        'label',
        { 'aria-label': label, 'data-fs-radio-option': true },
        external_react_default().createElement(
          Radio_Radio,
          Object.assign(
            {
              'data-fs-radio-option-item': true,
              ref: ref,
              name: name,
              checked: value === selectedValue,
              onChange: onChange,
              value: value,
              testId: testId,
            },
            otherProps
          )
        ),
        children
      )
    })
    /* harmony default export */ const RadioGroup_RadioOption = RadioOption
    //# sourceMappingURL=RadioOption.js.map

    /***/
  },

  /***/ 894: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ L: () => /* binding */ RadioGroupContext,
      /* harmony export */ a: () => /* binding */ useRadioGroup,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const RadioGroupContext = (0,
    react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined)
    function useRadioGroup() {
      const context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
        RadioGroupContext
      )
      if (!context) {
        throw new Error(
          `useRadioOption hook cannot be used outside the RadioGroup context`
        )
      }
      return context
    }
    //# sourceMappingURL=useRadioGroup.js.map

    /***/
  },

  /***/ 1843: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ SkuSelector_SkuSelector,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    var external_react_default =
      /*#__PURE__*/ __webpack_require__.n(external_react_)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Label/Label.js
    var Label = __webpack_require__(571)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/RadioGroup/useRadioGroup.js
    var useRadioGroup = __webpack_require__(894) // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/RadioGroup/RadioGroup.js
    const RadioGroup = ({ name, onChange, children, selectedValue }) => {
      const contextValues = external_react_default().useMemo(() => {
        return { name, selectedValue, onChange }
      }, [name, selectedValue, onChange])
      return external_react_default().createElement(
        useRadioGroup /* RadioGroupContext.Provider */.L.Provider,
        { value: contextValues },
        children
      )
    }
    /* harmony default export */ const RadioGroup_RadioGroup = RadioGroup // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/SkuSelector/SkuSelector.js
    //# sourceMappingURL=RadioGroup.js.map
    const SkuSelector = (0, external_react_.forwardRef)(function SkuSelector(
      {
        id,
        label,
        variant,
        onChange,
        testId = 'store-sku-selector',
        activeValue,
        children,
        ...otherProps
      },
      ref
    ) {
      const radioGroupId = id ? `-${id}` : ''
      return external_react_default().createElement(
        'div',
        Object.assign(
          {
            ref: ref,
            'data-fs-sku-selector': true,
            'data-testid': testId,
            'data-fs-sku-selector-variant': variant,
          },
          otherProps
        ),
        label &&
          external_react_default().createElement(
            Label /* default */.Z,
            { 'data-fs-sku-selector-title': true },
            label,
            ': ',
            external_react_default().createElement('strong', null, activeValue)
          ),
        external_react_default().createElement(
          RadioGroup_RadioGroup,
          {
            selectedValue: activeValue,
            name: `sku-selector-${variant}${radioGroupId}`,
            onChange: (e) => {
              onChange?.(e)
            },
          },
          children
        )
      )
    })
    /* harmony default export */ const SkuSelector_SkuSelector = SkuSelector
    //# sourceMappingURL=SkuSelector.js.map

    /***/
  },

  /***/ 2: /***/ (
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

    const Table = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Table({ testId = 'store-table', children, ...otherProps }, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'table',
          Object.assign(
            { ref: ref, 'data-fs-table': true, 'data-testid': testId },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Table
    //# sourceMappingURL=Table.js.map

    /***/
  },

  /***/ 9506: /***/ (
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

    const TableBody = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function TableBody(
        { children, testId = 'store-table-body', ...otherProps },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'tbody',
          Object.assign(
            { ref: ref, 'data-testid': testId, 'data-table-body': true },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = TableBody
    //# sourceMappingURL=TableBody.js.map

    /***/
  },

  /***/ 3623: /***/ (
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

    const TableCell = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function TableCell(
        {
          testId = 'store-table-cell',
          children,
          variant = 'data',
          scope,
          ...otherProps
        },
        ref
      ) {
        const Cell = variant === 'header' ? 'th' : 'td'
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          Cell,
          Object.assign(
            {
              ref: ref,
              'data-table-cell': variant,
              'data-testid': testId,
              scope: scope,
            },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = TableCell
    //# sourceMappingURL=TableCell.js.map

    /***/
  },

  /***/ 967: /***/ (
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

    const TableRow = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function TableRow(
        { testId = 'store-table-row', children, ...otherProps },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'tr',
          Object.assign(
            { ref: ref, 'data-table-row': true, 'data-testid': testId },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = TableRow
    //# sourceMappingURL=TableRow.js.map

    /***/
  },

  /***/ 3861: /***/ (
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
    /* harmony import */ var _molecules_Form__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(2223)

    const OutOfStock = ({
      testId = 'store-out-of-stock',
      children,
      ...otherProps
    }) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'section',
        { 'data-fs-out-of-stock': true, 'data-testid': testId },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          _molecules_Form__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
          Object.assign(
            { 'data-out-of-stock-form': true, testId: `${testId}-form` },
            otherProps
          ),
          children
        )
      )
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = OutOfStock
    //# sourceMappingURL=OutOfStock.js.map

    /***/
  },

  /***/ 7192: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ w: () => /* binding */ OutOfStockMessage,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const OutOfStockMessage = ({
      as: MessageComponent = 'p',
      testId = 'store-out-of-stock-message',
      children,
      ...otherProps
    }) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        MessageComponent,
        Object.assign(
          { 'data-out-of-stock-message': true, 'data-testid': testId },
          otherProps
        ),
        children
      )
    }
    //# sourceMappingURL=OutOfStockMessage.js.map

    /***/
  },

  /***/ 5338: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ _: () => /* binding */ OutOfStockTitle,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const OutOfStockTitle = ({
      as: TitleComponent = 'h2',
      testId = 'store-out-of-stock-title',
      children,
      ...otherProps
    }) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        TitleComponent,
        Object.assign(
          { 'data-out-of-stock-title': true, 'data-testid': testId },
          otherProps
        ),
        children
      )
    }
    //# sourceMappingURL=OutOfStockTitle.js.map

    /***/
  },
}
