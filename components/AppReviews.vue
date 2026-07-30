<template>
  <section aria-labelledby="reviews-title">
    <span id="reviews" class="absolute -mt-32 block lg:-mt-24"></span>
    <div class="mx-auto px-6">
      <app-title id="reviews-title">ОТЗЫВЫ ПОКУПАТЕЛЕЙ</app-title>
      <article
        v-for="item in reviews"
        :key="item.desktop"
        class="mt-[25px] first:lp:mt-[16px] first:2xl:mt-[61px] sm:mt-[50px] first:sm:mt-[25px]"
      >
        <div
          class="flex items-center justify-center rounded-[10px] bg-white px-2 py-4 shadow-review-shadow"
        >
          <picture class="sm:hidden">
            <source :srcset="item.mobileWebp" type="image/webp" />
            <img
              :src="item.mobile"
              :alt="item.alt"
              :width="item.mobileW"
              :height="item.mobileH"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <picture class="hidden sm:block lp:max-w-[70%]">
            <source :srcset="item.desktopWebp" type="image/webp" />
            <img
              :src="item.desktop"
              :alt="item.alt"
              :width="item.desktopW"
              :height="item.desktopH"
              class="w-full"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import AppTitle from '@/components/global/AppTitle.vue'

export default {
  name: 'AppReviews',
  components: { AppTitle },
  data() {
    return {
      reviews: [
        {
          alt: 'Отзыв о Pirilax Special — защита от огня',
          mobile: '/img/review-mob1.jpg',
          mobileWebp: '/img/review-mob1.webp',
          mobileW: 296,
          mobileH: 509,
          desktop: '/img/review1.jpg',
          desktopWebp: '/img/review1.webp',
          desktopW: 1024,
          desktopH: 628,
        },
        {
          alt: 'Отзыв о Pirilax Special — огнезащита',
          mobile: '/img/review-mob2.jpg',
          mobileWebp: '/img/review-mob2.webp',
          mobileW: 296,
          mobileH: 300,
          desktop: '/img/review2.jpg',
          desktopWebp: '/img/review2.webp',
          desktopW: 1015,
          desktopH: 520,
        },
        {
          alt: 'Отзыв о Pirilax Special — можно красить',
          mobile: '/img/review-mob3.jpg',
          mobileWebp: '/img/review-mob3.webp',
          mobileW: 295,
          mobileH: 305,
          desktop: '/img/review3.jpg',
          desktopWebp: '/img/review3.webp',
          desktopW: 1021,
          desktopH: 514,
        },
      ],
    }
  },
}
</script>
