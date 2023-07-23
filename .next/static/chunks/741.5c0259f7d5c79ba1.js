'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [741],
  {
    2741: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'AppInitialProps', {
          enumerable: !0,
          get: function () {
            return i.AppInitialProps
          },
        }),
        Object.defineProperty(t, 'NextWebVitalsMetric', {
          enumerable: !0,
          get: function () {
            return i.NextWebVitalsMetric
          },
        }),
        Object.defineProperty(t, 'AppType', {
          enumerable: !0,
          get: function () {
            return i.AppType
          },
        }),
        (t.default = void 0)
      var r = n(932).Z,
        p = (0, n(2648).Z)(n(7294)),
        i = n(9475)
      function o(e) {
        return a.apply(this, arguments)
      }
      function a() {
        return (a = r(function* (e) {
          var { Component: t, ctx: n } = e
          return { pageProps: yield i.loadGetInitialProps(t, n) }
        })).apply(this, arguments)
      }
      class u extends p.default.Component {
        render() {
          var { Component: e, pageProps: t } = this.props
          return p.default.createElement(e, Object.assign({}, t))
        }
      }
      ;(u.origGetInitialProps = o), (u.getInitialProps = o), (t.default = u)
    },
  },
])
