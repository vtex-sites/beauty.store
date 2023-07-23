'use strict'
exports.id = 2457
exports.ids = [2457]
exports.modules = {
  /***/ 5811: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _atoms_List__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(8164)

    const Divider = ({ divider, testId }) => {
      const props = {
        'data-breadcrumb-divider': true,
        'aria-hidden': true,
        'data-testid': `${testId}-divider`,
      }
      if (
        react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(divider)
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(
          divider,
          props
        )
      }
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'span',
        Object.assign({}, props),
        divider ?? '/'
      )
    }
    const ListItem = ({ children, isLastItem, divider, testId }) => {
      const props = {
        'data-testid': `${testId}-item`,
        'data-breadcrumb-item': isLastItem ? 'current' : true,
        'aria-current': isLastItem ? 'page' : undefined,
      }
      if (
        !react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(children)
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'li',
          { 'data-breadcrumb-list-item': true },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'span',
            Object.assign({}, props),
            children,
            isLastItem
              ? null
              : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  Divider,
                  { divider: divider, testId: testId }
                )
          )
        )
      }
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'li',
        { 'data-breadcrumb-list-item': true },
        react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(
          children,
          props
        ),
        isLastItem
          ? null
          : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              Divider,
              { divider: divider, testId: testId }
            )
      )
    }
    const Breadcrumb = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Breadcrumb(
        {
          children,
          divider: rawDivider,
          testId = 'store-breadcrumb',
          ...otherProps
        },
        ref
      ) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'nav',
          Object.assign(
            {
              'aria-label': 'Breadcrumb',
              role: 'navigation',
              ref: ref,
              'data-fs-breadcrumb': true,
              'data-testid': testId,
            },
            otherProps
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _atoms_List__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
            { 'data-breadcrumb-list': true, variant: 'ordered' },
            react__WEBPACK_IMPORTED_MODULE_0___default()
              .Children.toArray(children)
              .map((child, index, childrenArray) => {
                const isLastItem = index === childrenArray.length - 1
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  ListItem,
                  {
                    isLastItem: isLastItem,
                    divider: rawDivider,
                    key: `breadcrumb-${index}`,
                    testId: testId,
                  },
                  child
                )
              })
          )
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Breadcrumb
    //# sourceMappingURL=Breadcrumb.js.map

    /***/
  },

  /***/ 673: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _contexts_DropdownContext__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(7483)

    const Dropdown = ({
      children,
      isOpen: isOpenDefault = false,
      onDismiss,
      id = 'store-dropdown',
    }) => {
      const [isOpen, setIsOpen] = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpenDefault)
      const dropdownItemsRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
        []
      )
      const selectedDropdownItemIndexRef = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0)
      const dropdownButtonRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
        null
      )
      const close = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        setIsOpen(false)
        onDismiss?.()
        dropdownButtonRef.current?.focus()
      }, [onDismiss])
      const open = () => {
        setIsOpen(true)
      }
      const toggle = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        setIsOpen((old) => {
          if (old) {
            onDismiss?.()
            dropdownButtonRef.current?.focus()
          }
          return !old
        })
      }, [onDismiss])
      ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setIsOpen(isOpenDefault)
      }, [isOpenDefault])
      ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        isOpen && dropdownItemsRef?.current[0]?.focus()
      }, [isOpen])
      ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let firstClick = true
        const event = (e) => {
          const someItemWasClicked = dropdownItemsRef?.current.some(
            (item) => e.target === item
          )
          if (firstClick) {
            firstClick = false
            return
          }
          !someItemWasClicked && close()
        }
        if (isOpen) {
          document.addEventListener('click', event)
        } else {
          document.removeEventListener('click', event)
        }
        return () => {
          document.removeEventListener('click', event)
        }
      }, [close, isOpen])
      const value = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
          isOpen,
          close,
          open,
          toggle,
          dropdownButtonRef,
          onDismiss,
          selectedDropdownItemIndexRef,
          dropdownItemsRef,
          id,
        }
      }, [close, id, isOpen, onDismiss, toggle])
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _contexts_DropdownContext__WEBPACK_IMPORTED_MODULE_1__ /* ["default"].Provider */
          .Z.Provider,
        { value: value },
        children
      )
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Dropdown
    //# sourceMappingURL=Dropdown.js.map

    /***/
  },

  /***/ 2844: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _hooks_useDropdown__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(8987)

    const DropdownButton = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Button(
        { children, testId = 'store-dropdown-button', ...otherProps },
        ref
      ) {
        const { toggle, dropdownButtonRef, isOpen, id } = (0,
        _hooks_useDropdown__WEBPACK_IMPORTED_MODULE_1__ /* .useDropdown */.x)()
        ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(
          ref,
          () => dropdownButtonRef.current,
          [dropdownButtonRef]
        )
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'button',
          Object.assign(
            {
              'data-fs-dropdown-button': true,
              onClick: toggle,
              'data-testid': testId,
              ref: dropdownButtonRef,
              'aria-expanded': isOpen,
              'aria-haspopup': 'menu',
              'aria-controls': id,
            },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      DropdownButton
    //# sourceMappingURL=DropdownButton.js.map

    /***/
  },

  /***/ 8513: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _hooks_useDropdown__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(8987)

    const DropdownItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Button(
        { children, onClick, testId = 'store-dropdown-item', ...otherProps },
        ref
      ) {
        const { dropdownItemsRef, selectedDropdownItemIndexRef, close } = (0,
        _hooks_useDropdown__WEBPACK_IMPORTED_MODULE_1__ /* .useDropdown */.x)()
        const [dropdownItemIndex, setDropdownItemIndex] = (0,
        react__WEBPACK_IMPORTED_MODULE_0__.useState)(0)
        const dropdownItemRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)()
        const addToRefs = (el) => {
          if (el && !dropdownItemsRef?.current.includes(el)) {
            dropdownItemsRef?.current.push(el)
            setDropdownItemIndex(
              dropdownItemsRef?.current.findIndex(
                (element) => element === el
              ) ?? 0
            )
          }
          dropdownItemRef.current = el
        }
        const onFocusItem = () => {
          selectedDropdownItemIndexRef.current = dropdownItemIndex
          dropdownItemsRef?.current[
            selectedDropdownItemIndexRef.current
          ]?.focus()
        }
        const handleOnClickItem = (event) => {
          onClick?.(event)
          close?.()
        }
        ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(
          ref,
          () => dropdownItemRef.current,
          []
        )
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'button',
          Object.assign(
            {
              'data-fs-dropdown-item': true,
              'data-testid': testId,
              ref: addToRefs,
              onFocus: onFocusItem,
              onMouseEnter: onFocusItem,
              onClick: handleOnClickItem,
              role: 'menuitem',
              tabIndex: -1,
              'data-index': dropdownItemIndex,
            },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = DropdownItem
    //# sourceMappingURL=DropdownItem.js.map

    /***/
  },

  /***/ 7407: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ Dropdown_DropdownMenu,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    var external_react_default =
      /*#__PURE__*/ __webpack_require__.n(external_react_)
    // EXTERNAL MODULE: external "react-dom"
    var external_react_dom_ = __webpack_require__(6405)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/Dropdown/hooks/useDropdown.js
    var useDropdown = __webpack_require__(8987) // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/Dropdown/hooks/useDropdownPosition.js
    /**
     * Hook used to find the DropdownMenu position in relation to DropdownButton
     * @returns Style with positions.
     */
    const useDropdownPosition = () => {
      const { dropdownButtonRef } = (0, useDropdown /* useDropdown */.x)()
      // Necessary to use this component in SSR
      const isBrowser = typeof window !== 'undefined'
      const buttonRect = dropdownButtonRef?.current?.getBoundingClientRect()
      const topLevel = buttonRect?.top ?? 0
      const topOffset = buttonRect?.height ?? 0
      const leftLevel = buttonRect?.left ?? 0
      // The scroll properties fix the position of DropdownMenu when the scroll is activated.
      const scrollTop = isBrowser ? document?.documentElement?.scrollTop : 0
      const scrollLeft = isBrowser ? document?.documentElement?.scrollLeft : 0
      const topPosition = topLevel + topOffset + scrollTop
      const leftPosition = leftLevel + scrollLeft
      return {
        position: 'absolute',
        top: topPosition,
        left: leftPosition,
      }
    } // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/Dropdown/DropdownMenu.js
    //# sourceMappingURL=useDropdownPosition.js.map
    /*
     * This component is based on @reach/dialog.
     * https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx
     * https://reach.tech/dialog
     */
    const DropdownMenu = ({
      children,
      testId = 'store-dropdown-menu',
      style,
      ...otherProps
    }) => {
      const {
        isOpen,
        close,
        dropdownItemsRef,
        selectedDropdownItemIndexRef,
        id,
      } = (0, useDropdown /* useDropdown */.x)()
      const dropdownPosition = useDropdownPosition()
      const childrenLength =
        external_react_default().Children.toArray(children).length
      const handleDownPress = () => {
        if (selectedDropdownItemIndexRef.current < childrenLength - 1) {
          selectedDropdownItemIndexRef.current++
        } else {
          selectedDropdownItemIndexRef.current = 0
        }
        dropdownItemsRef?.current[selectedDropdownItemIndexRef.current]?.focus()
      }
      const handleUpPress = () => {
        if (selectedDropdownItemIndexRef.current > 0) {
          selectedDropdownItemIndexRef.current--
        } else {
          selectedDropdownItemIndexRef.current = childrenLength - 1
        }
        dropdownItemsRef?.current[selectedDropdownItemIndexRef.current]?.focus()
      }
      const handleHomePress = () => {
        selectedDropdownItemIndexRef.current = 0
        dropdownItemsRef?.current[selectedDropdownItemIndexRef.current]?.focus()
      }
      const handleEndPress = () => {
        selectedDropdownItemIndexRef.current = childrenLength - 1
        dropdownItemsRef?.current[selectedDropdownItemIndexRef.current]?.focus()
      }
      const handleEscapePress = () => {
        close?.()
      }
      const handleBackdropKeyDown = (event) => {
        if (event.defaultPrevented || event.key === 'Enter') {
          return
        }
        event.preventDefault()
        event.key === 'Escape' && handleEscapePress()
        event.key === 'ArrowDown' && handleDownPress()
        event.key === 'ArrowUp' && handleUpPress()
        event.key === 'Home' && handleHomePress()
        event.key === 'End' && handleEndPress()
        event.stopPropagation()
      }
      const clearChildrenReferences = () => {
        dropdownItemsRef.current = []
        return null
      }
      return isOpen
        ? (0, external_react_dom_.createPortal)(
            external_react_default().createElement(
              'div',
              {
                role: 'presentation',
                'data-fs-dropdown-overlay': true,
                onKeyDown: handleBackdropKeyDown,
                'data-testid': `${testId}-overlay`,
              },
              external_react_default().createElement(
                'div',
                Object.assign(
                  {
                    role: 'menu',
                    'aria-orientation': 'vertical',
                    'data-fs-dropdown-menu': true,
                    'data-testid': testId,
                    style: { ...dropdownPosition, ...style },
                    id: id,
                  },
                  otherProps
                ),
                children
              )
            ),
            document.body
          )
        : clearChildrenReferences()
    }
    /* harmony default export */ const Dropdown_DropdownMenu = DropdownMenu
    //# sourceMappingURL=DropdownMenu.js.map

    /***/
  },

  /***/ 7483: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const defaultState = {
      isOpen: false,
      dropdownButtonRef: null,
      selectedDropdownItemIndexRef: null,
      dropdownItemsRef: null,
      id: 'store-dropdown',
    }
    const DropdownContext = (0,
    react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultState)
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      DropdownContext
    //# sourceMappingURL=DropdownContext.js.map

    /***/
  },

  /***/ 8987: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ x: () => /* binding */ useDropdown,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _contexts_DropdownContext__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(7483)

    /**
     * Hook to use the Dropdown context.
     * @returns Dropdown context.
     */
    const useDropdown = () => {
      const context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
        _contexts_DropdownContext__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z
      )
      if (context === undefined) {
        throw new Error(
          'Do not use useDropdown hook outside the Dropdown context.'
        )
      }
      return context
    }
    //# sourceMappingURL=useDropdown.js.map

    /***/
  },
}
