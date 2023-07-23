'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [204],
  {
    6321: function (e, t, n) {
      n.d(t, {
        _: function () {
          return i
        },
        z: function () {
          return s
        },
      })
      var r = n(7294),
        a = n(670)
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
      var u = n(3264)
      const i = (0, r.createContext)(void 0),
        s = ({ children: e, itemsPerPage: t, onChange: n, ...a }) => {
          const { state: s, ...c } = (0, u.X)(a, n),
            { pages: d, ...l } = ((e) => {
              const [t, n] = (0, r.useReducer)(o, void 0, () => [e])
              return {
                pages: t,
                ...(0, r.useMemo)(
                  () => ({
                    addPrevPage: () => n({ type: 'addPrev' }),
                    addNextPage: () => n({ type: 'addNext' }),
                    resetInfiniteScroll: (e) =>
                      n({ type: 'reset', payload: e }),
                  }),
                  []
                ),
              }
            })(s.page),
            f = (0, r.useMemo)(
              () => ({ state: s, ...c, pages: d, ...l, itemsPerPage: t }),
              [l, t, d, c, s]
            )
          return r.createElement(i.Provider, { value: f }, e)
        }
    },
    3425: function (e, t, n) {
      n.d(t, {
        uL: function () {
          return u
        },
        wB: function () {
          return i
        },
        wb: function () {
          return o
        },
      })
      var r = n(670)
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
        u = (e, t, n) => {
          if (!0 === n) {
            const n = e.findIndex((e) => e.key === t.key)
            if (n > -1) return e.map((e, r) => (r === n ? t : e))
          }
          return [...e, t]
        },
        i = (e, t) =>
          void 0 !== e.find((e) => e.key === t.key && e.value === t.value)
            ? ((e, t) => {
                const { value: n } = t,
                  a = e.findIndex((e) => e.value === n)
                if (a < 0)
                  throw new r.q(`Cannot remove ${n} from search params`)
                return e.filter((e, t) => 0 === t || t !== a)
              })(e, t)
            : u(e, t, !1)
    },
    2888: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return u
        },
      })
      var r = n(670),
        a = n(3425),
        o = n(3264)
      const u = ({ pathname: e, searchParams: t }) => {
        const n = (0, o.j)({
          base: e,
          term: t.get('q') ?? null,
          sort: t.get('sort') ?? void 0,
          page: Number(t.get('page') ?? 0),
        })
        if (!(0, a.wb)(n.sort)) throw new r.q(`Uknown sorting option ${n.sort}`)
        const u = t.get('facets')?.split(',') ?? []
        for (const r of u) {
          const e = t.getAll(r)
          for (const t of e)
            n.selectedFacets = (0, a.uL)(n.selectedFacets, { key: r, value: t })
        }
        return n
      }
    },
    2549: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i
        },
      })
      var r = n(7294),
        a = n(3364),
        o = n(7794)
      const u = (e) => {
          const { pathname: t, search: n } = (0, a.Z)(e)
          return `${t}${n}`
        },
        i = (e) => {
          const { pages: t, itemsPerPage: n, state: a } = (0, o.R)(),
            i = Math.ceil(e / n),
            s = Number(t[t.length - 1]) + 1,
            c = t[0] - 1
          return (0, r.useMemo)(
            () => ({
              next: s < i && { cursor: s, link: u({ ...a, page: s }) },
              prev: c > -1 && { cursor: c, link: u({ ...a, page: c }) },
            }),
            [s, c, a, i]
          )
        }
    },
    7794: function (e, t, n) {
      n.d(t, {
        R: function () {
          return u
        },
      })
      var r = n(6321),
        a = n(7294),
        o = n(670)
      const u = () =>
        ((e) => {
          const t = (0, a.useContext)(e)
          if (void 0 !== t) return t
          throw new o.q(
            `${e.displayName ?? 'Context'} needs to be on the React tree`
          )
        })(r._)
    },
    4914: function (e, t, n) {
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { testId: e = 'store-badge', children: t, ...n },
        a
      ) {
        return r.createElement(
          'div',
          Object.assign({ ref: a, 'data-fs-badge': !0, 'data-testid': e }, n),
          t
        )
      })
      t.Z = a
    },
    9030: function (e, t, n) {
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { testId: e = 'store-checkbox', ...t },
        n
      ) {
        return r.createElement(
          'input',
          Object.assign(
            {
              ref: n,
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
    571: function (e, t, n) {
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { testId: e = 'store-label', children: t, ...n },
        a
      ) {
        return r.createElement(
          'label',
          Object.assign({ ref: a, 'data-fs-label': !0, 'data-testid': e }, n),
          t
        )
      })
      t.Z = a
    },
    9688: function (e, t, n) {
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        {
          as: e = 'span',
          testId: t = 'store-price',
          value: n,
          formatter: a = (e) => e,
          variant: o = 'selling',
          ...u
        },
        i
      ) {
        const s = a(n, o)
        return r.createElement(
          e,
          Object.assign(
            {
              ref: i,
              'data-fs-price': !0,
              'data-testid': t,
              'data-variant': o,
            },
            u
          ),
          s
        )
      })
      t.Z = a
    },
    5853: function (e, t, n) {
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { children: e, testId: t = 'store-select', ...n },
        a
      ) {
        return r.createElement(
          'select',
          Object.assign({ ref: a, 'data-fs-select': !0, 'data-testid': t }, n),
          e
        )
      })
      t.Z = a
    },
    9229: function (e, t, n) {
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { testId: e = 'store-skeleton', ...t },
        n
      ) {
        return r.createElement(
          'div',
          Object.assign({ ref: n, 'data-fs-skeleton': !0, 'data-testid': e }, t)
        )
      })
      t.Z = a
    },
    5811: function (e, t, n) {
      var r = n(7294),
        a = n(8164)
      const o = ({ divider: e, testId: t }) => {
          const n = {
            'data-breadcrumb-divider': !0,
            'aria-hidden': !0,
            'data-testid': `${t}-divider`,
          }
          return r.isValidElement(e)
            ? r.cloneElement(e, n)
            : r.createElement('span', Object.assign({}, n), e ?? '/')
        },
        u = ({ children: e, isLastItem: t, divider: n, testId: a }) => {
          const u = {
            'data-testid': `${a}-item`,
            'data-breadcrumb-item': !t || 'current',
            'aria-current': t ? 'page' : void 0,
          }
          return r.isValidElement(e)
            ? r.createElement(
                'li',
                { 'data-breadcrumb-list-item': !0 },
                r.cloneElement(e, u),
                t ? null : r.createElement(o, { divider: n, testId: a })
              )
            : r.createElement(
                'li',
                { 'data-breadcrumb-list-item': !0 },
                r.createElement(
                  'span',
                  Object.assign({}, u),
                  e,
                  t ? null : r.createElement(o, { divider: n, testId: a })
                )
              )
        },
        i = (0, r.forwardRef)(function (
          { children: e, divider: t, testId: n = 'store-breadcrumb', ...o },
          i
        ) {
          return r.createElement(
            'nav',
            Object.assign(
              {
                'aria-label': 'Breadcrumb',
                role: 'navigation',
                ref: i,
                'data-fs-breadcrumb': !0,
                'data-testid': n,
              },
              o
            ),
            r.createElement(
              a.Z,
              { 'data-breadcrumb-list': !0, variant: 'ordered' },
              r.Children.toArray(e).map((e, a, o) => {
                const i = a === o.length - 1
                return r.createElement(
                  u,
                  {
                    isLastItem: i,
                    divider: t,
                    key: `breadcrumb-${a}`,
                    testId: n,
                  },
                  e
                )
              })
            )
          )
        })
      t.Z = i
    },
    673: function (e, t, n) {
      var r = n(7294),
        a = n(7483)
      t.Z = ({
        children: e,
        isOpen: t = !1,
        onDismiss: n,
        id: o = 'store-dropdown',
      }) => {
        const [u, i] = (0, r.useState)(t),
          s = (0, r.useRef)([]),
          c = (0, r.useRef)(0),
          d = (0, r.useRef)(null),
          l = (0, r.useCallback)(() => {
            i(!1), n?.(), d.current?.focus()
          }, [n]),
          f = () => {
            i(!0)
          },
          m = (0, r.useCallback)(() => {
            i((e) => (e && (n?.(), d.current?.focus()), !e))
          }, [n])
        ;(0, r.useEffect)(() => {
          i(t)
        }, [t]),
          (0, r.useEffect)(() => {
            u && s?.current[0]?.focus()
          }, [u]),
          (0, r.useEffect)(() => {
            let e = !0
            const t = (t) => {
              const n = s?.current.some((e) => t.target === e)
              e ? (e = !1) : !n && l()
            }
            return (
              u
                ? document.addEventListener('click', t)
                : document.removeEventListener('click', t),
              () => {
                document.removeEventListener('click', t)
              }
            )
          }, [l, u])
        const v = (0, r.useMemo)(
          () => ({
            isOpen: u,
            close: l,
            open: f,
            toggle: m,
            dropdownButtonRef: d,
            onDismiss: n,
            selectedDropdownItemIndexRef: c,
            dropdownItemsRef: s,
            id: o,
          }),
          [l, o, u, n, m]
        )
        return r.createElement(a.Z.Provider, { value: v }, e)
      }
    },
    2844: function (e, t, n) {
      var r = n(7294),
        a = n(8987)
      const o = (0, r.forwardRef)(function (
        { children: e, testId: t = 'store-dropdown-button', ...n },
        o
      ) {
        const { toggle: u, dropdownButtonRef: i, isOpen: s, id: c } = (0, a.x)()
        return (
          (0, r.useImperativeHandle)(o, () => i.current, [i]),
          r.createElement(
            'button',
            Object.assign(
              {
                'data-fs-dropdown-button': !0,
                onClick: u,
                'data-testid': t,
                ref: i,
                'aria-expanded': s,
                'aria-haspopup': 'menu',
                'aria-controls': c,
              },
              n
            ),
            e
          )
        )
      })
      t.Z = o
    },
    8513: function (e, t, n) {
      var r = n(7294),
        a = n(8987)
      const o = (0, r.forwardRef)(function (
        { children: e, onClick: t, testId: n = 'store-dropdown-item', ...o },
        u
      ) {
        const {
            dropdownItemsRef: i,
            selectedDropdownItemIndexRef: s,
            close: c,
          } = (0, a.x)(),
          [d, l] = (0, r.useState)(0),
          f = (0, r.useRef)(),
          m = () => {
            ;(s.current = d), i?.current[s.current]?.focus()
          }
        return (
          (0, r.useImperativeHandle)(u, () => f.current, []),
          r.createElement(
            'button',
            Object.assign(
              {
                'data-fs-dropdown-item': !0,
                'data-testid': n,
                ref: (e) => {
                  e &&
                    !i?.current.includes(e) &&
                    (i?.current.push(e),
                    l(i?.current.findIndex((t) => t === e) ?? 0)),
                    (f.current = e)
                },
                onFocus: m,
                onMouseEnter: m,
                onClick: (e) => {
                  t?.(e), c?.()
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
    7407: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u
        },
      })
      var r = n(7294),
        a = n(3935),
        o = n(8987)
      var u = ({
        children: e,
        testId: t = 'store-dropdown-menu',
        style: n,
        ...u
      }) => {
        const {
            isOpen: i,
            close: s,
            dropdownItemsRef: c,
            selectedDropdownItemIndexRef: d,
            id: l,
          } = (0, o.x)(),
          f = (() => {
            const { dropdownButtonRef: e } = (0, o.x)(),
              t = 'undefined' !== typeof window,
              n = e?.current?.getBoundingClientRect(),
              r = n?.top ?? 0,
              a = n?.height ?? 0,
              u = n?.left ?? 0
            return {
              position: 'absolute',
              top: r + a + (t ? document?.documentElement?.scrollTop : 0),
              left: u + (t ? document?.documentElement?.scrollLeft : 0),
            }
          })(),
          m = r.Children.toArray(e).length
        return i
          ? (0, a.createPortal)(
              r.createElement(
                'div',
                {
                  role: 'presentation',
                  'data-fs-dropdown-overlay': !0,
                  onKeyDown: (e) => {
                    e.defaultPrevented ||
                      'Enter' === e.key ||
                      (e.preventDefault(),
                      'Escape' === e.key && s?.(),
                      'ArrowDown' === e.key &&
                        (d.current < m - 1 ? d.current++ : (d.current = 0),
                        c?.current[d.current]?.focus()),
                      'ArrowUp' === e.key &&
                        (d.current > 0 ? d.current-- : (d.current = m - 1),
                        c?.current[d.current]?.focus()),
                      'Home' === e.key &&
                        ((d.current = 0), c?.current[d.current]?.focus()),
                      'End' === e.key &&
                        ((d.current = m - 1), c?.current[d.current]?.focus()),
                      e.stopPropagation())
                  },
                  'data-testid': `${t}-overlay`,
                },
                r.createElement(
                  'div',
                  Object.assign(
                    {
                      role: 'menu',
                      'aria-orientation': 'vertical',
                      'data-fs-dropdown-menu': !0,
                      'data-testid': t,
                      style: { ...f, ...n },
                      id: l,
                    },
                    u
                  ),
                  e
                )
              ),
              document.body
            )
          : ((c.current = []), null)
      }
    },
    7483: function (e, t, n) {
      const r = (0, n(7294).createContext)({
        isOpen: !1,
        dropdownButtonRef: null,
        selectedDropdownItemIndexRef: null,
        dropdownItemsRef: null,
        id: 'store-dropdown',
      })
      t.Z = r
    },
    8987: function (e, t, n) {
      n.d(t, {
        x: function () {
          return o
        },
      })
      var r = n(7294),
        a = n(7483)
      const o = () => {
        const e = (0, r.useContext)(a.Z)
        if (void 0 === e)
          throw new Error(
            'Do not use useDropdown hook outside the Dropdown context.'
          )
        return e
      }
    },
    4685: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i
        },
      })
      var r = n(7294),
        a = n(9688)
      const o = (e, t, n) => Math.round(((e - t) / (n - t)) * 100)
      var u = (0, r.forwardRef)(function (
        {
          min: e,
          max: t,
          onChange: n,
          onEnd: a,
          testId: u = 'store-slider',
          getAriaValueText: i,
          className: s,
          step: c,
          minValueLabelComponent: d,
          maxValueLabelComponent: l,
        },
        f
      ) {
        const m = (0, r.useMemo)(
            () => (t.absolute - e.absolute) / 100,
            [t.absolute, e.absolute]
          ),
          [v, p] = (0, r.useState)(() => o(e.selected, e.absolute, t.absolute)),
          [b, g] = (0, r.useState)(() => o(t.selected, e.absolute, t.absolute)),
          [h, w] = (0, r.useState)(() => Math.round(e.absolute + v * m)),
          [y, E] = (0, r.useState)(() => Math.round(e.absolute + b * m))
        return (
          (0, r.useImperativeHandle)(f, () => ({
            setSliderValues: (n) => {
              const r = Math.min(Number(n.min), y)
              if ((w(r), p(o(r, e.absolute, t.absolute)), n.max > t.absolute))
                return (
                  E(t.absolute), void g(o(t.absolute, e.absolute, t.absolute))
                )
              const a = Math.max(Number(n.max), h)
              E(a), g(o(a, e.absolute, t.absolute))
            },
          })),
          r.createElement(
            'div',
            { 'data-fs-slider': !0, 'data-testid': u, className: s },
            r.createElement('div', {
              'data-slider-range': !0,
              style: { left: `${v}%`, width: b - v + '%' },
            }),
            r.createElement('input', {
              type: 'range',
              min: Math.round(e.absolute),
              max: Math.round(t.absolute),
              value: h,
              step: c,
              onMouseUp: () => a?.({ min: h, max: y }),
              onTouchEnd: () => a?.({ min: h, max: y }),
              onChange: (r) => {
                const a = Math.min(Number(r.target.value), y)
                w(a), p(o(a, e.absolute, t.absolute)), n?.({ min: a, max: y })
              },
              'data-slider-thumb': 'left',
              'aria-valuemin': e.absolute,
              'aria-valuemax': t.absolute,
              'aria-valuenow': h,
              'aria-label': String(h),
              'aria-labelledby': i?.(h, 'min'),
            }),
            d && d(h),
            r.createElement('input', {
              type: 'range',
              min: Math.round(e.absolute),
              max: Math.round(t.absolute),
              value: y,
              step: c,
              onMouseUp: () => a?.({ min: h, max: y }),
              onTouchEnd: () => a?.({ min: h, max: y }),
              onChange: (r) => {
                const a = Math.max(Number(r.target.value), h)
                E(a), g(o(a, e.absolute, t.absolute)), n?.({ min: h, max: a })
              },
              'data-slider-thumb': 'right',
              'aria-valuemin': e.absolute,
              'aria-valuemax': t.absolute,
              'aria-valuenow': y,
              'aria-label': String(y),
              'aria-labelledby': i?.(y, 'max'),
            }),
            l && l(y)
          )
        )
      })
      var i = (0, r.forwardRef)(function (
        {
          className: e,
          formatter: t,
          max: n,
          min: o,
          step: i,
          onChange: s,
          onEnd: c,
          testId: d = 'store-price-range',
          variant: l,
          'aria-label': f,
        },
        m
      ) {
        const v = (0, r.useRef)()
        return (
          (0, r.useImperativeHandle)(m, () => ({
            setPriceRangeValues: (e) => {
              s?.(e), v.current?.setSliderValues(e)
            },
          })),
          r.createElement(
            'div',
            { 'data-fs-price-range': !0, 'data-testid': d, className: e },
            r.createElement(u, {
              ref: v,
              min: o,
              max: n,
              step: i,
              onEnd: c,
              'aria-label': f,
              onChange: (e) => s?.(e),
              minValueLabelComponent: (e) => {
                const o = (e / n.absolute) * 100
                return r.createElement(a.Z, {
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
                const o = (e / n.absolute) * 100
                return r.createElement(a.Z, {
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
    8100: function (e, t, n) {
      n.d(t, {
        JG: function () {
          return q
        },
        ZP: function () {
          return K
        },
        kY: function () {
          return J
        },
      })
      var r = n(7294)
      function a(e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function u(e) {
            try {
              s(r.next(e))
            } catch (t) {
              o(t)
            }
          }
          function i(e) {
            try {
              s(r.throw(e))
            } catch (t) {
              o(t)
            }
          }
          function s(e) {
            var t
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(u, i)
          }
          s((r = r.apply(e, t || [])).next())
        })
      }
      function o(e, t) {
        var n,
          r,
          a,
          o,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1]
              return a[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (o = { next: i(0), throw: i(1), return: i(2) }),
          'function' === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this
            }),
          o
        )
        function i(o) {
          return function (i) {
            return (function (o) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; u; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o
                      break
                    case 4:
                      return u.label++, { value: o[1], done: !1 }
                    case 5:
                      u.label++, (r = o[1]), (o = [0])
                      continue
                    case 7:
                      ;(o = u.ops.pop()), u.trys.pop()
                      continue
                    default:
                      if (
                        !(a = (a = u.trys).length > 0 && a[a.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        u = 0
                        continue
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        u.label = o[1]
                        break
                      }
                      if (6 === o[0] && u.label < a[1]) {
                        ;(u.label = a[1]), (a = o)
                        break
                      }
                      if (a && u.label < a[2]) {
                        ;(u.label = a[2]), u.ops.push(o)
                        break
                      }
                      a[2] && u.ops.pop(), u.trys.pop()
                      continue
                  }
                  o = t.call(e, u)
                } catch (i) {
                  ;(o = [6, i]), (r = 0)
                } finally {
                  n = a = 0
                }
              if (5 & o[0]) throw o[1]
              return { value: o[0] ? o[1] : void 0, done: !0 }
            })([o, i])
          }
        }
      }
      var u,
        i = function () {},
        s = i(),
        c = Object,
        d = function (e) {
          return e === s
        },
        l = function (e) {
          return 'function' == typeof e
        },
        f = function (e, t) {
          return c.assign({}, e, t)
        },
        m = 'undefined',
        v = function () {
          return typeof window != m
        },
        p = new WeakMap(),
        b = 0,
        g = function (e) {
          var t,
            n,
            r = typeof e,
            a = e && e.constructor,
            o = a == Date
          if (c(e) !== e || o || a == RegExp)
            t = o
              ? e.toJSON()
              : 'symbol' == r
              ? e.toString()
              : 'string' == r
              ? JSON.stringify(e)
              : '' + e
          else {
            if ((t = p.get(e))) return t
            if (((t = ++b + '~'), p.set(e, t), a == Array)) {
              for (t = '@', n = 0; n < e.length; n++) t += g(e[n]) + ','
              p.set(e, t)
            }
            if (a == c) {
              t = '#'
              for (var u = c.keys(e).sort(); !d((n = u.pop())); )
                d(e[n]) || (t += n + ':' + g(e[n]) + ',')
              p.set(e, t)
            }
          }
          return t
        },
        h = !0,
        w = v(),
        y = typeof document != m,
        E =
          w && window.addEventListener
            ? window.addEventListener.bind(window)
            : i,
        x = y ? document.addEventListener.bind(document) : i,
        R =
          w && window.removeEventListener
            ? window.removeEventListener.bind(window)
            : i,
        k = y ? document.removeEventListener.bind(document) : i,
        I = {
          isOnline: function () {
            return h
          },
          isVisible: function () {
            var e = y && document.visibilityState
            return d(e) || 'hidden' !== e
          },
        },
        C = {
          initFocus: function (e) {
            return (
              x('visibilitychange', e),
              E('focus', e),
              function () {
                k('visibilitychange', e), R('focus', e)
              }
            )
          },
          initReconnect: function (e) {
            var t = function () {
                ;(h = !0), e()
              },
              n = function () {
                h = !1
              }
            return (
              E('online', t),
              E('offline', n),
              function () {
                R('online', t), R('offline', n)
              }
            )
          },
        },
        O = !v() || 'Deno' in window,
        S = function (e) {
          return v() && typeof window.requestAnimationFrame != m
            ? window.requestAnimationFrame(e)
            : setTimeout(e, 1)
        },
        P = O ? r.useEffect : r.useLayoutEffect,
        M = 'undefined' !== typeof navigator && navigator.connection,
        V =
          !O &&
          M &&
          (['slow-2g', '2g'].includes(M.effectiveType) || M.saveData),
        D = function (e) {
          if (l(e))
            try {
              e = e()
            } catch (n) {
              e = ''
            }
          var t = [].concat(e)
          return [
            (e =
              'string' == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? g(e)
                : ''),
            t,
            e ? '$swr$' + e : '',
          ]
        },
        L = new WeakMap(),
        Z = function (e, t, n, r, a, o, u) {
          void 0 === u && (u = !0)
          var i = L.get(e),
            s = i[0],
            c = i[1],
            d = i[3],
            l = s[t],
            f = c[t]
          if (u && f) for (var m = 0; m < f.length; ++m) f[m](n, r, a)
          return o && (delete d[t], l && l[0])
            ? l[0](2).then(function () {
                return e.get(t)
              })
            : e.get(t)
        },
        N = 0,
        T = function () {
          return ++N
        },
        $ = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return a(void 0, void 0, void 0, function () {
            var t, n, r, a, u, i, c, m, v, p, b, g, h, w, y, E, x, R, k, I, C
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (
                    ((t = e[0]),
                    (n = e[1]),
                    (r = e[2]),
                    (a = e[3]),
                    (i =
                      !!d(
                        (u =
                          'boolean' === typeof a ? { revalidate: a } : a || {})
                          .populateCache
                      ) || u.populateCache),
                    (c = !1 !== u.revalidate),
                    (m = !1 !== u.rollbackOnError),
                    (v = u.optimisticData),
                    (p = D(n)),
                    (b = p[0]),
                    (g = p[2]),
                    !b)
                  )
                    return [2]
                  if (((h = L.get(t)), (w = h[2]), e.length < 3))
                    return [2, Z(t, b, t.get(b), s, s, c, !0)]
                  if (
                    ((y = r),
                    (x = T()),
                    (w[b] = [x, 0]),
                    (R = !d(v)),
                    (k = t.get(b)),
                    R && ((I = l(v) ? v(k) : v), t.set(b, I), Z(t, b, I)),
                    l(y))
                  )
                    try {
                      y = y(t.get(b))
                    } catch (O) {
                      E = O
                    }
                  return y && l(y.then)
                    ? [
                        4,
                        y.catch(function (e) {
                          E = e
                        }),
                      ]
                    : [3, 2]
                case 1:
                  if (((y = o.sent()), x !== w[b][0])) {
                    if (E) throw E
                    return [2, y]
                  }
                  E && R && m && ((i = !0), (y = k), t.set(b, k)), (o.label = 2)
                case 2:
                  return (
                    i &&
                      (E || (l(i) && (y = i(y, k)), t.set(b, y)),
                      t.set(g, f(t.get(g), { error: E }))),
                    (w[b][1] = T()),
                    [4, Z(t, b, y, E, s, c, !!i)]
                  )
                case 3:
                  if (((C = o.sent()), E)) throw E
                  return [2, i ? C : y]
              }
            })
          })
        },
        j = function (e, t) {
          for (var n in e) e[n][0] && e[n][0](t)
        },
        _ = function (e, t) {
          if (!L.has(e)) {
            var n = f(C, t),
              r = {},
              a = $.bind(s, e),
              o = i
            if ((L.set(e, [r, {}, {}, {}, a]), !O)) {
              var u = n.initFocus(setTimeout.bind(s, j.bind(s, r, 0))),
                c = n.initReconnect(setTimeout.bind(s, j.bind(s, r, 1)))
              o = function () {
                u && u(), c && c(), L.delete(e)
              }
            }
            return [e, a, o]
          }
          return [e, L.get(e)[4]]
        },
        A = _(new Map()),
        F = A[0],
        q = A[1],
        B = f(
          {
            onLoadingSlow: i,
            onSuccess: i,
            onError: i,
            onErrorRetry: function (e, t, n, r, a) {
              var o = n.errorRetryCount,
                u = a.retryCount,
                i =
                  ~~((Math.random() + 0.5) * (1 << (u < 8 ? u : 8))) *
                  n.errorRetryInterval
              ;(!d(o) && u > o) || setTimeout(r, i, a)
            },
            onDiscarded: i,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: V ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: V ? 5e3 : 3e3,
            compare: function (e, t) {
              return g(e) == g(t)
            },
            isPaused: function () {
              return !1
            },
            cache: F,
            mutate: q,
            fallback: {},
          },
          I
        ),
        H = function (e, t) {
          var n = f(e, t)
          if (t) {
            var r = e.use,
              a = e.fallback,
              o = t.use,
              u = t.fallback
            r && o && (n.use = r.concat(o)), a && u && (n.fallback = f(a, u))
          }
          return n
        },
        U = (0, r.createContext)({}),
        W = function (e) {
          return l(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
        },
        J = function () {
          return f(B, (0, r.useContext)(U))
        },
        G = function (e, t, n) {
          var r = t[e] || (t[e] = [])
          return (
            r.push(n),
            function () {
              var e = r.indexOf(n)
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop())
            }
          )
        },
        z = { dedupe: !0 },
        K =
          (c.defineProperty(
            function (e) {
              var t = e.value,
                n = H((0, r.useContext)(U), t),
                a = t && t.provider,
                o = (0, r.useState)(function () {
                  return a ? _(a(n.cache || F), t) : s
                })[0]
              return (
                o && ((n.cache = o[0]), (n.mutate = o[1])),
                P(function () {
                  return o ? o[2] : s
                }, []),
                (0, r.createElement)(U.Provider, f(e, { value: n }))
              )
            },
            'default',
            { value: B }
          ),
          (u = function (e, t, n) {
            var u = n.cache,
              i = n.compare,
              c = n.fallbackData,
              m = n.suspense,
              v = n.revalidateOnMount,
              p = n.refreshInterval,
              b = n.refreshWhenHidden,
              g = n.refreshWhenOffline,
              h = L.get(u),
              w = h[0],
              y = h[1],
              E = h[2],
              x = h[3],
              R = D(e),
              k = R[0],
              I = R[1],
              C = R[2],
              M = (0, r.useRef)(!1),
              V = (0, r.useRef)(!1),
              N = (0, r.useRef)(k),
              j = (0, r.useRef)(t),
              _ = (0, r.useRef)(n),
              A = function () {
                return _.current
              },
              F = function () {
                return A().isVisible() && A().isOnline()
              },
              q = function (e) {
                return u.set(C, f(u.get(C), e))
              },
              B = u.get(k),
              H = d(c) ? n.fallback[k] : c,
              U = d(B) ? H : B,
              W = u.get(C) || {},
              J = W.error,
              K = !M.current,
              Q = function () {
                return K && !d(v)
                  ? v
                  : !A().isPaused() &&
                      (m
                        ? !d(U) && n.revalidateIfStale
                        : d(U) || n.revalidateIfStale)
              },
              X = !(!k || !t) && (!!W.isValidating || (K && Q())),
              Y = (function (e, t) {
                var n = (0, r.useState)({})[1],
                  a = (0, r.useRef)(e),
                  o = (0, r.useRef)({ data: !1, error: !1, isValidating: !1 }),
                  u = (0, r.useCallback)(function (e) {
                    var r = !1,
                      u = a.current
                    for (var i in e) {
                      var s = i
                      u[s] !== e[s] && ((u[s] = e[s]), o.current[s] && (r = !0))
                    }
                    r && !t.current && n({})
                  }, [])
                return (
                  P(function () {
                    a.current = e
                  }),
                  [a, o.current, u]
                )
              })({ data: U, error: J, isValidating: X }, V),
              ee = Y[0],
              te = Y[1],
              ne = Y[2],
              re = (0, r.useCallback)(
                function (e) {
                  return a(void 0, void 0, void 0, function () {
                    var t, r, a, c, f, m, v, p, b, g, h, w, y
                    return o(this, function (o) {
                      switch (o.label) {
                        case 0:
                          if (
                            ((t = j.current),
                            !k || !t || V.current || A().isPaused())
                          )
                            return [2, !1]
                          ;(c = !0),
                            (f = e || {}),
                            (m = !x[k] || !f.dedupe),
                            (v = function () {
                              return !V.current && k === N.current && M.current
                            }),
                            (p = function () {
                              var e = x[k]
                              e && e[1] === a && delete x[k]
                            }),
                            (b = { isValidating: !1 }),
                            (g = function () {
                              q({ isValidating: !1 }), v() && ne(b)
                            }),
                            q({ isValidating: !0 }),
                            ne({ isValidating: !0 }),
                            (o.label = 1)
                        case 1:
                          return (
                            o.trys.push([1, 3, , 4]),
                            m &&
                              (Z(u, k, ee.current.data, ee.current.error, !0),
                              n.loadingTimeout &&
                                !u.get(k) &&
                                setTimeout(function () {
                                  c && v() && A().onLoadingSlow(k, n)
                                }, n.loadingTimeout),
                              (x[k] = [t.apply(void 0, I), T()])),
                            (y = x[k]),
                            (r = y[0]),
                            (a = y[1]),
                            [4, r]
                          )
                        case 2:
                          return (
                            (r = o.sent()),
                            m && setTimeout(p, n.dedupingInterval),
                            x[k] && x[k][1] === a
                              ? (q({ error: s }),
                                (b.error = s),
                                (h = E[k]),
                                !d(h) && (a <= h[0] || a <= h[1] || 0 === h[1])
                                  ? (g(),
                                    m && v() && A().onDiscarded(k),
                                    [2, !1])
                                  : (i(ee.current.data, r)
                                      ? (b.data = ee.current.data)
                                      : (b.data = r),
                                    i(u.get(k), r) || u.set(k, r),
                                    m && v() && A().onSuccess(r, k, n),
                                    [3, 4]))
                              : (m && v() && A().onDiscarded(k), [2, !1])
                          )
                        case 3:
                          return (
                            (w = o.sent()),
                            p(),
                            A().isPaused() ||
                              (q({ error: w }),
                              (b.error = w),
                              m &&
                                v() &&
                                (A().onError(w, k, n),
                                (('boolean' === typeof n.shouldRetryOnError &&
                                  n.shouldRetryOnError) ||
                                  (l(n.shouldRetryOnError) &&
                                    n.shouldRetryOnError(w))) &&
                                  F() &&
                                  A().onErrorRetry(w, k, n, re, {
                                    retryCount: (f.retryCount || 0) + 1,
                                    dedupe: !0,
                                  }))),
                            [3, 4]
                          )
                        case 4:
                          return (
                            (c = !1),
                            g(),
                            v() && m && Z(u, k, b.data, b.error, !1),
                            [2, !0]
                          )
                      }
                    })
                  })
                },
                [k]
              ),
              ae = (0, r.useCallback)(
                $.bind(s, u, function () {
                  return N.current
                }),
                []
              )
            if (
              (P(function () {
                ;(j.current = t), (_.current = n)
              }),
              P(
                function () {
                  if (k) {
                    var e = k !== N.current,
                      t = re.bind(s, z),
                      n = 0,
                      r = G(k, y, function (e, t, n) {
                        ne(
                          f(
                            { error: t, isValidating: n },
                            i(ee.current.data, e) ? s : { data: e }
                          )
                        )
                      }),
                      a = G(k, w, function (e) {
                        if (0 == e) {
                          var r = Date.now()
                          A().revalidateOnFocus &&
                            r > n &&
                            F() &&
                            ((n = r + A().focusThrottleInterval), t())
                        } else if (1 == e)
                          A().revalidateOnReconnect && F() && t()
                        else if (2 == e) return re()
                      })
                    return (
                      (V.current = !1),
                      (N.current = k),
                      (M.current = !0),
                      e && ne({ data: U, error: J, isValidating: X }),
                      Q() && (d(U) || O ? t() : S(t)),
                      function () {
                        ;(V.current = !0), r(), a()
                      }
                    )
                  }
                },
                [k, re]
              ),
              P(
                function () {
                  var e
                  function t() {
                    var t = l(p) ? p(U) : p
                    t && -1 !== e && (e = setTimeout(n, t))
                  }
                  function n() {
                    ee.current.error ||
                    (!b && !A().isVisible()) ||
                    (!g && !A().isOnline())
                      ? t()
                      : re(z).then(t)
                  }
                  return (
                    t(),
                    function () {
                      e && (clearTimeout(e), (e = -1))
                    }
                  )
                },
                [p, b, g, re]
              ),
              (0, r.useDebugValue)(U),
              m && d(U) && k)
            )
              throw (
                ((j.current = t),
                (_.current = n),
                (V.current = !1),
                d(J) ? re(z) : J)
              )
            return {
              mutate: ae,
              get data() {
                return (te.data = !0), U
              },
              get error() {
                return (te.error = !0), J
              },
              get isValidating() {
                return (te.isValidating = !0), X
              },
            }
          }),
          function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            var n = J(),
              r = W(e),
              a = r[0],
              o = r[1],
              i = r[2],
              s = H(n, i),
              c = u,
              d = s.use
            if (d) for (var l = d.length; l-- > 0; ) c = d[l](c)
            return c(a, o || s.fetcher, s)
          })
    },
  },
])
