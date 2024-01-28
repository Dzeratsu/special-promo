<template>
  <div>
    <div class="mx-auto px-6">
      <h2 class="text-center text-[21px] font-bold sm:text-6xl">
        С Pirilax-Special совместить огнезащиту и
      </h2>
      <app-title class="mt-4">декор стало возможным!</app-title>
    </div>
    <ul class="flex items-center flex-wrap gap-x-7 mt-[50px]">
      <li v-for="item in slide" :key="item.imgSrc" class="flex flex-col items-center">
        <nuxt-img fornat="webp" quality="100" :src="item.imgSrc"  width="370" height="255"/>
        <span :v-html="item.text"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import AppTitle from '@/components/global/AppTitle.vue'

export default {
  name: 'AppSlider',
  components: {
    AppTitle
  },
  data() {
    return {
      slide: [
        { imgSrc: 'img/slide/slide1.png', text: '<p>Фасады, подшивы</p>' },
        { imgSrc: 'img/slide/slide2.png', text: '<p>Надворные постройки</p>' },
        { imgSrc: 'img/slide/slide3.png', text: '<p>Террасы, двери, окна</p>' },
        { imgSrc: 'img/slide/slide4.png', text: '<p>Потолки, стены</p>' },
        {
          imgSrc: 'img/slide/slide5.png',
          text: '<p>Элементы декоративной отделки, предметов интерьера</p>'
        },
        {
          imgSrc: 'img/slide/slide6.png',
          text: `<p>Полы, лестницы с износостойким<br> покрытием</p>`
        }
      ]
    }
  },
  mounted() {
    this.configSlider()
  },
  methods: {
    initSlider(options, classSwiper) {
      /* eslint-disable no-unused-vars */
      const swiper = new this.$swiper(classSwiper, options)
    },
    configSlider(b) {
      const optionsMobile = {}
      const optionsDesktop = {}
      if (window.innerWidth < 768) {
        this.initSlider(optionsMobile, '.swiper-clientage-mobile')
      } else {
        this.initSlider(optionsDesktop, '.swiper-clientage-desktop')
      }
    }
  }
}
</script>
