;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [966],
  {
    5180: function (n, c, o) {
      'use strict'
      o.r(c)
      var t = o(7294),
        i = o(2962),
        u = o(6182),
        e = o.n(u),
        r = o(5893)
      c.default = function () {
        return (
          (0, t.useEffect)(() => {
            window.location.href = ''
              .concat(e().accountUrl)
              .concat(window.location.search)
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.PB, { noindex: !0, nofollow: !0 }),
              (0, r.jsx)('div', { children: 'loading...' }),
            ],
          })
        )
      }
    },
    682: function (n, c, o) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/account',
        function () {
          return o(5180)
        },
      ])
    },
  },
  function (n) {
    n.O(0, [962, 774, 888, 179], function () {
      return (c = 682), n((n.s = c))
      var c
    })
    var c = n.O()
    _N_E = c
  },
])
