'use strict'
exports.id = 4221
exports.ids = [4221]
exports.modules = {
  /***/ 5914: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ A: () => /* binding */ useAccordion,
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const AccordionContext = (0,
    react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined)
    const Accordion = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function Accordion(
        {
          testId = 'store-accordion',
          indices,
          onChange,
          children,
          ...otherProps
        },
        ref
      ) {
        const childrenWithIndex =
          react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(
            children,
            (child, index) =>
              (0, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
                index: child.props.index ?? index,
              })
          )
        const context = {
          indices: new Set(indices),
          onChange,
          numberOfItems: childrenWithIndex.length,
        }
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          AccordionContext.Provider,
          { value: context },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            Object.assign(
              {
                ref: ref,
                'data-fs-accordion': true,
                'data-testid': testId,
                role: 'region',
              },
              otherProps
            ),
            childrenWithIndex
          )
        )
      }
    )
    function useAccordion() {
      const context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
        AccordionContext
      )
      if (context === undefined) {
        throw new Error(
          'Do not use Accordion components outside the Accordion context.'
        )
      }
      return context
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Accordion
    //# sourceMappingURL=Accordion.js.map

    /***/
  },

  /***/ 7681: /***/ (
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
    /* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(5815)
    /* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(5914)
    /* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(8658)

    const AccordionButton = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function AccordionButton(
        { testId = 'store-accordion-button', children, ...otherProps },
        ref
      ) {
        const { indices, onChange, numberOfItems } = (0,
        _Accordion__WEBPACK_IMPORTED_MODULE_1__ /* .useAccordion */.A)()
        const { index, panel, button, prefixId } = (0,
        _AccordionItem__WEBPACK_IMPORTED_MODULE_2__ /* .useAccordionItem */.Zl)()
        const onKeyDown = (event) => {
          if (!['ArrowDown', 'ArrowUp'].includes(event.key)) {
            return
          }
          const getNext = () => {
            const next =
              Number(index) + 1 === numberOfItems ? 0 : Number(index) + 1
            return document.getElementById(
              `${prefixId && `${prefixId}-`}button--${next}`
            )
          }
          const getPrevious = () => {
            const previous =
              Number(index) - 1 < 0 ? numberOfItems - 1 : Number(index) - 1
            return document.getElementById(
              `${prefixId && `${prefixId}-`}button--${previous}`
            )
          }
          switch (event.key) {
            case 'ArrowDown':
              event.preventDefault()
              getNext()?.focus()
              break
            case 'ArrowUp':
              event.preventDefault()
              getPrevious()?.focus()
              break
            default:
          }
        }
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
          Object.assign(
            {
              ref: ref,
              id: button,
              'aria-expanded': indices.has(index),
              'aria-controls': panel,
              'data-accordion-button': true,
              'data-testid': testId,
              onKeyDown: onKeyDown,
              onClick: () => {
                onChange(index)
              },
            },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      AccordionButton
    //# sourceMappingURL=AccordionButton.js.map

    /***/
  },

  /***/ 8658: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ ZP: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */ Zl: () => /* binding */ useAccordionItem,
      /* harmony export */
    })
    /* unused harmony export StorybookAccordionItem */
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)

    const AccordionItemContext = (0,
    react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined)
    const AccordionItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function AccordionItem(
        {
          testId = 'store-accordion-item',
          children,
          prefixId = '',
          index = 0,
          as: MaybeComponent,
          ...otherProps
        },
        ref
      ) {
        const Component = MaybeComponent ?? 'div'
        const context = {
          index,
          prefixId,
          panel: `${prefixId && `${prefixId}-`}panel--${index}`,
          button: `${prefixId && `${prefixId}-`}button--${index}`,
        }
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          AccordionItemContext.Provider,
          { value: context },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            Component,
            Object.assign(
              { ref: ref, 'data-accordion-item': true, 'data-testid': testId },
              otherProps
            ),
            children
          )
        )
      }
    )
    function useAccordionItem() {
      const context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
        AccordionItemContext
      )
      if (context === undefined) {
        throw new Error(
          'Do not use AccordionItem components outside the AccordionItem context.'
        )
      }
      return context
    }
    /**
     * This is only being exported to make it easier to use in Storybook.
     * **DON'T** import this directly to use this component, use the default export
     * instead.
     */
    const StorybookAccordionItem =
      /* unused pure expression or super */ null && AccordionItem
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      AccordionItem
    //# sourceMappingURL=AccordionItem.js.map

    /***/
  },

  /***/ 2929: /***/ (
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
    /* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(5914)
    /* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(8658)

    const AccordionPanel = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
      function AccordionPanel(
        { testId = 'store-accordion-panel', children, ...otherProps },
        ref
      ) {
        const { indices } = (0,
        _Accordion__WEBPACK_IMPORTED_MODULE_1__ /* .useAccordion */.A)()
        const { index, button, panel } = (0,
        _AccordionItem__WEBPACK_IMPORTED_MODULE_2__ /* .useAccordionItem */.Zl)()
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          Object.assign(
            {
              ref: ref,
              id: panel,
              'aria-labelledby': button,
              role: 'region',
              'data-accordion-panel': true,
              'data-testid': testId,
              hidden: !indices.has(index),
            },
            otherProps
          ),
          children
        )
      }
    )
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      AccordionPanel
    //# sourceMappingURL=AccordionPanel.js.map

    /***/
  },
}
