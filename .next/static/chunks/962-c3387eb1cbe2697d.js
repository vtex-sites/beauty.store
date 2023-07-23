;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [962],
  {
    2962: function (e, t, r) {
      'use strict'
      r.d(t, {
        PB: function () {
          return h
        },
        Qb: function () {
          return R
        },
        gR: function () {
          return U
        },
        iu: function () {
          return C
        },
      })
      var n = r(7294),
        a = r(9008),
        o = r.n(a)
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
              }),
          i.apply(this, arguments)
        )
      }
      function p(e, t) {
        if (null == e) return {}
        var r,
          n,
          a = {},
          o = Object.keys(e)
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r])
        return a
      }
      var l = ['keyOverride'],
        u = {
          templateTitle: '',
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        c = function (e, t, r) {
          void 0 === t && (t = [])
          var a = void 0 === r ? {} : r,
            o = a.defaultWidth,
            i = a.defaultHeight
          return t.reduce(function (t, r, a) {
            return (
              t.push(
                n.createElement('meta', {
                  key: 'og:' + e + ':0' + a,
                  property: 'og:' + e,
                  content: r.url,
                })
              ),
              r.alt &&
                t.push(
                  n.createElement('meta', {
                    key: 'og:' + e + ':alt0' + a,
                    property: 'og:' + e + ':alt',
                    content: r.alt,
                  })
                ),
              r.secureUrl &&
                t.push(
                  n.createElement('meta', {
                    key: 'og:' + e + ':secure_url0' + a,
                    property: 'og:' + e + ':secure_url',
                    content: r.secureUrl.toString(),
                  })
                ),
              r.type &&
                t.push(
                  n.createElement('meta', {
                    key: 'og:' + e + ':type0' + a,
                    property: 'og:' + e + ':type',
                    content: r.type.toString(),
                  })
                ),
              r.width
                ? t.push(
                    n.createElement('meta', {
                      key: 'og:' + e + ':width0' + a,
                      property: 'og:' + e + ':width',
                      content: r.width.toString(),
                    })
                  )
                : o &&
                  t.push(
                    n.createElement('meta', {
                      key: 'og:' + e + ':width0' + a,
                      property: 'og:' + e + ':width',
                      content: o.toString(),
                    })
                  ),
              r.height
                ? t.push(
                    n.createElement('meta', {
                      key: 'og:' + e + ':height' + a,
                      property: 'og:' + e + ':height',
                      content: r.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    n.createElement('meta', {
                      key: 'og:' + e + ':height' + a,
                      property: 'og:' + e + ':height',
                      content: i.toString(),
                    })
                  ),
              t
            )
          }, [])
        },
        d = function (e) {
          var t,
            r,
            a,
            o = []
          e.titleTemplate && (u.templateTitle = e.titleTemplate)
          var d = ''
          e.title
            ? ((d = e.title),
              u.templateTitle &&
                (d = u.templateTitle.replace(/%s/g, function () {
                  return d
                })))
            : e.defaultTitle && (d = e.defaultTitle),
            d && o.push(n.createElement('title', { key: 'title' }, d))
          var s,
            h,
            m = e.noindex || u.noindex || e.dangerouslySetAllPagesToNoIndex,
            f = e.nofollow || u.nofollow || e.dangerouslySetAllPagesToNoFollow,
            g = ''
          if (e.robotsProps) {
            var y = e.robotsProps,
              v = y.nosnippet,
              k = y.maxSnippet,
              G = y.maxImagePreview,
              b = y.maxVideoPreview,
              E = y.noarchive,
              w = y.noimageindex,
              O = y.notranslate,
              A = y.unavailableAfter
            g =
              (v ? ',nosnippet' : '') +
              (k ? ',max-snippet:' + k : '') +
              (G ? ',max-image-preview:' + G : '') +
              (E ? ',noarchive' : '') +
              (A ? ',unavailable_after:' + A : '') +
              (w ? ',noimageindex' : '') +
              (b ? ',max-video-preview:' + b : '') +
              (O ? ',notranslate' : '')
          }
          ;(m || f
            ? (e.dangerouslySetAllPagesToNoIndex && (u.noindex = !0),
              e.dangerouslySetAllPagesToNoFollow && (u.nofollow = !0),
              o.push(
                n.createElement('meta', {
                  key: 'robots',
                  name: 'robots',
                  content:
                    (m ? 'noindex' : 'index') +
                    ',' +
                    (f ? 'nofollow' : 'follow') +
                    g,
                })
              ))
            : o.push(
                n.createElement('meta', {
                  key: 'robots',
                  name: 'robots',
                  content: 'index,follow' + g,
                })
              ),
          e.description &&
            o.push(
              n.createElement('meta', {
                key: 'description',
                name: 'description',
                content: e.description,
              })
            ),
          e.themeColor &&
            o.push(
              n.createElement('meta', {
                key: 'theme-color',
                name: 'theme-color',
                content: e.themeColor,
              })
            ),
          e.mobileAlternate &&
            o.push(
              n.createElement('link', {
                rel: 'alternate',
                key: 'mobileAlternate',
                media: e.mobileAlternate.media,
                href: e.mobileAlternate.href,
              })
            ),
          e.languageAlternates &&
            e.languageAlternates.length > 0 &&
            e.languageAlternates.forEach(function (e) {
              o.push(
                n.createElement('link', {
                  rel: 'alternate',
                  key: 'languageAlternate-' + e.hrefLang,
                  hrefLang: e.hrefLang,
                  href: e.href,
                })
              )
            }),
          e.twitter &&
            (e.twitter.cardType &&
              o.push(
                n.createElement('meta', {
                  key: 'twitter:card',
                  name: 'twitter:card',
                  content: e.twitter.cardType,
                })
              ),
            e.twitter.site &&
              o.push(
                n.createElement('meta', {
                  key: 'twitter:site',
                  name: 'twitter:site',
                  content: e.twitter.site,
                })
              ),
            e.twitter.handle &&
              o.push(
                n.createElement('meta', {
                  key: 'twitter:creator',
                  name: 'twitter:creator',
                  content: e.twitter.handle,
                })
              )),
          e.facebook &&
            e.facebook.appId &&
            o.push(
              n.createElement('meta', {
                key: 'fb:app_id',
                property: 'fb:app_id',
                content: e.facebook.appId,
              })
            ),
          (null != (t = e.openGraph) && t.title) || d) &&
            o.push(
              n.createElement('meta', {
                key: 'og:title',
                property: 'og:title',
                content: (null == (s = e.openGraph) ? void 0 : s.title) || d,
              })
            )
          ;((null != (r = e.openGraph) && r.description) || e.description) &&
            o.push(
              n.createElement('meta', {
                key: 'og:description',
                property: 'og:description',
                content:
                  (null == (h = e.openGraph) ? void 0 : h.description) ||
                  e.description,
              })
            )
          if (e.openGraph) {
            if (
              ((e.openGraph.url || e.canonical) &&
                o.push(
                  n.createElement('meta', {
                    key: 'og:url',
                    property: 'og:url',
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var _ = e.openGraph.type.toLowerCase()
              o.push(
                n.createElement('meta', {
                  key: 'og:type',
                  property: 'og:type',
                  content: _,
                })
              ),
                'profile' === _ && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      o.push(
                        n.createElement('meta', {
                          key: 'profile:first_name',
                          property: 'profile:first_name',
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      o.push(
                        n.createElement('meta', {
                          key: 'profile:last_name',
                          property: 'profile:last_name',
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      o.push(
                        n.createElement('meta', {
                          key: 'profile:username',
                          property: 'profile:username',
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      o.push(
                        n.createElement('meta', {
                          key: 'profile:gender',
                          property: 'profile:gender',
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : 'book' === _ && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        o.push(
                          n.createElement('meta', {
                            key: 'book:author:0' + t,
                            property: 'book:author',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.book.isbn &&
                      o.push(
                        n.createElement('meta', {
                          key: 'book:isbn',
                          property: 'book:isbn',
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      o.push(
                        n.createElement('meta', {
                          key: 'book:release_date',
                          property: 'book:release_date',
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        o.push(
                          n.createElement('meta', {
                            key: 'book:tag:0' + t,
                            property: 'book:tag',
                            content: e,
                          })
                        )
                      }))
                  : 'article' === _ && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      o.push(
                        n.createElement('meta', {
                          key: 'article:published_time',
                          property: 'article:published_time',
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      o.push(
                        n.createElement('meta', {
                          key: 'article:modified_time',
                          property: 'article:modified_time',
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      o.push(
                        n.createElement('meta', {
                          key: 'article:expiration_time',
                          property: 'article:expiration_time',
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        o.push(
                          n.createElement('meta', {
                            key: 'article:author:0' + t,
                            property: 'article:author',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.article.section &&
                      o.push(
                        n.createElement('meta', {
                          key: 'article:section',
                          property: 'article:section',
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        o.push(
                          n.createElement('meta', {
                            key: 'article:tag:0' + t,
                            property: 'article:tag',
                            content: e,
                          })
                        )
                      }))
                  : ('video.movie' !== _ &&
                      'video.episode' !== _ &&
                      'video.tv_show' !== _ &&
                      'video.other' !== _) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          o.push(
                            n.createElement('meta', {
                              key: 'video:actor:0' + t,
                              property: 'video:actor',
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            o.push(
                              n.createElement('meta', {
                                key: 'video:actor:role:0' + t,
                                property: 'video:actor:role',
                                content: e.role,
                              })
                            )
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        o.push(
                          n.createElement('meta', {
                            key: 'video:director:0' + t,
                            property: 'video:director',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        o.push(
                          n.createElement('meta', {
                            key: 'video:writer:0' + t,
                            property: 'video:writer',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.duration &&
                      o.push(
                        n.createElement('meta', {
                          key: 'video:duration',
                          property: 'video:duration',
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      o.push(
                        n.createElement('meta', {
                          key: 'video:release_date',
                          property: 'video:release_date',
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        o.push(
                          n.createElement('meta', {
                            key: 'video:tag:0' + t,
                            property: 'video:tag',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.series &&
                      o.push(
                        n.createElement('meta', {
                          key: 'video:series',
                          property: 'video:series',
                          content: e.openGraph.video.series,
                        })
                      ))
            }
            e.defaultOpenGraphImageWidth &&
              (u.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (u.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                o.push.apply(
                  o,
                  c('image', e.openGraph.images, {
                    defaultWidth: u.defaultOpenGraphImageWidth,
                    defaultHeight: u.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (u.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (u.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                o.push.apply(
                  o,
                  c('video', e.openGraph.videos, {
                    defaultWidth: u.defaultOpenGraphVideoWidth,
                    defaultHeight: u.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.audio &&
                o.push.apply(o, c('audio', e.openGraph.audio)),
              e.openGraph.locale &&
                o.push(
                  n.createElement('meta', {
                    key: 'og:locale',
                    property: 'og:locale',
                    content: e.openGraph.locale,
                  })
                ),
              (e.openGraph.siteName || e.openGraph.site_name) &&
                o.push(
                  n.createElement('meta', {
                    key: 'og:site_name',
                    property: 'og:site_name',
                    content: e.openGraph.siteName || e.openGraph.site_name,
                  })
                )
          }
          return (
            e.canonical &&
              o.push(
                n.createElement('link', {
                  rel: 'canonical',
                  href: e.canonical,
                  key: 'canonical',
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t,
                  r,
                  a = e.keyOverride,
                  u = p(e, l)
                o.push(
                  n.createElement(
                    'meta',
                    i(
                      {
                        key:
                          'meta:' +
                          (null !=
                          (t =
                            null != (r = null != a ? a : u.name)
                              ? r
                              : u.property)
                            ? t
                            : u.httpEquiv),
                      },
                      u
                    )
                  )
                )
              }),
            null != (a = e.additionalLinkTags) &&
              a.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t
                o.push(
                  n.createElement(
                    'link',
                    i(
                      {
                        key:
                          'link' +
                          (null != (t = e.keyOverride) ? t : e.href) +
                          e.rel,
                      },
                      e
                    )
                  )
                )
              }),
            o
          )
        },
        s = function (e) {
          return n.createElement(o(), null, d(e))
        },
        h = function (e) {
          var t = e.title,
            r = e.themeColor,
            a = e.noindex,
            o = void 0 !== a && a,
            i = e.nofollow,
            p = e.robotsProps,
            l = e.description,
            u = e.canonical,
            c = e.openGraph,
            h = e.facebook,
            m = e.twitter,
            f = e.additionalMetaTags,
            g = e.titleTemplate,
            y = e.defaultTitle,
            v = e.mobileAlternate,
            k = e.languageAlternates,
            G = e.additionalLinkTags,
            b = e.useAppDir,
            E = void 0 !== b && b
          return n.createElement(
            n.Fragment,
            null,
            E
              ? d({
                  title: t,
                  themeColor: r,
                  noindex: o,
                  nofollow: i,
                  robotsProps: p,
                  description: l,
                  canonical: u,
                  facebook: h,
                  openGraph: c,
                  additionalMetaTags: f,
                  twitter: m,
                  titleTemplate: g,
                  defaultTitle: y,
                  mobileAlternate: v,
                  languageAlternates: k,
                  additionalLinkTags: G,
                })
              : n.createElement(s, {
                  title: t,
                  themeColor: r,
                  noindex: o,
                  nofollow: i,
                  robotsProps: p,
                  description: l,
                  canonical: u,
                  facebook: h,
                  openGraph: c,
                  additionalMetaTags: f,
                  twitter: m,
                  titleTemplate: g,
                  defaultTitle: y,
                  mobileAlternate: v,
                  languageAlternates: k,
                  additionalLinkTags: G,
                })
          )
        },
        m = function (e, t) {
          var r = t
          Array.isArray(r) && 1 === r.length && (r = i({}, t[0]))
          var n = Array.isArray(r)
            ? r.map(function (t) {
                return f(e, t)
              })
            : f(e, r)
          return { __html: JSON.stringify(n, k) }
        },
        f = function (e, t) {
          var r = t.id,
            n = i({}, (void 0 === r ? void 0 : r) ? { '@id': t.id } : {}, t)
          return (
            delete n.id, i({ '@context': 'https://schema.org', '@type': e }, n)
          )
        },
        g = Object.freeze({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&apos;',
        }),
        y = new RegExp('[' + Object.keys(g).join('') + ']', 'g'),
        v = function (e) {
          return g[e]
        },
        k = function (e, t) {
          switch (typeof t) {
            case 'object':
              if (null === t) return
              return t
            case 'number':
            case 'boolean':
            case 'bigint':
              return t
            case 'string':
              return t.replace(y, v)
            default:
              return
          }
        },
        G = [
          'type',
          'keyOverride',
          'scriptKey',
          'scriptId',
          'dataArray',
          'useAppDir',
        ]
      function b(e) {
        var t = e.type,
          r = void 0 === t ? 'Thing' : t,
          a = e.keyOverride,
          l = e.scriptKey,
          u = e.scriptId,
          c = void 0 === u ? void 0 : u,
          d = e.dataArray,
          s = e.useAppDir,
          h = void 0 !== s && s,
          f = p(e, G),
          g = function () {
            return n.createElement('script', {
              type: 'application/ld+json',
              id: c,
              'data-testid': c,
              dangerouslySetInnerHTML: m(r, void 0 === d ? i({}, f) : d),
              key: 'jsonld-' + l + (a ? '-' + a : ''),
            })
          }
        return h ? n.createElement(g, null) : n.createElement(o(), null, g())
      }
      function E(e) {
        return 'string' === typeof e
          ? { '@type': 'Person', name: e }
          : e.name
          ? {
              '@type': null != (t = null == e ? void 0 : e.type) ? t : 'Person',
              name: e.name,
              url: null == e ? void 0 : e.url,
            }
          : void 0
        var t
      }
      function w(e) {
        return Array.isArray(e)
          ? e
              .map(function (e) {
                return E(e)
              })
              .filter(function (e) {
                return !!e
              })
          : e
          ? E(e)
          : void 0
      }
      function O(e) {
        if (e) return { '@type': 'ImageObject', url: e }
      }
      function A(e, t) {
        if (e) return { '@type': 'Organization', name: e, logo: O(t) }
      }
      function _(e) {
        if (e) return i({}, e, { '@type': 'Rating' })
      }
      var T = ['reviewRating', 'author', 'publisher']
      function x(e) {
        function t(e) {
          var t = e.reviewRating,
            r = e.author,
            n = e.publisher
          return i(
            {},
            p(e, T),
            { '@type': 'Review' },
            r && { author: w(r) },
            t && { reviewRating: _(t) },
            n && { publisher: A(n.name) }
          )
        }
        return Array.isArray(e) ? e.map(t) : e ? t(e) : void 0
      }
      function S(e) {
        if (e)
          return {
            '@type': 'AggregateRating',
            ratingCount: e.ratingCount,
            reviewCount: e.reviewCount,
            bestRating: e.bestRating,
            ratingValue: e.ratingValue,
          }
      }
      function I(e) {
        if (e && e.length)
          return e.map(function (e) {
            return {
              '@type': 'ListItem',
              position: e.position,
              item: { '@id': e.item, name: e.name },
            }
          })
      }
      var P = ['type', 'keyOverride', 'potentialActions']
      function C(e) {
        var t = e.type,
          r = void 0 === t ? 'WebSite' : t,
          a = e.keyOverride,
          o = e.potentialActions
        var l = i({}, p(e, P), {
          potentialAction: o.map(function (e) {
            if (e) {
              var t = e.target,
                r = e.queryInput
              return {
                '@type': 'SearchAction',
                target: t + '={' + r + '}',
                'query-input': 'required name=' + r,
              }
            }
          }),
        })
        return n.createElement(
          b,
          i({ type: r, keyOverride: a }, l, {
            scriptKey: 'jsonld-siteLinksSearchBox',
          })
        )
      }
      var L = ['seller']
      function M(e) {
        function t(e) {
          var t = e.seller
          return i(
            {},
            p(e, L),
            { '@type': 'Offer' },
            t && { seller: { '@type': 'Organization', name: t.name } }
          )
        }
        return Array.isArray(e) ? e.map(t) : e ? t(e) : void 0
      }
      function N(e) {
        if (e)
          return {
            '@type': 'AggregateOffer',
            priceCurrency: e.priceCurrency,
            highPrice: e.highPrice,
            lowPrice: e.lowPrice,
            offerCount: e.offerCount,
            offers: M(e.offers),
          }
      }
      function j(e) {
        if (e && (e.manufacturerName || e.manufacturerLogo))
          return {
            '@type': 'Organization',
            name: e.manufacturerName,
            logo: O(e.manufacturerLogo),
          }
      }
      function H(e) {
        if (e) return { '@type': 'Brand', name: e }
      }
      var W = [
        'type',
        'keyOverride',
        'images',
        'brand',
        'reviews',
        'aggregateRating',
        'manufacturerLogo',
        'manufacturerName',
        'offers',
        'aggregateOffer',
        'productName',
      ]
      function R(e) {
        var t = e.type,
          r = void 0 === t ? 'Product' : t,
          a = e.keyOverride,
          o = e.images,
          l = e.brand,
          u = e.reviews,
          c = e.aggregateRating,
          d = e.manufacturerLogo,
          s = e.manufacturerName,
          h = e.offers,
          m = e.aggregateOffer,
          f = e.productName,
          g = i({}, p(e, W), {
            image: o,
            brand: H(l),
            review: x(u),
            aggregateRating: S(c),
            manufacturer: j({ manufacturerLogo: d, manufacturerName: s }),
            offers: h ? M(h) : N(m),
            name: f,
          })
        return n.createElement(
          b,
          i({ type: r, keyOverride: a }, g, { scriptKey: 'Product' })
        )
      }
      var V = ['type', 'keyOverride', 'itemListElements']
      function U(e) {
        var t = e.type,
          r = void 0 === t ? 'BreadcrumbList' : t,
          a = e.keyOverride,
          o = e.itemListElements,
          l = i({}, p(e, V), { itemListElement: I(o) })
        return n.createElement(
          b,
          i({ type: r, keyOverride: a }, l, { scriptKey: 'breadcrumb' })
        )
      }
    },
    8e3: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.AmpStateContext = void 0)
      var n = (0, r(2648).Z)(r(7294)).default.createContext({})
      t.AmpStateContext = n
    },
    9470: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isInAmpMode = function () {
          var {
            ampFirst: e = !1,
            hybrid: t = !1,
            hasQuery: r = !1,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {}
          return e || (t && r)
        })
    },
    2717: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.defaultHead = c),
        (t.default = void 0)
      var n = r(6495).Z,
        a = r(2648).Z,
        o = (0, r(1598).Z)(r(7294)),
        i = a(r(1585)),
        p = r(8e3),
        l = r(5850),
        u = r(9470)
      r(9475)
      function c() {
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
      function d(e, t) {
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
      var s = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function h(e, t) {
        var { inAmpMode: r } = t
        return e
          .reduce(d, [])
          .reverse()
          .concat(c(r).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {}
              return (a) => {
                var o = !0,
                  i = !1
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  i = !0
                  var p = a.key.slice(a.key.indexOf('$') + 1)
                  e.has(p) ? (o = !1) : e.add(p)
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type)
                    break
                  case 'meta':
                    for (var l = 0, u = s.length; l < u; l++) {
                      var c = s[l]
                      if (a.props.hasOwnProperty(c))
                        if ('charSet' === c) r.has(c) ? (o = !1) : r.add(c)
                        else {
                          var d = a.props[c],
                            h = n[c] || new Set()
                          ;('name' === c && i) || !h.has(d)
                            ? (h.add(d), (n[c] = h))
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
              !r &&
              'link' === e.type &&
              e.props.href &&
              [
                'https://fonts.googleapis.com/css',
                'https://use.typekit.net/',
              ].some((t) => e.props.href.startsWith(t))
            ) {
              var i = n({}, e.props || {})
              return (
                (i['data-href'] = i.href),
                (i.href = void 0),
                (i['data-optimized-fonts'] = !0),
                o.default.cloneElement(e, i)
              )
            }
            return o.default.cloneElement(e, { key: a })
          })
      }
      var m = function (e) {
        var { children: t } = e,
          r = o.useContext(p.AmpStateContext),
          n = o.useContext(l.HeadManagerContext)
        return o.default.createElement(
          i.default,
          {
            reduceComponentsToState: h,
            headManager: n,
            inAmpMode: u.isInAmpMode(r),
          },
          t
        )
      }
      ;(t.default = m),
        ('function' === typeof t.default ||
          ('object' === typeof t.default && null !== t.default)) &&
          'undefined' === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    1585: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var { headManager: t, reduceComponentsToState: r } = e
          function p() {
            if (t && t.mountedInstances) {
              var a = n.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              )
              t.updateHead(r(a, e))
            }
          }
          if (a) {
            var l
            null == t || null == (l = t.mountedInstances) || l.add(e.children),
              p()
          }
          return (
            o(() => {
              var r
              return (
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.add(e.children),
                () => {
                  var r
                  null == t ||
                    null == (r = t.mountedInstances) ||
                    r.delete(e.children)
                }
              )
            }),
            o(
              () => (
                t && (t._pendingUpdate = p),
                () => {
                  t && (t._pendingUpdate = p)
                }
              )
            ),
            i(
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
      var n = (0, r(1598).Z)(r(7294))
      var a = !1,
        o = a ? () => {} : n.useLayoutEffect,
        i = a ? () => {} : n.useEffect
    },
    9008: function (e, t, r) {
      e.exports = r(2717)
    },
  },
])
