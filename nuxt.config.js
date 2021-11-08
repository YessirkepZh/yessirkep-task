import colors from 'vuetify/es5/util/colors';

export default {
  /* Environments used on client side */
  env: {
    NUXT_APP_API: process.env.NUXT_APP_API,
    CENTRIFUGE_URL: process.env.CENTRIFUGE_URL,
    NUXT_APP_SENTRY_DSN: process.env.NUXT_APP_SENTRY_DSN,
    NUXT_APP_GTM_ID: process.env.NUXT_APP_GTM_ID,
  },
  ssr: false,
  /* Headers of the page */
  head: {
    titleTemplate: `%s - ${process.env.npm_package_name}`,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  output: {
    filename: '[name].[hash].bundle.js',
  },
  /* Customize the progress-bar color */
  loading: { color: '#d0021b' },
  /* Global CSS */
  css: [],
  /* Plugins to load before mounting the App */
  plugins: [],
  /* Nuxt.js dev-modules */
  buildModules: ['@nuxtjs/vuetify'],
  /* Nuxt.js modules */
  modules: [
    '@nuxtjs/sentry',
    '@nuxtjs/auth-next',
    '@nuxtjs/gtm',
  ],
  module: {
    rules: [
    ],
  },
  sentry: {
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN in environments
    config: {}, // Additional config
  },
  publicRuntimeConfig: {
    gtm: {
      enabled: true, // dev && prod
      debug: true,

      id: process.env.GTM_ID, // GTM id required change in environments
      layer: 'dataLayer',
      variables: {},

      pageTracking: true,
      pageViewEventName: 'nuxtRoute',

      autoInit: true,
      respectDoNotTrack: true,

      scriptId: 'gtm-script',
      scriptDefer: false,
      scriptURL: 'https://www.googletagmanager.com/gtm.js',
      crossOrigin: false,

      noscript: true,
      noscriptId: 'gtm-noscript',
      noscriptURL: 'https://www.googletagmanager.com/ns.html',
    },
  },
  privateRuntimeConfig: {

  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /* Build configuration */
  build: {
    lintOnSave: 'default',
    filenames: {
      app: ({ isDev, isModern }) => (isDev
        ? `[name]${isModern ? '.modern' : ''}.js`
        : `[contenthash:7]${isModern
          ? '.modern'
          : ''}.js`),
    },
  },
};
