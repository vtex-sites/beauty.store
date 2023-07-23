exports.id = 6307
exports.ids = [6307]
exports.modules = {
  /***/ 6307: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__)

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      default: () => /* reexport */ Toast_Toast,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/sdk/ui/Provider.tsx
    var Provider = __webpack_require__(8869)
    // EXTERNAL MODULE: ./src/components/ui/Toast/toast.module.scss
    var toast_module = __webpack_require__(8477)
    var toast_module_default = /*#__PURE__*/ __webpack_require__.n(toast_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Toast/Toast.tsx
    function Toast() {
      const { toasts, popToast } = (0, Provider /* useUI */.l)()
      const toast = toasts[toasts.length - 1]
      const timeoutRef = (0, external_react_.useRef)()
      const { 0: visible, 1: setVisible } = (0, external_react_.useState)(false)
      ;(0, external_react_.useEffect)(() => {
        if (!toast) {
          return undefined
        }

        const timeout = setTimeout(() => setVisible(true), 10)
        return () => clearTimeout(timeout)
      }, [toast])
      ;(0, external_react_.useEffect)(() => {
        timeoutRef.current = setTimeout(() => setVisible(false), 6e3)
        return () => timeoutRef.current && clearTimeout(timeoutRef.current)
      }, [toast])

      if (toast === undefined) {
        return null
      }

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        role: 'status',
        className: toast_module_default().fsToast,
        'data-fs-toast': true,
        'data-fs-toast-visible': visible,
        onTransitionEnd: () => !visible && popToast(),
        children: [
          toast.icon &&
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              'data-fs-toast-icon-container': true,
              children: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                name: toast.icon,
                width: 30,
                height: 30,
              }),
            }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            'data-fs-toast-content': true,
            children: [
              toast.title &&
                /*#__PURE__*/ jsx_runtime_.jsx('p', {
                  'data-fs-toast-title': true,
                  children: toast.title,
                }),
              /*#__PURE__*/ jsx_runtime_.jsx('p', {
                'data-fs-toast-message': true,
                children: toast.message,
              }),
            ],
          }),
        ],
      })
    }

    /* harmony default export */ const Toast_Toast = Toast // CONCATENATED MODULE: ./src/components/ui/Toast/index.ts

    /***/
  },

  /***/ 8477: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-toast': 'toast_fs-toast__gk76J',
      fsToast: 'toast_fs-toast__gk76J',
    }

    /***/
  },
}
