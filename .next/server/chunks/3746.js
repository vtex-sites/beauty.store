'use strict'
exports.id = 3746
exports.ids = [3746]
exports.modules = {
  /***/ 4875: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ ProductGrid_ProductGrid,
    })

    // EXTERNAL MODULE: ./src/components/skeletons/ProductGridSkeleton/index.ts + 1 modules
    var ProductGridSkeleton = __webpack_require__(9913)
    // EXTERNAL MODULE: ./src/components/product/ProductGrid/product-grid.module.scss
    var product_grid_module = __webpack_require__(4920)
    var product_grid_module_default =
      /*#__PURE__*/ __webpack_require__.n(product_grid_module)
    // EXTERNAL MODULE: ./src/components/product/ProductCard/index.ts + 1 modules
    var ProductCard = __webpack_require__(1729)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/product/ProductGrid/ProductGrid.tsx
    function ProductGrid({ products, page, pageSize }) {
      return /*#__PURE__*/ jsx_runtime_.jsx(
        ProductGridSkeleton /* default */.Z,
        {
          loading: products.length === 0,
          children: /*#__PURE__*/ jsx_runtime_.jsx('ul', {
            'data-fs-product-grid': true,
            className: product_grid_module_default().fsProductGrid,
            children: products.map(({ node: product }, idx) =>
              /*#__PURE__*/ jsx_runtime_.jsx(
                'li',
                {
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    ProductCard /* default */.Z,
                    {
                      product: product,
                      index: pageSize * page + idx + 1,
                      bordered: true,
                    }
                  ),
                },
                `${product.id}`
              )
            ),
          }),
        }
      )
    }

    /* harmony default export */ const ProductGrid_ProductGrid = ProductGrid // CONCATENATED MODULE: ./src/components/product/ProductGrid/index.ts

    /***/
  },

  /***/ 3746: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          })
          /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(7794)
          /* harmony import */ var src_components_product_ProductGrid__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(4875)
          /* harmony import */ var src_sdk_search_Sentinel__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(1566)
          /* harmony import */ var _ProductTiles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(8872)
          /* harmony import */ var _usePageProducts__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(763)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(997)
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__
            )
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _ProductTiles__WEBPACK_IMPORTED_MODULE_2__,
              _usePageProducts__WEBPACK_IMPORTED_MODULE_3__,
            ])
          ;[
            _ProductTiles__WEBPACK_IMPORTED_MODULE_2__,
            _usePageProducts__WEBPACK_IMPORTED_MODULE_3__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__

          /* If showSponsoredProducts is true, a ProductTiles will be displayed in between two blocks of ProductGrid on the page 0 */

          function GalleryPage({ page, title, showSponsoredProducts = true }) {
            const products =
              (0,
              _usePageProducts__WEBPACK_IMPORTED_MODULE_3__ /* .useProducts */.r)(
                page
              ) ?? []
            const { itemsPerPage } = (0,
            _faststore_sdk__WEBPACK_IMPORTED_MODULE_5__ /* .useSearch */.R)()
            const productsSponsored = showSponsoredProducts
              ? products.slice(0, 2)
              : undefined
            const middleItemIndex = Math.ceil(itemsPerPage / 2)
            const shouldDisplaySponsoredProducts =
              page === 0 && productsSponsored && productsSponsored.length > 1
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
              {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                    src_sdk_search_Sentinel__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                    {
                      products: products,
                      page: page,
                      pageSize: itemsPerPage,
                      title: title,
                    }
                  ),
                  shouldDisplaySponsoredProducts
                    ? /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                        {
                          children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                              src_components_product_ProductGrid__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                              {
                                products: products.slice(0, middleItemIndex),
                                page: page,
                                pageSize: middleItemIndex,
                              }
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                              'div',
                              {
                                'data-fs-product-listing-sponsored': true,
                                children: [
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                                    'h3',
                                    {
                                      children: 'Sponsored',
                                    }
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                                    _ProductTiles__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                                    {
                                      selectedFacets: [
                                        {
                                          key: 'productClusterIds',
                                          value: '141',
                                        },
                                      ],
                                      title: '',
                                    }
                                  ),
                                ],
                              }
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                              src_components_product_ProductGrid__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                              {
                                products: products.slice(
                                  middleItemIndex,
                                  itemsPerPage
                                ),
                                page: page,
                                pageSize: middleItemIndex,
                              }
                            ),
                          ],
                        }
                      )
                    : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
                        src_components_product_ProductGrid__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                        {
                          products: products,
                          page: page,
                          pageSize: itemsPerPage,
                        }
                      ),
                ],
              }
            )
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            GalleryPage
          __webpack_async_result__()
        } catch (e) {
          __webpack_async_result__(e)
        }
      }
    )

    /***/
  },

  /***/ 1566: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    })
    /* harmony import */ var _faststore_sdk__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(7794)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689)
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(9785)
    /* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__
      )
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1853)
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_2__
      )
    /* harmony import */ var _analytics_hooks_useViewItemListEvent__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(5184)
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(997)
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__
      )

    // Adds/Replaces ?page= to the querystring of the page
    const replacePagination = (page, router) => {
      const url = new URL(window.location.href) // In case the page argument already matches the target page

      if (url.searchParams.get('page') === page) {
        return
      } // Set ?page= parameter and replace route

      url.searchParams.set('page', page)
      router.replace(url, undefined, {
        shallow: true,
        scroll: false,
      })
    }
    /**
     * Use this component to add a boundary between pages so we can
     * change the current page being viewed on infinite pagination.
     *
     * For more info: https://developers.google.com/search/blog/2014/02/infinite-scroll-search-friendly
     *
     * Also, this component's name is kind of curious. Wikipedia calls is Page Break(https://en.wikipedia.org/wiki/Page_break)
     * however all codes I've seen online use Sentinel
     */

    function Sentinel({ page, pageSize, products, title }) {
      const viewedRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false)
      const { ref, inView } = (0,
      react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__.useInView)()
      const { pages } = (0,
      _faststore_sdk__WEBPACK_IMPORTED_MODULE_5__ /* .useSearch */.R)()
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)()
      const { sendViewItemListEvent } = (0,
      _analytics_hooks_useViewItemListEvent__WEBPACK_IMPORTED_MODULE_3__ /* .useViewItemListEvent */.m)(
        {
          products,
          title,
          page,
          pageSize,
        }
      )
      ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Only replace pagination state when infinite scroll
        // state has more than one page being rendered to the screen
        if (inView && pages.length > 1) {
          replacePagination(page.toString(), router)
        }

        if (inView && !viewedRef.current && products.length) {
          sendViewItemListEvent()
          viewedRef.current = true
        }
      }, [
        pages.length,
        inView,
        page,
        router,
        sendViewItemListEvent,
        products.length,
      ])
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
        'div',
        {
          ref: ref,
        }
      )
    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Sentinel

    /***/
  },
}
