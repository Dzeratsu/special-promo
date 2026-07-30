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
            class="lp:max-w-[70%]"
            width="370"
            height="255"
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
              width="370"
              height="255"
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
      <div class="swiper-button-next" aria-label="Следующий слайд"></div>
      <div class="swiper-button-prev" aria-label="Предыдущий слайд"></div>
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
        },
        {
          img: 'slide2',
          alt: 'Надворные постройки',
          lines: ['Надворные постройки'],
        },
        {
          img: 'slide3',
          alt: 'Террасы, двери, окна',
          lines: ['Террасы (кроме пола), двери, окна'],
        },
        {
          img: 'slide4',
          alt: 'Потолки, стены',
          lines: ['Потолки, стены'],
        },
        {
          img: 'slide5',
          alt: 'Элементы декоративной отделки',
          lines: ['Элементы декоративной отделки,', 'предметы интерьера'],
        },
        {
          img: 'slide6',
          alt: 'Полы и лестницы',
          lines: [
            'Полы и лестницы',
            '(с последующим нанесением износостойкого покрытия)',
          ],
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
