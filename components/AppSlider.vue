<template>
  <section aria-labelledby="applications-title">
    <div class="mx-auto px-6">
      <h2
        id="applications-title"
        class="text-center text-[21px] font-bold uppercase lp:text-4xl 2xl:text-6xl"
      >
        С Pirilax®-Special совместить огнезащиту и <br />
        декор стало возможным!
      </h2>
    </div>
    <ul
      class="mx-auto mt-[50px] flex flex-wrap justify-center gap-x-7 gap-y-[45px] max-sm:hidden lp:mt-[25px] lp:gap-x-[10px] lp:gap-y-[15px]"
    >
      <li
        v-for="item in slides"
        :key="item.img"
        class="flex flex-col items-center"
      >
        <picture>
          <source :srcset="`/img/slide/${item.img}.webp`" type="image/webp" />
          <img
            :src="`/img/slide/${item.img}.jpg`"
            :alt="`Применение Pirilax Special — ${item.alt}`"
            class="h-auto lp:max-w-[70%]"
            :width="item.w"
            :height="item.h"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <span class="mt-[14px] text-center text-[14px]">
          <template v-for="(line, i) in item.lines">
            <br v-if="i > 0" :key="'br-' + i" />
            <span :key="'t-' + i">{{ line }}</span>
          </template>
        </span>
      </li>
    </ul>
    <div ref="swiperRoot" class="swiper hidden max-sm:block">
      <ul class="swiper-wrapper mt-4">
        <li
          v-for="item in slides"
          :key="'m-' + item.img"
          class="swiper-slide flex flex-col items-center text-center"
        >
          <picture>
            <source :srcset="`/img/slide/${item.img}.webp`" type="image/webp" />
            <img
              :src="`/img/slide/${item.img}.jpg`"
              :alt="`Применение Pirilax Special — ${item.alt}`"
              class="h-auto"
              :width="item.w"
              :height="item.h"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <span class="mt-[12px] text-center">
            <template v-for="(line, i) in item.lines">
              <br v-if="i > 0" :key="'mbr-' + i" />
              <span :key="'mt-' + i">{{ line }}</span>
            </template>
          </span>
        </li>
      </ul>
      <button
        type="button"
        class="swiper-button-next"
        aria-label="Следующий слайд"
      ></button>
      <button
        type="button"
        class="swiper-button-prev"
        aria-label="Предыдущий слайд"
      ></button>
    </div>
  </section>
</template>

<script>
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'

export default {
  name: 'AppSlider',
  data() {
    return {
      swiperInstance: null,
      slides: [
        {
          img: 'slide1',
          alt: 'Фасады, подшивы',
          lines: ['Фасады, подшивы'],
          w: 620,
          h: 404,
        },
        {
          img: 'slide2',
          alt: 'Надворные постройки',
          lines: ['Надворные постройки'],
          w: 620,
          h: 404,
        },
        {
          img: 'slide3',
          alt: 'Террасы, двери, окна',
          lines: ['Террасы (кроме пола), двери, окна'],
          w: 370,
          h: 255,
        },
        {
          img: 'slide4',
          alt: 'Потолки, стены',
          lines: ['Потолки, стены'],
          w: 620,
          h: 404,
        },
        {
          img: 'slide5',
          alt: 'Элементы декоративной отделки',
          lines: ['Элементы декоративной отделки,', 'предметы интерьера'],
          w: 620,
          h: 405,
        },
        {
          img: 'slide6',
          alt: 'Полы и лестницы',
          lines: [
            'Полы и лестницы',
            '(с последующим нанесением износостойкого покрытия)',
          ],
          w: 370,
          h: 255,
        },
      ],
    }
  },
  mounted() {
    if (!process.client || !this.$swiper) return
    const el = this.$refs.swiperRoot
    if (!el) return
    this.swiperInstance = new this.$swiper(el, {
      grabCursor: true,
      a11y: false,
      modules: [
        this.$swiperModules.Navigation,
        this.$swiperModules.Pagination,
      ],
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev'),
      },
      spaceBetween: 16,
    })
  },
  beforeDestroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true)
      this.swiperInstance = null
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.swiper-button-next,
.swiper-button-prev {
  font-weight: 900;
  margin-top: -50px;
  color: #ffee00;
  width: 15px;
  background: transparent;
  border: 0;
  padding: 0;
}
</style>
