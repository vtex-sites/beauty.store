exports.id = 648
exports.ids = [648]
exports.modules = {
  /***/ 648: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__)

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      default: () => /* reexport */ CartSidebar_CartSidebar,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/sdk/dist/analytics/sendAnalyticsEvent.js
    var sendAnalyticsEvent = __webpack_require__(8460)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/atoms/List/List.js
    var List = __webpack_require__(8164)
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689)
    // EXTERNAL MODULE: ./src/components/ui/Alert/index.ts + 1 modules
    var Alert = __webpack_require__(4503)
    // EXTERNAL MODULE: ./src/components/ui/Badge/index.ts + 3 modules
    var Badge = __webpack_require__(4851)
    // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
    var Button = __webpack_require__(1310)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/SlideOver/index.ts + 1 modules
    var SlideOver = __webpack_require__(5731)
    // EXTERNAL MODULE: ./src/sdk/cart/index.ts
    var sdk_cart = __webpack_require__(7566)
    // EXTERNAL MODULE: ./store.config.js
    var store_config = __webpack_require__(6182) // CONCATENATED MODULE: ./src/sdk/cart/useCheckoutButton.ts
    const { checkoutUrl } = store_config
    const useCheckoutButton = () => {
      const { isValidating, id } = (0, sdk_cart /* useCart */.jD)()

      const onClick = (e) => {
        e.preventDefault()

        if (!isValidating && id) {
          window.location.href = `${checkoutUrl}?orderFormId=${id}`
        }
      }

      return {
        onClick,
        disabled: isValidating,
        'data-testid': 'checkout-button',
      }
    }
    // EXTERNAL MODULE: ./src/sdk/session/index.ts
    var session = __webpack_require__(5971)
    // EXTERNAL MODULE: ./src/sdk/ui/Provider.tsx
    var Provider = __webpack_require__(8869)
    // EXTERNAL MODULE: ./src/sdk/ui/useFadeEffect.ts
    var useFadeEffect = __webpack_require__(5112)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/CartItem/CartItem.js
    var CartItem = __webpack_require__(4813)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/CartItem/CartItemContent.js
    var CartItemContent = __webpack_require__(1761)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/CartItem/CartItemImage.js
    var CartItemImage = __webpack_require__(7716)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/CartItem/CartItemSummary.js
    var CartItemSummary = __webpack_require__(2889)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/CartItem/CartItemTitle.js
    var CartItemTitle = __webpack_require__(7622)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/CartItem/CartItemPrices.js
    var CartItemPrices = __webpack_require__(2836)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/CartItem/CartItemActions.js
    var CartItemActions = __webpack_require__(9677)
    // EXTERNAL MODULE: ./src/components/ui/Image/index.ts
    var Image = __webpack_require__(6193)
    // EXTERNAL MODULE: ./src/components/ui/Price/index.ts + 1 modules
    var Price = __webpack_require__(7902)
    // EXTERNAL MODULE: ./src/components/ui/QuantitySelector/index.ts + 1 modules
    var QuantitySelector = __webpack_require__(601) // CONCATENATED MODULE: ./src/sdk/cart/useRemoveButton.ts
    const useRemoveButton = (item) => {
      const {
        currency: { code },
      } = (0, session /* useSession */.kP)()
      const onClick = (0, external_react_.useCallback)(
        (e) => {
          e.preventDefault()

          if (!item) {
            return
          }

          ;(0, sendAnalyticsEvent /* sendAnalyticsEvent */._)({
            name: 'remove_from_cart',
            params: {
              currency: code,
              value: item.price * item.quantity,
              // TODO: In the future, we can explore more robust ways of calculating the value (gift items, discounts, etc.).
              items: [
                {
                  item_id: item.itemOffered.isVariantOf.productGroupID,
                  item_name: item.itemOffered.isVariantOf.name,
                  item_brand: item.itemOffered.brand.name,
                  item_variant: item.itemOffered.sku,
                  quantity: item.quantity,
                  price: item.price,
                  discount: item.listPrice - item.price,
                  currency: code,
                  item_variant_name: item.itemOffered.name,
                  product_reference_id: item.itemOffered.gtin,
                },
              ],
            },
          })
          sdk_cart /* cartStore.removeItem */.i8
            .removeItem(item.id)
        },
        [code, item]
      )
      return {
        onClick,
        'data-testid': 'remove-from-cart-button',
        'data-sku': item?.itemOffered.sku,
      }
    }
    // EXTERNAL MODULE: ./src/sdk/product/useFormattedPrice.ts
    var useFormattedPrice = __webpack_require__(5346)
    // EXTERNAL MODULE: ./src/components/cart/CartItem/cart-item.module.scss
    var cart_item_module = __webpack_require__(7652)
    var cart_item_module_default =
      /*#__PURE__*/ __webpack_require__.n(cart_item_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/cart/CartItem/CartItem.tsx
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

    function useCartItemEvent() {
      const {
        currency: { code },
      } = (0, session /* useSession */.kP)()
      const sendCartItemEvent = (0, external_react_.useCallback)(
        (item, quantity) => {
          const quantityDelta = quantity - item.quantity
          return (0, sendAnalyticsEvent /* sendAnalyticsEvent */._)({
            name: quantityDelta > 0 ? 'add_to_cart' : 'remove_from_cart',
            params: {
              currency: code,
              // TODO: In the future, we can explore more robust ways of
              // calculating the value (gift items, discounts, etc.).
              value: item.price * Math.abs(quantityDelta),
              items: [
                {
                  item_id: item.itemOffered.isVariantOf.productGroupID,
                  item_name: item.itemOffered.isVariantOf.name,
                  item_brand: item.itemOffered.brand.name,
                  item_variant: item.itemOffered.sku,
                  quantity: Math.abs(quantityDelta),
                  price: item.price,
                  discount: item.listPrice - item.price,
                  currency: code,
                  item_variant_name: item.itemOffered.name,
                  product_reference_id: item.itemOffered.gtin,
                },
              ],
            },
          })
        },
        [code]
      )
      return (0, external_react_.useMemo)(
        () => ({
          sendCartItemEvent,
        }),
        [sendCartItemEvent]
      )
    }

    function CartItem_CartItem({ item, gift = false }) {
      const btnProps = useRemoveButton(item)
      const { sendCartItemEvent } = useCartItemEvent()
      const onQuantityChange = (0, external_react_.useCallback)(
        (quantity) => {
          sendCartItemEvent(item, quantity)
          sdk_cart /* cartStore.updateItemQuantity */.i8
            .updateItemQuantity(item.id, quantity)
        },
        [item, sendCartItemEvent]
      )
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(CartItem /* default */.Z, {
        className: cart_item_module_default().fsCartItem,
        'data-testid': 'cart-item',
        'data-sku': item.itemOffered.sku,
        'data-seller': item.seller.identifier,
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
            CartItemContent /* default */.Z,
            {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CartItemImage /* default */.Z, {
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    Image /* Image */.E,
                    {
                      src: item.itemOffered.image[0].url,
                      alt: item.itemOffered.image[0].alternateName,
                      width: 72,
                      height: 72,
                    }
                  ),
                }),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                  CartItemSummary /* default */.Z,
                  {
                    children: [
                      /*#__PURE__*/ jsx_runtime_.jsx(
                        CartItemTitle /* default */.Z,
                        {
                          className: 'text__body',
                          children: item.itemOffered.isVariantOf.name,
                        }
                      ),
                      !gift &&
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                          CartItemPrices /* default */.Z,
                          {
                            children: [
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                Price /* default */.Z,
                                {
                                  value: item.listPrice,
                                  formatter:
                                    useFormattedPrice /* useFormattedPrice */.P,
                                  testId: 'list-price',
                                  'data-value': item.listPrice,
                                  variant: 'listing',
                                  classes: 'text__legend',
                                  SRText: 'Original price:',
                                }
                              ),
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                Price /* default */.Z,
                                {
                                  value: item.price,
                                  formatter:
                                    useFormattedPrice /* useFormattedPrice */.P,
                                  testId: 'price',
                                  'data-value': item.price,
                                  variant: 'spot',
                                  classes: 'text__title-subsection',
                                  SRText: 'Price:',
                                }
                              ),
                            ],
                          }
                        ),
                    ],
                  }
                ),
              ],
            }
          ),
          !gift &&
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
              CartItemActions /* default */.Z,
              {
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    Button /* default */.Co,
                    _objectSpread(
                      _objectSpread(
                        {
                          variant: 'tertiary',
                          icon: /*#__PURE__*/ jsx_runtime_.jsx(
                            Icon /* default */.Z,
                            {
                              name: 'XCircle',
                              width: 18,
                              height: 18,
                            }
                          ),
                          iconPosition: 'left',
                        },
                        btnProps
                      ),
                      {},
                      {
                        children: 'Remove',
                      }
                    )
                  ),
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    QuantitySelector /* default */.Z,
                    {
                      min: 1,
                      initial: item.quantity,
                      onChange: onQuantityChange,
                    }
                  ),
                ],
              }
            ),
        ],
      })
    }

    /* harmony default export */ const cart_CartItem_CartItem =
      CartItem_CartItem // CONCATENATED MODULE: ./src/components/cart/CartItem/index.ts
    // EXTERNAL MODULE: ./src/components/ui/EmptyState/index.ts + 1 modules
    var EmptyState = __webpack_require__(9509) // CONCATENATED MODULE: ./src/components/cart/EmptyCart/EmptyCart.tsx
    function EmptyCart({ onDismiss }) {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(EmptyState /* default */.Z, {
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
            'data-fs-empty-state-title': true,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                name: 'ShoppingCart',
                width: 56,
                height: 56,
                weight: 'thin',
              }),
              /*#__PURE__*/ jsx_runtime_.jsx('p', {
                children: 'Your Cart is empty',
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
            onClick: onDismiss,
            variant: 'secondary',
            children: 'Start Shopping',
          }),
        ],
      })
    }

    /* harmony default export */ const EmptyCart_EmptyCart = EmptyCart // CONCATENATED MODULE: ./src/components/cart/EmptyCart/index.ts
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/molecules/OrderSummary/OrderSummary.js
    var OrderSummary = __webpack_require__(1563)
    // EXTERNAL MODULE: ./src/components/cart/OrderSummary/order-summary.module.scss
    var order_summary_module = __webpack_require__(9320)
    var order_summary_module_default =
      /*#__PURE__*/ __webpack_require__.n(order_summary_module) // CONCATENATED MODULE: ./src/components/cart/OrderSummary/OrderSummary.tsx
    function OrderSummary_OrderSummary({
      subTotal,
      total,
      numberOfItems,
      checkoutButton,
    }) {
      const discount = subTotal - total
      const formattedDiscount = (0,
      useFormattedPrice /* useFormattedPrice */.P)(discount)
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        className: order_summary_module_default().fsOrderSummary,
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(OrderSummary /* default */.Z, {
            subtotalLabel: `Subtotal (${numberOfItems} products)`,
            subtotalValue: (0, useFormattedPrice /* useFormattedPrice */.P)(
              subTotal
            ),
            discountLabel: 'Discount',
            discountValue: discount > 0 ? `-${formattedDiscount}` : undefined,
            totalLabel: 'Total',
            totalValue: (0, useFormattedPrice /* useFormattedPrice */.P)(total),
          }),
          checkoutButton,
        ],
      })
    }

    /* harmony default export */ const cart_OrderSummary_OrderSummary =
      OrderSummary_OrderSummary // CONCATENATED MODULE: ./src/components/cart/OrderSummary/index.ts
    // EXTERNAL MODULE: ./src/components/cart/CartSidebar/cart-sidebar.module.scss
    var cart_sidebar_module = __webpack_require__(285)
    var cart_sidebar_module_default =
      /*#__PURE__*/ __webpack_require__.n(cart_sidebar_module) // CONCATENATED MODULE: ./src/components/cart/CartSidebar/CartSidebar.tsx
    function CartSidebar_ownKeys(object, enumerableOnly) {
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

    function CartSidebar_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {}
        i % 2
          ? CartSidebar_ownKeys(Object(source), !0).forEach(function (key) {
              CartSidebar_defineProperty(target, key, source[key])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : CartSidebar_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
      }
      return target
    }

    function CartSidebar_defineProperty(obj, key, value) {
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

    function CartSidebar() {
      const { currency } = (0, session /* useSession */.kP)()
      const btnProps = useCheckoutButton()
      const cart = (0, sdk_cart /* useCart */.jD)()
      const { cart: displayCart, closeCart } = (0, Provider /* useUI */.l)()
      const { fade, fadeOut } = (0, useFadeEffect /* useFadeEffect */.b)()
      const { items, gifts, totalItems, isValidating, subTotal, total } = cart
      const isEmpty = items.length === 0
      ;(0, external_react_.useEffect)(() => {
        ;(0, sendAnalyticsEvent /* sendAnalyticsEvent */._)({
          name: 'view_cart',
          params: {
            currency: currency.code,
            value: total,
            items: items.concat(gifts).map((item) => ({
              item_id: item.itemOffered.isVariantOf.productGroupID,
              item_name: item.itemOffered.isVariantOf.name,
              item_brand: item.itemOffered.brand.name,
              item_variant: item.itemOffered.sku,
              quantity: item.quantity,
              price: item.price,
              discount: item.listPrice - item.price,
              currency: currency.code,
              item_variant_name: item.itemOffered.name,
              product_reference_id: item.itemOffered.gtin,
            })),
          },
        }) // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(SlideOver /* default */.Z, {
        fade: fade,
        isOpen: displayCart,
        onDismiss: fadeOut,
        size: 'partial',
        direction: 'rightSide',
        className: cart_sidebar_module_default().fsCartSidebar,
        onTransitionEnd: () => fade === 'out' && closeCart(),
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
            'data-fs-cart-sidebar-header': true,
            'data-testid': 'cart-sidebar',
            children: [
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                'data-fs-cart-sidebar-title': true,
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx('p', {
                    'data-fs-cart-sidebar-title-text': true,
                    className: 'text__lead',
                    children: 'Your Cart',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Badge /* Badge */.C, {
                    variant: 'info',
                    children: totalItems,
                  }),
                ],
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(Button /* default */.Co, {
                'data-fs-cart-sidebar-close-button': true,
                'data-testid': 'cart-sidebar-button-close',
                'aria-label': 'Close Cart',
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
                  name: 'X',
                  width: 32,
                  height: 32,
                }),
                onClick: fadeOut,
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(Alert /* default */.Z, {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon /* default */.Z, {
              name: 'Truck',
              width: 24,
              height: 24,
            }),
            children: 'Free shipping starts at $300',
          }),
          isEmpty
            ? /*#__PURE__*/ jsx_runtime_.jsx(EmptyCart_EmptyCart, {
                onDismiss: fadeOut,
              })
            : /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(List /* default */.Z, {
                    'data-fs-cart-sidebar-list': true,
                    children: items.map((item) =>
                      /*#__PURE__*/ jsx_runtime_.jsx(
                        'li',
                        {
                          children: /*#__PURE__*/ jsx_runtime_.jsx(
                            cart_CartItem_CartItem,
                            {
                              item: item,
                            }
                          ),
                        },
                        item.id
                      )
                    ),
                  }),
                  gifts.length > 0 &&
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                      jsx_runtime_.Fragment,
                      {
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            Alert /* default */.Z,
                            {
                              icon: /*#__PURE__*/ jsx_runtime_.jsx(
                                Icon /* default */.Z,
                                {
                                  name: 'Gift',
                                  width: 24,
                                  height: 24,
                                }
                              ),
                              children: 'Gifts',
                            }
                          ),
                          /*#__PURE__*/ jsx_runtime_.jsx(List /* default */.Z, {
                            'data-fs-cart-sidebar-list': true,
                            children: gifts.map((item) =>
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                'li',
                                {
                                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    cart_CartItem_CartItem,
                                    {
                                      gift: true,
                                      item: item,
                                    }
                                  ),
                                },
                                item.id
                              )
                            ),
                          }),
                        ],
                      }
                    ),
                  /*#__PURE__*/ jsx_runtime_.jsx('footer', {
                    'data-fs-cart-sidebar-footer': true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      cart_OrderSummary_OrderSummary,
                      {
                        subTotal: subTotal,
                        total: total,
                        numberOfItems: totalItems,
                        checkoutButton: /*#__PURE__*/ jsx_runtime_.jsx(
                          Button /* default */.Co,
                          CartSidebar_objectSpread(
                            CartSidebar_objectSpread(
                              {
                                'data-fs-cart-sidebar-checkout-button': true,
                                variant: 'primary',
                                icon:
                                  !isValidating &&
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Icon /* default */.Z,
                                    {
                                      name: 'ArrowRight',
                                      width: 18,
                                      height: 18,
                                    }
                                  ),
                                iconPosition: 'right',
                              },
                              btnProps
                            ),
                            {},
                            {
                              children: isValidating
                                ? 'Loading...'
                                : 'Checkout',
                            }
                          )
                        ),
                      }
                    ),
                  }),
                ],
              }),
        ],
      })
    }

    /* harmony default export */ const CartSidebar_CartSidebar = CartSidebar // CONCATENATED MODULE: ./src/components/cart/CartSidebar/index.ts

    /***/
  },

  /***/ 9509: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ EmptyState_EmptyState,
    })

    // EXTERNAL MODULE: ./src/components/ui/EmptyState/empty-state.module.scss
    var empty_state_module = __webpack_require__(8098)
    var empty_state_module_default =
      /*#__PURE__*/ __webpack_require__.n(empty_state_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/ui/EmptyState/EmptyState.tsx
    function EmptyState({ children, variant = 'default' }) {
      return /*#__PURE__*/ jsx_runtime_.jsx('section', {
        className: empty_state_module_default().fsEmptyState,
        'data-fs-empty-state': true,
        'data-fs-empty-state-variant': variant,
        children: children,
      })
    }

    /* harmony default export */ const EmptyState_EmptyState = EmptyState // CONCATENATED MODULE: ./src/components/ui/EmptyState/index.ts

    /***/
  },

  /***/ 7652: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-cart-item': 'cart-item_fs-cart-item__ziWR8',
      fsCartItem: 'cart-item_fs-cart-item__ziWR8',
    }

    /***/
  },

  /***/ 285: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-cart-sidebar': 'cart-sidebar_fs-cart-sidebar__vg9bV',
      fsCartSidebar: 'cart-sidebar_fs-cart-sidebar__vg9bV',
    }

    /***/
  },

  /***/ 9320: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-order-summary': 'order-summary_fs-order-summary___R2v8',
      fsOrderSummary: 'order-summary_fs-order-summary___R2v8',
    }

    /***/
  },

  /***/ 8098: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-empty-state': 'empty-state_fs-empty-state__F7Xul',
      fsEmptyState: 'empty-state_fs-empty-state__F7Xul',
    }

    /***/
  },
}
