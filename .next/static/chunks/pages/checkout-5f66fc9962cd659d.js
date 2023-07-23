;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [222],
  {
    7200: function (n, e, o) {
      'use strict'
      o.r(e)
      var u = o(7294),
        c = o(2962),
        t = o(6182),
        i = o.n(t),
        r = o(5893)
      e.default = function () {
        return (
          (0, u.useEffect)(() => {
            window.location.href = i().checkoutUrl
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c.PB, { noindex: !0, nofollow: !0 }),
              (0, r.jsx)('div', { children: 'loading...' }),
            ],
          })
        )
      }
    },
    7250: function (n, e, o) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/checkout',
        function () {
          return o(7200)
        },
      ])
    },
  },
  function (n) {
    n.O(0, [962, 774, 888, 179], function () {
      return (e = 7250), n((n.s = e))
      var e
    })
    var e = n.O()
    _N_E = e
  },
])
