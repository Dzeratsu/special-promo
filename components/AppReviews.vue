<template>
  <section>
    <span id="reviews" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6">
      <app-title>ОТЗЫВЫ ПОКУПАТЕЛЕЙ</app-title>
      <article class="mt-[25px]  lp:mt-[16px] 2xl:mt-[61px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
        >
          <nuxt-img
            format="webp"
            quality="100"
            class="sm:hidden"
            src="img/review-mob1.png"
            alt="pirilax-special защита от огня отзывы"
            width="296"
            height="509"
          />
          <nuxt-img
            format="webp"
            quality="100"
            class="hidden sm:block lp:max-w-[70%]"
            src="img/review1.png"
            alt="pirilax-special защита древесины отзывы"
            width="1024"
            height="628"
          />
        </div>
      </article>
      <article class="mt-[25px] sm:mt-[50px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
        >
          <nuxt-img
            format="webp"
            quality="100"
            class="sm:hidden"
            src="img/review-mob2.png"
            alt="pirilax-special защита отзывы"
            width="296"
            height="300"
          />
          <nuxt-img
            format="webp"
            quality="100"
            class="hidden sm:block lp:max-w-[70%]"
            src="img/review2.png"
            alt="pirilax-special огнезащита отзывы"
            width="1015"
            height="520"
          />
        </div>
      </article>
      <article class="sm:mt-[50px]ppm mt-[25px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
        >
          <nuxt-img
            format="webp"
            quality="100"
            class="sm:hidden"
            src="img/review-mob3.png"
            alt="pirilax-special защищает от огня отзывы"
            width="295"
            height="305"
          />
          <nuxt-img
            format="webp"
            quality="100"
            class="hidden sm:block lp:max-w-[70%]"
            src="img/review3.png"
            alt="pirilax-special можно красить отзывы"
            width="1021"
            height="514"
          />
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
import AppTitle from '@/components/global/AppTitle.vue'
</script>
