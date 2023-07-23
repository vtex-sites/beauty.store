'use strict'
;(() => {
  var exports = {}
  exports.id = 4157
  exports.ids = [4157]
  exports.modules = {
    /***/ 4774: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__)

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ preview,
      }) // CONCATENATED MODULE: external "@vtex/client-cms"

      const client_cms_namespaceObject = require('@vtex/client-cms')
      var client_cms_default = /*#__PURE__*/ __webpack_require__.n(
        client_cms_namespaceObject
      )
      // EXTERNAL MODULE: ./store.config.js
      var store_config = __webpack_require__(9742)
      var store_config_default =
        /*#__PURE__*/ __webpack_require__.n(store_config) // CONCATENATED MODULE: ./src/server/cms.ts
      const clientCMS = new (client_cms_default())({
        workspace: store_config_default().api.workspace,
        tenant: store_config_default().api.storeId,
      })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const isLocator = (x) =>
        typeof x.contentType === 'string' &&
        (typeof x.releaseId === 'string' || typeof x.documentId === 'string')

      const getPage = async (options) => {
        const result = await (isLocator(options)
          ? clientCMS.getCMSPage(options).then((page) => ({
              data: [page],
            }))
          : clientCMS.getCMSPagesByContentType(
              options.contentType,
              options.filters
            ))
        const pages = result.data

        if (!pages[0]) {
          throw new Error(
            `Missing content on the CMS for content type ${
              options.contentType
            }. Add content before proceeding. Context: ${JSON.stringify(
              options,
              null,
              2
            )}`
          )
        }

        if (pages.length !== 1) {
          throw new Error(
            `Multiple content defined on the CMS for content type ${
              options.contentType
            }. Remove duplicated content before proceeding. Context: ${JSON.stringify(
              options,
              null,
              2
            )}`
          )
        }

        return pages[0]
      } // CONCATENATED MODULE: ./src/pages/api/preview.ts
      class StatusError extends Error {
        constructor(message, status) {
          super(message)
          this.status = status
        }
      }

      const pickParam = (req, parameter) => {
        const maybeParam = req.query[parameter]

        if (typeof maybeParam !== 'string') {
          throw new StatusError(
            `Parameter ${parameter} missing from querystring`,
            400
          )
        }

        return maybeParam
      } // TODO: Improve security by disabling CMS preview in production

      const handler = async (req, res) => {
        try {
          const locator = {
            contentType: pickParam(req, 'contentType'),
            documentId: pickParam(req, 'documentId'),
            versionId: pickParam(req, 'versionId'),
          } // Fetch CMS to check if the provided `locator` exists

          const page = await clientCMS.getCMSPage(locator) // If the content doesn't exist prevent preview mode from being enabled

          if (!page) {
            throw new StatusError(
              `Content NotFound for ${JSON.stringify(locator, null, 2)}`,
              404
            )
          } // Enable Preview Mode by setting the cookies

          res.setPreviewData(locator, {
            maxAge: 3600,
          }) // Redirect to the path from the fetched locator
          // TODO: apply redirect based on the content

          res.redirect('/')
        } catch (error) {
          if (error instanceof StatusError) {
            res.status(error.status).end(error.message)
            return
          }

          throw error
        }
      }

      /* harmony default export */ const preview = handler

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../../webpack-api-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(0, [9742], () =>
    __webpack_exec__(4774)
  )
  module.exports = __webpack_exports__
})()
