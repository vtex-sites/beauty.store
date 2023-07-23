'use strict'
exports.id = 3924
exports.ids = [3924]
exports.modules = {
  /***/ 3264: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ X: () => /* binding */ useSearchState,
      /* harmony export */ j: () => /* binding */ initialize,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(3364)

    const initialize = ({
      sort = 'score_desc',
      selectedFacets = [],
      term = null,
      base = '/',
      page = 0,
    } = {}) => ({
      sort,
      selectedFacets,
      term,
      base: base.endsWith('/') ? base : `${base}/`,
      page,
    })
    const equals = (s1, s2) =>
      (0, _utils_format__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z)(s1)
        .href ===
      (0, _utils_format__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z)(s2)
        .href
    const useSearchState = (initialState, onChange) => {
      const state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
        () => initialize(initialState),
        [initialState]
      )
      return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
        () => ({
          state,
          setState: (newState) =>
            !equals(newState, state) &&
            onChange(
              (0,
              _utils_format__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z)(
                newState
              )
            ),
        }),
        [onChange, state]
      )
    }
    //# sourceMappingURL=useSearchState.js.map

    /***/
  },

  /***/ 3364: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    const format = (params) => {
      const url = new URL(params.base, 'http://localhost')
      const { page, selectedFacets, sort, term } = params
      if (term !== null) {
        url.searchParams.set('q', term)
      }
      const facets = new Set()
      for (const facet of selectedFacets) {
        url.searchParams.append(facet.key, facet.value)
        facets.add(facet.key)
      }
      if (selectedFacets.length > 0) {
        url.searchParams.set('facets', Array.from(facets).join(','))
      }
      url.searchParams.set('sort', sort)
      url.searchParams.set('page', page.toString())
      return url
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = format
    //# sourceMappingURL=format.js.map

    /***/
  },

  /***/ 1411: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ Modal_Modal,
    })

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    var external_react_default =
      /*#__PURE__*/ __webpack_require__.n(external_react_)
    // EXTERNAL MODULE: external "react-dom"
    var external_react_dom_ = __webpack_require__(6405) // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/atoms/Overlay/Overlay.js
    const Overlay = (0, external_react_.forwardRef)(function Overlay(
      { testId = 'store-overlay', ...otherProps },
      ref
    ) {
      return external_react_default().createElement(
        'div',
        Object.assign(
          {
            role: 'presentation',
            'data-fs-overlay': true,
            'data-testid': testId,
            ref: ref,
          },
          otherProps
        )
      )
    })
    /* harmony default export */ const Overlay_Overlay = Overlay
    //# sourceMappingURL=Overlay.js.map
    // EXTERNAL MODULE: external "tabbable"
    var external_tabbable_ = __webpack_require__(3823) // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/Modal/useTrapFocus.js
    /*
     * Element that will maintain the focus inside trapFocusRef, focus the first element,
     * and focus back on the element that was in focus when useTrapFocus was triggered.
     *
     * Inspired by Reakit useTrapFocus https://github.com/reakit/reakit/blob/a211d94da9f3b683182568a56479b91afb1b85ae/packages/reakit/src/Dialog/__utils/useFocusTrap.ts
     */
    const useTrapFocus = ({
      trapFocusRef,
      beforeElementRef,
      afterElementRef,
    }) => {
      const tabbableNodesRef = (0, external_react_.useRef)()
      const nodeToRestoreRef = (0, external_react_.useRef)(
        document.hasFocus() ? document.activeElement : null
      )
      // Focus back on the element that was focused when useTrapFocus is triggered.
      ;(0, external_react_.useEffect)(() => {
        const nodeToRestore = nodeToRestoreRef.current
        return () => {
          nodeToRestore?.focus()
        }
      }, [nodeToRestoreRef])
      // Set focus on first tabbable element
      ;(0, external_react_.useEffect)(() => {
        if (!trapFocusRef.current) {
          return
        }
        if (!tabbableNodesRef.current) {
          tabbableNodesRef.current = (0, external_tabbable_.tabbable)(
            trapFocusRef.current
          )
        }
        const [firstTabbable] = tabbableNodesRef.current
        if (!firstTabbable) {
          trapFocusRef.current.focus()
          return
        }
        firstTabbable.focus()
      }, [trapFocusRef])
      // Handle loop focus. Set keydown and focusin event listeners
      ;(0, external_react_.useEffect)(() => {
        if (
          !trapFocusRef.current ||
          !beforeElementRef.current ||
          !afterElementRef.current
        ) {
          return
        }
        const beforeElement = beforeElementRef.current
        const afterElement = afterElementRef.current
        const trapFocus = trapFocusRef.current
        const handleLoopFocus = (nativeEvent) => {
          if (!document.hasFocus()) {
            return
          }
          tabbableNodesRef.current = (0, external_tabbable_.tabbable)(
            trapFocusRef.current
          )
          if (!tabbableNodesRef.current.length) {
            trapFocus.focus()
          }
          /*
           * Handle loop focus from beforeElementRef. This node can only be focused if the user press shift tab.
           * It will focus the last element of the trapFocusRef.
           */
          if (nativeEvent.target === beforeElement) {
            tabbableNodesRef.current[
              tabbableNodesRef.current.length - 1
            ]?.focus()
          }
          /*
           * Handle loop focus from afterElementRef. This node can only be focused if the user press tab.
           * It will focus the first element of the trapFocusRef.
           */
          if (nativeEvent.target === afterElement) {
            tabbableNodesRef.current[0]?.focus()
          }
        }
        beforeElement?.addEventListener('focusin', handleLoopFocus)
        afterElement?.addEventListener('focusin', handleLoopFocus)
        return () => {
          beforeElement?.removeEventListener('focusin', handleLoopFocus)
          afterElement?.removeEventListener('focusin', handleLoopFocus)
        }
      }, [tabbableNodesRef, afterElementRef, beforeElementRef, trapFocusRef])
    }
    /* harmony default export */ const Modal_useTrapFocus = useTrapFocus // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/Modal/ModalContent.js
    //# sourceMappingURL=useTrapFocus.js.map
    const ModalContentPure = ({
      beforeElementRef,
      trapFocusRef,
      afterElementRef,
      testId = 'store-modal-content',
      children,
      ...otherProps
    }) => {
      return external_react_default().createElement(
        external_react_default().Fragment,
        null,
        external_react_default().createElement('div', {
          ref: beforeElementRef,
          'data-testid': 'beforeElement',
          tabIndex: 0,
          'aria-hidden': 'true',
        }),
        external_react_default().createElement(
          'div',
          Object.assign(
            {
              'data-fs-modal-content': true,
              'data-testid': testId,
              ref: trapFocusRef,
              'aria-modal': 'true',
              role: 'dialog',
              tabIndex: -1,
            },
            otherProps
          ),
          children
        ),
        external_react_default().createElement('div', {
          ref: afterElementRef,
          'data-testid': 'afterElement',
          tabIndex: 0,
          'aria-hidden': 'true',
        })
      )
    }
    const ModalContent = ({ children, ...otherProps }) => {
      const trapFocusRef = (0, external_react_.useRef)(null)
      const beforeElementRef = (0, external_react_.useRef)(null)
      const afterElementRef = (0, external_react_.useRef)(null)
      Modal_useTrapFocus({
        beforeElementRef,
        trapFocusRef,
        afterElementRef,
      })
      return external_react_default().createElement(
        ModalContentPure,
        Object.assign({}, otherProps, {
          trapFocusRef: trapFocusRef,
          beforeElementRef: beforeElementRef,
          afterElementRef: afterElementRef,
          onClick: (event) => {
            event.stopPropagation()
          },
        }),
        children
      )
    }
    /* harmony default export */ const Modal_ModalContent = ModalContent // CONCATENATED MODULE: ./node_modules/@faststore/ui/dist/molecules/Modal/Modal.js
    //# sourceMappingURL=ModalContent.js.map
    /*
     * This component is based on @reach/dialog.
     * https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx
     * https://reach.tech/dialog
     */
    const Modal = ({
      isOpen,
      children,
      onDismiss,
      testId = 'store-modal',
      ...otherProps
    }) => {
      const handleBackdropClick = (event) => {
        if (event.defaultPrevented) {
          return
        }
        event.stopPropagation()
        onDismiss?.(event)
      }
      const handleBackdropKeyDown = (event) => {
        if (event.key !== 'Escape' || event.defaultPrevented) {
          return
        }
        event.stopPropagation()
        onDismiss?.(event)
      }
      return isOpen
        ? (0, external_react_dom_.createPortal)(
            external_react_default().createElement(
              Overlay_Overlay,
              {
                'data-modal-overlay': true,
                onClick: handleBackdropClick,
                onKeyDown: handleBackdropKeyDown,
              },
              external_react_default().createElement(
                Modal_ModalContent,
                Object.assign({}, otherProps, { testId: testId }),
                children
              )
            ),
            document.body
          )
        : null
    }
    /* harmony default export */ const Modal_Modal = Modal
    //# sourceMappingURL=Modal.js.map

    /***/
  },
}
