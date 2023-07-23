'use strict'
exports.id = 5098
exports.ids = [5098, 9143]
exports.modules = {
  /***/ 3664: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    __webpack_require__.r(__webpack_exports__)
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => /* binding */ sendEvent,
      /* harmony export */
    })
    /* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(9143)

    function sendEvent(event) {
      // VTEX RC
      window?.sendrc?.(event.name, event.params) // VTEX Intelligent Search

      ;(0, _search__WEBPACK_IMPORTED_MODULE_0__['default'])(event)
    }

    /***/
  },

  /***/ 9143: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    __webpack_require__.r(__webpack_exports__)
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6182)
    /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        _store_config__WEBPACK_IMPORTED_MODULE_0__
      )
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

    /**
     * More info at: https://www.notion.so/vtexhandbook/Event-API-Documentation-48eee26730cf4d7f80f8fd7262231f84
     */

    const THIRTY_MINUTES_S = 30 * 60
    const ONE_YEAR_S = 365 * 24 * 3600

    const randomUUID = () =>
      typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : (Math.random() * 1e6).toFixed(0)

    const createStorage = (key, expiresSecond) => {
      const timelapsed = (past) => (Date.now() - past) / 1e3

      return () => {
        const item = JSON.parse(localStorage.getItem(key) ?? 'null')
        const isExpired = !item || timelapsed(item.createdAt) > expiresSecond
        const payload = isExpired ? randomUUID() : item.payload

        if (isExpired) {
          const data = {
            payload,
            createdAt: Date.now(),
          }
          localStorage.setItem(key, JSON.stringify(data))
        }

        return payload
      }
    }

    const user = {
      anonymous: createStorage('vtex.search.anonymous', ONE_YEAR_S),
      session: createStorage('vtex.search.session', THIRTY_MINUTES_S),
    }

    const sendEvent = (options) =>
      fetch(
        `https://sp.vtex.com/event-api/v1/${
          _store_config__WEBPACK_IMPORTED_MODULE_0___default().api.storeId
        }/event`,
        {
          method: 'POST',
          body: JSON.stringify(
            _objectSpread(
              _objectSpread({}, options),
              {},
              {
                userAgent: navigator.userAgent,
                anonymous: user.anonymous(),
                session: user.session(),
              }
            )
          ),
          headers: {
            'content-type': 'application/json',
          },
        }
      )

    const isFullTextSearch = (url) =>
      typeof url.searchParams.get('q') === 'string' &&
      /^\/s(\/)?$/g.test(url.pathname)

    const handleEvent = (event) => {
      switch (event.name) {
        case 'search_select_item': {
          const url = new URL(event.params.url)

          if (!isFullTextSearch(url)) {
            return
          }

          for (const item of event.params.items ?? []) {
            const productId = item.item_id ?? item.item_variant
            const position = item.index

            if (productId && position) {
              sendEvent({
                type: 'search.click',
                productId,
                position,
                url: url.href,
                text: url.searchParams.get('q') ?? '<empty>',
              })
            }
          }

          break
        }

        case 'intelligent_search_query': {
          sendEvent({
            type: 'search.query',
            url: event.params.url,
            text: event.params.term,
            misspelled: event.params.isTermMisspelled,
            match: event.params.totalCount,
            operator: event.params.logicalOperator,
            locale: event.params.locale,
          })
          break
        }

        default:
      }
    }

    setInterval(
      () =>
        sendEvent({
          type: 'session.ping',
        }),
      60 * 1e3
      /* One minute */
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = handleEvent

    /***/
  },
}
