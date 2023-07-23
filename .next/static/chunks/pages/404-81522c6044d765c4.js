;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    9206: function (n, r, u) {
      'use strict'
      u.r(r)
      var o = u(2962),
        e = u(1163),
        t = u(5893)
      r.default = function () {
        var { fromUrl: n } = (() => {
          var n = (0, e.useRouter)(),
            { from: r } = n.query,
            { pathname: u } = n
          return { fromUrl: null !== r && void 0 !== r ? r : u }
        })()
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o.PB, { noindex: !0, nofollow: !0 }),
            (0, t.jsx)('h1', { children: 'Not Found: 404' }),
            (0, t.jsxs)('div', {
              children: ['This app could not find url ', n],
            }),
          ],
        })
      }
    },
    6141: function (n, r, u) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return u(9206)
        },
      ])
    },
  },
  function (n) {
    n.O(0, [962, 774, 888, 179], function () {
      return (r = 6141), n((n.s = r))
      var r
    })
    var r = n.O()
    _N_E = r
  },
])
