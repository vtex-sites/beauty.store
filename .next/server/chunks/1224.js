exports.id = 1224
exports.ids = [1224]
exports.modules = {
  /***/ 1224: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ InputText_InputText,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Input/Input.js
    var Input = __webpack_require__(8607)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Label/Label.js
    var Label = __webpack_require__(571)
    // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
    var Button = __webpack_require__(1310)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/InputText/input-text.module.scss
    var input_text_module = __webpack_require__(1143)
    var input_text_module_default =
      /*#__PURE__*/ __webpack_require__.n(input_text_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/InputText/InputText.tsx
    const _excluded = [
      'id',
      'label',
      'type',
      'error',
      'displayClearButton',
      'actionable',
      'buttonActionText',
      'onSubmit',
      'onClear',
      'placeholder',
      'inputRef',
      'disabled',
      'value',
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

    const InputText = (_ref) => {
      let {
          id,
          label,
          type = 'text',
          error,
          displayClearButton,
          actionable,
          buttonActionText = 'Apply',
          onSubmit,
          onClear,
          placeholder = ' ',
          // initializes with an empty space to style float label using `placeholder-shown`
          inputRef,
          disabled,
          value,
        } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      const shouldDisplayError = !disabled && error && error !== ''
      const shouldDisplayButton = actionable && !disabled && value !== ''
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        className: input_text_module_default().fsInputText,
        'data-fs-input-text': true,
        'data-fs-input-text-actionable': actionable,
        'data-fs-input-text-error': error && error !== '',
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(
            Input /* default */.Z,
            _objectSpread(
              {
                id: id,
                type: type,
                value: value,
                ref: inputRef,
                disabled: disabled,
                placeholder: placeholder,
              },
              otherProps
            )
          ),
          /*#__PURE__*/ jsx_runtime_.jsx(Label /* default */.Z, {
            htmlFor: id,
            children: label,
          }),
          shouldDisplayButton &&
            (displayClearButton || error
              ? /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                  'data-fs-button-size': 'small',
                  'aria-label': 'Clear Field',
                  icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                    name: 'XCircle',
                    width: 20,
                    height: 20,
                  }),
                  onClick: () => {
                    onClear?.()
                    inputRef?.current?.focus()
                  },
                })
              : /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                  variant: 'tertiary',
                  size: 'small',
                  onClick: onSubmit,
                  children: buttonActionText,
                })),
          shouldDisplayError &&
            /*#__PURE__*/ jsx_runtime_.jsx('span', {
              'data-fs-input-text-error-message': true,
              children: error,
            }),
        ],
      })
    }

    /* harmony default export */ const InputText_InputText = InputText // CONCATENATED MODULE: ./src/components/ui/InputText/index.ts

    /***/
  },

  /***/ 1143: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-input-text': 'input-text_fs-input-text__uKIBZ',
      fsInputText: 'input-text_fs-input-text__uKIBZ',
    }

    /***/
  },
}
