'use strict'
;(() => {
  var exports = {}
  exports.id = 4909
  exports.ids = [4909]
  exports.modules = {
    /***/ 3998: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__)
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ handler,
        /* harmony export */
      })
      /**
       * This is equal to the /api/health/ready endpoint for lack of a better
       * implementation differentiating between them.
       */
      function handler(_req, res) {
        res.status(200).send('OK')
      }

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../../../webpack-api-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_exec__(3998)
  module.exports = __webpack_exports__
})()
