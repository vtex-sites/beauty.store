;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [686],
  {
    1201: function (e, t, r) {
      'use strict'
      var n = r(7294)
      const i = (0, n.forwardRef)(function (
        { testId: e = 'store-product-card', children: t, ...r },
        i
      ) {
        return n.createElement(
          'article',
          Object.assign(
            { ref: i, 'data-fs-product-card': !0, 'data-testid': e },
            r
          ),
          t
        )
      })
      t.Z = i
    },
    4147: function (e, t, r) {
      'use strict'
      var n = r(7294)
      const i = (0, n.forwardRef)(function (
        { testId: e = 'store-product-card-actions', children: t, ...r },
        i
      ) {
        return n.createElement(
          'div',
          Object.assign(
            { ref: i, 'data-product-card-actions': !0, 'data-testid': e },
            r
          ),
          t
        )
      })
      t.Z = i
    },
    7599: function (e, t, r) {
      'use strict'
      var n = r(7294)
      const i = (0, n.forwardRef)(function (
        { testId: e = 'store-product-card-content', children: t, ...r },
        i
      ) {
        return n.createElement(
          'section',
          Object.assign(
            { ref: i, 'data-product-card-content': !0, 'data-testid': e },
            r
          ),
          t
        )
      })
      t.Z = i
    },
    5885: function (e, t, r) {
      'use strict'
      var n = r(7294)
      const i = (0, n.forwardRef)(function (
        { testId: e = 'store-product-card-image', children: t, ...r },
        i
      ) {
        return n.createElement(
          'div',
          Object.assign(
            { ref: i, 'data-product-card-image': !0, 'data-testid': e },
            r
          ),
          t
        )
      })
      t.Z = i
    },
    1729: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return w
        },
      })
      var n = r(9499),
        i = r(4730),
        s = r(1201),
        o = r(5885),
        a = r(7599),
        c = r(4147),
        d = r(7294),
        u = r(9379),
        l = r(4851),
        f = r(6193),
        p = r(7902),
        h = r(5346),
        v = r(9854),
        g = r(5855),
        b = r.n(g),
        m = r(5893),
        j = [
          'product',
          'index',
          'variant',
          'bordered',
          'aspectRatio',
          'ButtonBuy',
        ]
      function y(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function x(e) {
        var {
            product: t,
            index: r,
            variant: n = 'default',
            bordered: d = !1,
            aspectRatio: g = 1,
            ButtonBuy: y,
          } = e,
          x = (0, i.Z)(e, j),
          {
            sku: w,
            isVariantOf: { name: _ },
            image: [P],
            offers: {
              lowPrice: k,
              offers: [{ listPrice: S, availability: V }],
            },
          } = t,
          Z = (0, v.w)({ product: t, selectedOffer: 0, index: r }),
          I = 'https://schema.org/InStock' !== V
        return (0, m.jsxs)(
          s.Z,
          O(
            O(
              {
                'data-fs-product-card': !0,
                'data-fs-product-card-variant': n,
                'data-fs-product-card-bordered': d,
                'data-fs-product-card-actionable': !!y,
                'data-fs-product-card-sku': w,
                className: b().fsProductCard,
              },
              x
            ),
            {},
            {
              children: [
                (0, m.jsx)(o.Z, {
                  'data-fs-product-card-image': !0,
                  children: (0, m.jsx)(f.E, {
                    src: P.url,
                    alt: P.alternateName,
                    width: 360,
                    height: 360 / g,
                    sizes: '(max-width: 768px) 25vw, 30vw',
                    loading: 'lazy',
                  }),
                }),
                (0, m.jsxs)(a.Z, {
                  'data-fs-product-card-content': !0,
                  children: [
                    (0, m.jsxs)('div', {
                      'data-fs-product-card-heading': !0,
                      children: [
                        (0, m.jsx)('h3', {
                          'data-fs-product-card-title': !0,
                          children: (0, m.jsx)(
                            u.Z,
                            O(O({}, Z), {}, { title: _, children: _ })
                          ),
                        }),
                        (0, m.jsxs)('div', {
                          'data-fs-product-card-prices': !0,
                          children: [
                            (0, m.jsx)(p.Z, {
                              value: S,
                              formatter: h.P,
                              testId: 'list-price',
                              'data-value': S,
                              variant: 'listing',
                              classes: 'text__legend',
                              SRText: 'Original price:',
                            }),
                            (0, m.jsx)(p.Z, {
                              value: k,
                              formatter: h.P,
                              testId: 'price',
                              'data-value': k,
                              variant: 'spot',
                              classes: 'text__body',
                              SRText: 'Sale Price:',
                            }),
                          ],
                        }),
                      ],
                    }),
                    I
                      ? (0, m.jsx)(l.C, { children: 'Out of stock' })
                      : (0, m.jsx)(l.F, { listPrice: S, spotPrice: k }),
                    !!y &&
                      (0, m.jsx)(c.Z, {
                        'data-fs-product-card-actions': !0,
                        children: y,
                      }),
                  ],
                }),
              ],
            }
          )
        )
      }
      var w = (0, d.memo)(x)
    },
    8686: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return b
          },
        })
      var n = r(7794),
        i = r(9913),
        s = r(2981),
        o = r.n(s),
        a = r(1729),
        c = r(5893)
      var d = function (e) {
          var { products: t, page: r, pageSize: n } = e
          return (0, c.jsx)(i.Z, {
            loading: 0 === t.length,
            children: (0, c.jsx)('ul', {
              'data-fs-product-grid': !0,
              className: o().fsProductGrid,
              children: t.map((e, t) => {
                var { node: i } = e
                return (0, c.jsx)(
                  'li',
                  {
                    children: (0, c.jsx)(a.Z, {
                      product: i,
                      index: n * r + t + 1,
                      bordered: !0,
                    }),
                  },
                  ''.concat(i.id)
                )
              }),
            }),
          })
        },
        u = r(7294),
        l = r(131),
        f = r(1163),
        p = r(5184)
      var h = function (e) {
          var { page: t, pageSize: r, products: i, title: s } = e,
            o = (0, u.useRef)(!1),
            { ref: a, inView: d } = (0, l.YD)(),
            { pages: h } = (0, n.R)(),
            v = (0, f.useRouter)(),
            { sendViewItemListEvent: g } = (0, p.m)({
              products: i,
              title: s,
              page: t,
              pageSize: r,
            })
          return (
            (0, u.useEffect)(() => {
              d &&
                h.length > 1 &&
                ((e, t) => {
                  var r = new URL(window.location.href)
                  r.searchParams.get('page') !== e &&
                    (r.searchParams.set('page', e),
                    t.replace(r, void 0, { shallow: !0, scroll: !1 }))
                })(t.toString(), v),
                d && !o.current && i.length && (g(), (o.current = !0))
            }, [h.length, d, t, v, g, i.length]),
            (0, c.jsx)('div', { ref: a })
          )
        },
        v = r(7879),
        g = r(763)
      var b = function (e) {
        var t,
          { page: r, title: i, showSponsoredProducts: s = !0 } = e,
          o = null !== (t = (0, g.r)(r)) && void 0 !== t ? t : [],
          { itemsPerPage: a } = (0, n.R)(),
          u = s ? o.slice(0, 2) : void 0,
          l = Math.ceil(a / 2),
          f = 0 === r && u && u.length > 1
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(h, { products: o, page: r, pageSize: a, title: i }),
            f
              ? (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)(d, {
                      products: o.slice(0, l),
                      page: r,
                      pageSize: l,
                    }),
                    (0, c.jsxs)('div', {
                      'data-fs-product-listing-sponsored': !0,
                      children: [
                        (0, c.jsx)('h3', { children: 'Sponsored' }),
                        (0, c.jsx)(v.Z, {
                          selectedFacets: [
                            { key: 'productClusterIds', value: '141' },
                          ],
                          title: '',
                        }),
                      ],
                    }),
                    (0, c.jsx)(d, {
                      products: o.slice(l, a),
                      page: r,
                      pageSize: l,
                    }),
                  ],
                })
              : (0, c.jsx)(d, { products: o, page: r, pageSize: a }),
          ],
        })
      }
    },
    7879: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return V
        },
      })
      var n = r(4730),
        i = r(7294),
        s = r(131),
        o = r(5184),
        a = r(9499)
      var c = (0, i.forwardRef)(function (
          { testId: e = 'store-tiles', children: t, ...r },
          n
        ) {
          const s = i.Children.count(t)
          const o =
            3 === s ? 'expanded-first' : 2 === s ? 'expanded-first-two' : ''
          return i.createElement(
            'ul',
            Object.assign(
              {
                ref: n,
                'data-fs-tiles': !0,
                'data-fs-tiles-variant': o,
                'data-testid': e,
              },
              r
            ),
            t
          )
        }),
        d = r(2044),
        u = r.n(d),
        l = r(5893),
        f = ['children']
      function p(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                ;(0, a.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var v = (e) => {
        var { children: t } = e,
          r = (0, n.Z)(e, f)
        return (0, l.jsx)(
          c,
          h(h({ className: u().fsTiles }, r), {}, { children: t })
        )
      }
      var g = (0, i.forwardRef)(function (
          { testId: e = 'store-tile', children: t, ...r },
          n
        ) {
          return i.createElement(
            'li',
            Object.assign({ ref: n, 'data-fs-tile': !0, 'data-testid': e }, r),
            t
          )
        }),
        b = r(1729)
      var m = function (e) {
          var { children: t, loading: r = !0, variant: n = 'default' } = e
          return r
            ? (0, l.jsx)(v, {
                children: Array.from({ length: 3 }, (e, t) =>
                  (0, l.jsx)(
                    g,
                    { children: (0, l.jsx)(w, { index: t + 1, variant: n }) },
                    String(t)
                  )
                ),
              })
            : (0, l.jsx)(l.Fragment, { children: t })
        },
        j = r(1129),
        y = r(6146),
        O = r(4106),
        x = r.n(O)
      var w = function (e) {
          var { index: t, bordered: r, variant: n = 'default' } = e
          return (0, l.jsxs)('div', {
            'data-fs-product-tile-skeleton': !0,
            className: x().fsProductTileSkeleton,
            'data-fs-product-tile-skeleton-index': t,
            'data-fs-product-tile-skeleton-variant': n,
            'data-fs-product-tile-skeleton-bordered': r,
            children: [
              (0, l.jsx)('div', {
                'data-fs-product-tile-skeleton-image': !0,
                'data-fs-product-tile-skeleton-index': t,
                children: (0, l.jsx)(j.Z, { variant: 'image' }),
              }),
              (0, l.jsxs)('div', {
                'data-fs-product-tile-skeleton-content': !0,
                'data-fs-product-tile-skeleton-index': t,
                children: [
                  (0, l.jsxs)('div', {
                    'data-fs-product-tile-skeleton-text': !0,
                    'data-fs-product-tile-skeleton-index': t,
                    children: [
                      (0, l.jsx)(j.Z, { variant: 'text' }),
                      (0, l.jsx)('div', {
                        'data-fs-product-tile-skeleton-price': !0,
                        children: (0, l.jsx)(j.Z, { variant: 'text' }),
                      }),
                    ],
                  }),
                  (0, l.jsx)('div', {
                    'data-fs-product-tile-skeleton-badge': !0,
                    'data-fs-product-tile-skeleton-index': t,
                    children: (0, l.jsx)(j.Z, { variant: 'badge' }),
                  }),
                ],
              }),
              (0, l.jsx)(y.Z, {}),
            ],
          })
        },
        _ = r(737),
        P = r(8879),
        k = ['title'],
        S = (e, t) =>
          (3 === e && 0 === t) || (2 === e && (0 === t || 1 === t))
            ? 4 / 3
            : 3 / 4,
        V = (e) => {
          var t,
            { title: r } = e,
            a = (0, n.Z)(e, k),
            c = (0, i.useRef)(!1),
            { ref: d, inView: u } = (0, s.YD)(),
            f = (0, _.kN)(a),
            p =
              null !== (t = null === f || void 0 === f ? void 0 : f.edges) &&
              void 0 !== t
                ? t
                : [],
            { sendViewItemListEvent: h } = (0, o.m)({
              products: p,
              title: r,
              page: 0,
              pageSize: 0,
            })
          return (
            (0, i.useEffect)(() => {
              u && !c.current && p.length && (h(), (c.current = !0))
            }, [u, p.length, h]),
            0 === (null === f || void 0 === f ? void 0 : f.edges.length)
              ? null
              : (0, l.jsxs)(P.Z, {
                  className: 'layout__section layout__content',
                  ref: d,
                  children: [
                    (0, l.jsx)('h2', {
                      className: 'text__title-section',
                      children: r,
                    }),
                    (0, l.jsx)('div', {
                      children: (0, l.jsx)(m, {
                        variant: 'wide',
                        loading: !f,
                        children: (0, l.jsx)(v, {
                          children: p.map((e, t) =>
                            (0, l.jsx)(
                              g,
                              {
                                children: (0, l.jsx)(b.Z, {
                                  'data-testid': 'tile-card',
                                  product: e.node,
                                  index: t + 1,
                                  variant: 'wide',
                                  aspectRatio: S(p.length, t),
                                }),
                              },
                              e.node.id
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
          return j
        },
      })
      var n = r(9499),
        i = r(4730),
        s = r(7294),
        o = r(9008),
        a = r.n(o)
      var c = (e, t) => {
          var r,
            n,
            i = ['https://assets.vtex.app', 'unsafe'],
            s = []
          t.trim && i.push('trim'),
            t.manualCrop &&
              i.push(
                ((e) => {
                  var { left: t, top: r, right: n, bottom: i } = e
                  return ''
                    .concat(t, 'x')
                    .concat(r, ':')
                    .concat(n, 'x')
                    .concat(i)
                })(t.manualCrop)
              ),
            t.fitIn && i.push('fit-in'),
            s.push(
              null !== (r = t.horizontalAlign) && void 0 !== r ? r : 'center'
            ),
            s.push(
              null !== (n = t.verticalAlign) && void 0 !== n ? n : 'middle'
            ),
            t.smart && s.push('smart')
          var { filters: o } = t
          return (
            o &&
              s.push(
                (function (e) {
                  var t = ['filters']
                  return (
                    Object.keys(e).forEach((r) => {
                      var n,
                        i = e[r]
                      ;(n = Array.isArray(i)
                        ? i.join(',')
                        : !0 === i
                        ? ''
                        : String(i)),
                        t.push(''.concat(r, '(').concat(n, ')'))
                    }),
                    t.join(':')
                  )
                })(o)
              ),
            s.push(encodeURIComponent(e)),
            (e, r) => {
              var n = ''
              return (
                t.flipHorizontal && (n += '-'),
                (n += ''.concat(e, 'x')),
                t.flipVertical && (n += '-'),
                (n += ''.concat(r)),
                [...i, n, ...s].join('/')
              )
            }
          )
        },
        d = ['src', 'width', 'height', 'options']
      function u(e, t) {
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
          var { src: t, width: r, height: o, options: a = {} } = e,
            p = (0, i.Z)(e, d),
            { srcSet: h, src: v } = (0, s.useMemo)(() => {
              var e = c(t, a),
                n = l.map((t) => {
                  var n = r * t
                  return ''.concat(e(n, o * t), ' ').concat(n, 'w')
                })
              return { src: e(r * f, o * f), srcSet: n.join(', ') }
            }, [o, a, t, r])
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? u(Object(r), !0).forEach(function (t) {
                    ;(0, n.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : u(Object(r)).forEach(function (t) {
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
              src: v,
              srcSet: h,
              width: ''.concat(r, 'px'),
              height: ''.concat(o, 'px'),
            },
            p
          )
        },
        h = r(5893),
        v = ['preload', 'fetchPriority']
      function g(e, t) {
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
            ? g(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var m = (0, s.forwardRef)((e, t) => {
        var { preload: r = !1, fetchPriority: n } = e,
          s = (0, i.Z)(e, v),
          o = p(s),
          { src: c, sizes: d = '100vw', srcSet: u } = o
        return (0, h.jsxs)(h.Fragment, {
          children: [
            r &&
              (0, h.jsx)(a(), {
                children: (0, h.jsx)('link', {
                  as: 'image',
                  rel: 'preload',
                  href: c,
                  imageSrcSet: u,
                  imageSizes: d,
                  fetchpriority: n,
                }),
              }),
            (0, h.jsx)(
              'img',
              b(
                b({ ref: t, 'data-fs-image': !0 }, o),
                {},
                { alt: o.alt, fetchpriority: n }
              )
            ),
          ],
        })
      })
      m.displayName = 'Image'
      var j = (0, s.memo)(m)
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
          return v
        },
      })
      var n = r(9499),
        i = r(4730),
        s = r(9688),
        o = r(7294),
        a = r(2252),
        c = r(346),
        d = r.n(c),
        u = r(5893),
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
      function h(e) {
        var { classes: t = '', SRText: r } = e,
          n = (0, i.Z)(e, l)
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(a.Z, { text: r }),
            (0, u.jsx)(
              s.Z,
              p(
                {
                  'data-fs-price': !0,
                  className: ''.concat(d().fsPrice, ' ').concat(t),
                },
                n
              )
            ),
          ],
        })
      }
      var v = (0, o.memo)(h)
    },
    5184: function (e, t, r) {
      'use strict'
      r.d(t, {
        m: function () {
          return o
        },
      })
      var n = r(8460),
        i = r(7294),
        s = r(5914),
        o = (e) => {
          var { products: t, title: r, page: o, pageSize: a } = e,
            {
              currency: { code: c },
            } = (0, s.kP)()
          return {
            sendViewItemListEvent: (0, i.useCallback)(() => {
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
                      index: o * a + t + 1,
                      discount:
                        r.offers.offers[0].listPrice - r.offers.offers[0].price,
                      currency: c,
                      item_variant_name: r.name,
                      product_reference_id: r.gtin,
                    }
                  }),
                },
              })
            }, [c, t, r, o, a]),
          }
        }
    },
    9854: function (e, t, r) {
      'use strict'
      r.d(t, {
        w: function () {
          return o
        },
      })
      var n = r(8460),
        i = r(7294),
        s = r(5914),
        o = (e) => {
          var { index: t, product: r, selectedOffer: o } = e,
            { slug: a } = r,
            {
              currency: { code: c },
            } = (0, s.kP)(),
            d = (0, i.useCallback)(() => {
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
                      price: r.offers.offers[o].price,
                      discount:
                        r.offers.offers[o].listPrice - r.offers.offers[o].price,
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
            }, [c, r, t, o])
          return {
            href: '/'.concat(a, '/p'),
            onClick: d,
            'data-testid': 'product-link',
          }
        }
    },
    5855: function (e) {
      e.exports = {
        'fs-product-card': 'product-card_fs-product-card__1pxGU',
        fsProductCard: 'product-card_fs-product-card__1pxGU',
      }
    },
    4106: function (e) {
      e.exports = {
        'fs-product-tile-skeleton':
          'product-tile-skeleton_fs-product-tile-skeleton___HloN',
        fsProductTileSkeleton:
          'product-tile-skeleton_fs-product-tile-skeleton___HloN',
      }
    },
    346: function (e) {
      e.exports = {
        'fs-price': 'price_fs-price__7Y_0s',
        fsPrice: 'price_fs-price__7Y_0s',
      }
    },
    2044: function (e) {
      e.exports = {
        'fs-tiles': 'tiles_fs-tiles__N15Au',
        fsTiles: 'tiles_fs-tiles__N15Au',
      }
    },
    131: function (e, t, r) {
      'use strict'
      r.d(t, {
        YD: function () {
          return v
        },
      })
      var n = r(7294)
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
          i.apply(this, arguments)
        )
      }
      function s(e, t) {
        return (
          (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          s(e, t)
        )
      }
      var o = new Map(),
        a = new WeakMap(),
        c = 0,
        d = void 0
      function u(e) {
        return Object.keys(e)
          .sort()
          .filter(function (t) {
            return void 0 !== e[t]
          })
          .map(function (t) {
            return (
              t +
              '_' +
              ('root' === t
                ? (r = e.root)
                  ? (a.has(r) || ((c += 1), a.set(r, c.toString())), a.get(r))
                  : '0'
                : e[t])
            )
            var r
          })
          .toString()
      }
      function l(e, t, r, n) {
        if (
          (void 0 === r && (r = {}),
          void 0 === n && (n = d),
          'undefined' === typeof window.IntersectionObserver && void 0 !== n)
        ) {
          var i = e.getBoundingClientRect()
          return (
            t(n, {
              isIntersecting: n,
              target: e,
              intersectionRatio:
                'number' === typeof r.threshold ? r.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i,
            }),
            function () {}
          )
        }
        var s = (function (e) {
            var t = u(e),
              r = o.get(t)
            if (!r) {
              var n,
                i = new Map(),
                s = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var r,
                      s =
                        t.isIntersecting &&
                        n.some(function (e) {
                          return t.intersectionRatio >= e
                        })
                    e.trackVisibility &&
                      'undefined' === typeof t.isVisible &&
                      (t.isVisible = s),
                      null == (r = i.get(t.target)) ||
                        r.forEach(function (e) {
                          e(s, t)
                        })
                  })
                }, e)
              ;(n =
                s.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (r = { id: t, observer: s, elements: i }),
                o.set(t, r)
            }
            return r
          })(r),
          a = s.id,
          c = s.observer,
          l = s.elements,
          f = l.get(e) || []
        return (
          l.has(e) || l.set(e, f),
          f.push(t),
          c.observe(e),
          function () {
            f.splice(f.indexOf(t), 1),
              0 === f.length && (l.delete(e), c.unobserve(e)),
              0 === l.size && (c.disconnect(), o.delete(a))
          }
        )
      }
      var f = [
        'children',
        'as',
        'triggerOnce',
        'threshold',
        'root',
        'rootMargin',
        'onChange',
        'skip',
        'trackVisibility',
        'delay',
        'initialInView',
        'fallbackInView',
      ]
      function p(e) {
        return 'function' !== typeof e.children
      }
      var h = (function (e) {
        var t, r
        function o(t) {
          var r
          return (
            ((r = e.call(this, t) || this).node = null),
            (r._unobserveCb = null),
            (r.handleNode = function (e) {
              r.node &&
                (r.unobserve(),
                e ||
                  r.props.triggerOnce ||
                  r.props.skip ||
                  r.setState({
                    inView: !!r.props.initialInView,
                    entry: void 0,
                  })),
                (r.node = e || null),
                r.observeNode()
            }),
            (r.handleChange = function (e, t) {
              e && r.props.triggerOnce && r.unobserve(),
                p(r.props) || r.setState({ inView: e, entry: t }),
                r.props.onChange && r.props.onChange(e, t)
            }),
            (r.state = { inView: !!t.initialInView, entry: void 0 }),
            r
          )
        }
        ;(r = e),
          ((t = o).prototype = Object.create(r.prototype)),
          (t.prototype.constructor = t),
          s(t, r)
        var a = o.prototype
        return (
          (a.componentDidUpdate = function (e) {
            ;(e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode())
          }),
          (a.componentWillUnmount = function () {
            this.unobserve(), (this.node = null)
          }),
          (a.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                r = e.root,
                n = e.rootMargin,
                i = e.trackVisibility,
                s = e.delay,
                o = e.fallbackInView
              this._unobserveCb = l(
                this.node,
                this.handleChange,
                {
                  threshold: t,
                  root: r,
                  rootMargin: n,
                  trackVisibility: i,
                  delay: s,
                },
                o
              )
            }
          }),
          (a.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null))
          }),
          (a.render = function () {
            if (!p(this.props)) {
              var e = this.state,
                t = e.inView,
                r = e.entry
              return this.props.children({
                inView: t,
                entry: r,
                ref: this.handleNode,
              })
            }
            var s = this.props,
              o = s.children,
              a = s.as,
              c = (function (e, t) {
                if (null == e) return {}
                var r,
                  n,
                  i = {},
                  s = Object.keys(e)
                for (n = 0; n < s.length; n++)
                  (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
                return i
              })(s, f)
            return n.createElement(
              a || 'div',
              i({ ref: this.handleNode }, c),
              o
            )
          }),
          o
        )
      })(n.Component)
      function v(e) {
        var t = void 0 === e ? {} : e,
          r = t.threshold,
          i = t.delay,
          s = t.trackVisibility,
          o = t.rootMargin,
          a = t.root,
          c = t.triggerOnce,
          d = t.skip,
          u = t.initialInView,
          f = t.fallbackInView,
          p = n.useRef(),
          h = n.useState({ inView: !!u }),
          v = h[0],
          g = h[1],
          b = n.useCallback(
            function (e) {
              void 0 !== p.current && (p.current(), (p.current = void 0)),
                d ||
                  (e &&
                    (p.current = l(
                      e,
                      function (e, t) {
                        g({ inView: e, entry: t }),
                          t.isIntersecting &&
                            c &&
                            p.current &&
                            (p.current(), (p.current = void 0))
                      },
                      {
                        root: a,
                        rootMargin: o,
                        threshold: r,
                        trackVisibility: s,
                        delay: i,
                      },
                      f
                    )))
            },
            [Array.isArray(r) ? r.toString() : r, a, o, c, d, s, f, i]
          )
        ;(0, n.useEffect)(function () {
          p.current || !v.entry || c || d || g({ inView: !!u })
        })
        var m = [b, v.inView, v.entry]
        return (m.ref = m[0]), (m.inView = m[1]), (m.entry = m[2]), m
      }
      ;(h.displayName = 'InView'),
        (h.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 })
    },
  },
])
