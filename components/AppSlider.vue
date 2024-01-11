<template>
  <div class="mx-auto px-6">
    <h2 class="text-center text-[21px] font-bold sm:text-6xl">
      С Pirilax-Special совместить огнезащиту и
    </h2>
    <app-title class="mt-4">декор стало возможным! </app-title>
    <!--    <div class="swiper  swiper-clientage-desktop mt-4">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <nuxt-img
              format="webp"
              quality="100"
              alt="Дом обработанный Pirilax-special"
              width="545"
              height="358"
              src="img/slide/slide-first.png"/>
          </li>
          <li class="swiper-slide">
            <nuxt-img
              format="webp"
              quality="100"
              alt="Дом обработанный Pirilax-special"
              width="545"
              height="358"
              src="img/slide/slide-red.png"/>
          </li>
          <li class="swiper-slide">
            <nuxt-img
              format="webp"
              quality="100"
              alt="Дом обработанный Pirilax-special"
              width="545"
              height="358"
              src="img/slide/slide-black.png"/>
          </li>
          <li class="swiper-slide">
            <nuxt-img
              format="webp"
              quality="100"
              alt="Дом обработанный Pirilax-special"
              width="545"
              height="358"
              src="img/slide/slide-blue.png"/>
          </li>
        </ul>
    </div>-->
  </div>
</template>

<script>
import AppTitle from '@/components/global/AppTitle.vue'

export default {
  name: 'AppSlider',
  components: { AppTitle },
  mounted() {
    this.configSlider()
  },

  methods: {
    initSlider(options, classSwiper) {
      /* eslint-disable no-unused-vars */
      const swiper = new this.$swiper(classSwiper, options)
    },
    configSlider(b) {
      const optionsMobile = {
        navigation: {
          nextEl: '.swiper-button-next-clientage',
          prevEl: '.swiper-button-prev-clientage',
        },
        grabCursor: true,
        modules: [this.$swiperModules.Navigation],
        mousewheel: true,
      }

      const optionsDesktop = {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next-clientage',
          prevEl: '.swiper-button-prev-clientage',
        },
        grabCursor: true,
        modules: [this.$swiperModules.Navigation],
        mousewheel: true,
      }
      if (window.innerWidth < 768) {
        this.initSlider(optionsMobile, '.swiper-clientage-mobile')
      } else {
        this.initSlider(optionsDesktop, '.swiper-clientage-desktop')
      }
    },
  },
}
</script>
