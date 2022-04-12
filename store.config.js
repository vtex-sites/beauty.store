module.exports = {
  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'beauty',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default channel
  channel: '{"salesChannel":"1"}',

  // Production URLs
  storeUrl: 'https://vtexfaststore.com',
  secureSubdomain: 'https://secure.vtexfaststore.com',
  checkoutUrl: 'https://secure.vtexfaststore.com/checkout',
  loginUrl: 'https://secure.vtexfaststore.com/api/io/login',
  accountUrl: 'https://secure.vtexfaststore.com/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:9000',
    pages: {
      home: '/',
      pdp: '/gel-rejuvenescedor-facial-mantecorp-ivy-c-aox-4/p',
      collection: '/beleza/',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/gel-rejuvenescedor-facial-mantecorp-ivy-c-aox-4/p',
      collection: '/beleza',
      collection_filtered:
        '/beleza/?category-1=beleza&marca=mantecorp-skincare&facets=category-1%2Cmarca',
      search: '/s?q=shampoo',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },
}
