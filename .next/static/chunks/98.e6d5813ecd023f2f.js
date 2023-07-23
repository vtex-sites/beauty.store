'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [98, 143],
  {
    3664: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return n
          },
        })
      var a = r(9143)
      function n(e) {
        var t, r
        null === (t = window) ||
          void 0 === t ||
          null === (r = t.sendrc) ||
          void 0 === r ||
          r.call(t, e.name, e.params),
          (0, a.default)(e)
      }
    },
    9143: function (e, t, r) {
      r.r(t)
      var a = r(9499),
        n = r(6182),
        o = r.n(n)
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                ;(0, a.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var c = (e, t) => () => {
          var r,
            a,
            n = JSON.parse(
              null !== (r = localStorage.getItem(e)) && void 0 !== r
                ? r
                : 'null'
            ),
            o = !n || ((a = n.createdAt), (Date.now() - a) / 1e3 > t),
            s = o
              ? 'function' === typeof crypto.randomUUID
                ? crypto.randomUUID()
                : (1e6 * Math.random()).toFixed(0)
              : n.payload
          if (o) {
            var i = { payload: s, createdAt: Date.now() }
            localStorage.setItem(e, JSON.stringify(i))
          }
          return s
        },
        l = {
          anonymous: c('vtex.search.anonymous', 31536e3),
          session: c('vtex.search.session', 1800),
        },
        p = (e) =>
          fetch(
            'https://sp.vtex.com/event-api/v1/'.concat(
              o().api.storeId,
              '/event'
            ),
            {
              method: 'POST',
              body: JSON.stringify(
                i(
                  i({}, e),
                  {},
                  {
                    userAgent: navigator.userAgent,
                    anonymous: l.anonymous(),
                    session: l.session(),
                  }
                )
              ),
              headers: { 'content-type': 'application/json' },
            }
          )
      setInterval(() => p({ type: 'session.ping' }), 6e4),
        (t.default = (e) => {
          switch (e.name) {
            case 'search_select_item':
              var t = new URL(e.params.url)
              if (
                !((e) =>
                  'string' === typeof e.searchParams.get('q') &&
                  /^\/s(\/)?$/g.test(e.pathname))(t)
              )
                return
              for (var r of null !== (a = e.params.items) && void 0 !== a
                ? a
                : []) {
                var a,
                  n,
                  o,
                  s =
                    null !== (n = r.item_id) && void 0 !== n
                      ? n
                      : r.item_variant,
                  i = r.index
                if (s && i)
                  p({
                    type: 'search.click',
                    productId: s,
                    position: i,
                    url: t.href,
                    text:
                      null !== (o = t.searchParams.get('q')) && void 0 !== o
                        ? o
                        : '<empty>',
                  })
              }
              break
            case 'intelligent_search_query':
              p({
                type: 'search.query',
                url: e.params.url,
                text: e.params.term,
                misspelled: e.params.isTermMisspelled,
                match: e.params.totalCount,
                operator: e.params.logicalOperator,
                locale: e.params.locale,
              })
          }
        })
    },
  },
])
