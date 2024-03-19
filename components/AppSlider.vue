<template>
  <div>
    <div class="mx-auto px-6">
      <h2
        class="text-transform: text-center text-[21px] font-bold uppercase sm:text-6xl"
      >
        С Pirilax®-Special совместить огнезащиту и <br />
        декор стало возможным!
      </h2>
    </div>
    <ul
      class="mx-auto mt-[50px] flex flex-wrap justify-center gap-x-7 gap-y-[45px] max-sm:hidden"
    >
      <li
        v-for="item in slide"
        :key="item.imgSrc"
        class="flex flex-col items-center"
      >
        <nuxt-img
          format="webp"
          quality="100" :src="item.imgSrc" width="370" height="255" />
        <span
          class="mt-[14px] text-center text-[21px]"
          v-html="item.text"
        ></span>
      </li>
    </ul>
    <div class="swiper hidden max-sm:block">
      <ul class="swiper-wrapper mt-4">
        <li
          v-for="item in slide"
          :key="item.text"
          class="swiper-slide flex flex-col items-center text-center"
        >
          <nuxt-img
            format="webp"
            quality="100" :src="item.imgSrc" />
          <span class="mt-[12px] text-center" v-html="item.text"></span>
        </li>
      </ul>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSlider',
  data() {
    return {
      slide: [
        { imgSrc: 'img/slide/slide1.png', text: `<p>Фасады, подшивы</p>` },
        { imgSrc: 'img/slide/slide2.png', text: '<p>Надворные постройки</p>' },
        { imgSrc: 'img/slide/slide3.png', text: '<p>Террасы, двери, окна</p>' },
        { imgSrc: 'img/slide/slide4.png', text: '<p>Потолки, стены</p>' },
        {
          imgSrc: 'img/slide/slide5.png',
          text: '<p>Элементы декоративной отделки,<br> предметы интерьера</p>',
        },
        {
          imgSrc: 'img/slide/slide6.png',
          text: `<p>Полы, лестницы с износостойким<br> покрытием</p>`,
        },
      ],
    }
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new this.$swiper('.swiper', {
      grabCursor: true,
      modules: [this.$swiperModules.Navigation, this.$swiperModules.Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 16,
    })
  },
}
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-button-next {
  font-weight: 900;
  margin-top: -50px;
  color: #ffee00;
  width: 15px;
}
.swiper-button-prev {
  font-weight: 900;
  margin-top: -50px;
  color: #ffee00;
}
</style>
