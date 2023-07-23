'use strict'
exports.id = 7103
exports.ids = [7103]
exports.modules = {
  /***/ 6751: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ W: () => /* binding */ useAnalyticsEvent,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _wrap__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(6716)

    const useAnalyticsEvent = (handler) => {
      const callback = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        (message) => {
          try {
            if (
              message.data.name !==
              _wrap__WEBPACK_IMPORTED_MODULE_1__ /* .ANALYTICS_EVENT_TYPE */.vi
            ) {
              return
            }
            handler(
              (0, _wrap__WEBPACK_IMPORTED_MODULE_1__ /* .unwrap */.Wg)(
                message.data
              )
            )
          } catch (err) {
            console.error(
              'Something went wrong while running Analytics handler'
            )
          }
        },
        [handler]
      )
      ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        window.addEventListener('message', callback)
        return () => window.removeEventListener('message', callback)
      }, [callback])
    }
    //# sourceMappingURL=useAnalyticsEvent.js.map

    /***/
  },

  /***/ 2178: /***/ (
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

    const Incentive = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Incentive(
        { testId = 'store-incentive', children, ...otherProps },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          Object.assign(
            { ref: ref, 'data-fs-incentive': true, 'data-testid': testId },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Incentive
    //# sourceMappingURL=Incentive.js.map

    /***/
  },

  /***/ 839: /***/ (
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

    const Alert = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Alert({ testId = 'store-alert', children, ...otherProps }, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          Object.assign(
            {
              ref: ref,
              role: 'alert',
              'data-fs-alert': true,
              'data-testid': testId,
            },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Alert
    //# sourceMappingURL=Alert.js.map

    /***/
  },

  /***/ 2223: /***/ (
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

    const Form = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Form({ testId = 'store-form', children, ...otherProps }, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'form',
          Object.assign(
            { ref: ref, 'data-fs-form': true, 'data-testid': testId },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Form
    //# sourceMappingURL=Form.js.map

    /***/
  },

  /***/ 3719: /***/ (
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

    const PaymentMethods = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function PaymentMethods(
        {
          testId = 'store-payment-methods',
          title,
          'aria-label': ariaLabel = 'Payment Methods',
          children,
          ...otherProps
        },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          Object.assign(
            {
              ref: ref,
              'data-fs-payment-methods': true,
              'data-testid': testId,
            },
            otherProps
          ),
          !!title &&
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'div',
              null,
              title
            ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            {
              'data-payment-methods-flags': true,
              'aria-label': title ? undefined : ariaLabel,
            },
            children
          )
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      PaymentMethods
    //# sourceMappingURL=PaymentMethods.js.map

    /***/
  },

  /***/ 5414: /***/ (
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
    /* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(5815)
    /* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(1007)
    /* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(8607)
    /* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(2223)

    const SearchIcon = () =>
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '1em',
          height: '1em',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement('circle', {
          cx: '11',
          cy: '11',
          r: '8',
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement('line', {
          x1: '21',
          y1: '21',
          x2: '16.65',
          y2: '16.65',
        })
      )
    const SearchInput = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function SearchInput(
        {
          onSubmit,
          icon,
          'aria-label': ariaLabel = 'search',
          testId = 'store-search-input',
          ...otherProps
        },
        ref
      ) {
        const inputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null)
        const formRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null)
        const handleSubmit = (event) => {
          event.preventDefault()
          if (inputRef.current?.value !== '') {
            onSubmit(inputRef.current.value)
          }
        }
        ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(
          ref,
          () => ({
            inputRef: inputRef.current,
            formRef: formRef.current,
          })
        )
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          _Form__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
          {
            ref: formRef,
            'data-fs-search-input-form': true,
            'data-testid': testId,
            onSubmit: handleSubmit,
            role: 'search',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _atoms_Input__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
            Object.assign(
              { ref: inputRef, 'aria-label': ariaLabel },
              otherProps
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
            { type: 'submit', 'aria-label': 'Submit Search' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _atoms_Icon__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
              {
                component:
                  icon ??
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    SearchIcon,
                    null
                  ),
              }
            )
          )
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = SearchInput
    //# sourceMappingURL=SearchInput.js.map

    /***/
  },
}
