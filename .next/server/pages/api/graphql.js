'use strict'
;(() => {
  var exports = {}
  exports.id = 1702
  exports.ids = [1702]
  exports.modules = {
    /***/ 5363: /***/ (module) => {
      module.exports = require('@faststore/api')

      /***/
    },

    /***/ 7343: /***/ (module) => {
      module.exports = require('graphql')

      /***/
    },

    /***/ 9664: /***/ (module) => {
      module.exports = import('@envelop/core')

      /***/
    },

    /***/ 7886: /***/ (module) => {
      module.exports = import('@envelop/graphql-jit')

      /***/
    },

    /***/ 4656: /***/ (module) => {
      module.exports = import('@envelop/parser-cache')

      /***/
    },

    /***/ 6093: /***/ (module) => {
      module.exports = import('@envelop/validation-cache')

      /***/
    },

    /***/ 295: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__)
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            })
            /* harmony import */ var _faststore_api__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(5363)
            /* harmony import */ var _faststore_api__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                _faststore_api__WEBPACK_IMPORTED_MODULE_0__
              )
            /* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(350)
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _server__WEBPACK_IMPORTED_MODULE_1__,
              ])
            _server__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            const parseRequest = (request) => {
              const { operationName, variables, query } =
                request.method === 'POST'
                  ? request.body
                  : {
                      operationName: request.query.operationName,
                      variables: JSON.parse(
                        typeof request.query.variables === 'string'
                          ? request.query.variables
                          : ''
                      ),
                      query: undefined,
                    }
              return {
                operationName,
                variables,
                // Do not allow queries in production, only for devMode so we can use graphql tools
                // like introspection etc. In production, we only accept known queries for better
                // security
                query: false ? 0 : undefined,
              }
            }

            const handler = async (request, response) => {
              if (request.method !== 'POST' && request.method !== 'GET') {
                response.status(405)
                return
              }

              const { operationName, variables, query } = parseRequest(request)

              try {
                const { data, errors, extensions } = await (0,
                _server__WEBPACK_IMPORTED_MODULE_1__ /* .execute */.h)(
                  {
                    operationName,
                    variables,
                    query,
                  },
                  {
                    headers: request.headers,
                  }
                )
                const hasErrors = Array.isArray(errors)

                if (hasErrors) {
                  const error = errors.find(
                    _faststore_api__WEBPACK_IMPORTED_MODULE_0__.isFastStoreError
                  )
                  response.status(error?.extensions.status ?? 500)
                }

                const cacheControl =
                  !hasErrors && extensions.cacheControl
                    ? (0,
                      _faststore_api__WEBPACK_IMPORTED_MODULE_0__.stringifyCacheControl)(
                        extensions.cacheControl
                      )
                    : 'no-cache, no-store'
                response.setHeader('cache-control', cacheControl)
                response.setHeader('content-type', 'application/json')
                response.send(
                  JSON.stringify({
                    data,
                    errors,
                  })
                )
              } catch (err) {
                console.error(err)
                response.status(500)
              }
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              handler
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 350: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ h: () => /* binding */ execute,
              /* harmony export */
            })
            /* unused harmony export apiSchema */
            /* harmony import */ var _envelop_core__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(9664)
            /* harmony import */ var _envelop_graphql_jit__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(7886)
            /* harmony import */ var _envelop_parser_cache__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(4656)
            /* harmony import */ var _envelop_validation_cache__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6093)
            /* harmony import */ var _faststore_api__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(5363)
            /* harmony import */ var _faststore_api__WEBPACK_IMPORTED_MODULE_4___default =
              /*#__PURE__*/ __webpack_require__.n(
                _faststore_api__WEBPACK_IMPORTED_MODULE_4__
              )
            /* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(7343)
            /* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5___default =
              /*#__PURE__*/ __webpack_require__.n(
                graphql__WEBPACK_IMPORTED_MODULE_5__
              )
            /* harmony import */ var _generated_graphql_persisted_json__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(9609)
            /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(9742)
            /* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_7___default =
              /*#__PURE__*/ __webpack_require__.n(
                _store_config__WEBPACK_IMPORTED_MODULE_7__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _envelop_core__WEBPACK_IMPORTED_MODULE_0__,
                _envelop_graphql_jit__WEBPACK_IMPORTED_MODULE_1__,
                _envelop_parser_cache__WEBPACK_IMPORTED_MODULE_2__,
                _envelop_validation_cache__WEBPACK_IMPORTED_MODULE_3__,
              ])
            ;[
              _envelop_core__WEBPACK_IMPORTED_MODULE_0__,
              _envelop_graphql_jit__WEBPACK_IMPORTED_MODULE_1__,
              _envelop_parser_cache__WEBPACK_IMPORTED_MODULE_2__,
              _envelop_validation_cache__WEBPACK_IMPORTED_MODULE_3__,
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
            /* eslint-disable react-hooks/rules-of-hooks */

            const persistedQueries = new Map(
              Object.entries(
                _generated_graphql_persisted_json__WEBPACK_IMPORTED_MODULE_6__
              )
            )
            const apiOptions = {
              platform:
                _store_config__WEBPACK_IMPORTED_MODULE_7___default().platform,
              account:
                _store_config__WEBPACK_IMPORTED_MODULE_7___default().api
                  .storeId,
              environment:
                _store_config__WEBPACK_IMPORTED_MODULE_7___default().api
                  .environment,
              hideUnavailableItems:
                _store_config__WEBPACK_IMPORTED_MODULE_7___default().api
                  .hideUnavailableItems,
              channel:
                _store_config__WEBPACK_IMPORTED_MODULE_7___default().session
                  .channel,
              locale:
                _store_config__WEBPACK_IMPORTED_MODULE_7___default().session
                  .locale,
              flags: {
                enableOrderFormSync: true,
              },
            }
            const apiSchema = (0,
            _faststore_api__WEBPACK_IMPORTED_MODULE_4__.getSchema)(apiOptions)
            const apiContextFactory = (0,
            _faststore_api__WEBPACK_IMPORTED_MODULE_4__.getContextFactory)(
              apiOptions
            )

            const formatError = (err) => {
              if (
                err instanceof
                  graphql__WEBPACK_IMPORTED_MODULE_5__.GraphQLError &&
                (0,
                _faststore_api__WEBPACK_IMPORTED_MODULE_4__.isFastStoreError)(
                  err.originalError
                )
              ) {
                return err
              }

              console.error(err)
              return new graphql__WEBPACK_IMPORTED_MODULE_5__.GraphQLError(
                'Sorry, something went wrong.'
              )
            }

            const getEnvelop = async () =>
              (0, _envelop_core__WEBPACK_IMPORTED_MODULE_0__.envelop)({
                plugins: [
                  (0,
                  _envelop_core__WEBPACK_IMPORTED_MODULE_0__.useAsyncSchema)(
                    apiSchema
                  ),
                  (0,
                  _envelop_core__WEBPACK_IMPORTED_MODULE_0__.useExtendContext)(
                    apiContextFactory
                  ),
                  (0,
                  _envelop_core__WEBPACK_IMPORTED_MODULE_0__.useMaskedErrors)({
                    formatError,
                  }),
                  (0,
                  _envelop_graphql_jit__WEBPACK_IMPORTED_MODULE_1__.useGraphQlJit)(),
                  (0,
                  _envelop_validation_cache__WEBPACK_IMPORTED_MODULE_3__.useValidationCache)(),
                  (0,
                  _envelop_parser_cache__WEBPACK_IMPORTED_MODULE_2__.useParserCache)(),
                ],
              })

            const envelopPromise = getEnvelop()
            const execute = async (
              options,
              envelopContext = {
                headers: {},
              }
            ) => {
              const { operationName, variables, query: maybeQuery } = options
              const query = maybeQuery ?? persistedQueries.get(operationName)

              if (query == null) {
                throw new Error(
                  `No query found for operationName: ${operationName}`
                )
              }

              const enveloped = await envelopPromise
              const {
                parse,
                contextFactory,
                execute: run,
                schema,
              } = enveloped(envelopContext)
              const contextValue = await contextFactory(envelopContext)
              const { data, errors } = await run({
                schema,
                document: parse(query),
                variableValues: variables,
                contextValue,
                operationName,
              })
              return {
                data,
                errors,
                extensions: {
                  cacheControl: contextValue.cacheControl,
                },
              }
            }
            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 9609: /***/ (module) => {
      module.exports = JSON.parse(
        '{"ProductGalleryQuery":"query ProductGalleryQuery($first: Int!, $after: String!, $sort: StoreSort!, $term: String!, $selectedFacets: [IStoreSelectedFacet!]!) {\\n  search(\\n    first: $first\\n    after: $after\\n    sort: $sort\\n    term: $term\\n    selectedFacets: $selectedFacets\\n  ) {\\n    products {\\n      pageInfo {\\n        totalCount\\n      }\\n    }\\n    facets {\\n      ... on StoreFacetRange {\\n        key\\n        label\\n        min {\\n          selected\\n          absolute\\n        }\\n        max {\\n          selected\\n          absolute\\n        }\\n        __typename\\n      }\\n      ... on StoreFacetBoolean {\\n        key\\n        label\\n        values {\\n          label\\n          value\\n          selected\\n          quantity\\n        }\\n        __typename\\n      }\\n    }\\n    metadata {\\n      isTermMisspelled\\n      logicalOperator\\n    }\\n  }\\n}\\n","ServerCollectionPageQuery":"query ServerCollectionPageQuery($slug: String!) {\\n  collection(slug: $slug) {\\n    seo {\\n      title\\n      description\\n    }\\n    breadcrumbList {\\n      itemListElement {\\n        item\\n        name\\n        position\\n      }\\n    }\\n    meta {\\n      selectedFacets {\\n        key\\n        value\\n      }\\n    }\\n  }\\n}\\n","ServerProductPageQuery":"query ServerProductPageQuery($slug: String!) {\\n  product(locator: [{key: \\"slug\\", value: $slug}]) {\\n    id: productID\\n    seo {\\n      title\\n      description\\n      canonical\\n    }\\n    brand {\\n      name\\n    }\\n    sku\\n    gtin\\n    name\\n    description\\n    releaseDate\\n    breadcrumbList {\\n      itemListElement {\\n        item\\n        name\\n        position\\n      }\\n    }\\n    image {\\n      url\\n      alternateName\\n    }\\n    offers {\\n      lowPrice\\n      highPrice\\n      priceCurrency\\n      offers {\\n        availability\\n        price\\n        priceValidUntil\\n        priceCurrency\\n        itemCondition\\n        seller {\\n          identifier\\n        }\\n        listPrice\\n      }\\n    }\\n    isVariantOf {\\n      productGroupID\\n      name\\n      skuVariants {\\n        activeVariations\\n        slugsMap(dominantVariantName: \\"Color\\")\\n        availableVariations(dominantVariantName: \\"Color\\")\\n      }\\n    }\\n    additionalProperty {\\n      propertyID\\n      name\\n      value\\n      valueReference\\n    }\\n  }\\n}\\n","ValidateCartMutation":"mutation ValidateCartMutation($cart: IStoreCart!, $session: IStoreSession!) {\\n  validateCart(cart: $cart, session: $session) {\\n    order {\\n      orderNumber\\n      acceptedOffer {\\n        seller {\\n          identifier\\n        }\\n        quantity\\n        price\\n        listPrice\\n        itemOffered {\\n          sku\\n          name\\n          image {\\n            url\\n            alternateName\\n          }\\n          brand {\\n            name\\n          }\\n          isVariantOf {\\n            productGroupID\\n            name\\n          }\\n          gtin\\n          additionalProperty {\\n            propertyID\\n            name\\n            value\\n            valueReference\\n          }\\n        }\\n      }\\n    }\\n    messages {\\n      text\\n      status\\n    }\\n  }\\n}\\n","SubscribeToNewsletter":"mutation SubscribeToNewsletter($data: IPersonNewsletter!) {\\n  subscribeToNewsletter(data: $data) {\\n    id\\n  }\\n}\\n","BrowserProductQuery":"query BrowserProductQuery($locator: [IStoreSelectedFacet!]!) {\\n  product(locator: $locator) {\\n    id: productID\\n    sku\\n    name\\n    gtin\\n    description\\n    isVariantOf {\\n      name\\n      productGroupID\\n      skuVariants {\\n        activeVariations\\n        slugsMap(dominantVariantName: \\"Color\\")\\n        availableVariations(dominantVariantName: \\"Color\\")\\n      }\\n    }\\n    image {\\n      url\\n      alternateName\\n    }\\n    brand {\\n      name\\n    }\\n    offers {\\n      lowPrice\\n      offers {\\n        availability\\n        price\\n        listPrice\\n        seller {\\n          identifier\\n        }\\n      }\\n    }\\n    breadcrumbList {\\n      itemListElement {\\n        item\\n        name\\n        position\\n      }\\n    }\\n    additionalProperty {\\n      propertyID\\n      name\\n      value\\n      valueReference\\n    }\\n  }\\n}\\n","ProductsQuery":"query ProductsQuery($first: Int!, $after: String, $sort: StoreSort!, $term: String!, $selectedFacets: [IStoreSelectedFacet!]!) {\\n  search(\\n    first: $first\\n    after: $after\\n    sort: $sort\\n    term: $term\\n    selectedFacets: $selectedFacets\\n  ) {\\n    products {\\n      pageInfo {\\n        totalCount\\n      }\\n      edges {\\n        node {\\n          id: productID\\n          slug\\n          sku\\n          brand {\\n            brandName: name\\n            name\\n          }\\n          name\\n          gtin\\n          isVariantOf {\\n            productGroupID\\n            name\\n          }\\n          image {\\n            url\\n            alternateName\\n          }\\n          offers {\\n            lowPrice\\n            offers {\\n              availability\\n              price\\n              listPrice\\n              quantity\\n              seller {\\n                identifier\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n","SearchSuggestionsQuery":"query SearchSuggestionsQuery($term: String!, $selectedFacets: [IStoreSelectedFacet!]) {\\n  search(first: 5, term: $term, selectedFacets: $selectedFacets) {\\n    suggestions {\\n      terms {\\n        value\\n      }\\n      products {\\n        id: productID\\n        slug\\n        sku\\n        brand {\\n          brandName: name\\n          name\\n        }\\n        name\\n        gtin\\n        isVariantOf {\\n          productGroupID\\n          name\\n        }\\n        image {\\n          url\\n          alternateName\\n        }\\n        offers {\\n          lowPrice\\n          offers {\\n            availability\\n            price\\n            listPrice\\n            quantity\\n            seller {\\n              identifier\\n            }\\n          }\\n        }\\n      }\\n    }\\n    products {\\n      pageInfo {\\n        totalCount\\n      }\\n    }\\n    metadata {\\n      isTermMisspelled\\n      logicalOperator\\n    }\\n  }\\n}\\n","TopSearchSuggestionsQuery":"query TopSearchSuggestionsQuery($term: String!, $selectedFacets: [IStoreSelectedFacet!]) {\\n  search(first: 5, term: $term, selectedFacets: $selectedFacets) {\\n    suggestions {\\n      terms {\\n        value\\n      }\\n    }\\n  }\\n}\\n","ValidateSession":"mutation ValidateSession($session: IStoreSession!, $search: String!) {\\n  validateSession(session: $session, search: $search) {\\n    locale\\n    channel\\n    country\\n    postalCode\\n    currency {\\n      code\\n      symbol\\n    }\\n    person {\\n      id\\n      email\\n      givenName\\n      familyName\\n    }\\n  }\\n}\\n","ShippingSimulationQuery":"query ShippingSimulationQuery($postalCode: String!, $country: String!, $items: [IShippingItem!]!) {\\n  shipping(items: $items, postalCode: $postalCode, country: $country) {\\n    logisticsInfo {\\n      slas {\\n        carrier\\n        price\\n        shippingEstimate\\n        localizedEstimates\\n      }\\n    }\\n    address {\\n      city\\n      neighborhood\\n    }\\n  }\\n}\\n"}'
      )

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../../webpack-api-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(0, [9742], () =>
    __webpack_exec__(295)
  )
  module.exports = __webpack_exports__
})()
