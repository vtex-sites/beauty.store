'use strict'
exports.id = 7732
exports.ids = [7732]
exports.modules = {
  /***/ 7732: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ WN: () => /* binding */ DEFAULT_OPTIONS,
            /* harmony export */ aM: () => /* binding */ useQuery,
            /* harmony export */ km: () => /* binding */ getKey,
            /* harmony export */
          })
          /* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5941)
          /* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(180)
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              swr__WEBPACK_IMPORTED_MODULE_0__,
            ])
          swr__WEBPACK_IMPORTED_MODULE_0__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0]
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

          const getKey = (operationName, variables) =>
            `${operationName}::${JSON.stringify(variables)}`
          const DEFAULT_OPTIONS = {
            errorRetryCount: 3,
            refreshWhenHidden: false,
            refreshWhenOffline: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            shouldRetryOnError: true,
          }
          const useQuery = (operationName, variables, options) =>
            (0, swr__WEBPACK_IMPORTED_MODULE_0__['default'])(
              getKey(operationName, variables),
              _objectSpread(
                _objectSpread(
                  {
                    fetcher: () => {
                      return new Promise((resolve) => {
                        setTimeout(async () => {
                          resolve(
                            await (0,
                            _request__WEBPACK_IMPORTED_MODULE_1__ /* .request */.W)(
                              operationName,
                              variables,
                              options
                            )
                          )
                        })
                      })
                    },
                  },
                  DEFAULT_OPTIONS
                ),
                options
              )
            )
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },
}
