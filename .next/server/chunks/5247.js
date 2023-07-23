exports.id = 5247
exports.ids = [5247]
exports.modules = {
  /***/ 5247: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var _faststore_ui__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(8164)
    /* harmony import */ var _faststore_ui__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(2178)
    /* harmony import */ var src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(2478)
    /* harmony import */ var _incentives_module_scss__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(6415)
    /* harmony import */ var _incentives_module_scss__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        _incentives_module_scss__WEBPACK_IMPORTED_MODULE_2__
      )
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(997)
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__
      )

    function Incentives({
      incentives,
      variant = 'horizontal',
      colored = false,
    }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
        'div',
        {
          'data-fs-incentives': true,
          'data-fs-incentives-colored': colored,
          'data-fs-incentives-variant': variant,
          className:
            _incentives_module_scss__WEBPACK_IMPORTED_MODULE_2___default()
              .fsIncentives,
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
              _faststore_ui__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
              {
                variant: 'unordered',
                className: 'layout__content',
                children: incentives.map((incentive, index) =>
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
                    'li',
                    {
                      children: /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                        _faststore_ui__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                        {
                          children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
                              src_components_ui_Icon__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                              {
                                'data-fs-incentive-icon': true,
                                name: incentive.icon,
                                width: 32,
                                height: 32,
                              }
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                              'div',
                              {
                                'data-fs-incentive-content': true,
                                children: [
                                  incentive.title &&
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
                                      'p',
                                      {
                                        'data-fs-incentive-title': true,
                                        children: incentive.title,
                                      }
                                    ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
                                    'span',
                                    {
                                      'data-fs-incentive-description': true,
                                      children: incentive.firstLineText,
                                    }
                                  ),
                                  incentive.secondLineText &&
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
                                      'span',
                                      {
                                        'data-fs-incentive-description': true,
                                        children: incentive.secondLineText,
                                      }
                                    ),
                                ],
                              }
                            ),
                          ],
                        }
                      ),
                    },
                    String(index)
                  )
                ),
              }
            ),
        }
      )
    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Incentives

    /***/
  },

  /***/ 6415: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-incentives': 'incentives_fs-incentives__nlTSn',
      fsIncentives: 'incentives_fs-incentives__nlTSn',
    }

    /***/
  },
}
