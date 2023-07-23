;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [330],
  {
    6321: function (e, t, r) {
      'use strict'
      r.d(t, {
        _: function () {
          return i
        },
        z: function () {
          return c
        },
      })
      var n = r(7294),
        a = r(670)
      const o = (e, t) => {
        switch (t.type) {
          case 'addPrev':
            return [e[0] - 1, ...e]
          case 'addNext': {
            const t = Number(e[e.length - 1]) + 1
            return [...e, t]
          }
          case 'reset': {
            const { payload: e } = t
            return [e]
          }
          default:
            throw new a.q('Unknown action for infinite search')
        }
      }
      var s = r(3264)
      const i = (0, n.createContext)(void 0),
        c = ({ children: e, itemsPerPage: t, onChange: r, ...a }) => {
          const { state: c, ...u } = (0, s.X)(a, r),
            { pages: d, ...l } = ((e) => {
              const [t, r] = (0, n.useReducer)(o, void 0, () => [e])
              return {
                pages: t,
                ...(0, n.useMemo)(
                  () => ({
                    addPrevPage: () => r({ type: 'addPrev' }),
                    addNextPage: () => r({ type: 'addNext' }),
                    resetInfiniteScroll: (e) =>
                      r({ type: 'reset', payload: e }),
                  }),
                  []
                ),
              }
            })(c.page),
            f = (0, n.useMemo)(
              () => ({ state: c, ...u, pages: d, ...l, itemsPerPage: t }),
              [l, t, d, u, c]
            )
          return n.createElement(i.Provider, { value: f }, e)
        }
    },
    3425: function (e, t, r) {
      'use strict'
      r.d(t, {
        uL: function () {
          return s
        },
        wB: function () {
          return i
        },
        wb: function () {
          return o
        },
      })
      var n = r(670)
      const a = new Set([
          'price_desc',
          'price_asc',
          'orders_desc',
          'name_desc',
          'name_asc',
          'release_desc',
          'discount_desc',
          'score_desc',
        ]),
        o = (e) => a.has(e),
        s = (e, t, r) => {
          if (!0 === r) {
            const r = e.findIndex((e) => e.key === t.key)
            if (r > -1) return e.map((e, n) => (n === r ? t : e))
          }
          return [...e, t]
        },
        i = (e, t) =>
          void 0 !== e.find((e) => e.key === t.key && e.value === t.value)
            ? ((e, t) => {
                const { value: r } = t,
                  a = e.findIndex((e) => e.value === r)
                if (a < 0)
                  throw new n.q(`Cannot remove ${r} from search params`)
                return e.filter((e, t) => 0 === t || t !== a)
              })(e, t)
            : s(e, t, !1)
    },
    2888: function (e, t, r) {
      'use strict'
      r.d(t, {
        Q: function () {
          return s
        },
      })
      var n = r(670),
        a = r(3425),
        o = r(3264)
      const s = ({ pathname: e, searchParams: t }) => {
        const r = (0, o.j)({
          base: e,
          term: t.get('q') ?? null,
          sort: t.get('sort') ?? void 0,
          page: Number(t.get('page') ?? 0),
        })
        if (!(0, a.wb)(r.sort)) throw new n.q(`Uknown sorting option ${r.sort}`)
        const s = t.get('facets')?.split(',') ?? []
        for (const n of s) {
          const e = t.getAll(n)
          for (const t of e)
            r.selectedFacets = (0, a.uL)(r.selectedFacets, { key: n, value: t })
        }
        return r
      }
    },
    2549: function (e, t, r) {
      'use strict'
      r.d(t, {
        h: function () {
          return i
        },
      })
      var n = r(7294),
        a = r(3364),
        o = r(7794)
      const s = (e) => {
          const { pathname: t, search: r } = (0, a.Z)(e)
          return `${t}${r}`
        },
        i = (e) => {
          const { pages: t, itemsPerPage: r, state: a } = (0, o.R)(),
            i = Math.ceil(e / r),
            c = Number(t[t.length - 1]) + 1,
            u = t[0] - 1
          return (0, n.useMemo)(
            () => ({
              next: c < i && { cursor: c, link: s({ ...a, page: c }) },
              prev: u > -1 && { cursor: u, link: s({ ...a, page: u }) },
            }),
            [c, u, a, i]
          )
        }
    },
    7794: function (e, t, r) {
      'use strict'
      r.d(t, {
        R: function () {
          return s
        },
      })
      var n = r(6321),
        a = r(7294),
        o = r(670)
      const s = () =>
        ((e) => {
          const t = (0, a.useContext)(e)
          if (void 0 !== t) return t
          throw new o.q(
            `${e.displayName ?? 'Context'} needs to be on the React tree`
          )
        })(n._)
    },
    9030: function (e, t, r) {
      'use strict'
      var n = r(7294)
      const a = (0, n.forwardRef)(function (
        { testId: e = 'store-checkbox', ...t },
        r
      ) {
        return n.createElement(
          'input',
          Object.assign(
            {
              ref: r,
              'data-fs-checkbox': !0,
              'data-testid': e,
              type: 'checkbox',
            },
            t
          )
        )
      })
      t.Z = a
    },
    5853: function (e, t, r) {
      'use strict'
      var n = r(7294)
      const a = (0, n.forwardRef)(function (
        { children: e, testId: t = 'store-select', ...r },
        a
      ) {
        return n.createElement(
          'select',
          Object.assign({ ref: a, 'data-fs-select': !0, 'data-testid': t }, r),
          e
        )
      })
      t.Z = a
    },
    5811: function (e, t, r) {
      'use strict'
      var n = r(7294),
        a = r(8164)
      const o = ({ divider: e, testId: t }) => {
          const r = {
            'data-breadcrumb-divider': !0,
            'aria-hidden': !0,
            'data-testid': `${t}-divider`,
          }
          return n.isValidElement(e)
            ? n.cloneElement(e, r)
            : n.createElement('span', Object.assign({}, r), e ?? '/')
        },
        s = ({ children: e, isLastItem: t, divider: r, testId: a }) => {
          const s = {
            'data-testid': `${a}-item`,
            'data-breadcrumb-item': !t || 'current',
            'aria-current': t ? 'page' : void 0,
          }
          return n.isValidElement(e)
            ? n.createElement(
                'li',
                { 'data-breadcrumb-list-item': !0 },
                n.cloneElement(e, s),
                t ? null : n.createElement(o, { divider: r, testId: a })
              )
            : n.createElement(
                'li',
                { 'data-breadcrumb-list-item': !0 },
                n.createElement(
                  'span',
                  Object.assign({}, s),
                  e,
                  t ? null : n.createElement(o, { divider: r, testId: a })
                )
              )
        },
        i = (0, n.forwardRef)(function (
          { children: e, divider: t, testId: r = 'store-breadcrumb', ...o },
          i
        ) {
          return n.createElement(
            'nav',
            Object.assign(
              {
                'aria-label': 'Breadcrumb',
                role: 'navigation',
                ref: i,
                'data-fs-breadcrumb': !0,
                'data-testid': r,
              },
              o
            ),
            n.createElement(
              a.Z,
              { 'data-breadcrumb-list': !0, variant: 'ordered' },
              n.Children.toArray(e).map((e, a, o) => {
                const i = a === o.length - 1
                return n.createElement(
                  s,
                  {
                    isLastItem: i,
                    divider: t,
                    key: `breadcrumb-${a}`,
                    testId: r,
                  },
                  e
                )
              })
            )
          )
        })
      t.Z = i
    },
    673: function (e, t, r) {
      'use strict'
      var n = r(7294),
        a = r(7483)
      t.Z = ({
        children: e,
        isOpen: t = !1,
        onDismiss: r,
        id: o = 'store-dropdown',
      }) => {
        const [s, i] = (0, n.useState)(t),
          c = (0, n.useRef)([]),
          u = (0, n.useRef)(0),
          d = (0, n.useRef)(null),
          l = (0, n.useCallback)(() => {
            i(!1), r?.(), d.current?.focus()
          }, [r]),
          f = () => {
            i(!0)
          },
          p = (0, n.useCallback)(() => {
            i((e) => (e && (r?.(), d.current?.focus()), !e))
          }, [r])
        ;(0, n.useEffect)(() => {
          i(t)
        }, [t]),
          (0, n.useEffect)(() => {
            s && c?.current[0]?.focus()
          }, [s]),
          (0, n.useEffect)(() => {
            let e = !0
            const t = (t) => {
              const r = c?.current.some((e) => t.target === e)
              e ? (e = !1) : !r && l()
            }
            return (
              s
                ? document.addEventListener('click', t)
                : document.removeEventListener('click', t),
              () => {
                document.removeEventListener('click', t)
              }
            )
          }, [l, s])
        const m = (0, n.useMemo)(
          () => ({
            isOpen: s,
            close: l,
            open: f,
            toggle: p,
            dropdownButtonRef: d,
            onDismiss: r,
            selectedDropdownItemIndexRef: u,
            dropdownItemsRef: c,
            id: o,
          }),
          [l, o, s, r, p]
        )
        return n.createElement(a.Z.Provider, { value: m }, e)
      }
    },
    2844: function (e, t, r) {
      'use strict'
      var n = r(7294),
        a = r(8987)
      const o = (0, n.forwardRef)(function (
        { children: e, testId: t = 'store-dropdown-button', ...r },
        o
      ) {
        const { toggle: s, dropdownButtonRef: i, isOpen: c, id: u } = (0, a.x)()
        return (
          (0, n.useImperativeHandle)(o, () => i.current, [i]),
          n.createElement(
            'button',
            Object.assign(
              {
                'data-fs-dropdown-button': !0,
                onClick: s,
                'data-testid': t,
                ref: i,
                'aria-expanded': c,
                'aria-haspopup': 'menu',
                'aria-controls': u,
              },
              r
            ),
            e
          )
        )
      })
      t.Z = o
    },
    8513: function (e, t, r) {
      'use strict'
      var n = r(7294),
        a = r(8987)
      const o = (0, n.forwardRef)(function (
        { children: e, onClick: t, testId: r = 'store-dropdown-item', ...o },
        s
      ) {
        const {
            dropdownItemsRef: i,
            selectedDropdownItemIndexRef: c,
            close: u,
          } = (0, a.x)(),
          [d, l] = (0, n.useState)(0),
          f = (0, n.useRef)(),
          p = () => {
            ;(c.current = d), i?.current[c.current]?.focus()
          }
        return (
          (0, n.useImperativeHandle)(s, () => f.current, []),
          n.createElement(
            'button',
            Object.assign(
              {
                'data-fs-dropdown-item': !0,
                'data-testid': r,
                ref: (e) => {
                  e &&
                    !i?.current.includes(e) &&
                    (i?.current.push(e),
                    l(i?.current.findIndex((t) => t === e) ?? 0)),
                    (f.current = e)
                },
                onFocus: p,
                onMouseEnter: p,
                onClick: (e) => {
                  t?.(e), u?.()
                },
                role: 'menuitem',
                tabIndex: -1,
                'data-index': d,
              },
              o
            ),
            e
          )
        )
      })
      t.Z = o
    },
    7407: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return s
        },
      })
      var n = r(7294),
        a = r(3935),
        o = r(8987)
      var s = ({
        children: e,
        testId: t = 'store-dropdown-menu',
        style: r,
        ...s
      }) => {
        const {
            isOpen: i,
            close: c,
            dropdownItemsRef: u,
            selectedDropdownItemIndexRef: d,
            id: l,
          } = (0, o.x)(),
          f = (() => {
            const { dropdownButtonRef: e } = (0, o.x)(),
              t = 'undefined' !== typeof window,
              r = e?.current?.getBoundingClientRect(),
              n = r?.top ?? 0,
              a = r?.height ?? 0,
              s = r?.left ?? 0
            return {
              position: 'absolute',
              top: n + a + (t ? document?.documentElement?.scrollTop : 0),
              left: s + (t ? document?.documentElement?.scrollLeft : 0),
            }
          })(),
          p = n.Children.toArray(e).length
        return i
          ? (0, a.createPortal)(
              n.createElement(
                'div',
                {
                  role: 'presentation',
                  'data-fs-dropdown-overlay': !0,
                  onKeyDown: (e) => {
                    e.defaultPrevented ||
                      'Enter' === e.key ||
                      (e.preventDefault(),
                      'Escape' === e.key && c?.(),
                      'ArrowDown' === e.key &&
                        (d.current < p - 1 ? d.current++ : (d.current = 0),
                        u?.current[d.current]?.focus()),
                      'ArrowUp' === e.key &&
                        (d.current > 0 ? d.current-- : (d.current = p - 1),
                        u?.current[d.current]?.focus()),
                      'Home' === e.key &&
                        ((d.current = 0), u?.current[d.current]?.focus()),
                      'End' === e.key &&
                        ((d.current = p - 1), u?.current[d.current]?.focus()),
                      e.stopPropagation())
                  },
                  'data-testid': `${t}-overlay`,
                },
                n.createElement(
                  'div',
                  Object.assign(
                    {
                      role: 'menu',
                      'aria-orientation': 'vertical',
                      'data-fs-dropdown-menu': !0,
                      'data-testid': t,
                      style: { ...f, ...r },
                      id: l,
                    },
                    s
                  ),
                  e
                )
              ),
              document.body
            )
          : ((u.current = []), null)
      }
    },
    7483: function (e, t, r) {
      'use strict'
      const n = (0, r(7294).createContext)({
        isOpen: !1,
        dropdownButtonRef: null,
        selectedDropdownItemIndexRef: null,
        dropdownItemsRef: null,
        id: 'store-dropdown',
      })
      t.Z = n
    },
    8987: function (e, t, r) {
      'use strict'
      r.d(t, {
        x: function () {
          return o
        },
      })
      var n = r(7294),
        a = r(7483)
      const o = () => {
        const e = (0, n.useContext)(a.Z)
        if (void 0 === e)
          throw new Error(
            'Do not use useDropdown hook outside the Dropdown context.'
          )
        return e
      }
    },
    4685: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return i
        },
      })
      var n = r(7294),
        a = r(9688)
      const o = (e, t, r) => Math.round(((e - t) / (r - t)) * 100)
      var s = (0, n.forwardRef)(function (
        {
          min: e,
          max: t,
          onChange: r,
          onEnd: a,
          testId: s = 'store-slider',
          getAriaValueText: i,
          className: c,
          step: u,
          minValueLabelComponent: d,
          maxValueLabelComponent: l,
        },
        f
      ) {
        const p = (0, n.useMemo)(
            () => (t.absolute - e.absolute) / 100,
            [t.absolute, e.absolute]
          ),
          [m, h] = (0, n.useState)(() => o(e.selected, e.absolute, t.absolute)),
          [v, b] = (0, n.useState)(() => o(t.selected, e.absolute, t.absolute)),
          [g, x] = (0, n.useState)(() => Math.round(e.absolute + m * p)),
          [w, j] = (0, n.useState)(() => Math.round(e.absolute + v * p))
        return (
          (0, n.useImperativeHandle)(f, () => ({
            setSliderValues: (r) => {
              const n = Math.min(Number(r.min), w)
              if ((x(n), h(o(n, e.absolute, t.absolute)), r.max > t.absolute))
                return (
                  j(t.absolute), void b(o(t.absolute, e.absolute, t.absolute))
                )
              const a = Math.max(Number(r.max), g)
              j(a), b(o(a, e.absolute, t.absolute))
            },
          })),
          n.createElement(
            'div',
            { 'data-fs-slider': !0, 'data-testid': s, className: c },
            n.createElement('div', {
              'data-slider-range': !0,
              style: { left: `${m}%`, width: v - m + '%' },
            }),
            n.createElement('input', {
              type: 'range',
              min: Math.round(e.absolute),
              max: Math.round(t.absolute),
              value: g,
              step: u,
              onMouseUp: () => a?.({ min: g, max: w }),
              onTouchEnd: () => a?.({ min: g, max: w }),
              onChange: (n) => {
                const a = Math.min(Number(n.target.value), w)
                x(a), h(o(a, e.absolute, t.absolute)), r?.({ min: a, max: w })
              },
              'data-slider-thumb': 'left',
              'aria-valuemin': e.absolute,
              'aria-valuemax': t.absolute,
              'aria-valuenow': g,
              'aria-label': String(g),
              'aria-labelledby': i?.(g, 'min'),
            }),
            d && d(g),
            n.createElement('input', {
              type: 'range',
              min: Math.round(e.absolute),
              max: Math.round(t.absolute),
              value: w,
              step: u,
              onMouseUp: () => a?.({ min: g, max: w }),
              onTouchEnd: () => a?.({ min: g, max: w }),
              onChange: (n) => {
                const a = Math.max(Number(n.target.value), g)
                j(a), b(o(a, e.absolute, t.absolute)), r?.({ min: g, max: a })
              },
              'data-slider-thumb': 'right',
              'aria-valuemin': e.absolute,
              'aria-valuemax': t.absolute,
              'aria-valuenow': w,
              'aria-label': String(w),
              'aria-labelledby': i?.(w, 'max'),
            }),
            l && l(w)
          )
        )
      })
      var i = (0, n.forwardRef)(function (
        {
          className: e,
          formatter: t,
          max: r,
          min: o,
          step: i,
          onChange: c,
          onEnd: u,
          testId: d = 'store-price-range',
          variant: l,
          'aria-label': f,
        },
        p
      ) {
        const m = (0, n.useRef)()
        return (
          (0, n.useImperativeHandle)(p, () => ({
            setPriceRangeValues: (e) => {
              c?.(e), m.current?.setSliderValues(e)
            },
          })),
          n.createElement(
            'div',
            { 'data-fs-price-range': !0, 'data-testid': d, className: e },
            n.createElement(s, {
              ref: m,
              min: o,
              max: r,
              step: i,
              onEnd: u,
              'aria-label': f,
              onChange: (e) => c?.(e),
              minValueLabelComponent: (e) => {
                const o = (e / r.absolute) * 100
                return n.createElement(a.Z, {
                  value: e,
                  variant: l,
                  formatter: t,
                  'data-price-range-value-label': 'min',
                  style: {
                    position: 'absolute',
                    left: `calc(${o}% + (${8 - 0.2 * o}px))`,
                  },
                })
              },
              maxValueLabelComponent: (e) => {
                const o = (e / r.absolute) * 100
                return n.createElement(a.Z, {
                  formatter: t,
                  variant: l,
                  value: e,
                  'data-price-range-value-label': 'max',
                  style: {
                    position: 'absolute',
                    left: `calc(${o}% + (${8 - 0.2 * o}px))`,
                  },
                })
              },
            })
          )
        )
      })
    },
    1729: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return O
        },
      })
      var n = r(9499),
        a = r(4730),
        o = r(1201),
        s = r(5885),
        i = r(7599),
        c = r(4147),
        u = r(7294),
        d = r(9379),
        l = r(4851),
        f = r(6193),
        p = r(7902),
        m = r(5346),
        h = r(9854),
        v = r(5855),
        b = r.n(v),
        g = r(5893),
        x = [
          'product',
          'index',
          'variant',
          'bordered',
          'aspectRatio',
          'ButtonBuy',
        ]
      function w(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function y(e) {
        var {
            product: t,
            index: r,
            variant: n = 'default',
            bordered: u = !1,
            aspectRatio: v = 1,
            ButtonBuy: w,
          } = e,
          y = (0, a.Z)(e, x),
          {
            sku: O,
            isVariantOf: { name: _ },
            image: [P],
            offers: {
              lowPrice: E,
              offers: [{ listPrice: k, availability: Z }],
            },
          } = t,
          I = (0, h.w)({ product: t, selectedOffer: 0, index: r }),
          S = 'https://schema.org/InStock' !== Z
        return (0, g.jsxs)(
          o.Z,
          j(
            j(
              {
                'data-fs-product-card': !0,
                'data-fs-product-card-variant': n,
                'data-fs-product-card-bordered': u,
                'data-fs-product-card-actionable': !!w,
                'data-fs-product-card-sku': O,
                className: b().fsProductCard,
              },
              y
            ),
            {},
            {
              children: [
                (0, g.jsx)(s.Z, {
                  'data-fs-product-card-image': !0,
                  children: (0, g.jsx)(f.E, {
                    src: P.url,
                    alt: P.alternateName,
                    width: 360,
                    height: 360 / v,
                    sizes: '(max-width: 768px) 25vw, 30vw',
                    loading: 'lazy',
                  }),
                }),
                (0, g.jsxs)(i.Z, {
                  'data-fs-product-card-content': !0,
                  children: [
                    (0, g.jsxs)('div', {
                      'data-fs-product-card-heading': !0,
                      children: [
                        (0, g.jsx)('h3', {
                          'data-fs-product-card-title': !0,
                          children: (0, g.jsx)(
                            d.Z,
                            j(j({}, I), {}, { title: _, children: _ })
                          ),
                        }),
                        (0, g.jsxs)('div', {
                          'data-fs-product-card-prices': !0,
                          children: [
                            (0, g.jsx)(p.Z, {
                              value: k,
                              formatter: m.P,
                              testId: 'list-price',
                              'data-value': k,
                              variant: 'listing',
                              classes: 'text__legend',
                              SRText: 'Original price:',
                            }),
                            (0, g.jsx)(p.Z, {
                              value: E,
                              formatter: m.P,
                              testId: 'price',
                              'data-value': E,
                              variant: 'spot',
                              classes: 'text__body',
                              SRText: 'Sale Price:',
                            }),
                          ],
                        }),
                      ],
                    }),
                    S
                      ? (0, g.jsx)(l.C, { children: 'Out of stock' })
                      : (0, g.jsx)(l.F, { listPrice: k, spotPrice: E }),
                    !!w &&
                      (0, g.jsx)(c.Z, {
                        'data-fs-product-card-actions': !0,
                        children: w,
                      }),
                  ],
                }),
              ],
            }
          )
        )
      }
      var O = (0, u.memo)(y)
    },
    1704: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return m
        },
      })
      var n = r(7294)
      var a = (0, n.forwardRef)(function (
        { testId: e = 'store-hero', children: t, ...r },
        a
      ) {
        return n.createElement(
          'article',
          Object.assign({ ref: a, 'data-fs-hero': !0, 'data-testid': e }, r),
          t
        )
      })
      var o = (0, n.forwardRef)(function (
        { testId: e = 'store-hero-image', children: t, ...r },
        a
      ) {
        return n.createElement(
          'div',
          Object.assign({ ref: a, 'data-hero-image': !0, 'data-testid': e }, r),
          t
        )
      })
      var s = (0, n.forwardRef)(function (
          { testId: e = 'store-hero-heading', children: t, ...r },
          a
        ) {
          return n.createElement(
            'header',
            Object.assign(
              { ref: a, 'data-hero-heading': !0, 'data-testid': e },
              r
            ),
            t
          )
        }),
        i = r(1310),
        c = r(2478),
        u = r(514),
        d = r(8879),
        l = r(5313),
        f = r.n(l),
        p = r(5893),
        m = (e) => {
          var {
            title: t,
            subtitle: r,
            variant: n = 'primary',
            colorVariant: l = 'main',
            linkText: m,
            link: h,
            icon: v,
            imageAlt: b,
            imageSrc: g,
          } = e
          return (0, p.jsx)(d.Z, {
            children: (0, p.jsxs)(a, {
              className: f().fsHero,
              'data-fs-hero': !0,
              'data-fs-hero-variant': n,
              'data-fs-hero-color-variant': l,
              children: [
                (0, p.jsx)(o, {
                  'data-fs-hero-image': !0,
                  children: (0, p.jsx)(u.Z, {
                    preload: !0,
                    loading: 'eager',
                    fetchPriority: 'high',
                    src: g,
                    alt: b,
                    width: 360,
                    height: 240,
                    sizes: '(max-width: 768px) 70vw, 50vw',
                  }),
                }),
                (0, p.jsx)(s, {
                  'data-fs-hero-heading': !0,
                  'aria-labelledby': 'hero-heading',
                  children: (0, p.jsxs)('div', {
                    'data-fs-hero-wrapper': !0,
                    className: 'layout__content',
                    children: [
                      (0, p.jsxs)('div', {
                        'data-fs-hero-info': !0,
                        children: [
                          (0, p.jsx)('h1', {
                            'data-fs-hero-title': !0,
                            children: t,
                          }),
                          (0, p.jsx)('p', {
                            'data-fs-hero-subtitle': !0,
                            children: r,
                          }),
                          !!h &&
                            (0, p.jsxs)(i.ZP, {
                              href: h,
                              inverse: 'main' === l,
                              children: [
                                m,
                                ' ',
                                (0, p.jsx)(c.Z, {
                                  name: 'ArrowRight',
                                  width: 24,
                                  height: 24,
                                }),
                              ],
                            }),
                        ],
                      }),
                      v &&
                        'secondary' === n &&
                        (0, p.jsx)('div', {
                          'data-fs-hero-icon': !0,
                          children: v,
                        }),
                    ],
                  }),
                }),
              ],
            }),
          })
        }
    },
    7304: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return b
        },
      })
      var n = r(4730),
        a = r(7294),
        o = r(131),
        s = r(5184),
        i = r(8459),
        c = r(5585),
        u = r.n(c),
        d = r(3288),
        l = r(5893)
      var f = function (e) {
          var { children: t, loading: r = !0 } = e
          return r
            ? (0, l.jsx)('ul', {
                'data-fs-product-shelf-items': !0,
                className: 'layout__content '.concat(u().fsProductShelf),
                children: Array.from({ length: i.K }, (e, t) =>
                  (0, l.jsx)(
                    'li',
                    { children: (0, l.jsx)(d.Z, { sectioned: !0 }) },
                    String(t)
                  )
                ),
              })
            : (0, l.jsx)(l.Fragment, { children: t })
        },
        p = r(737),
        m = r(1729),
        h = r(8879),
        v = ['title', 'withDivisor']
      var b = function (e) {
        var t,
          { title: r, withDivisor: i = !1 } = e,
          c = (0, n.Z)(e, v),
          d = (0, a.useRef)(!1),
          { ref: b, inView: g } = (0, o.YD)(),
          x = (0, p.kN)(c),
          w =
            null !== (t = null === x || void 0 === x ? void 0 : x.edges) &&
            void 0 !== t
              ? t
              : [],
          { sendViewItemListEvent: j } = (0, s.m)({
            products: w,
            title: r,
            page: 0,
            pageSize: 0,
          })
        return (
          (0, a.useEffect)(() => {
            g && !d.current && w.length && (j(), (d.current = !0))
          }, [g, w.length, j]),
          0 === (null === x || void 0 === x ? void 0 : x.edges.length)
            ? null
            : (0, l.jsxs)(h.Z, {
                className: 'layout__section '.concat(
                  i ? 'section__divisor' : ''
                ),
                ref: b,
                children: [
                  (0, l.jsx)('h2', {
                    className: 'text__title-section layout__content',
                    children: r,
                  }),
                  (0, l.jsx)('div', {
                    className: u().fsProductShelf,
                    'data-fs-product-shelf': !0,
                    children: (0, l.jsx)(f, {
                      loading: void 0 === x,
                      children: (0, l.jsx)('ul', {
                        'data-fs-product-shelf-items': !0,
                        className: 'layout__content',
                        children: w.map((e, t) =>
                          (0, l.jsx)(
                            'li',
                            {
                              children: (0, l.jsx)(m.Z, {
                                product: e.node,
                                index: t + 1,
                              }),
                            },
                            ''.concat(e.node.id)
                          )
                        ),
                      }),
                    }),
                  }),
                ],
              })
        )
      }
    },
    514: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return x
        },
      })
      var n = r(9499),
        a = r(4730),
        o = r(7294),
        s = r(9008),
        i = r.n(s)
      var c = (e, t) => {
          var r,
            n,
            a = ['https://assets.vtex.app', 'unsafe'],
            o = []
          t.trim && a.push('trim'),
            t.manualCrop &&
              a.push(
                ((e) => {
                  var { left: t, top: r, right: n, bottom: a } = e
                  return ''
                    .concat(t, 'x')
                    .concat(r, ':')
                    .concat(n, 'x')
                    .concat(a)
                })(t.manualCrop)
              ),
            t.fitIn && a.push('fit-in'),
            o.push(
              null !== (r = t.horizontalAlign) && void 0 !== r ? r : 'center'
            ),
            o.push(
              null !== (n = t.verticalAlign) && void 0 !== n ? n : 'middle'
            ),
            t.smart && o.push('smart')
          var { filters: s } = t
          return (
            s &&
              o.push(
                (function (e) {
                  var t = ['filters']
                  return (
                    Object.keys(e).forEach((r) => {
                      var n,
                        a = e[r]
                      ;(n = Array.isArray(a)
                        ? a.join(',')
                        : !0 === a
                        ? ''
                        : String(a)),
                        t.push(''.concat(r, '(').concat(n, ')'))
                    }),
                    t.join(':')
                  )
                })(s)
              ),
            o.push(encodeURIComponent(e)),
            (e, r) => {
              var n = ''
              return (
                t.flipHorizontal && (n += '-'),
                (n += ''.concat(e, 'x')),
                t.flipVertical && (n += '-'),
                (n += ''.concat(r)),
                [...a, n, ...o].join('/')
              )
            }
          )
        },
        u = ['src', 'width', 'height', 'options']
      function d(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var l = [1, 2, 3],
        f = l[l.length - 1],
        p = (e) => {
          var { src: t, width: r, height: s, options: i = {} } = e,
            p = (0, a.Z)(e, u),
            { srcSet: m, src: h } = (0, o.useMemo)(() => {
              var e = c(t, i),
                n = l.map((t) => {
                  var n = r * t
                  return ''.concat(e(n, s * t), ' ').concat(n, 'w')
                })
              return { src: e(r * f, s * f), srcSet: n.join(', ') }
            }, [s, i, t, r])
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? d(Object(r), !0).forEach(function (t) {
                    ;(0, n.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : d(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          })(
            {
              src: h,
              srcSet: m,
              width: ''.concat(r, 'px'),
              height: ''.concat(s, 'px'),
            },
            p
          )
        },
        m = r(5893),
        h = ['preload', 'fetchPriority']
      function v(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var g = (0, o.forwardRef)((e, t) => {
        var { preload: r = !1, fetchPriority: n } = e,
          o = (0, a.Z)(e, h),
          s = p(o),
          { src: c, sizes: u = '100vw', srcSet: d } = s
        return (0, m.jsxs)(m.Fragment, {
          children: [
            r &&
              (0, m.jsx)(i(), {
                children: (0, m.jsx)('link', {
                  as: 'image',
                  rel: 'preload',
                  href: c,
                  imageSrcSet: d,
                  imageSizes: u,
                  fetchpriority: n,
                }),
              }),
            (0, m.jsx)(
              'img',
              b(
                b({ ref: t, 'data-fs-image': !0 }, s),
                {},
                { alt: s.alt, fetchpriority: n }
              )
            ),
          ],
        })
      })
      g.displayName = 'Image'
      var x = (0, o.memo)(g)
    },
    6193: function (e, t, r) {
      'use strict'
      r.d(t, {
        E: function () {
          return n.Z
        },
      })
      var n = r(514)
    },
    7902: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return h
        },
      })
      var n = r(9499),
        a = r(4730),
        o = r(9688),
        s = r(7294),
        i = r(2252),
        c = r(346),
        u = r.n(c),
        d = r(5893),
        l = ['classes', 'SRText']
      function f(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function m(e) {
        var { classes: t = '', SRText: r } = e,
          n = (0, a.Z)(e, l)
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(i.Z, { text: r }),
            (0, d.jsx)(
              o.Z,
              p(
                {
                  'data-fs-price': !0,
                  className: ''.concat(u().fsPrice, ' ').concat(t),
                },
                n
              )
            ),
          ],
        })
      }
      var h = (0, s.memo)(m)
    },
    7878: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return I
          },
          default: function () {
            return S
          },
        })
      var n = r(9499),
        a = r(2888),
        o = r(3364),
        s = r(6321),
        i = r(2962),
        c = r(1163),
        u = r(7294),
        d = r(3769),
        l = r(1704),
        f = r(2875),
        p = r(7304),
        m = r(2478),
        h = r(1310),
        v = r(8879),
        b = r(4538),
        g = r.n(b),
        x = r(5893)
      var w = function (e) {
          var {
            text: t = 'Scroll to top',
            icon: r = (0, x.jsx)(m.Z, {
              name: 'CaretUp',
              width: 16,
              height: 16,
              weight: 'bold',
            }),
            iconPosition: n = 'left',
          } = e
          return (0, x.jsx)(v.Z, {
            className: g().fsScrollToTopButton,
            children: (0, x.jsx)(h.Co, {
              variant: 'secondary',
              icon: r,
              iconPosition: n,
              onClick: () => window.scrollTo(0, 0),
              children: t,
            }),
          })
        },
        j = r(8459),
        y = r(1523),
        O = r(2541),
        _ = r(6182),
        P = r.n(_)
      function E(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function Z(e) {
        var t,
          r,
          n,
          { collection: h } = e,
          v = (0, c.useRouter)(),
          b = (0, y.j)(),
          g = ((e) => {
            var { collection: t } = e,
              r = null === t || void 0 === t ? void 0 : t.meta.selectedFacets,
              { asPath: n } = (0, c.useRouter)(),
              s = (0, u.useMemo)(() => {
                var e = (0, a.Q)(new URL(n, 'http://localhost'))
                return (
                  0 === e.selectedFacets.length && (e.selectedFacets = r),
                  (0, o.Z)(e).href
                )
              }, [n, r])
            return (0, u.useMemo)(() => (0, a.Q)(new URL(s)), [s])
          })(e),
          { page: O } = g,
          _ =
            null !== (t = null === h || void 0 === h ? void 0 : h.seo.title) &&
            void 0 !== t
              ? t
              : P().seo.title,
          E =
            null !==
              (r = null === h || void 0 === h ? void 0 : h.seo.description) &&
            void 0 !== r
              ? r
              : P().seo.title,
          Z = 0 !== O ? '?page='.concat(O) : '',
          [I] = v.asPath.split('?'),
          S = ''.concat(P().storeUrl).concat(I).concat(Z)
        return (0, x.jsxs)(
          s.z,
          k(
            k({ onChange: b, itemsPerPage: j.g }, g),
            {},
            {
              children: [
                (0, x.jsx)(i.PB, {
                  title: _,
                  description: E,
                  titleTemplate: P().seo.titleTemplate,
                  canonical: S,
                  openGraph: { type: 'website', title: _, description: E },
                }),
                (0, x.jsx)(i.gR, {
                  itemListElements:
                    null !==
                      (n =
                        null === h || void 0 === h
                          ? void 0
                          : h.breadcrumbList.itemListElement) && void 0 !== n
                      ? n
                      : [],
                }),
                (0, x.jsx)(d.Z, {
                  breadcrumbList:
                    null === h || void 0 === h
                      ? void 0
                      : h.breadcrumbList.itemListElement,
                  name: _,
                }),
                (0, x.jsx)(l.Z, {
                  variant: 'secondary',
                  title: _,
                  subtitle: 'All the amazing '.concat(
                    _,
                    ' from the brands we partner with.'
                  ),
                  imageSrc:
                    'https://storeframework.vtexassets.com/arquivos/ids/190897/Photo.jpg',
                  imageAlt: 'Quest 2 Controller on a table',
                  icon: (0, x.jsx)(m.Z, {
                    name: 'Headphones',
                    width: 48,
                    height: 48,
                    weight: 'thin',
                  }),
                }),
                (0, x.jsx)(f.Z, { title: _ }),
                (0, x.jsx)(p.Z, {
                  first: j.K,
                  sort: 'score_desc',
                  title: 'You might also like',
                  withDivisor: !0,
                }),
                (0, x.jsx)(w, {}),
              ],
            }
          )
        )
      }
      Z.displayName = 'Page'
      var I = !0,
        S = (0, O.B)(Z)
    },
    5184: function (e, t, r) {
      'use strict'
      r.d(t, {
        m: function () {
          return s
        },
      })
      var n = r(8460),
        a = r(7294),
        o = r(5914),
        s = (e) => {
          var { products: t, title: r, page: s, pageSize: i } = e,
            {
              currency: { code: c },
            } = (0, o.kP)()
          return {
            sendViewItemListEvent: (0, a.useCallback)(() => {
              ;(0, n._)({
                name: 'view_item_list',
                params: {
                  item_list_name: r,
                  item_list_id: r,
                  items: t.map((e, t) => {
                    var { node: r } = e
                    return {
                      item_id: r.isVariantOf.productGroupID,
                      item_name: r.isVariantOf.name,
                      item_brand: r.brand.name,
                      item_variant: r.sku,
                      price: r.offers.offers[0].price,
                      index: s * i + t + 1,
                      discount:
                        r.offers.offers[0].listPrice - r.offers.offers[0].price,
                      currency: c,
                      item_variant_name: r.name,
                      product_reference_id: r.gtin,
                    }
                  }),
                },
              })
            }, [c, t, r, s, i]),
          }
        }
    },
    9854: function (e, t, r) {
      'use strict'
      r.d(t, {
        w: function () {
          return s
        },
      })
      var n = r(8460),
        a = r(7294),
        o = r(5914),
        s = (e) => {
          var { index: t, product: r, selectedOffer: s } = e,
            { slug: i } = r,
            {
              currency: { code: c },
            } = (0, o.kP)(),
            u = (0, a.useCallback)(() => {
              ;(0, n._)({
                name: 'select_item',
                params: {
                  items: [
                    {
                      item_id: r.isVariantOf.productGroupID,
                      item_name: r.isVariantOf.name,
                      item_brand: r.brand.name,
                      item_variant: r.sku,
                      index: t,
                      price: r.offers.offers[s].price,
                      discount:
                        r.offers.offers[s].listPrice - r.offers.offers[s].price,
                      currency: c,
                      item_variant_name: r.name,
                      product_reference_id: r.gtin,
                    },
                  ],
                },
              }),
                (0, n._)({
                  name: 'search_select_item',
                  params: {
                    url: window.location.href,
                    items: [
                      {
                        item_id: r.isVariantOf.productGroupID,
                        item_variant: r.sku,
                        index: t,
                      },
                    ],
                  },
                })
            }, [c, r, t, s])
          return {
            href: '/'.concat(i, '/p'),
            onClick: u,
            'data-testid': 'product-link',
          }
        }
    },
    881: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/[...slug]',
        function () {
          return r(7878)
        },
      ])
    },
    5855: function (e) {
      e.exports = {
        'fs-product-card': 'product-card_fs-product-card__1pxGU',
        fsProductCard: 'product-card_fs-product-card__1pxGU',
      }
    },
    5313: function (e) {
      e.exports = {
        'fs-hero': 'hero_fs-hero__PIPrK',
        fsHero: 'hero_fs-hero__PIPrK',
      }
    },
    5585: function (e) {
      e.exports = {
        'fs-product-shelf': 'product-shelf_fs-product-shelf__65g4z',
        fsProductShelf: 'product-shelf_fs-product-shelf__65g4z',
      }
    },
    4538: function (e) {
      e.exports = {
        'fs-scroll-to-top-button':
          'scroll-to-top-button_fs-scroll-to-top-button__KrFt7',
        fsScrollToTopButton:
          'scroll-to-top-button_fs-scroll-to-top-button__KrFt7',
      }
    },
    346: function (e) {
      e.exports = {
        'fs-price': 'price_fs-price__7Y_0s',
        fsPrice: 'price_fs-price__7Y_0s',
      }
    },
  },
  function (e) {
    e.O(0, [962, 727, 866, 774, 888, 179], function () {
      return (t = 881), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
