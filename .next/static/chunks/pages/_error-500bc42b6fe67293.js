;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820, 651],
  {
    9651: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = n(2648).Z,
        a = r(n(7294)),
        o = r(n(2717)),
        l = {
          400: 'Bad Request',
          404: 'This page could not be found',
          405: 'Method Not Allowed',
          500: 'Internal Server Error',
        }
      function d(e) {
        var { res: t, err: n } = e
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
        }
      }
      var i = {
        error: {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: {
          display: 'inline-block',
          textAlign: 'left',
          lineHeight: '49px',
          height: '49px',
          verticalAlign: 'middle',
        },
        h1: {
          display: 'inline-block',
          margin: 0,
          marginRight: '20px',
          padding: '0 23px 0 0',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
          lineHeight: '49px',
        },
        h2: {
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: '49px',
          margin: 0,
          padding: 0,
        },
      }
      class u extends a.default.Component {
        render() {
          var { statusCode: e, withDarkMode: t = !0 } = this.props,
            n = this.props.title || l[e] || 'An unexpected error has occurred'
          return a.default.createElement(
            'div',
            { style: i.error },
            a.default.createElement(
              o.default,
              null,
              a.default.createElement(
                'title',
                null,
                e
                  ? ''.concat(e, ': ').concat(n)
                  : 'Application error: a client-side exception has occurred'
              )
            ),
            a.default.createElement(
              'div',
              null,
              a.default.createElement('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    '\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                '.concat(
                      t
                        ? '@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }'
                        : ''
                    ),
                },
              }),
              e
                ? a.default.createElement(
                    'h1',
                    { className: 'next-error-h1', style: i.h1 },
                    e
                  )
                : null,
              a.default.createElement(
                'div',
                { style: i.desc },
                a.default.createElement(
                  'h2',
                  { style: i.h2 },
                  this.props.title || e
                    ? n
                    : a.default.createElement(
                        a.default.Fragment,
                        null,
                        'Application error: a client-side exception has occurred (see the browser console for more information)'
                      ),
                  '.'
                )
              )
            )
          )
        }
      }
      ;(u.displayName = 'ErrorPage'),
        (u.getInitialProps = d),
        (u.origGetInitialProps = d),
        (t.default = u)
    },
    8e3: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.AmpStateContext = void 0)
      var r = (0, n(2648).Z)(n(7294)).default.createContext({})
      t.AmpStateContext = r
    },
    9470: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isInAmpMode = function () {
          var {
            ampFirst: e = !1,
            hybrid: t = !1,
            hasQuery: n = !1,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {}
          return e || (t && n)
        })
    },
    2717: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.defaultHead = s),
        (t.default = void 0)
      var r = n(6495).Z,
        a = n(2648).Z,
        o = (0, n(1598).Z)(n(7294)),
        l = a(n(1585)),
        d = n(8e3),
        i = n(5850),
        u = n(9470)
      n(9475)
      function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        )
      }
      function c(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  'string' === typeof t || 'number' === typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t)
      }
      var f = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function p(e, t) {
        var { inAmpMode: n } = t
        return e
          .reduce(c, [])
          .reverse()
          .concat(s(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {}
              return (a) => {
                var o = !0,
                  l = !1
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  l = !0
                  var d = a.key.slice(a.key.indexOf('$') + 1)
                  e.has(d) ? (o = !1) : e.add(d)
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type)
                    break
                  case 'meta':
                    for (var i = 0, u = f.length; i < u; i++) {
                      var s = f[i]
                      if (a.props.hasOwnProperty(s))
                        if ('charSet' === s) n.has(s) ? (o = !1) : n.add(s)
                        else {
                          var c = a.props[s],
                            p = r[s] || new Set()
                          ;('name' === s && l) || !p.has(c)
                            ? (p.add(c), (r[s] = p))
                            : (o = !1)
                        }
                    }
                }
                return o
              }
            })()
          )
          .reverse()
          .map((e, t) => {
            var a = e.key || t
            if (
              !n &&
              'link' === e.type &&
              e.props.href &&
              [
                'https://fonts.googleapis.com/css',
                'https://use.typekit.net/',
              ].some((t) => e.props.href.startsWith(t))
            ) {
              var l = r({}, e.props || {})
              return (
                (l['data-href'] = l.href),
                (l.href = void 0),
                (l['data-optimized-fonts'] = !0),
                o.default.cloneElement(e, l)
              )
            }
            return o.default.cloneElement(e, { key: a })
          })
      }
      var h = function (e) {
        var { children: t } = e,
          n = o.useContext(d.AmpStateContext),
          r = o.useContext(i.HeadManagerContext)
        return o.default.createElement(
          l.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: u.isInAmpMode(n),
          },
          t
        )
      }
      ;(t.default = h),
        ('function' === typeof t.default ||
          ('object' === typeof t.default && null !== t.default)) &&
          'undefined' === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    1585: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var { headManager: t, reduceComponentsToState: n } = e
          function d() {
            if (t && t.mountedInstances) {
              var a = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              )
              t.updateHead(n(a, e))
            }
          }
          if (a) {
            var i
            null == t || null == (i = t.mountedInstances) || i.add(e.children),
              d()
          }
          return (
            o(() => {
              var n
              return (
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.add(e.children),
                () => {
                  var n
                  null == t ||
                    null == (n = t.mountedInstances) ||
                    n.delete(e.children)
                }
              )
            }),
            o(
              () => (
                t && (t._pendingUpdate = d),
                () => {
                  t && (t._pendingUpdate = d)
                }
              )
            ),
            l(
              () => (
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null)),
                () => {
                  t &&
                    t._pendingUpdate &&
                    (t._pendingUpdate(), (t._pendingUpdate = null))
                }
              )
            ),
            null
          )
        })
      var r = (0, n(1598).Z)(n(7294))
      var a = !1,
        o = a ? () => {} : r.useLayoutEffect,
        l = a ? () => {} : r.useEffect
    },
    1981: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return n(9651)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 1981), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
