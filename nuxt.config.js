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
      { name: 'yandex-verification', content: 'e853e633f92526f0' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Pirilax огнебиозащитный состав для древесины, защищает древесину от огня, плесени, совместим с лаками и красками',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'preload',
        href: '/fonts/MyriadPro-Bold.woff',
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/fonts/MyriadPro-Light.woff',
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/fonts/MyriadPro-Regular.woff',
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/fonts/MyriadPro-Semibold.woff',
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    script: [
      {
        src: 'https://smartcaptcha.cloud.yandex.ru/captcha.js',
        defer: true,
      },
    ],
  },

  css: ['./swiper/swiper-bundle.min.css'],

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

  modules: [
    '@nuxt/image',
    '@nuxtjs/axios',
    'nuxt-logger',
    '@nuxtjs/gtm',
  ],

  axios: {
    baseURL: '/',
  },
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 'first',
    viewer: true,
    cssPath: '~/assets/css/tailwind.css',
  },

  build: {},
  image: {},
  // Kept for env visibility; SmartCaptcha is used in WrapForm instead of Google reCAPTCHA
  publicRuntimeConfig: {
    smartCaptchaSiteKey: NUXT_ENV_SMARTCAPTCHA_SITE_KEY,
  },
  gtm: {
    id: 'GTM-5NTQ88K4',
  },
}
