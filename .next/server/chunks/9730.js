exports.id = 9730
exports.ids = [9730]
exports.modules = {
  /***/ 571: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const Label = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Label({ testId = 'store-label', children, ...otherProps }, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'label',
          Object.assign(
            { ref: ref, 'data-fs-label': true, 'data-testid': testId },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Label
    //# sourceMappingURL=Label.js.map

    /***/
  },

  /***/ 3318: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__)

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      RegionalizationModalContent: () =>
        /* reexport */ RegionalizationModal_RegionalizationModalContent,
      default: () => /* reexport */ RegionalizationModal_RegionalizationModal,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Modal/Modal.js + 3 modules
    var Modal = __webpack_require__(1411)
    // EXTERNAL MODULE: ./src/sdk/ui/Provider.tsx
    var Provider = __webpack_require__(8869)
    // EXTERNAL MODULE: ./src/sdk/ui/useFadeEffect.ts
    var useFadeEffect = __webpack_require__(5112)
    // EXTERNAL MODULE: ./src/components/ui/Modal/modal.module.scss
    var modal_module = __webpack_require__(2371)
    var modal_module_default = /*#__PURE__*/ __webpack_require__.n(modal_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Modal/Modal.tsx
    const _excluded = ['className', 'children']

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

    function Modal_Modal(_ref) {
      let { className, children } = _ref,
        props = _objectWithoutProperties(_ref, _excluded)

      const { closeModal } = (0, Provider /* useUI */.l)()
      const { fade, fadeOut, fadeIn } = (0,
      useFadeEffect /* useFadeEffect */.b)()
      return /*#__PURE__*/ jsx_runtime_.jsx(
        Modal /* default */.Z,
        _objectSpread(
          _objectSpread(
            {
              onDismiss: fadeOut,
              onTransitionEnd: () => fade === 'out' && closeModal(),
              'data-fs-modal': true,
              'data-fs-modal-state': fade,
              className: `${modal_module_default().fsModal} ${className}`,
            },
            props
          ),
          {},
          {
            isOpen: true,
            children:
              typeof children === 'function'
                ? children({
                    fade,
                    fadeOut,
                    fadeIn,
                  })
                : children,
          }
        )
      )
    }

    /* harmony default export */ const ui_Modal_Modal = Modal_Modal // CONCATENATED MODULE: ./src/components/ui/Modal/index.ts // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationModal/RegionalizationModal.tsx
    function RegionalizationModal() {
      return /*#__PURE__*/ jsx_runtime_.jsx(ui_Modal_Modal, {
        children: ({ fadeOut }) =>
          /*#__PURE__*/ jsx_runtime_.jsx(
            RegionalizationModal_RegionalizationModalContent,
            {
              onClose: fadeOut,
            }
          ),
      })
    }

    /* harmony default export */ const RegionalizationModal_RegionalizationModal =
      RegionalizationModal
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./src/components/ui/InputText/index.ts + 1 modules
    var InputText = __webpack_require__(1224)
    // EXTERNAL MODULE: ./src/sdk/session/index.ts
    var sdk_session = __webpack_require__(5971) // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationInput/RegionalizationInput.tsx
    const RegionalizationInput_excluded = ['isValidating']

    function RegionalizationInput_ownKeys(object, enumerableOnly) {
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

    function RegionalizationInput_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? RegionalizationInput_ownKeys(Object(source), !0).forEach(function (
              key
            ) {
              RegionalizationInput_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : RegionalizationInput_ownKeys(Object(source)).forEach(function (
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

    function RegionalizationInput_defineProperty(obj, key, value) {
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

    function RegionalizationInput_objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = RegionalizationInput_objectWithoutPropertiesLoose(
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

    function RegionalizationInput_objectWithoutPropertiesLoose(
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

    function RegionInput({ closeModal }) {
      const inputRef = (0, external_react_.useRef)(null)

      const _useSession = (0, sdk_session /* useSession */.kP)(),
        { isValidating } = _useSession,
        session = RegionalizationInput_objectWithoutProperties(
          _useSession,
          RegionalizationInput_excluded
        )

      const { 0: errorMessage, 1: setErrorMessage } = (0,
      external_react_.useState)('')
      const { 0: input, 1: setInput } = (0, external_react_.useState)('')

      const handleSubmit = async () => {
        const postalCode = inputRef.current?.value

        if (typeof postalCode !== 'string') {
          return
        }

        setErrorMessage('')

        try {
          const newSession = RegionalizationInput_objectSpread(
            RegionalizationInput_objectSpread({}, session),
            {},
            {
              postalCode,
            }
          )

          const validatedSession = await (0,
          sdk_session /* validateSession */.je)(newSession)
          sdk_session /* sessionStore.set */.Qf.set(
            validatedSession ?? newSession
          )
          closeModal()
        } catch (error) {
          setErrorMessage('You entered an invalid Postal Code')
        }
      }

      return /*#__PURE__*/ jsx_runtime_.jsx('div', {
        className: 'regionalization-input',
        children: /*#__PURE__*/ jsx_runtime_.jsx(InputText /* default */.Z, {
          inputRef: inputRef,
          id: 'postal-code-input',
          error: errorMessage,
          label: 'Postal Code',
          actionable: true,
          value: input,
          onInput: (e) => {
            errorMessage !== '' && setErrorMessage('')
            setInput(e.currentTarget.value)
          },
          onSubmit: handleSubmit,
          onClear: () => setInput(''),
        }),
      })
    }

    /* harmony default export */ const RegionalizationInput = RegionInput // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationInput/index.ts
    // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
    var Button = __webpack_require__(1310)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/Link/index.ts + 1 modules
    var Link = __webpack_require__(1093)
    // EXTERNAL MODULE: ./src/components/regionalization/RegionalizationModal/regionalization-modal-content.module.scss
    var regionalization_modal_content_module = __webpack_require__(537)
    var regionalization_modal_content_module_default =
      /*#__PURE__*/ __webpack_require__.n(regionalization_modal_content_module) // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationModal/RegionalizationModalContent.tsx
    function RegionalizationModalContent({ onClose }) {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        'data-fs-regionalization-modal-content': true,
        className:
          regionalization_modal_content_module_default()
            .fsRegionalizationModalContent,
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
            'data-fs-regionalization-modal-header': true,
            children: [
              onClose &&
                /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                  onClick: () => onClose?.(),
                  'data-fs-regionalization-modal-button': true,
                  'aria-label': 'Close Regionalization Modal',
                  'data-testid': 'regionalization-modal-button-close',
                  icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                    name: 'X',
                    width: 30,
                    height: 30,
                  }),
                }),
              /*#__PURE__*/ jsx_runtime_.jsx('p', {
                'data-fs-regionalization-modal-title': true,
                children: 'Set your location',
              }),
              /*#__PURE__*/ jsx_runtime_.jsx('p', {
                'data-fs-regionalization-modal-description': true,
                children:
                  'Prices, offers and availability may vary according to your location.',
              }),
            ],
          }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-regionalization-modal-body': true,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx('div', {
                'data-fs-regionalization-modal-input': true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(RegionalizationInput, {
                  closeModal: () => onClose?.(),
                }),
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Link /* default */.Z, {
                href: '/',
                'data-fs-regionalization-modal-link': true,
                children: [
                  "I don't know my Postal Code",
                  /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                    name: 'ArrowSquareOut',
                    width: 18,
                    height: 18,
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    }

    /* harmony default export */ const RegionalizationModal_RegionalizationModalContent =
      RegionalizationModalContent // CONCATENATED MODULE: ./src/components/regionalization/RegionalizationModal/index.ts

    /***/
  },

  /***/ 537: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-regionalization-modal-content':
        'regionalization-modal-content_fs-regionalization-modal-content__tOXHN',
      fsRegionalizationModalContent:
        'regionalization-modal-content_fs-regionalization-modal-content__tOXHN',
    }

    /***/
  },

  /***/ 2371: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-modal': 'modal_fs-modal__Ro5qM',
      fsModal: 'modal_fs-modal__Ro5qM',
    }

    /***/
  },
}
