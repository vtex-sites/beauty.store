'use strict'
exports.id = 462
exports.ids = [462]
exports.modules = {
  /***/ 1783: /***/ (
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

    const Tile = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Tile({ testId = 'store-tile', children, ...otherProps }, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'li',
          Object.assign(
            { ref: ref, 'data-fs-tile': true, 'data-testid': testId },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Tile
    //# sourceMappingURL=Tile.js.map

    /***/
  },

  /***/ 4961: /***/ (
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

    const MIN_CHILDREN = 2
    const MAX_CHILDREN = 4
    const NUMBER_ITEMS_TO_EXPAND_FIRST_TWO = 2
    const NUMBER_ITEMS_TO_EXPAND_FIRST = 3
    const Tiles = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Tiles({ testId = 'store-tiles', children, ...otherProps }, ref) {
        const childrenCount =
          react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)
        if (false) {
        }
        if (false) {
        }
        const expandedClass =
          childrenCount === NUMBER_ITEMS_TO_EXPAND_FIRST
            ? 'expanded-first'
            : childrenCount === NUMBER_ITEMS_TO_EXPAND_FIRST_TWO
            ? 'expanded-first-two'
            : ''
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'ul',
          Object.assign(
            {
              ref: ref,
              'data-fs-tiles': true,
              'data-fs-tiles-variant': expandedClass,
              'data-testid': testId,
            },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Tiles
    //# sourceMappingURL=Tiles.js.map

    /***/
  },
}
