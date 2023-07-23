;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [284],
  {
    4914: function (e, t, n) {
      'use strict'
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { testId: e = 'store-badge', children: t, ...n },
        a
      ) {
        return r.createElement(
          'div',
          Object.assign({ ref: a, 'data-fs-badge': !0, 'data-testid': e }, n),
          t
        )
      })
      t.Z = a
    },
    9688: function (e, t, n) {
      'use strict'
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        {
          as: e = 'span',
          testId: t = 'store-price',
          value: n,
          formatter: a = (e) => e,
          variant: i = 'selling',
          ...o
        },
        u
      ) {
        const c = a(n, i)
        return r.createElement(
          e,
          Object.assign(
            {
              ref: u,
              'data-fs-price': !0,
              'data-testid': t,
              'data-variant': i,
            },
            o
          ),
          c
        )
      })
      t.Z = a
    },
    2497: function (e, t, n) {
      'use strict'
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { testId: e = 'store-card', children: t, ...n },
        a
      ) {
        return r.createElement(
          'article',
          Object.assign({ ref: a, 'data-fs-card': !0, 'data-testid': e }, n),
          t
        )
      })
      t.Z = a
    },
    4492: function (e, t, n) {
      'use strict'
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { testId: e = 'store-card-content', children: t, ...n },
        a
      ) {
        return r.createElement(
          'section',
          Object.assign(
            { ref: a, 'data-card-content': !0, 'data-testid': e },
            n
          ),
          t
        )
      })
      t.Z = a
    },
    3438: function (e, t, n) {
      'use strict'
      var r = n(7294)
      const a = (0, r.forwardRef)(function (
        { testId: e = 'store-card-image', children: t, ...n },
        a
      ) {
        return r.createElement(
          'div',
          Object.assign({ ref: a, 'data-card-image': !0, 'data-testid': e }, n),
          t
        )
      })
      t.Z = a
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
        (t.defaultHead = f),
        (t.default = void 0)
      var r = n(6495).Z,
        a = n(2648).Z,
        i = (0, n(1598).Z)(n(7294)),
        o = a(n(1585)),
        u = n(8e3),
        c = n(5850),
        s = n(9470)
      n(9475)
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              i.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        )
      }
      function d(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  'string' === typeof t || 'number' === typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t)
      }
      var l = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function v(e, t) {
        var { inAmpMode: n } = t
        return e
          .reduce(d, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {}
              return (a) => {
                var i = !0,
                  o = !1
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  o = !0
                  var u = a.key.slice(a.key.indexOf('$') + 1)
                  e.has(u) ? (i = !1) : e.add(u)
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (i = !1) : t.add(a.type)
                    break
                  case 'meta':
                    for (var c = 0, s = l.length; c < s; c++) {
                      var f = l[c]
                      if (a.props.hasOwnProperty(f))
                        if ('charSet' === f) n.has(f) ? (i = !1) : n.add(f)
                        else {
                          var d = a.props[f],
                            v = r[f] || new Set()
                          ;('name' === f && o) || !v.has(d)
                            ? (v.add(d), (r[f] = v))
                            : (i = !1)
                        }
                    }
                }
                return i
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
              var o = r({}, e.props || {})
              return (
                (o['data-href'] = o.href),
                (o.href = void 0),
                (o['data-optimized-fonts'] = !0),
                i.default.cloneElement(e, o)
              )
            }
            return i.default.cloneElement(e, { key: a })
          })
      }
      var p = function (e) {
        var { children: t } = e,
          n = i.useContext(u.AmpStateContext),
          r = i.useContext(c.HeadManagerContext)
        return i.default.createElement(
          o.default,
          {
            reduceComponentsToState: v,
            headManager: r,
            inAmpMode: s.isInAmpMode(n),
          },
          t
        )
      }
      ;(t.default = p),
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
          function u() {
            if (t && t.mountedInstances) {
              var a = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              )
              t.updateHead(n(a, e))
            }
          }
          if (a) {
            var c
            null == t || null == (c = t.mountedInstances) || c.add(e.children),
              u()
          }
          return (
            i(() => {
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
            i(
              () => (
                t && (t._pendingUpdate = u),
                () => {
                  t && (t._pendingUpdate = u)
                }
              )
            ),
            o(
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
        i = a ? () => {} : r.useLayoutEffect,
        o = a ? () => {} : r.useEffect
    },
    9008: function (e, t, n) {
      e.exports = n(2717)
    },
    8100: function (e, t, n) {
      'use strict'
      n.d(t, {
        JG: function () {
          return H
        },
        ZP: function () {
          return Q
        },
        kY: function () {
          return G
        },
      })
      var r = n(7294)
      function a(e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              c(r.next(e))
            } catch (t) {
              i(t)
            }
          }
          function u(e) {
            try {
              c(r.throw(e))
            } catch (t) {
              i(t)
            }
          }
          function c(e) {
            var t
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(o, u)
          }
          c((r = r.apply(e, t || [])).next())
        })
      }
      function i(e, t) {
        var n,
          r,
          a,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1]
              return a[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (i = { next: u(0), throw: u(1), return: u(2) }),
          'function' === typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this
            }),
          i
        )
        function u(i) {
          return function (u) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, i[1])).done)
                  )
                    return a
                  switch (((r = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                    case 0:
                    case 1:
                      a = i
                      break
                    case 4:
                      return o.label++, { value: i[1], done: !1 }
                    case 5:
                      o.label++, (r = i[1]), (i = [0])
                      continue
                    case 7:
                      ;(i = o.ops.pop()), o.trys.pop()
                      continue
                    default:
                      if (
                        !(a = (a = o.trys).length > 0 && a[a.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        o = 0
                        continue
                      }
                      if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                        o.label = i[1]
                        break
                      }
                      if (6 === i[0] && o.label < a[1]) {
                        ;(o.label = a[1]), (a = i)
                        break
                      }
                      if (a && o.label < a[2]) {
                        ;(o.label = a[2]), o.ops.push(i)
                        break
                      }
                      a[2] && o.ops.pop(), o.trys.pop()
                      continue
                  }
                  i = t.call(e, o)
                } catch (u) {
                  ;(i = [6, u]), (r = 0)
                } finally {
                  n = a = 0
                }
              if (5 & i[0]) throw i[1]
              return { value: i[0] ? i[1] : void 0, done: !0 }
            })([i, u])
          }
        }
      }
      var o,
        u = function () {},
        c = u(),
        s = Object,
        f = function (e) {
          return e === c
        },
        d = function (e) {
          return 'function' == typeof e
        },
        l = function (e, t) {
          return s.assign({}, e, t)
        },
        v = 'undefined',
        p = function () {
          return typeof window != v
        },
        h = new WeakMap(),
        g = 0,
        y = function (e) {
          var t,
            n,
            r = typeof e,
            a = e && e.constructor,
            i = a == Date
          if (s(e) !== e || i || a == RegExp)
            t = i
              ? e.toJSON()
              : 'symbol' == r
              ? e.toString()
              : 'string' == r
              ? JSON.stringify(e)
              : '' + e
          else {
            if ((t = h.get(e))) return t
            if (((t = ++g + '~'), h.set(e, t), a == Array)) {
              for (t = '@', n = 0; n < e.length; n++) t += y(e[n]) + ','
              h.set(e, t)
            }
            if (a == s) {
              t = '#'
              for (var o = s.keys(e).sort(); !f((n = o.pop())); )
                f(e[n]) || (t += n + ':' + y(e[n]) + ',')
              h.set(e, t)
            }
          }
          return t
        },
        m = !0,
        b = p(),
        w = typeof document != v,
        E =
          b && window.addEventListener
            ? window.addEventListener.bind(window)
            : u,
        O = w ? document.addEventListener.bind(document) : u,
        k =
          b && window.removeEventListener
            ? window.removeEventListener.bind(window)
            : u,
        R = w ? document.removeEventListener.bind(document) : u,
        S = {
          isOnline: function () {
            return m
          },
          isVisible: function () {
            var e = w && document.visibilityState
            return f(e) || 'hidden' !== e
          },
        },
        C = {
          initFocus: function (e) {
            return (
              O('visibilitychange', e),
              E('focus', e),
              function () {
                R('visibilitychange', e), k('focus', e)
              }
            )
          },
          initReconnect: function (e) {
            var t = function () {
                ;(m = !0), e()
              },
              n = function () {
                m = !1
              }
            return (
              E('online', t),
              E('offline', n),
              function () {
                k('online', t), k('offline', n)
              }
            )
          },
        },
        _ = !p() || 'Deno' in window,
        I = function (e) {
          return p() && typeof window.requestAnimationFrame != v
            ? window.requestAnimationFrame(e)
            : setTimeout(e, 1)
        },
        x = _ ? r.useEffect : r.useLayoutEffect,
        M = 'undefined' !== typeof navigator && navigator.connection,
        T =
          !_ &&
          M &&
          (['slow-2g', '2g'].includes(M.effectiveType) || M.saveData),
        A = function (e) {
          if (d(e))
            try {
              e = e()
            } catch (n) {
              e = ''
            }
          var t = [].concat(e)
          return [
            (e =
              'string' == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? y(e)
                : ''),
            t,
            e ? '$swr$' + e : '',
          ]
        },
        P = new WeakMap(),
        V = function (e, t, n, r, a, i, o) {
          void 0 === o && (o = !0)
          var u = P.get(e),
            c = u[0],
            s = u[1],
            f = u[3],
            d = c[t],
            l = s[t]
          if (o && l) for (var v = 0; v < l.length; ++v) l[v](n, r, a)
          return i && (delete f[t], d && d[0])
            ? d[0](2).then(function () {
                return e.get(t)
              })
            : e.get(t)
        },
        j = 0,
        Z = function () {
          return ++j
        },
        D = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return a(void 0, void 0, void 0, function () {
            var t, n, r, a, o, u, s, v, p, h, g, y, m, b, w, E, O, k, R, S, C
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    ((t = e[0]),
                    (n = e[1]),
                    (r = e[2]),
                    (a = e[3]),
                    (u =
                      !!f(
                        (o =
                          'boolean' === typeof a ? { revalidate: a } : a || {})
                          .populateCache
                      ) || o.populateCache),
                    (s = !1 !== o.revalidate),
                    (v = !1 !== o.rollbackOnError),
                    (p = o.optimisticData),
                    (h = A(n)),
                    (g = h[0]),
                    (y = h[2]),
                    !g)
                  )
                    return [2]
                  if (((m = P.get(t)), (b = m[2]), e.length < 3))
                    return [2, V(t, g, t.get(g), c, c, s, !0)]
                  if (
                    ((w = r),
                    (O = Z()),
                    (b[g] = [O, 0]),
                    (k = !f(p)),
                    (R = t.get(g)),
                    k && ((S = d(p) ? p(R) : p), t.set(g, S), V(t, g, S)),
                    d(w))
                  )
                    try {
                      w = w(t.get(g))
                    } catch (_) {
                      E = _
                    }
                  return w && d(w.then)
                    ? [
                        4,
                        w.catch(function (e) {
                          E = e
                        }),
                      ]
                    : [3, 2]
                case 1:
                  if (((w = i.sent()), O !== b[g][0])) {
                    if (E) throw E
                    return [2, w]
                  }
                  E && k && v && ((u = !0), (w = R), t.set(g, R)), (i.label = 2)
                case 2:
                  return (
                    u &&
                      (E || (d(u) && (w = u(w, R)), t.set(g, w)),
                      t.set(y, l(t.get(y), { error: E }))),
                    (b[g][1] = Z()),
                    [4, V(t, g, w, E, c, s, !!u)]
                  )
                case 3:
                  if (((C = i.sent()), E)) throw E
                  return [2, u ? C : w]
              }
            })
          })
        },
        L = function (e, t) {
          for (var n in e) e[n][0] && e[n][0](t)
        },
        F = function (e, t) {
          if (!P.has(e)) {
            var n = l(C, t),
              r = {},
              a = D.bind(c, e),
              i = u
            if ((P.set(e, [r, {}, {}, {}, a]), !_)) {
              var o = n.initFocus(setTimeout.bind(c, L.bind(c, r, 0))),
                s = n.initReconnect(setTimeout.bind(c, L.bind(c, r, 1)))
              i = function () {
                o && o(), s && s(), P.delete(e)
              }
            }
            return [e, a, i]
          }
          return [e, P.get(e)[4]]
        },
        U = F(new Map()),
        W = U[0],
        H = U[1],
        N = l(
          {
            onLoadingSlow: u,
            onSuccess: u,
            onError: u,
            onErrorRetry: function (e, t, n, r, a) {
              var i = n.errorRetryCount,
                o = a.retryCount,
                u =
                  ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) *
                  n.errorRetryInterval
              ;(!f(i) && o > i) || setTimeout(r, u, a)
            },
            onDiscarded: u,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: T ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: T ? 5e3 : 3e3,
            compare: function (e, t) {
              return y(e) == y(t)
            },
            isPaused: function () {
              return !1
            },
            cache: W,
            mutate: H,
            fallback: {},
          },
          S
        ),
        $ = function (e, t) {
          var n = l(e, t)
          if (t) {
            var r = e.use,
              a = e.fallback,
              i = t.use,
              o = t.fallback
            r && i && (n.use = r.concat(i)), a && o && (n.fallback = l(a, o))
          }
          return n
        },
        q = (0, r.createContext)({}),
        J = function (e) {
          return d(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
        },
        G = function () {
          return l(N, (0, r.useContext)(q))
        },
        z = function (e, t, n) {
          var r = t[e] || (t[e] = [])
          return (
            r.push(n),
            function () {
              var e = r.indexOf(n)
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop())
            }
          )
        },
        B = { dedupe: !0 },
        Q =
          (s.defineProperty(
            function (e) {
              var t = e.value,
                n = $((0, r.useContext)(q), t),
                a = t && t.provider,
                i = (0, r.useState)(function () {
                  return a ? F(a(n.cache || W), t) : c
                })[0]
              return (
                i && ((n.cache = i[0]), (n.mutate = i[1])),
                x(function () {
                  return i ? i[2] : c
                }, []),
                (0, r.createElement)(q.Provider, l(e, { value: n }))
              )
            },
            'default',
            { value: N }
          ),
          (o = function (e, t, n) {
            var o = n.cache,
              u = n.compare,
              s = n.fallbackData,
              v = n.suspense,
              p = n.revalidateOnMount,
              h = n.refreshInterval,
              g = n.refreshWhenHidden,
              y = n.refreshWhenOffline,
              m = P.get(o),
              b = m[0],
              w = m[1],
              E = m[2],
              O = m[3],
              k = A(e),
              R = k[0],
              S = k[1],
              C = k[2],
              M = (0, r.useRef)(!1),
              T = (0, r.useRef)(!1),
              j = (0, r.useRef)(R),
              L = (0, r.useRef)(t),
              F = (0, r.useRef)(n),
              U = function () {
                return F.current
              },
              W = function () {
                return U().isVisible() && U().isOnline()
              },
              H = function (e) {
                return o.set(C, l(o.get(C), e))
              },
              N = o.get(R),
              $ = f(s) ? n.fallback[R] : s,
              q = f(N) ? $ : N,
              J = o.get(C) || {},
              G = J.error,
              Q = !M.current,
              Y = function () {
                return Q && !f(p)
                  ? p
                  : !U().isPaused() &&
                      (v
                        ? !f(q) && n.revalidateIfStale
                        : f(q) || n.revalidateIfStale)
              },
              K = !(!R || !t) && (!!J.isValidating || (Q && Y())),
              X = (function (e, t) {
                var n = (0, r.useState)({})[1],
                  a = (0, r.useRef)(e),
                  i = (0, r.useRef)({ data: !1, error: !1, isValidating: !1 }),
                  o = (0, r.useCallback)(function (e) {
                    var r = !1,
                      o = a.current
                    for (var u in e) {
                      var c = u
                      o[c] !== e[c] && ((o[c] = e[c]), i.current[c] && (r = !0))
                    }
                    r && !t.current && n({})
                  }, [])
                return (
                  x(function () {
                    a.current = e
                  }),
                  [a, i.current, o]
                )
              })({ data: q, error: G, isValidating: K }, T),
              ee = X[0],
              te = X[1],
              ne = X[2],
              re = (0, r.useCallback)(
                function (e) {
                  return a(void 0, void 0, void 0, function () {
                    var t, r, a, s, l, v, p, h, g, y, m, b, w
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (
                            ((t = L.current),
                            !R || !t || T.current || U().isPaused())
                          )
                            return [2, !1]
                          ;(s = !0),
                            (l = e || {}),
                            (v = !O[R] || !l.dedupe),
                            (p = function () {
                              return !T.current && R === j.current && M.current
                            }),
                            (h = function () {
                              var e = O[R]
                              e && e[1] === a && delete O[R]
                            }),
                            (g = { isValidating: !1 }),
                            (y = function () {
                              H({ isValidating: !1 }), p() && ne(g)
                            }),
                            H({ isValidating: !0 }),
                            ne({ isValidating: !0 }),
                            (i.label = 1)
                        case 1:
                          return (
                            i.trys.push([1, 3, , 4]),
                            v &&
                              (V(o, R, ee.current.data, ee.current.error, !0),
                              n.loadingTimeout &&
                                !o.get(R) &&
                                setTimeout(function () {
                                  s && p() && U().onLoadingSlow(R, n)
                                }, n.loadingTimeout),
                              (O[R] = [t.apply(void 0, S), Z()])),
                            (w = O[R]),
                            (r = w[0]),
                            (a = w[1]),
                            [4, r]
                          )
                        case 2:
                          return (
                            (r = i.sent()),
                            v && setTimeout(h, n.dedupingInterval),
                            O[R] && O[R][1] === a
                              ? (H({ error: c }),
                                (g.error = c),
                                (m = E[R]),
                                !f(m) && (a <= m[0] || a <= m[1] || 0 === m[1])
                                  ? (y(),
                                    v && p() && U().onDiscarded(R),
                                    [2, !1])
                                  : (u(ee.current.data, r)
                                      ? (g.data = ee.current.data)
                                      : (g.data = r),
                                    u(o.get(R), r) || o.set(R, r),
                                    v && p() && U().onSuccess(r, R, n),
                                    [3, 4]))
                              : (v && p() && U().onDiscarded(R), [2, !1])
                          )
                        case 3:
                          return (
                            (b = i.sent()),
                            h(),
                            U().isPaused() ||
                              (H({ error: b }),
                              (g.error = b),
                              v &&
                                p() &&
                                (U().onError(b, R, n),
                                (('boolean' === typeof n.shouldRetryOnError &&
                                  n.shouldRetryOnError) ||
                                  (d(n.shouldRetryOnError) &&
                                    n.shouldRetryOnError(b))) &&
                                  W() &&
                                  U().onErrorRetry(b, R, n, re, {
                                    retryCount: (l.retryCount || 0) + 1,
                                    dedupe: !0,
                                  }))),
                            [3, 4]
                          )
                        case 4:
                          return (
                            (s = !1),
                            y(),
                            p() && v && V(o, R, g.data, g.error, !1),
                            [2, !0]
                          )
                      }
                    })
                  })
                },
                [R]
              ),
              ae = (0, r.useCallback)(
                D.bind(c, o, function () {
                  return j.current
                }),
                []
              )
            if (
              (x(function () {
                ;(L.current = t), (F.current = n)
              }),
              x(
                function () {
                  if (R) {
                    var e = R !== j.current,
                      t = re.bind(c, B),
                      n = 0,
                      r = z(R, w, function (e, t, n) {
                        ne(
                          l(
                            { error: t, isValidating: n },
                            u(ee.current.data, e) ? c : { data: e }
                          )
                        )
                      }),
                      a = z(R, b, function (e) {
                        if (0 == e) {
                          var r = Date.now()
                          U().revalidateOnFocus &&
                            r > n &&
                            W() &&
                            ((n = r + U().focusThrottleInterval), t())
                        } else if (1 == e)
                          U().revalidateOnReconnect && W() && t()
                        else if (2 == e) return re()
                      })
                    return (
                      (T.current = !1),
                      (j.current = R),
                      (M.current = !0),
                      e && ne({ data: q, error: G, isValidating: K }),
                      Y() && (f(q) || _ ? t() : I(t)),
                      function () {
                        ;(T.current = !0), r(), a()
                      }
                    )
                  }
                },
                [R, re]
              ),
              x(
                function () {
                  var e
                  function t() {
                    var t = d(h) ? h(q) : h
                    t && -1 !== e && (e = setTimeout(n, t))
                  }
                  function n() {
                    ee.current.error ||
                    (!g && !U().isVisible()) ||
                    (!y && !U().isOnline())
                      ? t()
                      : re(B).then(t)
                  }
                  return (
                    t(),
                    function () {
                      e && (clearTimeout(e), (e = -1))
                    }
                  )
                },
                [h, g, y, re]
              ),
              (0, r.useDebugValue)(q),
              v && f(q) && R)
            )
              throw (
                ((L.current = t),
                (F.current = n),
                (T.current = !1),
                f(G) ? re(B) : G)
              )
            return {
              mutate: ae,
              get data() {
                return (te.data = !0), q
              },
              get error() {
                return (te.error = !0), G
              },
              get isValidating() {
                return (te.isValidating = !0), K
              },
            }
          }),
          function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            var n = G(),
              r = J(e),
              a = r[0],
              i = r[1],
              u = r[2],
              c = $(n, u),
              s = o,
              f = c.use
            if (f) for (var d = f.length; d-- > 0; ) s = f[d](s)
            return s(a, i || c.fetcher, c)
          })
    },
  },
])
