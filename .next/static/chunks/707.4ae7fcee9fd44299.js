;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [707],
  {
    8707: function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, {
          default: function () {
            return J
          },
        })
      var n = t(9499),
        c = t(4730),
        a = t(8164),
        s = t(7294),
        i = t(2497),
        o = t(4492),
        l = t(3438),
        u = t(6193),
        d = t(9379),
        f = t(7902),
        p = t(5346),
        h = t(9854),
        O = t(3588),
        j = t(3624),
        b = t.n(j),
        g = t(5893),
        m = ['product', 'index'],
        v = ['onClick', 'href']
      function y(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function P(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? y(Object(t), !0).forEach(function (r) {
                ;(0, n.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      var x = function (e) {
          var { product: r, index: t } = e,
            n = (0, c.Z)(e, m),
            { onSearchInputSelection: a } = (0, O.ZP)(),
            s = (0, h.w)({ product: r, selectedOffer: 0, index: t }),
            { onClick: j, href: y } = s,
            x = (0, c.Z)(s, v),
            {
              isVariantOf: { name: w },
              image: [_],
              offers: {
                lowPrice: S,
                offers: [{ listPrice: Z }],
              },
            } = r
          return (0, g.jsx)(
            i.Z,
            P(
              P(
                {
                  'data-fs-search-product-card': !0,
                  className: b().fsSearchProductCard,
                  'data-testid': 'search-product-card',
                },
                n
              ),
              {},
              {
                children: (0, g.jsx)(
                  d.Z,
                  P(
                    P({}, x),
                    {},
                    {
                      'data-fs-search-product-card-link': !0,
                      href: y,
                      title: w,
                      variant: 'display',
                      onClick: () => {
                        j(), null === a || void 0 === a || a(w, y)
                      },
                      children: (0, g.jsxs)(o.Z, {
                        'data-fs-search-product-card-content': !0,
                        children: [
                          (0, g.jsx)(l.Z, {
                            'data-fs-search-product-card-image': !0,
                            children: (0, g.jsx)(u.E, {
                              src: _.url,
                              alt: _.alternateName,
                              width: 56,
                              height: 56,
                            }),
                          }),
                          (0, g.jsxs)('div', {
                            'data-fs-search-product-card-summary': !0,
                            children: [
                              (0, g.jsx)('p', {
                                className: 'text__title-mini',
                                'data-fs-search-product-card-title': !0,
                                children: w,
                              }),
                              (0, g.jsxs)('span', {
                                'data-fs-search-product-card-prices': !0,
                                children: [
                                  (0, g.jsx)(f.Z, {
                                    value: Z,
                                    formatter: p.P,
                                    testId: 'list-price',
                                    'data-value': Z,
                                    variant: 'listing',
                                    classes: 'text__legend',
                                    SRText: 'Original price:',
                                  }),
                                  (0, g.jsx)(f.Z, {
                                    value: S,
                                    formatter: p.P,
                                    testId: 'price',
                                    'data-value': S,
                                    variant: 'spot',
                                    classes: 'text__title-mini',
                                    SRText: 'Price:',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }
                  )
                ),
              }
            )
          )
        },
        w = t(2478),
        _ = t(1393),
        S = t.n(_),
        Z = ['testId', 'term', 'terms', 'products']
      function k(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function D(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? k(Object(t), !0).forEach(function (r) {
                ;(0, n.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      function C(e, r, t) {
        return 0 === e
          ? r
              .split('')
              .map((e, r) =>
                0 === r && 0 === t.indexOf(e.toUpperCase())
                  ? e.toUpperCase()
                  : e.toLowerCase()
              )
              .join('')
          : r.toLowerCase()
      }
      function E(e, r) {
        var t = e.toLowerCase().split(r.toLowerCase())
        return (0, g.jsx)('p', {
          children: t.map((n, c) =>
            (0, g.jsxs)(
              s.Fragment,
              {
                children: [
                  n.length > 0 &&
                    (0, g.jsx)('b', {
                      'data-fs-search-item-bold': !0,
                      children:
                        0 === c ? n.charAt(0).toUpperCase() + n.slice(1) : n,
                    }),
                  c !== t.length - 1 && C(c, r, e),
                ],
              },
              [n, c].join()
            )
          ),
        })
      }
      var I = function (e) {
          var {
              testId: r = 'suggestions',
              term: t = '',
              terms: n = [],
              products: s = [],
            } = e,
            i = (0, c.Z)(e, Z),
            { onSearchInputSelection: o } = (0, O.ZP)()
          return (0, g.jsxs)(
            'section',
            D(
              D(
                {
                  'data-testid': r,
                  'data-fs-search': !0,
                  className: S().fsSearch,
                },
                i
              ),
              {},
              {
                children: [
                  n.length > 0 &&
                    (0, g.jsx)(a.Z, {
                      'data-fs-search-section': 'terms',
                      children:
                        null === n || void 0 === n
                          ? void 0
                          : n.map((e) => {
                              var { value: r } = e
                              return (0, g.jsx)(
                                'li',
                                {
                                  'data-fs-search-item': !0,
                                  children: (0, g.jsxs)(d.Z, {
                                    'data-fs-search-item-link': !0,
                                    href: (0, O.uc)(r),
                                    onClick: () => {
                                      null === o ||
                                        void 0 === o ||
                                        o(r, (0, O.uc)(r))
                                    },
                                    children: [
                                      (0, g.jsx)(w.Z, {
                                        name: 'MagnifyingGlass',
                                        width: 18,
                                        height: 18,
                                        'data-fs-search-item-icon': !0,
                                      }),
                                      E(r, t),
                                    ],
                                  }),
                                },
                                r
                              )
                            }),
                    }),
                  s.length > 0 &&
                    (0, g.jsxs)('div', {
                      'data-fs-search-section': !0,
                      children: [
                        (0, g.jsx)('div', {
                          'data-fs-search-header': !0,
                          children: (0, g.jsx)('p', {
                            'data-fs-search-title': !0,
                            children: 'Suggested Products',
                          }),
                        }),
                        (0, g.jsx)(a.Z, {
                          children: s.map((e, r) =>
                            (0, g.jsx)(
                              'li',
                              {
                                'data-fs-search-item': !0,
                                children: (0, g.jsx)(x, {
                                  product: e,
                                  index: r,
                                }),
                              },
                              e.id
                            )
                          ),
                        }),
                      ],
                    }),
                ],
              }
            )
          )
        },
        N = t(8460),
        R = t(7732),
        M = t(5914),
        F = 'SearchSuggestionsQuery'
      var L = function (e) {
          var r,
            t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 5,
            { channel: c, locale: a } = (0, M.kP)(),
            i = (0, s.useMemo)(
              () => ({
                term: e,
                selectedFacets: [
                  {
                    key: 'channel',
                    value: null !== c && void 0 !== c ? c : '',
                  },
                  { key: 'locale', value: a },
                ],
              }),
              [e, a, c]
            ),
            { data: o, error: l } = (0, R.aM)(F, i, {
              onSuccess: (r) => {
                var t, n, c, s
                r &&
                  e &&
                  (0, N._)({
                    name: 'intelligent_search_query',
                    params: {
                      locale: a,
                      term: e,
                      url: window.location.href,
                      logicalOperator:
                        null !==
                          (t =
                            null === (n = r.search.metadata) || void 0 === n
                              ? void 0
                              : n.logicalOperator) && void 0 !== t
                          ? t
                          : 'and',
                      isTermMisspelled:
                        null !==
                          (c =
                            null === (s = r.search.metadata) || void 0 === s
                              ? void 0
                              : s.isTermMisspelled) &&
                        void 0 !== c &&
                        c,
                      totalCount: r.search.products.pageInfo.totalCount,
                    },
                  })
              },
            })
          return {
            terms: (null !==
              (r =
                null === o || void 0 === o
                  ? void 0
                  : o.search.suggestions.terms) && void 0 !== r
              ? r
              : []
            ).slice(0, n),
            products: (null !==
              (t =
                null === o || void 0 === o
                  ? void 0
                  : o.search.suggestions.products) && void 0 !== t
              ? t
              : []
            ).slice(0, n),
            isLoading: !l && !o,
          }
        },
        T = t(1310),
        H = t(5098),
        W = () => {
          var { onSearchInputSelection: e } = (0, O.ZP)(),
            { searchHistory: r, clearSearchHistory: t } = (0, H.Z)()
          return r.length
            ? (0, g.jsxs)('section', {
                'data-fs-search-section': !0,
                className: S().fsSearch,
                children: [
                  (0, g.jsxs)('div', {
                    'data-fs-search-header': !0,
                    children: [
                      (0, g.jsx)('p', {
                        'data-fs-search-title': !0,
                        children: 'History',
                      }),
                      (0, g.jsx)(T.Co, {
                        variant: 'tertiary',
                        onClick: t,
                        children: 'Clear History',
                      }),
                    ],
                  }),
                  (0, g.jsx)(a.Z, {
                    variant: 'ordered',
                    children: r.map((r) =>
                      (0, g.jsx)(
                        'li',
                        {
                          'data-fs-search-item': !0,
                          children: (0, g.jsxs)(d.Z, {
                            'data-fs-search-item-link': !0,
                            variant: 'display',
                            href: r.path,
                            onClick: () =>
                              null === e || void 0 === e
                                ? void 0
                                : e(r.term, r.path),
                            children: [
                              (0, g.jsx)(w.Z, {
                                name: 'Clock',
                                width: 18,
                                height: 18,
                                'data-fs-search-item-icon': !0,
                              }),
                              (0, g.jsx)('span', { children: r.term }),
                            ],
                          }),
                        },
                        r.term
                      )
                    ),
                  }),
                ],
              })
            : null
        },
        A = t(4851),
        V = 'TopSearchSuggestionsQuery'
      var z = function () {
          var e,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 5,
            { channel: n, locale: c } = (0, M.kP)(),
            { data: a, error: s } = (0, R.aM)(V, {
              term: '',
              selectedFacets: [
                { key: 'channel', value: null !== n && void 0 !== n ? n : '' },
                { key: 'locale', value: c },
              ],
            })
          return {
            terms: (null !==
              (e =
                null === a || void 0 === a
                  ? void 0
                  : a.search.suggestions.terms) && void 0 !== e
              ? e
              : r
            ).slice(0, t),
            isLoading: !s && !a,
          }
        },
        U = ['testId', 'topTerms']
      function G(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function B(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? G(Object(t), !0).forEach(function (r) {
                ;(0, n.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      var Q = (0, s.forwardRef)(function (e, r) {
          var { testId: t = 'top-search', topTerms: n } = e,
            s = (0, c.Z)(e, U),
            { onSearchInputSelection: i } = (0, O.ZP)(),
            { terms: o, isLoading: l } = z(n)
          return 0 === o.length
            ? null
            : (0, g.jsx)(
                'section',
                B(
                  B(
                    {
                      ref: r,
                      'data-testid': t,
                      'data-fs-search-section': !0,
                      className: S().fsSearch,
                    },
                    s
                  ),
                  {},
                  {
                    children: l
                      ? (0, g.jsx)('p', {
                          'data-fs-search-input-loading-text': !0,
                          children: 'Loading...',
                        })
                      : (0, g.jsxs)(g.Fragment, {
                          children: [
                            (0, g.jsx)('div', {
                              'data-fs-search-header': !0,
                              children: (0, g.jsx)('p', {
                                'data-fs-search-title': !0,
                                children: 'Top Search',
                              }),
                            }),
                            (0, g.jsx)(a.Z, {
                              variant: 'ordered',
                              children: o.map((e, r) =>
                                (0, g.jsx)(
                                  'li',
                                  {
                                    'data-fs-search-item': !0,
                                    children: (0, g.jsxs)(d.Z, {
                                      'data-fs-search-item-link': !0,
                                      variant: 'display',
                                      href: (0, O.uc)(e.value),
                                      onClick: () =>
                                        null === i || void 0 === i
                                          ? void 0
                                          : i(e.value, (0, O.uc)(e.value)),
                                      children: [
                                        (0, g.jsx)(A.C, {
                                          'data-fs-search-badge': !0,
                                          variant: 'info',
                                          children: r + 1,
                                        }),
                                        e.value,
                                      ],
                                    }),
                                  },
                                  e.value
                                )
                              ),
                            }),
                          ],
                        }),
                  }
                )
              )
        }),
        Y = ['term', 'style']
      function q(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      var J = function (e) {
        var { term: r = '', style: t } = e,
          a = (0, c.Z)(e, Y),
          { terms: s, products: i, isLoading: o } = L(r)
        return 0 !== r.length || o
          ? o
            ? (0, g.jsx)('p', {
                'data-fs-search-input-loading-text': !0,
                children: 'Loading...',
              })
            : 0 === s.length && 0 === i.length
            ? null
            : (0, g.jsx)(
                I,
                (function (e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {}
                    r % 2
                      ? q(Object(t), !0).forEach(function (r) {
                          ;(0, n.Z)(e, r, t[r])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(t)
                        )
                      : q(Object(t)).forEach(function (r) {
                          Object.defineProperty(
                            e,
                            r,
                            Object.getOwnPropertyDescriptor(t, r)
                          )
                        })
                  }
                  return e
                })({ term: r, terms: s, products: i }, a)
              )
          : (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)(W, {}), (0, g.jsx)(Q, {})],
            })
      }
    },
    4851: function (e, r, t) {
      'use strict'
      t.d(r, {
        C: function () {
          return O
        },
        F: function () {
          return b
        },
      })
      var n = t(7294),
        c = t(9499),
        a = t(4730),
        s = t(4914),
        i = t(1310),
        o = t(2478),
        l = t(4274),
        u = t.n(l),
        d = t(5893),
        f = ['variant', 'children', 'onClose', 'big', 'actionable']
      function p(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function h(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? p(Object(t), !0).forEach(function (r) {
                ;(0, c.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      var O = (e) => {
          var {
              variant: r = 'neutral',
              children: t,
              onClose: n,
              big: c = !1,
              actionable: l = !1,
            } = e,
            p = (0, a.Z)(e, f)
          return (0, d.jsxs)(
            s.Z,
            h(
              h(
                {
                  className: u().fsBadge,
                  'data-fs-badge': c ? 'big' : '',
                  'data-fs-badge-variant': r,
                  'data-fs-badge-actionable': l,
                },
                p
              ),
              {},
              {
                children: [
                  l &&
                    (0, d.jsx)(i.Co, {
                      'aria-label': 'Remove',
                      'data-fs-badge-button': !0,
                      onClick: n,
                      icon: (0, d.jsx)(o.Z, {
                        name: 'X',
                        width: 18,
                        height: 18,
                        weight: 'bold',
                      }),
                      iconPosition: 'left',
                    }),
                  (0, d.jsx)('div', {
                    'data-fs-badge-wrapper': !0,
                    children: (0, d.jsx)('span', { children: t }),
                  }),
                ],
              }
            )
          )
        },
        j = (e) => {
          var {
              listPrice: r,
              spotPrice: t,
              big: c = !1,
              thresholdLow: a = 15,
              thresholdHigh: s = 40,
            } = e,
            i = ((e, r) =>
              (0, n.useMemo)(() => {
                var t = (100 * (e - r)) / e
                return Math.round(t)
              }, [r, e]))(r, t)
          if (0 === i) return (0, d.jsx)(d.Fragment, {})
          var o = i <= a ? 'low' : i <= s ? 'medium' : 'high'
          return (0, d.jsxs)(O, {
            big: c,
            'data-fs-discount-badge-variant': o,
            children: [i, '% off'],
          })
        },
        b = (0, n.memo)(j)
    },
    514: function (e, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return m
        },
      })
      var n = t(9499),
        c = t(4730),
        a = t(7294),
        s = t(9008),
        i = t.n(s)
      var o = (e, r) => {
          var t,
            n,
            c = ['https://assets.vtex.app', 'unsafe'],
            a = []
          r.trim && c.push('trim'),
            r.manualCrop &&
              c.push(
                ((e) => {
                  var { left: r, top: t, right: n, bottom: c } = e
                  return ''
                    .concat(r, 'x')
                    .concat(t, ':')
                    .concat(n, 'x')
                    .concat(c)
                })(r.manualCrop)
              ),
            r.fitIn && c.push('fit-in'),
            a.push(
              null !== (t = r.horizontalAlign) && void 0 !== t ? t : 'center'
            ),
            a.push(
              null !== (n = r.verticalAlign) && void 0 !== n ? n : 'middle'
            ),
            r.smart && a.push('smart')
          var { filters: s } = r
          return (
            s &&
              a.push(
                (function (e) {
                  var r = ['filters']
                  return (
                    Object.keys(e).forEach((t) => {
                      var n,
                        c = e[t]
                      ;(n = Array.isArray(c)
                        ? c.join(',')
                        : !0 === c
                        ? ''
                        : String(c)),
                        r.push(''.concat(t, '(').concat(n, ')'))
                    }),
                    r.join(':')
                  )
                })(s)
              ),
            a.push(encodeURIComponent(e)),
            (e, t) => {
              var n = ''
              return (
                r.flipHorizontal && (n += '-'),
                (n += ''.concat(e, 'x')),
                r.flipVertical && (n += '-'),
                (n += ''.concat(t)),
                [...c, n, ...a].join('/')
              )
            }
          )
        },
        l = ['src', 'width', 'height', 'options']
      function u(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      var d = [1, 2, 3],
        f = d[d.length - 1],
        p = (e) => {
          var { src: r, width: t, height: s, options: i = {} } = e,
            p = (0, c.Z)(e, l),
            { srcSet: h, src: O } = (0, a.useMemo)(() => {
              var e = o(r, i),
                n = d.map((r) => {
                  var n = t * r
                  return ''.concat(e(n, s * r), ' ').concat(n, 'w')
                })
              return { src: e(t * f, s * f), srcSet: n.join(', ') }
            }, [s, i, r, t])
          return (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {}
              r % 2
                ? u(Object(t), !0).forEach(function (r) {
                    ;(0, n.Z)(e, r, t[r])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : u(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
            }
            return e
          })(
            {
              src: O,
              srcSet: h,
              width: ''.concat(t, 'px'),
              height: ''.concat(s, 'px'),
            },
            p
          )
        },
        h = t(5893),
        O = ['preload', 'fetchPriority']
      function j(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function b(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? j(Object(t), !0).forEach(function (r) {
                ;(0, n.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      var g = (0, a.forwardRef)((e, r) => {
        var { preload: t = !1, fetchPriority: n } = e,
          a = (0, c.Z)(e, O),
          s = p(a),
          { src: o, sizes: l = '100vw', srcSet: u } = s
        return (0, h.jsxs)(h.Fragment, {
          children: [
            t &&
              (0, h.jsx)(i(), {
                children: (0, h.jsx)('link', {
                  as: 'image',
                  rel: 'preload',
                  href: o,
                  imageSrcSet: u,
                  imageSizes: l,
                  fetchpriority: n,
                }),
              }),
            (0, h.jsx)(
              'img',
              b(
                b({ ref: r, 'data-fs-image': !0 }, s),
                {},
                { alt: s.alt, fetchpriority: n }
              )
            ),
          ],
        })
      })
      g.displayName = 'Image'
      var m = (0, a.memo)(g)
    },
    6193: function (e, r, t) {
      'use strict'
      t.d(r, {
        E: function () {
          return n.Z
        },
      })
      var n = t(514)
    },
    7902: function (e, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return O
        },
      })
      var n = t(9499),
        c = t(4730),
        a = t(9688),
        s = t(7294),
        i = t(2252),
        o = t(346),
        l = t.n(o),
        u = t(5893),
        d = ['classes', 'SRText']
      function f(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function p(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? f(Object(t), !0).forEach(function (r) {
                ;(0, n.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      function h(e) {
        var { classes: r = '', SRText: t } = e,
          n = (0, c.Z)(e, d)
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(i.Z, { text: t }),
            (0, u.jsx)(
              a.Z,
              p(
                {
                  'data-fs-price': !0,
                  className: ''.concat(l().fsPrice, ' ').concat(r),
                },
                n
              )
            ),
          ],
        })
      }
      var O = (0, s.memo)(h)
    },
    7732: function (e, r, t) {
      'use strict'
      t.d(r, {
        WN: function () {
          return u
        },
        aM: function () {
          return d
        },
        km: function () {
          return l
        },
      })
      var n = t(29),
        c = t(9499),
        a = t(8100),
        s = t(180)
      function i(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function o(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                ;(0, c.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      var l = (e, r) => ''.concat(e, '::').concat(JSON.stringify(r)),
        u = {
          errorRetryCount: 3,
          refreshWhenHidden: !1,
          refreshWhenOffline: !1,
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1,
          shouldRetryOnError: !0,
        },
        d = (e, r, t) =>
          (0, a.ZP)(
            l(e, r),
            o(
              o(
                {
                  fetcher: () =>
                    new Promise((c) => {
                      setTimeout(
                        (0, n.Z)(function* () {
                          c(yield (0, s.W)(e, r, t))
                        })
                      )
                    }),
                },
                u
              ),
              t
            )
          )
    },
    5346: function (e, r, t) {
      'use strict'
      t.d(r, {
        P: function () {
          return s
        },
        o: function () {
          return a
        },
      })
      var n = t(7294),
        c = t(5914),
        a = function () {
          var { decimals: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { currency: r, locale: t } = (0, c.kP)()
          return (0, n.useCallback)(
            (n) =>
              Intl.NumberFormat(t, {
                style: 'currency',
                currency: r.code,
                minimumFractionDigits: e ? 2 : 0,
              }).format(n),
            [r.code, t, e]
          )
        },
        s = (e) => {
          var r = a()
          return (0, n.useMemo)(() => r(e), [r, e])
        }
    },
    9854: function (e, r, t) {
      'use strict'
      t.d(r, {
        w: function () {
          return s
        },
      })
      var n = t(8460),
        c = t(7294),
        a = t(5914),
        s = (e) => {
          var { index: r, product: t, selectedOffer: s } = e,
            { slug: i } = t,
            {
              currency: { code: o },
            } = (0, a.kP)(),
            l = (0, c.useCallback)(() => {
              ;(0, n._)({
                name: 'select_item',
                params: {
                  items: [
                    {
                      item_id: t.isVariantOf.productGroupID,
                      item_name: t.isVariantOf.name,
                      item_brand: t.brand.name,
                      item_variant: t.sku,
                      index: r,
                      price: t.offers.offers[s].price,
                      discount:
                        t.offers.offers[s].listPrice - t.offers.offers[s].price,
                      currency: o,
                      item_variant_name: t.name,
                      product_reference_id: t.gtin,
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
                        item_id: t.isVariantOf.productGroupID,
                        item_variant: t.sku,
                        index: r,
                      },
                    ],
                  },
                })
            }, [o, t, r, s])
          return {
            href: '/'.concat(i, '/p'),
            onClick: l,
            'data-testid': 'product-link',
          }
        }
    },
    3624: function (e) {
      e.exports = {
        'fs-search-product-card':
          'search-product-card_fs-search-product-card__MOsNW',
        fsSearchProductCard:
          'search-product-card_fs-search-product-card__MOsNW',
      }
    },
    1393: function (e) {
      e.exports = {
        'fs-search': 'search_fs-search__DRhxy',
        fsSearch: 'search_fs-search__DRhxy',
      }
    },
    4274: function (e) {
      e.exports = {
        'fs-badge': 'badge_fs-badge__yPdhR',
        fsBadge: 'badge_fs-badge__yPdhR',
      }
    },
    346: function (e) {
      e.exports = {
        'fs-price': 'price_fs-price__7Y_0s',
        fsPrice: 'price_fs-price__7Y_0s',
      }
    },
  },
])
