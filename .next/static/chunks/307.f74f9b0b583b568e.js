;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [307],
  {
    6307: function (t, s, e) {
      'use strict'
      e.r(s),
        e.d(s, {
          default: function () {
            return u
          },
        })
      var a = e(7294),
        n = e(2478),
        o = e(8869),
        i = e(7820),
        r = e.n(i),
        c = e(5893)
      var u = function () {
        var { toasts: t, popToast: s } = (0, o.l)(),
          e = t[t.length - 1],
          i = (0, a.useRef)(),
          { 0: u, 1: f } = (0, a.useState)(!1)
        return (
          (0, a.useEffect)(() => {
            if (e) {
              var t = setTimeout(() => f(!0), 10)
              return () => clearTimeout(t)
            }
          }, [e]),
          (0, a.useEffect)(
            () => (
              (i.current = setTimeout(() => f(!1), 6e3)),
              () => i.current && clearTimeout(i.current)
            ),
            [e]
          ),
          void 0 === e
            ? null
            : (0, c.jsxs)('div', {
                role: 'status',
                className: r().fsToast,
                'data-fs-toast': !0,
                'data-fs-toast-visible': u,
                onTransitionEnd: () => !u && s(),
                children: [
                  e.icon &&
                    (0, c.jsx)('div', {
                      'data-fs-toast-icon-container': !0,
                      children: (0, c.jsx)(n.Z, {
                        name: e.icon,
                        width: 30,
                        height: 30,
                      }),
                    }),
                  (0, c.jsxs)('div', {
                    'data-fs-toast-content': !0,
                    children: [
                      e.title &&
                        (0, c.jsx)('p', {
                          'data-fs-toast-title': !0,
                          children: e.title,
                        }),
                      (0, c.jsx)('p', {
                        'data-fs-toast-message': !0,
                        children: e.message,
                      }),
                    ],
                  }),
                ],
              })
        )
      }
    },
    7820: function (t) {
      t.exports = {
        'fs-toast': 'toast_fs-toast__gk76J',
        fsToast: 'toast_fs-toast__gk76J',
      }
    },
  },
])
