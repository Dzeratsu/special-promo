<template>
  <section>
    <div class="mx-auto px-6">
      <app-title>ОТЗЫВЫ ПОКУПАТЕЛЕЙ </app-title>
      <article class="mt-[25px] sm:mt-[61px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow"
        >
          <img
            class="sm:hidden"
            src="img/review-mob1.png"
            alt="pirilax-special отзывы"
            width="296"
            height="509"
          />
          <img
            class="hidden sm:block"
            src="img/review1.png"
            alt="pirilax-special отзывы"
            width="1024"
            height="628"
          />
        </div>
      </article>
      <article class="mt-[25px] sm:mt-[50px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow"
        >
          <img
            class="sm:hidden"
            src="img/review-mob2.png"
            alt="pirilax-special отзывы"
            width="296"
            height="300"
          />
          <img
            class="hidden sm:block"
            src="img/review2.png"
            alt="pirilax-special отзывы"
            width="1015"
            height="520"
          />
        </div>
      </article>
      <article class="sm:mt-[50px]ppm mt-[25px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow"
        >
          <img
            class="sm:hidden"
            src="img/review-mob3.png"
            alt="pirilax-special отзывы"
            width="295"
            height="305"
          />
          <img
            class="hidden sm:block"
            src="img/review3.png"
            alt="pirilax-special отзывы"
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
