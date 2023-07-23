'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [727],
  {
    4914: function (e, t, n) {
      var r = n(7294)
      const i = (0, r.forwardRef)(function (
        { testId: e = 'store-badge', children: t, ...n },
        i
      ) {
        return r.createElement(
          'div',
          Object.assign({ ref: i, 'data-fs-badge': !0, 'data-testid': e }, n),
          t
        )
      })
      t.Z = i
    },
    571: function (e, t, n) {
      var r = n(7294)
      const i = (0, r.forwardRef)(function (
        { testId: e = 'store-label', children: t, ...n },
        i
      ) {
        return r.createElement(
          'label',
          Object.assign({ ref: i, 'data-fs-label': !0, 'data-testid': e }, n),
          t
        )
      })
      t.Z = i
    },
    9688: function (e, t, n) {
      var r = n(7294)
      const i = (0, r.forwardRef)(function (
        {
          as: e = 'span',
          testId: t = 'store-price',
          value: n,
          formatter: i = (e) => e,
          variant: o = 'selling',
          ...a
        },
        u
      ) {
        const c = i(n, o)
        return r.createElement(
          e,
          Object.assign(
            {
              ref: u,
              'data-fs-price': !0,
              'data-testid': t,
              'data-variant': o,
            },
            a
          ),
          c
        )
      })
      t.Z = i
    },
    9229: function (e, t, n) {
      var r = n(7294)
      const i = (0, r.forwardRef)(function (
        { testId: e = 'store-skeleton', ...t },
        n
      ) {
        return r.createElement(
          'div',
          Object.assign({ ref: n, 'data-fs-skeleton': !0, 'data-testid': e }, t)
        )
      })
      t.Z = i
    },
    1201: function (e, t, n) {
      var r = n(7294)
      const i = (0, r.forwardRef)(function (
        { testId: e = 'store-product-card', children: t, ...n },
        i
      ) {
        return r.createElement(
          'article',
          Object.assign(
            { ref: i, 'data-fs-product-card': !0, 'data-testid': e },
            n
          ),
          t
        )
      })
      t.Z = i
    },
    4147: function (e, t, n) {
      var r = n(7294)
      const i = (0, r.forwardRef)(function (
        { testId: e = 'store-product-card-actions', children: t, ...n },
        i
      ) {
        return r.createElement(
          'div',
          Object.assign(
            { ref: i, 'data-product-card-actions': !0, 'data-testid': e },
            n
          ),
          t
        )
      })
      t.Z = i
    },
    7599: function (e, t, n) {
      var r = n(7294)
      const i = (0, r.forwardRef)(function (
        { testId: e = 'store-product-card-content', children: t, ...n },
        i
      ) {
        return r.createElement(
          'section',
          Object.assign(
            { ref: i, 'data-product-card-content': !0, 'data-testid': e },
            n
          ),
          t
        )
      })
      t.Z = i
    },
    5885: function (e, t, n) {
      var r = n(7294)
      const i = (0, r.forwardRef)(function (
        { testId: e = 'store-product-card-image', children: t, ...n },
        i
      ) {
        return r.createElement(
          'div',
          Object.assign(
            { ref: i, 'data-product-card-image': !0, 'data-testid': e },
            n
          ),
          t
        )
      })
      t.Z = i
    },
    131: function (e, t, n) {
      n.d(t, {
        YD: function () {
          return p
        },
      })
      var r = n(7294)
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          i.apply(this, arguments)
        )
      }
      function o(e, t) {
        return (
          (o =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          o(e, t)
        )
      }
      var a = new Map(),
        u = new WeakMap(),
        c = 0,
        s = void 0
      function f(e) {
        return Object.keys(e)
          .sort()
          .filter(function (t) {
            return void 0 !== e[t]
          })
          .map(function (t) {
            return (
              t +
              '_' +
              ('root' === t
                ? (n = e.root)
                  ? (u.has(n) || ((c += 1), u.set(n, c.toString())), u.get(n))
                  : '0'
                : e[t])
            )
            var n
          })
          .toString()
      }
      function d(e, t, n, r) {
        if (
          (void 0 === n && (n = {}),
          void 0 === r && (r = s),
          'undefined' === typeof window.IntersectionObserver && void 0 !== r)
        ) {
          var i = e.getBoundingClientRect()
          return (
            t(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio:
                'number' === typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i,
            }),
            function () {}
          )
        }
        var o = (function (e) {
            var t = f(e),
              n = a.get(t)
            if (!n) {
              var r,
                i = new Map(),
                o = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var n,
                      o =
                        t.isIntersecting &&
                        r.some(function (e) {
                          return t.intersectionRatio >= e
                        })
                    e.trackVisibility &&
                      'undefined' === typeof t.isVisible &&
                      (t.isVisible = o),
                      null == (n = i.get(t.target)) ||
                        n.forEach(function (e) {
                          e(o, t)
                        })
                  })
                }, e)
              ;(r =
                o.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (n = { id: t, observer: o, elements: i }),
                a.set(t, n)
            }
            return n
          })(n),
          u = o.id,
          c = o.observer,
          d = o.elements,
          l = d.get(e) || []
        return (
          d.has(e) || d.set(e, l),
          l.push(t),
          c.observe(e),
          function () {
            l.splice(l.indexOf(t), 1),
              0 === l.length && (d.delete(e), c.unobserve(e)),
              0 === d.size && (c.disconnect(), a.delete(u))
          }
        )
      }
      var l = [
        'children',
        'as',
        'triggerOnce',
        'threshold',
        'root',
        'rootMargin',
        'onChange',
        'skip',
        'trackVisibility',
        'delay',
        'initialInView',
        'fallbackInView',
      ]
      function v(e) {
        return 'function' !== typeof e.children
      }
      var h = (function (e) {
        var t, n
        function a(t) {
          var n
          return (
            ((n = e.call(this, t) || this).node = null),
            (n._unobserveCb = null),
            (n.handleNode = function (e) {
              n.node &&
                (n.unobserve(),
                e ||
                  n.props.triggerOnce ||
                  n.props.skip ||
                  n.setState({
                    inView: !!n.props.initialInView,
                    entry: void 0,
                  })),
                (n.node = e || null),
                n.observeNode()
            }),
            (n.handleChange = function (e, t) {
              e && n.props.triggerOnce && n.unobserve(),
                v(n.props) || n.setState({ inView: e, entry: t }),
                n.props.onChange && n.props.onChange(e, t)
            }),
            (n.state = { inView: !!t.initialInView, entry: void 0 }),
            n
          )
        }
        ;(n = e),
          ((t = a).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          o(t, n)
        var u = a.prototype
        return (
          (u.componentDidUpdate = function (e) {
            ;(e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode())
          }),
          (u.componentWillUnmount = function () {
            this.unobserve(), (this.node = null)
          }),
          (u.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                n = e.root,
                r = e.rootMargin,
                i = e.trackVisibility,
                o = e.delay,
                a = e.fallbackInView
              this._unobserveCb = d(
                this.node,
                this.handleChange,
                {
                  threshold: t,
                  root: n,
                  rootMargin: r,
                  trackVisibility: i,
                  delay: o,
                },
                a
              )
            }
          }),
          (u.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null))
          }),
          (u.render = function () {
            if (!v(this.props)) {
              var e = this.state,
                t = e.inView,
                n = e.entry
              return this.props.children({
                inView: t,
                entry: n,
                ref: this.handleNode,
              })
            }
            var o = this.props,
              a = o.children,
              u = o.as,
              c = (function (e, t) {
                if (null == e) return {}
                var n,
                  r,
                  i = {},
                  o = Object.keys(e)
                for (r = 0; r < o.length; r++)
                  (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
                return i
              })(o, l)
            return r.createElement(
              u || 'div',
              i({ ref: this.handleNode }, c),
              a
            )
          }),
          a
        )
      })(r.Component)
      function p(e) {
        var t = void 0 === e ? {} : e,
          n = t.threshold,
          i = t.delay,
          o = t.trackVisibility,
          a = t.rootMargin,
          u = t.root,
          c = t.triggerOnce,
          s = t.skip,
          f = t.initialInView,
          l = t.fallbackInView,
          v = r.useRef(),
          h = r.useState({ inView: !!f }),
          p = h[0],
          g = h[1],
          b = r.useCallback(
            function (e) {
              void 0 !== v.current && (v.current(), (v.current = void 0)),
                s ||
                  (e &&
                    (v.current = d(
                      e,
                      function (e, t) {
                        g({ inView: e, entry: t }),
                          t.isIntersecting &&
                            c &&
                            v.current &&
                            (v.current(), (v.current = void 0))
                      },
                      {
                        root: u,
                        rootMargin: a,
                        threshold: n,
                        trackVisibility: o,
                        delay: i,
                      },
                      l
                    )))
            },
            [Array.isArray(n) ? n.toString() : n, u, a, c, s, o, l, i]
          )
        ;(0, r.useEffect)(function () {
          v.current || !p.entry || c || s || g({ inView: !!f })
        })
        var y = [b, p.inView, p.entry]
        return (y.ref = y[0]), (y.inView = y[1]), (y.entry = y[2]), y
      }
      ;(h.displayName = 'InView'),
        (h.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 })
    },
    8100: function (e, t, n) {
      n.d(t, {
        JG: function () {
          return J
        },
        ZP: function () {
          return H
        },
        kY: function () {
          return Y
        },
      })
      var r = n(7294)
      function i(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              c(r.next(e))
            } catch (t) {
              o(t)
            }
          }
          function u(e) {
            try {
              c(r.throw(e))
            } catch (t) {
              o(t)
            }
          }
          function c(e) {
            var t
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(a, u)
          }
          c((r = r.apply(e, t || [])).next())
        })
      }
      function o(e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          'function' === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this
            }),
          o
        )
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o
                      break
                    case 4:
                      return a.label++, { value: o[1], done: !1 }
                    case 5:
                      a.label++, (r = o[1]), (o = [0])
                      continue
                    case 7:
                      ;(o = a.ops.pop()), a.trys.pop()
                      continue
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0
                        continue
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1]
                        break
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        ;(a.label = i[1]), (i = o)
                        break
                      }
                      if (i && a.label < i[2]) {
                        ;(a.label = i[2]), a.ops.push(o)
                        break
                      }
                      i[2] && a.ops.pop(), a.trys.pop()
                      continue
                  }
                  o = t.call(e, a)
                } catch (u) {
                  ;(o = [6, u]), (r = 0)
                } finally {
                  n = i = 0
                }
              if (5 & o[0]) throw o[1]
              return { value: o[0] ? o[1] : void 0, done: !0 }
            })([o, u])
          }
        }
      }
      var a,
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
        h = function () {
          return typeof window != v
        },
        p = new WeakMap(),
        g = 0,
        b = function (e) {
          var t,
            n,
            r = typeof e,
            i = e && e.constructor,
            o = i == Date
          if (s(e) !== e || o || i == RegExp)
            t = o
              ? e.toJSON()
              : 'symbol' == r
              ? e.toString()
              : 'string' == r
              ? JSON.stringify(e)
              : '' + e
          else {
            if ((t = p.get(e))) return t
            if (((t = ++g + '~'), p.set(e, t), i == Array)) {
              for (t = '@', n = 0; n < e.length; n++) t += b(e[n]) + ','
              p.set(e, t)
            }
            if (i == s) {
              t = '#'
              for (var a = s.keys(e).sort(); !f((n = a.pop())); )
                f(e[n]) || (t += n + ':' + b(e[n]) + ',')
              p.set(e, t)
            }
          }
          return t
        },
        y = !0,
        w = h(),
        m = typeof document != v,
        k =
          w && window.addEventListener
            ? window.addEventListener.bind(window)
            : u,
        O = m ? document.addEventListener.bind(document) : u,
        V =
          w && window.removeEventListener
            ? window.removeEventListener.bind(window)
            : u,
        R = m ? document.removeEventListener.bind(document) : u,
        E = {
          isOnline: function () {
            return y
          },
          isVisible: function () {
            var e = m && document.visibilityState
            return f(e) || 'hidden' !== e
          },
        },
        I = {
          initFocus: function (e) {
            return (
              O('visibilitychange', e),
              k('focus', e),
              function () {
                R('visibilitychange', e), V('focus', e)
              }
            )
          },
          initReconnect: function (e) {
            var t = function () {
                ;(y = !0), e()
              },
              n = function () {
                y = !1
              }
            return (
              k('online', t),
              k('offline', n),
              function () {
                V('online', t), V('offline', n)
              }
            )
          },
        },
        C = !h() || 'Deno' in window,
        S = function (e) {
          return h() && typeof window.requestAnimationFrame != v
            ? window.requestAnimationFrame(e)
            : setTimeout(e, 1)
        },
        j = C ? r.useEffect : r.useLayoutEffect,
        M = 'undefined' !== typeof navigator && navigator.connection,
        T =
          !C &&
          M &&
          (['slow-2g', '2g'].includes(M.effectiveType) || M.saveData),
        _ = function (e) {
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
                ? b(e)
                : ''),
            t,
            e ? '$swr$' + e : '',
          ]
        },
        x = new WeakMap(),
        D = function (e, t, n, r, i, o, a) {
          void 0 === a && (a = !0)
          var u = x.get(e),
            c = u[0],
            s = u[1],
            f = u[3],
            d = c[t],
            l = s[t]
          if (a && l) for (var v = 0; v < l.length; ++v) l[v](n, r, i)
          return o && (delete f[t], d && d[0])
            ? d[0](2).then(function () {
                return e.get(t)
              })
            : e.get(t)
        },
        N = 0,
        P = function () {
          return ++N
        },
        A = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return i(void 0, void 0, void 0, function () {
            var t, n, r, i, a, u, s, v, h, p, g, b, y, w, m, k, O, V, R, E, I
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (
                    ((t = e[0]),
                    (n = e[1]),
                    (r = e[2]),
                    (i = e[3]),
                    (u =
                      !!f(
                        (a =
                          'boolean' === typeof i ? { revalidate: i } : i || {})
                          .populateCache
                      ) || a.populateCache),
                    (s = !1 !== a.revalidate),
                    (v = !1 !== a.rollbackOnError),
                    (h = a.optimisticData),
                    (p = _(n)),
                    (g = p[0]),
                    (b = p[2]),
                    !g)
                  )
                    return [2]
                  if (((y = x.get(t)), (w = y[2]), e.length < 3))
                    return [2, D(t, g, t.get(g), c, c, s, !0)]
                  if (
                    ((m = r),
                    (O = P()),
                    (w[g] = [O, 0]),
                    (V = !f(h)),
                    (R = t.get(g)),
                    V && ((E = d(h) ? h(R) : h), t.set(g, E), D(t, g, E)),
                    d(m))
                  )
                    try {
                      m = m(t.get(g))
                    } catch (C) {
                      k = C
                    }
                  return m && d(m.then)
                    ? [
                        4,
                        m.catch(function (e) {
                          k = e
                        }),
                      ]
                    : [3, 2]
                case 1:
                  if (((m = o.sent()), O !== w[g][0])) {
                    if (k) throw k
                    return [2, m]
                  }
                  k && V && v && ((u = !0), (m = R), t.set(g, R)), (o.label = 2)
                case 2:
                  return (
                    u &&
                      (k || (d(u) && (m = u(m, R)), t.set(g, m)),
                      t.set(b, l(t.get(b), { error: k }))),
                    (w[g][1] = P()),
                    [4, D(t, g, m, k, c, s, !!u)]
                  )
                case 3:
                  if (((I = o.sent()), k)) throw k
                  return [2, u ? I : m]
              }
            })
          })
        },
        L = function (e, t) {
          for (var n in e) e[n][0] && e[n][0](t)
        },
        Z = function (e, t) {
          if (!x.has(e)) {
            var n = l(I, t),
              r = {},
              i = A.bind(c, e),
              o = u
            if ((x.set(e, [r, {}, {}, {}, i]), !C)) {
              var a = n.initFocus(setTimeout.bind(c, L.bind(c, r, 0))),
                s = n.initReconnect(setTimeout.bind(c, L.bind(c, r, 1)))
              o = function () {
                a && a(), s && s(), x.delete(e)
              }
            }
            return [e, i, o]
          }
          return [e, x.get(e)[4]]
        },
        F = Z(new Map()),
        W = F[0],
        J = F[1],
        q = l(
          {
            onLoadingSlow: u,
            onSuccess: u,
            onError: u,
            onErrorRetry: function (e, t, n, r, i) {
              var o = n.errorRetryCount,
                a = i.retryCount,
                u =
                  ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
                  n.errorRetryInterval
              ;(!f(o) && a > o) || setTimeout(r, u, i)
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
              return b(e) == b(t)
            },
            isPaused: function () {
              return !1
            },
            cache: W,
            mutate: J,
            fallback: {},
          },
          E
        ),
        B = function (e, t) {
          var n = l(e, t)
          if (t) {
            var r = e.use,
              i = e.fallback,
              o = t.use,
              a = t.fallback
            r && o && (n.use = r.concat(o)), i && a && (n.fallback = l(i, a))
          }
          return n
        },
        G = (0, r.createContext)({}),
        U = function (e) {
          return d(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
        },
        Y = function () {
          return l(q, (0, r.useContext)(G))
        },
        $ = function (e, t, n) {
          var r = t[e] || (t[e] = [])
          return (
            r.push(n),
            function () {
              var e = r.indexOf(n)
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop())
            }
          )
        },
        z = { dedupe: !0 },
        H =
          (s.defineProperty(
            function (e) {
              var t = e.value,
                n = B((0, r.useContext)(G), t),
                i = t && t.provider,
                o = (0, r.useState)(function () {
                  return i ? Z(i(n.cache || W), t) : c
                })[0]
              return (
                o && ((n.cache = o[0]), (n.mutate = o[1])),
                j(function () {
                  return o ? o[2] : c
                }, []),
                (0, r.createElement)(G.Provider, l(e, { value: n }))
              )
            },
            'default',
            { value: q }
          ),
          (a = function (e, t, n) {
            var a = n.cache,
              u = n.compare,
              s = n.fallbackData,
              v = n.suspense,
              h = n.revalidateOnMount,
              p = n.refreshInterval,
              g = n.refreshWhenHidden,
              b = n.refreshWhenOffline,
              y = x.get(a),
              w = y[0],
              m = y[1],
              k = y[2],
              O = y[3],
              V = _(e),
              R = V[0],
              E = V[1],
              I = V[2],
              M = (0, r.useRef)(!1),
              T = (0, r.useRef)(!1),
              N = (0, r.useRef)(R),
              L = (0, r.useRef)(t),
              Z = (0, r.useRef)(n),
              F = function () {
                return Z.current
              },
              W = function () {
                return F().isVisible() && F().isOnline()
              },
              J = function (e) {
                return a.set(I, l(a.get(I), e))
              },
              q = a.get(R),
              B = f(s) ? n.fallback[R] : s,
              G = f(q) ? B : q,
              U = a.get(I) || {},
              Y = U.error,
              H = !M.current,
              K = function () {
                return H && !f(h)
                  ? h
                  : !F().isPaused() &&
                      (v
                        ? !f(G) && n.revalidateIfStale
                        : f(G) || n.revalidateIfStale)
              },
              Q = !(!R || !t) && (!!U.isValidating || (H && K())),
              X = (function (e, t) {
                var n = (0, r.useState)({})[1],
                  i = (0, r.useRef)(e),
                  o = (0, r.useRef)({ data: !1, error: !1, isValidating: !1 }),
                  a = (0, r.useCallback)(function (e) {
                    var r = !1,
                      a = i.current
                    for (var u in e) {
                      var c = u
                      a[c] !== e[c] && ((a[c] = e[c]), o.current[c] && (r = !0))
                    }
                    r && !t.current && n({})
                  }, [])
                return (
                  j(function () {
                    i.current = e
                  }),
                  [i, o.current, a]
                )
              })({ data: G, error: Y, isValidating: Q }, T),
              ee = X[0],
              te = X[1],
              ne = X[2],
              re = (0, r.useCallback)(
                function (e) {
                  return i(void 0, void 0, void 0, function () {
                    var t, r, i, s, l, v, h, p, g, b, y, w, m
                    return o(this, function (o) {
                      switch (o.label) {
                        case 0:
                          if (
                            ((t = L.current),
                            !R || !t || T.current || F().isPaused())
                          )
                            return [2, !1]
                          ;(s = !0),
                            (l = e || {}),
                            (v = !O[R] || !l.dedupe),
                            (h = function () {
                              return !T.current && R === N.current && M.current
                            }),
                            (p = function () {
                              var e = O[R]
                              e && e[1] === i && delete O[R]
                            }),
                            (g = { isValidating: !1 }),
                            (b = function () {
                              J({ isValidating: !1 }), h() && ne(g)
                            }),
                            J({ isValidating: !0 }),
                            ne({ isValidating: !0 }),
                            (o.label = 1)
                        case 1:
                          return (
                            o.trys.push([1, 3, , 4]),
                            v &&
                              (D(a, R, ee.current.data, ee.current.error, !0),
                              n.loadingTimeout &&
                                !a.get(R) &&
                                setTimeout(function () {
                                  s && h() && F().onLoadingSlow(R, n)
                                }, n.loadingTimeout),
                              (O[R] = [t.apply(void 0, E), P()])),
                            (m = O[R]),
                            (r = m[0]),
                            (i = m[1]),
                            [4, r]
                          )
                        case 2:
                          return (
                            (r = o.sent()),
                            v && setTimeout(p, n.dedupingInterval),
                            O[R] && O[R][1] === i
                              ? (J({ error: c }),
                                (g.error = c),
                                (y = k[R]),
                                !f(y) && (i <= y[0] || i <= y[1] || 0 === y[1])
                                  ? (b(),
                                    v && h() && F().onDiscarded(R),
                                    [2, !1])
                                  : (u(ee.current.data, r)
                                      ? (g.data = ee.current.data)
                                      : (g.data = r),
                                    u(a.get(R), r) || a.set(R, r),
                                    v && h() && F().onSuccess(r, R, n),
                                    [3, 4]))
                              : (v && h() && F().onDiscarded(R), [2, !1])
                          )
                        case 3:
                          return (
                            (w = o.sent()),
                            p(),
                            F().isPaused() ||
                              (J({ error: w }),
                              (g.error = w),
                              v &&
                                h() &&
                                (F().onError(w, R, n),
                                (('boolean' === typeof n.shouldRetryOnError &&
                                  n.shouldRetryOnError) ||
                                  (d(n.shouldRetryOnError) &&
                                    n.shouldRetryOnError(w))) &&
                                  W() &&
                                  F().onErrorRetry(w, R, n, re, {
                                    retryCount: (l.retryCount || 0) + 1,
                                    dedupe: !0,
                                  }))),
                            [3, 4]
                          )
                        case 4:
                          return (
                            (s = !1),
                            b(),
                            h() && v && D(a, R, g.data, g.error, !1),
                            [2, !0]
                          )
                      }
                    })
                  })
                },
                [R]
              ),
              ie = (0, r.useCallback)(
                A.bind(c, a, function () {
                  return N.current
                }),
                []
              )
            if (
              (j(function () {
                ;(L.current = t), (Z.current = n)
              }),
              j(
                function () {
                  if (R) {
                    var e = R !== N.current,
                      t = re.bind(c, z),
                      n = 0,
                      r = $(R, m, function (e, t, n) {
                        ne(
                          l(
                            { error: t, isValidating: n },
                            u(ee.current.data, e) ? c : { data: e }
                          )
                        )
                      }),
                      i = $(R, w, function (e) {
                        if (0 == e) {
                          var r = Date.now()
                          F().revalidateOnFocus &&
                            r > n &&
                            W() &&
                            ((n = r + F().focusThrottleInterval), t())
                        } else if (1 == e)
                          F().revalidateOnReconnect && W() && t()
                        else if (2 == e) return re()
                      })
                    return (
                      (T.current = !1),
                      (N.current = R),
                      (M.current = !0),
                      e && ne({ data: G, error: Y, isValidating: Q }),
                      K() && (f(G) || C ? t() : S(t)),
                      function () {
                        ;(T.current = !0), r(), i()
                      }
                    )
                  }
                },
                [R, re]
              ),
              j(
                function () {
                  var e
                  function t() {
                    var t = d(p) ? p(G) : p
                    t && -1 !== e && (e = setTimeout(n, t))
                  }
                  function n() {
                    ee.current.error ||
                    (!g && !F().isVisible()) ||
                    (!b && !F().isOnline())
                      ? t()
                      : re(z).then(t)
                  }
                  return (
                    t(),
                    function () {
                      e && (clearTimeout(e), (e = -1))
                    }
                  )
                },
                [p, g, b, re]
              ),
              (0, r.useDebugValue)(G),
              v && f(G) && R)
            )
              throw (
                ((L.current = t),
                (Z.current = n),
                (T.current = !1),
                f(Y) ? re(z) : Y)
              )
            return {
              mutate: ie,
              get data() {
                return (te.data = !0), G
              },
              get error() {
                return (te.error = !0), Y
              },
              get isValidating() {
                return (te.isValidating = !0), Q
              },
            }
          }),
          function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            var n = Y(),
              r = U(e),
              i = r[0],
              o = r[1],
              u = r[2],
              c = B(n, u),
              s = a,
              f = c.use
            if (f) for (var d = f.length; d-- > 0; ) s = f[d](s)
            return s(i, o || c.fetcher, c)
          })
    },
  },
])
