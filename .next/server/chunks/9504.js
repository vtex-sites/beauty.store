exports.id = 9504
exports.ids = [9504]
exports.modules = {
  /***/ 514: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ Image_Image,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: external "next/head"
    var head_ = __webpack_require__(968)
    var head_default = /*#__PURE__*/ __webpack_require__.n(head_) // CONCATENATED MODULE: ./src/components/ui/Image/thumborUrlBuilder.ts
    const THUMBOR_SERVER = 'https://assets.vtex.app'

    const cropSection = ({ left, top, right, bottom }) =>
      `${left}x${top}:${right}x${bottom}`

    function filtersURIComponent(filters) {
      const elements = ['filters']
      Object.keys(filters).forEach((name) => {
        const parameters = filters[name]
        let stringParameters // If we have several parameters, they were passed as an array
        // and now they need to be comma separated, otherwise there is just one to convert to a string

        if (Array.isArray(parameters)) {
          stringParameters = parameters.join(',')
        } // If true, we don't even need to do anything, we just have an empty string and insert ()
        // Ex: {grayscale: true} => grayscale()
        else if (parameters === true) {
          stringParameters = ''
        } else {
          stringParameters = String(parameters)
        }

        elements.push(`${name}(${stringParameters})`)
      })
      return elements.join(':')
    }

    const urlBuilder = (baseUrl, options) => {
      const preSizeComponents = [THUMBOR_SERVER, 'unsafe']
      const postSizeComponents = [] // Add the trim parameter after unsafe if appliable

      options.trim && preSizeComponents.push('trim') // Add the crop parameter if any

      options.manualCrop &&
        preSizeComponents.push(cropSection(options.manualCrop)) // Add the fit-in parameter after crop if appliable

      options.fitIn && preSizeComponents.push('fit-in') // Adds the horizontal alignement after the size

      postSizeComponents.push(options.horizontalAlign ?? 'center') // Adds the vertical alignement after the size

      postSizeComponents.push(options.verticalAlign ?? 'middle') // Adds the smart parameter if appliable

      options.smart && postSizeComponents.push('smart') // Compile the filters and add them right before the URI

      const { filters } = options
      filters && postSizeComponents.push(filtersURIComponent(filters)) // Finally, adds the real image uri

      postSizeComponents.push(encodeURIComponent(baseUrl))
      return (width, height) => {
        // Adds the final size parameter
        let finalSize = ''

        if (options.flipHorizontal) {
          finalSize += '-'
        }

        finalSize += `${width}x`

        if (options.flipVertical) {
          finalSize += '-'
        }

        finalSize += `${height}`
        return [...preSizeComponents, finalSize, ...postSizeComponents].join(
          '/'
        )
      }
    } // CONCATENATED MODULE: ./src/components/ui/Image/useImage.ts
    const _excluded = ['src', 'width', 'height', 'options']

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

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = _objectWithoutPropertiesLoose(source, excluded)
      var key, i
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i]
          if (excluded.indexOf(key) >= 0) continue
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
          target[key] = source[key]
        }
      }
      return target
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {}
      var target = {}
      var sourceKeys = Object.keys(source)
      var key, i
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key]
      }
      return target
    }

    const FACTORS = [1, 2, 3]
    const LARGE_FACTOR = FACTORS[FACTORS.length - 1]
    const useImage = (_ref) => {
      let { src: baseUrl, width, height, options = {} } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded)

      const { srcSet, src } = (0, external_react_.useMemo)(() => {
        const builder = urlBuilder(baseUrl, options)
        const srcs = FACTORS.map((factor) => {
          const rescaledWidth = width * factor
          return `${builder(rescaledWidth, height * factor)} ${rescaledWidth}w`
        })
        return {
          src: builder(width * LARGE_FACTOR, height * LARGE_FACTOR),
          srcSet: srcs.join(', '),
        }
      }, [height, options, baseUrl, width])
      return _objectSpread(
        {
          src,
          srcSet,
          width: `${width}px`,
          height: `${height}px`,
        },
        rest
      )
    }
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Image/Image.tsx
    const Image_excluded = ['preload', 'fetchPriority']

    function Image_ownKeys(object, enumerableOnly) {
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

    function Image_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? Image_ownKeys(Object(source), !0).forEach(function (key) {
              Image_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : Image_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function Image_defineProperty(obj, key, value) {
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

    function Image_objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = Image_objectWithoutPropertiesLoose(source, excluded)
      var key, i
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i]
          if (excluded.indexOf(key) >= 0) continue
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
          target[key] = source[key]
        }
      }
      return target
    }

    function Image_objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {}
      var target = {}
      var sourceKeys = Object.keys(source)
      var key, i
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key]
      }
      return target
    }

    // TODO: Replace this component by next/image
    const Image = /*#__PURE__*/ (0, external_react_.forwardRef)((_ref, ref) => {
      let { preload = false, fetchPriority } = _ref,
        otherProps = Image_objectWithoutProperties(_ref, Image_excluded)

      const imgProps = useImage(otherProps)
      const { src, sizes = '100vw', srcSet } = imgProps
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          preload &&
            /*#__PURE__*/ jsx_runtime_.jsx(head_default(), {
              children: /*#__PURE__*/ jsx_runtime_.jsx('link', {
                as: 'image',
                rel: 'preload',
                href: src,
                imageSrcSet: srcSet,
                imageSizes: sizes,
                fetchpriority: fetchPriority,
              }),
            }),
          /*#__PURE__*/ jsx_runtime_.jsx(
            'img',
            Image_objectSpread(
              Image_objectSpread(
                {
                  ref: ref,
                  'data-fs-image': true,
                },
                imgProps
              ),
              {},
              {
                alt: imgProps.alt,
                fetchpriority: fetchPriority,
              }
            )
          ),
        ],
      })
    })
    Image.displayName = 'Image'
    /* harmony default export */ const Image_Image = /*#__PURE__*/ (0,
    external_react_.memo)(Image)

    /***/
  },

  /***/ 6193: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ E: () =>
        /* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_0__.Z,
      /* harmony export */
    })
    /* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(514)

    /***/
  },

  /***/ 7902: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ ui_Price_Price,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Price/Price.js
    var Price = __webpack_require__(5880)
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./src/components/ui/SROnly/index.ts + 1 modules
    var SROnly = __webpack_require__(2252)
    // EXTERNAL MODULE: ./src/components/ui/Price/price.module.scss
    var price_module = __webpack_require__(9204)
    var price_module_default = /*#__PURE__*/ __webpack_require__.n(price_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Price/Price.tsx
    const _excluded = ['classes', 'SRText']

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

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = _objectWithoutPropertiesLoose(source, excluded)
      var key, i
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i]
          if (excluded.indexOf(key) >= 0) continue
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
          target[key] = source[key]
        }
      }
      return target
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {}
      var target = {}
      var sourceKeys = Object.keys(source)
      var key, i
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key]
      }
      return target
    }

    function Price_Price(_ref) {
      let { classes = '', SRText } = _ref,
        props = _objectWithoutProperties(_ref, _excluded)

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(SROnly /* default */.Z, {
            text: SRText,
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(
            Price /* default */.Z,
            _objectSpread(
              {
                'data-fs-price': true,
                className: `${price_module_default().fsPrice} ${classes}`,
              },
              props
            )
          ),
        ],
      })
    }

    /* harmony default export */ const ui_Price_Price = /*#__PURE__*/ (0,
    external_react_.memo)(Price_Price) // CONCATENATED MODULE: ./src/components/ui/Price/index.ts

    /***/
  },

  /***/ 9204: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-price': 'price_fs-price__7Y_0s',
      fsPrice: 'price_fs-price__7Y_0s',
    }

    /***/
  },
}
