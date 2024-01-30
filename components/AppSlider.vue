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
        <img :src="item.imgSrc" width="370" height="255" />
        <span class="mt-[14px] text-center" v-html="item.text"></span>
      </li>
    </ul>
    <div class="swiper swiper-img hidden max-sm:block">
      <ul class="swiper-wrapper">
        <li
          v-for="item in slide"
          :key="item.text"
          class="swiper-slide flex flex-col items-center"
        >
          <img :src="item.imgSrc" width="370" height="255" />
          <span class="mt-[14px] text-center" v-html="item.text"></span>
        </li>
      </ul>
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
          text: '<p>Элементы декоративной отделки,<br> предметов интерьера</p>',
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
    const swiper = new this.$swiper('.swiper-img', {})
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
  font-size: 18px;
  background: #fff;
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
</style>
