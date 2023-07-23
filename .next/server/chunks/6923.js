exports.id = 6923
exports.ids = [6923]
exports.modules = {
  /***/ 6923: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ ui_Breadcrumb_Breadcrumb,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Breadcrumb/Breadcrumb.js
    var Breadcrumb = __webpack_require__(5811)
    // EXTERNAL MODULE: external "next/router"
    var router_ = __webpack_require__(1853)
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Dropdown/Dropdown.js
    var Dropdown = __webpack_require__(673)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/Dropdown/Dropdown.tsx
    const _excluded = ['children']

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

    const Dropdown_Dropdown = (_ref) => {
      let { children } = _ref,
        otherProps = _objectWithoutProperties(_ref, _excluded)

      return /*#__PURE__*/ jsx_runtime_.jsx(
        Dropdown /* default */.Z,
        _objectSpread(
          _objectSpread(
            {
              'data-fs-dropdown': true,
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

    /* harmony default export */ const ui_Dropdown_Dropdown = Dropdown_Dropdown
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Dropdown/DropdownButton.js
    var DropdownButton = __webpack_require__(2844) // CONCATENATED MODULE: ./src/components/ui/Dropdown/DropdownButton.tsx
    const DropdownButton_excluded = ['children', 'testId']

    function DropdownButton_ownKeys(object, enumerableOnly) {
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

    function DropdownButton_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? DropdownButton_ownKeys(Object(source), !0).forEach(function (key) {
              DropdownButton_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : DropdownButton_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function DropdownButton_defineProperty(obj, key, value) {
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

    function DropdownButton_objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = DropdownButton_objectWithoutPropertiesLoose(source, excluded)
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

    function DropdownButton_objectWithoutPropertiesLoose(source, excluded) {
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

    function DropdownButton_DropdownButton(_ref) {
      let { children, testId = 'store-dropdown-button' } = _ref,
        otherProps = DropdownButton_objectWithoutProperties(
          _ref,
          DropdownButton_excluded
        )

      return /*#__PURE__*/ jsx_runtime_.jsx(
        DropdownButton /* default */.Z,
        DropdownButton_objectSpread(
          DropdownButton_objectSpread(
            {
              'data-fs-dropdown-button': true,
              'data-testid': testId,
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

    /* harmony default export */ const Dropdown_DropdownButton =
      DropdownButton_DropdownButton
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Dropdown/DropdownMenu.js + 1 modules
    var DropdownMenu = __webpack_require__(7407)
    // EXTERNAL MODULE: ./src/components/ui/Dropdown/dropdown.module.scss
    var dropdown_module = __webpack_require__(6796)
    var dropdown_module_default =
      /*#__PURE__*/ __webpack_require__.n(dropdown_module) // CONCATENATED MODULE: ./src/components/ui/Dropdown/DropdownMenu.tsx
    const DropdownMenu_excluded = ['children', 'size', 'testId']

    function DropdownMenu_ownKeys(object, enumerableOnly) {
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

    function DropdownMenu_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? DropdownMenu_ownKeys(Object(source), !0).forEach(function (key) {
              DropdownMenu_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : DropdownMenu_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function DropdownMenu_defineProperty(obj, key, value) {
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

    function DropdownMenu_objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = DropdownMenu_objectWithoutPropertiesLoose(source, excluded)
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

    function DropdownMenu_objectWithoutPropertiesLoose(source, excluded) {
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

    function DropdownMenu_DropdownMenu(_ref) {
      let { children, size = 'regular', testId = 'store-dropdown-menu' } = _ref,
        otherProps = DropdownMenu_objectWithoutProperties(
          _ref,
          DropdownMenu_excluded
        )

      return /*#__PURE__*/ jsx_runtime_.jsx(
        DropdownMenu /* default */.Z,
        DropdownMenu_objectSpread(
          DropdownMenu_objectSpread(
            {
              'data-fs-dropdown-menu': true,
              'data-fs-dropdown-menu-size': size,
              className: dropdown_module_default().fsDropdownMenu,
              'data-testid': testId,
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

    /* harmony default export */ const Dropdown_DropdownMenu =
      DropdownMenu_DropdownMenu
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Dropdown/DropdownItem.js
    var DropdownItem = __webpack_require__(8513)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/Icon/Icon.js
    var Icon = __webpack_require__(1007) // CONCATENATED MODULE: ./src/components/ui/Dropdown/DropdownItem.tsx
    const DropdownItem_excluded = ['children', 'icon', 'testId']

    function DropdownItem_ownKeys(object, enumerableOnly) {
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

    function DropdownItem_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? DropdownItem_ownKeys(Object(source), !0).forEach(function (key) {
              DropdownItem_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : DropdownItem_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function DropdownItem_defineProperty(obj, key, value) {
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

    function DropdownItem_objectWithoutProperties(source, excluded) {
      if (source == null) return {}
      var target = DropdownItem_objectWithoutPropertiesLoose(source, excluded)
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

    function DropdownItem_objectWithoutPropertiesLoose(source, excluded) {
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

    function DropdownItem_DropdownItem(_ref) {
      let { children, icon, testId = 'store-dropdown-item' } = _ref,
        otherProps = DropdownItem_objectWithoutProperties(
          _ref,
          DropdownItem_excluded
        )

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
        DropdownItem /* default */.Z,
        DropdownItem_objectSpread(
          DropdownItem_objectSpread(
            {
              'data-fs-dropdown-item': true,
              'data-testid': testId,
            },
            otherProps
          ),
          {},
          {
            children: [
              icon &&
                /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                  component: icon,
                  'data-fs-dropdown-item-icon': true,
                }),
              children,
            ],
          }
        )
      )
    }

    /* harmony default export */ const Dropdown_DropdownItem =
      DropdownItem_DropdownItem // CONCATENATED MODULE: ./src/components/ui/Dropdown/index.ts
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var ui_Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/Link/index.ts + 1 modules
    var Link = __webpack_require__(1093)
    // EXTERNAL MODULE: ./src/components/ui/Breadcrumb/breadcrumb.module.scss
    var breadcrumb_module = __webpack_require__(6450)
    var breadcrumb_module_default =
      /*#__PURE__*/ __webpack_require__.n(breadcrumb_module) // CONCATENATED MODULE: ./src/components/ui/Breadcrumb/Breadcrumb.tsx
    function BaseBreadcrumb({ breadcrumbList, isDesktop = false }) {
      const router = (0, router_.useRouter)()
      const firstItem = isDesktop ? breadcrumbList[0] : null
      const mediumItems = isDesktop
        ? breadcrumbList.slice(1, -2)
        : breadcrumbList.slice(0, -2)
      const lastItems = breadcrumbList.slice(-2)
      const collapseBreadcrumb = breadcrumbList.length > 4
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Breadcrumb /* default */.Z, {
        divider: '',
        className: `${breadcrumb_module_default().fsBreadcrumb} ${
          isDesktop ? 'hidden-mobile' : 'display-mobile'
        }`,
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(Link /* default */.Z, {
            'data-fs-breadcrumb-link': true,
            'data-fs-breadcrumb-link-home': true,
            'aria-label': 'Go to homepage',
            href: '/',
            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_Icon /* default */.Z, {
              name: 'House',
              width: 18,
              height: 18,
              weight: 'bold',
            }),
          }),
          !collapseBreadcrumb &&
            breadcrumbList.map(({ item, name }, index) => {
              return breadcrumbList.length === index + 1
                ? /*#__PURE__*/ jsx_runtime_.jsx(
                    'span',
                    {
                      children: name,
                    },
                    String(index)
                  )
                : /*#__PURE__*/ jsx_runtime_.jsx(
                    Link /* default */.Z,
                    {
                      'data-fs-breadcrumb-link': true,
                      href: item,
                      children: name,
                    },
                    String(index)
                  )
            }),
          collapseBreadcrumb &&
            firstItem &&
            /*#__PURE__*/ jsx_runtime_.jsx(Link /* default */.Z, {
              'data-fs-breadcrumb-link': true,
              href: firstItem.item,
              children: firstItem.name,
            }),
          collapseBreadcrumb &&
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(ui_Dropdown_Dropdown, {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Dropdown_DropdownButton, {
                  'data-fs-breadcrumb-dropdown-button': true,
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    ui_Icon /* default */.Z,
                    {
                      name: 'DotsThree',
                      width: 24,
                      height: 24,
                    }
                  ),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Dropdown_DropdownMenu, {
                  'data-fs-breadcrumb-dropdown-menu': true,
                  children: mediumItems.map(({ item, name }, index) =>
                    /*#__PURE__*/ jsx_runtime_.jsx(
                      Dropdown_DropdownItem,
                      {
                        'data-fs-breadcrumb-dropdown-item': true,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(
                          ui_Icon /* default */.Z,
                          {
                            name: 'ArrowElbowDownRight',
                            width: 24,
                            height: 24,
                          }
                        ),
                        onClick: () => router.push(item),
                        children: name,
                      },
                      String(index)
                    )
                  ),
                }),
              ],
            }),
          collapseBreadcrumb &&
            lastItems.map(({ item, name }, index) => {
              return lastItems.length === index + 1
                ? /*#__PURE__*/ jsx_runtime_.jsx(
                    'span',
                    {
                      children: name,
                    },
                    String(index)
                  )
                : /*#__PURE__*/ jsx_runtime_.jsx(
                    Link /* default */.Z,
                    {
                      'data-fs-breadcrumb-link': true,
                      href: item,
                      children: name,
                    },
                    String(index)
                  )
            }),
        ],
      })
    }

    const Breadcrumb_Breadcrumb = ({ breadcrumbList }) =>
      /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(BaseBreadcrumb, {
            breadcrumbList: breadcrumbList,
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(BaseBreadcrumb, {
            breadcrumbList: breadcrumbList,
            isDesktop: true,
          }),
        ],
      })

    /* harmony default export */ const ui_Breadcrumb_Breadcrumb =
      /*#__PURE__*/ (0, external_react_.memo)(Breadcrumb_Breadcrumb) // CONCATENATED MODULE: ./src/components/ui/Breadcrumb/index.ts

    /***/
  },

  /***/ 6450: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-breadcrumb': 'breadcrumb_fs-breadcrumb__X8KYA',
      fsBreadcrumb: 'breadcrumb_fs-breadcrumb__X8KYA',
    }

    /***/
  },

  /***/ 6796: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-dropdown-menu': 'dropdown_fs-dropdown-menu__WJsj1',
      fsDropdownMenu: 'dropdown_fs-dropdown-menu__WJsj1',
    }

    /***/
  },
}
