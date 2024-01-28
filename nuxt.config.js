export default {
  generate: {
    dir: 'https://nort-udm.ru/special/',
    fallback: '404.html',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    link: [
      {
        rel: 'preload',
        href: `/fonts/MyriadPro-Bold.woff`,
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: `/fonts/MyriadPro-Light.woff`,
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: `/fonts/MyriadPro-Regular.woff`,
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: `/fonts/MyriadPro-Semibold.woff`,
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    title: 'promoSpecial',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/swiper-slider.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  image: {},
}
