// eslint-disable-next-line camelcase
const { NUXT_ENV_SMARTCAPTCHA_SITE_KEY } = process.env

export default {
  target: 'server',
  eslint: {
    fix: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  head: {
    title:
      '«Pirilax»-Special - уникальный огнебиозащитный состав для древесины, под лаки и краски ',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'yandex-verification',
        name: 'yandex-verification',
        content: 'd1e4792779ca67d4',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Pirilax огнебиозащитный состав для древесины, защищает древесину от огня, плесени, совместим с лаками и красками',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'preload',
        href: '/fonts/MyriadPro-Regular.woff',
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/img/banner-mob.webp',
        as: 'image',
        type: 'image/webp',
        media: '(max-width: 494px)',
      },
      {
        rel: 'preload',
        href: '/img/banner.webp',
        as: 'image',
        type: 'image/webp',
        media: '(min-width: 495px)',
      },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },

  css: [],

  plugins: [
    { src: '~/plugins/swiper-slider.js', mode: 'client' },
    { src: '~/plugins/v-mask.js', mode: 'client' },
  ],

  components: true,
  serverMiddleware: {
    '/api': '~/api',
  },
  robots: {
    UserAgent: '*',
    Host: 'https://pirilax-special.ru',
  },
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxt/image', '@nuxtjs/axios', 'nuxt-logger', '@nuxtjs/gtm'],

  axios: {
    baseURL: '/',
  },
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 'first',
    viewer: false,
    cssPath: '~/assets/css/tailwind.css',
  },

  build: {},
  render: {
    compressor: { threshold: 0 },
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
    },
  },
  image: {
    quality: 75,
  },
  publicRuntimeConfig: {
    smartCaptchaSiteKey: NUXT_ENV_SMARTCAPTCHA_SITE_KEY,
  },
  gtm: {
    id: 'GTM-5NTQ88K4',
  },
}
