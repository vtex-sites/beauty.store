exports.id = 9840
exports.ids = [9840]
exports.modules = {
  /***/ 5731: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ SlideOver_SlideOver,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Modal/Modal.js + 3 modules
    var Modal = __webpack_require__(1411)
    // EXTERNAL MODULE: ./src/components/ui/SlideOver/slide-over.module.scss
    var slide_over_module = __webpack_require__(2436)
    var slide_over_module_default =
      /*#__PURE__*/ __webpack_require__.n(slide_over_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/SlideOver/SlideOver.tsx
    const _excluded = [
      'isOpen',
      'direction',
      'size',
      'fade',
      'children',
      'className',
    ]

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

    function SlideOver(_ref) {
      let {
          isOpen,
          direction = 'leftSide',
          size = 'full',
          fade = 'out',
          children,
          className,
        } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      return /*#__PURE__*/ jsx_runtime_.jsx(
        Modal /* default */.Z,
        _objectSpread(
          _objectSpread(
            {
              className: `${
                slide_over_module_default().fsSlideOver
              } ${className}`,
              isOpen: isOpen,
              'data-fs-slide-over': true,
              'data-fs-slide-over-direction': direction,
              'data-fs-slide-over-size': size,
              'data-fs-slide-over-state': fade,
            },
            otherProps
          ),
          {},
          {
            children: children,
          }
        )
      )
    }

    /* harmony default export */ const SlideOver_SlideOver = SlideOver // CONCATENATED MODULE: ./src/components/ui/SlideOver/index.ts

    /***/
  },

  /***/ 5112: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ b: () => /* binding */ useFadeEffect,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const useFadeEffect = () => {
      const { 0: fade, 1: setFade } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)('out')
      const fadeOut = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        () => setFade('out'),
        []
      )
      const fadeIn = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        () => setFade('in'),
        []
      )
      ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        fadeIn()
        return () => {
          fadeOut()
        }
      }, [fadeIn, fadeOut])
      return {
        fade,
        fadeIn,
        fadeOut,
      }
    }

    /***/
  },

  /***/ 2436: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-slide-over': 'slide-over_fs-slide-over__rhXvd',
      fsSlideOver: 'slide-over_fs-slide-over__rhXvd',
    }

    /***/
  },
}
