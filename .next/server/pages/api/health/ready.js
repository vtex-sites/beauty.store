'use strict'
;(() => {
  var exports = {}
  exports.id = 1662
  exports.ids = [1662]
  exports.modules = {
    /***/ 7297: /***/ (
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
       * This is equal to the /api/health/live endpoint for lack of a better
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
  var __webpack_exports__ = __webpack_exec__(7297)
  module.exports = __webpack_exports__
})()
