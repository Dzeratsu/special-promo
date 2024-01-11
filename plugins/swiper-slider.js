import Swiper from 'swiper/core/core.js'

import Autoplay from 'swiper/modules/autoplay/autoplay.js'
import Pagination from 'swiper/modules/pagination/pagination.js'
import Navigation from 'swiper/modules/navigation/navigation.js'
import Vue from 'vue'

const swiper = {
  install(Vue, options) {
    Vue.prototype.$swiper = Swiper
    Vue.prototype.$swiperModules = {
      Autoplay,
      Pagination,
      Navigation,
    }
  },
}

Vue.use(swiper)
