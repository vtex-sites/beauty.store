;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [552],
  {
    6685: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r(9499),
        s = r(2888),
        o = r(6321),
        c = r(2962),
        i = r(1163),
        u = r(7294),
        a = r(3769),
        l = r(2875),
        p = r(2252),
        f = r(8459),
        O = r(1523),
        h = r(2541),
        b = r(6182),
        j = r.n(b),
        P = r(5893)
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function y() {
        var e,
          t = (() => {
            var { 0: e, 1: t } = (0, u.useState)(null),
              { asPath: r } = (0, i.useRouter)()
            return (
              (0, u.useEffect)(() => {
                var e = new URL(r, 'http://localhost')
                t((0, s.Q)(e))
              }, [r]),
              e
            )
          })(),
          r = (0, O.j)(),
          n = 'Search Results',
          { description: h, titleTemplate: b } = j().seo
        return t
          ? (0, P.jsxs)(
              o.z,
              w(
                w({ onChange: r, itemsPerPage: f.g }, t),
                {},
                {
                  children: [
                    (0, P.jsx)(c.PB, {
                      noindex: !0,
                      title: n,
                      description: h,
                      titleTemplate: b,
                      openGraph: { type: 'website', title: n, description: h },
                    }),
                    (0, P.jsx)(p.Z, { as: 'h1', text: n }),
                    (0, P.jsx)(a.Z, { name: 'All Products' }),
                    (0, P.jsx)(l.Z, {
                      title: 'Search Results',
                      searchTerm:
                        null !== (e = t.term) && void 0 !== e ? e : void 0,
                    }),
                  ],
                }
              )
            )
          : null
      }
      ;(y.displayName = 'Page'), (t.default = (0, h.B)(y))
    },
    1343: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/s',
        function () {
          return r(6685)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [962, 204, 866, 774, 888, 179], function () {
      return (t = 1343), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
