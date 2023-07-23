;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [573],
  {
    7417: function (r, e, n) {
      'use strict'
      n.r(e)
      var o = n(2962),
        i = n(1163),
        u = n(5893)
      e.default = function () {
        var { errorId: r, fromUrl: e } = (() => {
          var r = (0, i.useRouter)(),
            { errorId: e, fromUrl: n } = r.query
          return { errorId: e, fromUrl: n }
        })()
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(o.PB, { noindex: !0, nofollow: !0 }),
            (0, u.jsx)('h1', { children: '500' }),
            (0, u.jsx)('h2', { children: 'Internal Server Error' }),
            (0, u.jsxs)('div', {
              children: [
                'The server errored with id ',
                r,
                ' when visiting page ',
                e,
              ],
            }),
          ],
        })
      }
    },
    698: function (r, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/500',
        function () {
          return n(7417)
        },
      ])
    },
  },
  function (r) {
    r.O(0, [962, 774, 888, 179], function () {
      return (e = 698), r((r.s = e))
      var e
    })
    var e = r.O()
    _N_E = e
  },
])
