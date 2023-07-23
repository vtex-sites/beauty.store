'use strict'
exports.id = 354
exports.ids = [354]
exports.modules = {
  /***/ 4914: /***/ (
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

    const Badge = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Badge({ testId = 'store-badge', children, ...otherProps }, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          Object.assign(
            { ref: ref, 'data-fs-badge': true, 'data-testid': testId },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Badge
    //# sourceMappingURL=Badge.js.map

    /***/
  },

  /***/ 571: /***/ (
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

  /***/ 5880: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* unused harmony export Price */
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const Price = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Price(
        {
          as: Component = 'span',
          testId = 'store-price',
          value,
          formatter = (price) => price,
          variant = 'selling',
          ...otherProps
        },
        ref
      ) {
        const formattedPrice = formatter(value, variant)
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          Component,
          Object.assign(
            {
              ref: ref,
              'data-fs-price': true,
              'data-testid': testId,
              'data-variant': variant,
            },
            otherProps
          ),
          formattedPrice
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Price
    //# sourceMappingURL=Price.js.map

    /***/
  },

  /***/ 9229: /***/ (
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

    const Skeleton = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Skeleton({ testId = 'store-skeleton', ...otherProps }, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          Object.assign(
            { ref: ref, 'data-fs-skeleton': true, 'data-testid': testId },
            otherProps
          )
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Skeleton
    //# sourceMappingURL=Skeleton.js.map

    /***/
  },
}
