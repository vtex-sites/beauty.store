;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [459],
  {
    6903: function (n, o, i) {
      'use strict'
      i.r(o)
      var c = i(7294),
        t = i(2962),
        e = i(6182),
        r = i.n(e),
        u = i(5893)
      o.default = function () {
        return (
          (0, c.useEffect)(() => {
            window.location.href = ''
              .concat(r().loginUrl)
              .concat(window.location.search)
          }, []),
          (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(t.PB, { noindex: !0, nofollow: !0 }),
              (0, u.jsx)('div', { children: 'loading...' }),
            ],
          })
        )
      }
    },
    3236: function (n, o, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/login',
        function () {
          return i(6903)
        },
      ])
    },
  },
  function (n) {
    n.O(0, [962, 774, 888, 179], function () {
      return (o = 3236), n((n.s = o))
      var o
    })
    var o = n.O()
    _N_E = o
  },
])
