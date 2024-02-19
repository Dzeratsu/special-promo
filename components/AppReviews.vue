<template>
  <section>
    <span id="reviews" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6">
      <app-title>ОТЗЫВЫ ПОКУПАТЕЛЕЙ</app-title>
      <article class="mt-[25px] sm:mt-[61px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
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
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
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
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
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
    <div class="flex justify-center my-[30px] sm:my-[50px] px-6">
      <div
        class="hidden sm:block rounded-[15px] bg-yellow pt-[29px] pb-[26px] px-[30px] text-center text-[16px] sm:text-[28px] font-semibold inline"
      >
        Покупайте на маркетплейсах
      </div>
      <div
        class="w-full block sm:hidden rounded-[15px] bg-yellow py-[14px] text-center text-[16px] sm:text-[28px] font-semibold inline"
      >
        Покупайте на маркетплейсах
      </div>
    </div>
    <div class="flex items-center justify-center gap-x-[30px]">
      <a
        href="https://www.wildberries.ru/brands/nort-1091799"
        rel="nofollow"
        target="_blank"
      >
        <img
          src="img/will.png"
          width="265"
          height="59"
          class="hidden sm:block"
        />
        <img src="img/will-mob.png" width="58" height="58" class="sm:hidden" />
      </a>
      <a href="https://www.ozon.ru/brand/nort-87169131/">
        <img
          src="img/ozon.png"
          width="206"
          height="59"
          class="hidden sm:block"
        />
        <img src="img/ozon-mob.png" width="58" height="59" class="sm:hidden" />
      </a>
      <a
        href="https://market.yandex.ru/search?was_redir=1&rt=10&rs=eJwlkL1KA0EUhWcUUYuk8AUcYhPQKp1GYa2sAikstFvSCr6ARaJgn9iIP8Vil0oRhMi6Oo1WCSRWITaDYLTxCdKY79gcPs49c-7MlJqzVXtpF_pZ_3nQGJzcWftqTeNga6rRRRn-2UTnn6YajzbglpxF1F-l8CHJ5E3OGRoK5KMaU_eFE6Vw6IhXmSbXOPFQvK_-XfbGBfWcM_Vd2GX_2kENGXOrO3yw1x-90PnwSP-2_D1tuafTVciHXxyTg90p6neYhhlN19hlmrS5YzVMlH_XW3qpfkOdbX7AtOFkpOQnp8K3uCh_JSO5LmdOt83rRTdylsRjba-rswr7oX5yufwHl9aRIw%2C%2C&suggest_text=%D0%BD%D0%BE%D1%80%D1%82&local-offers-first=0&glfilter=7893318%3A13323952"
        rel="nofollow"
        target="_blank"
      >
        <img src="img/ya.png" width="282" height="59" class="hidden sm:block" />
        <img src="img/ya-mob.png" width="58" height="58" class="sm:hidden" />
      </a>
    </div>
  </section>
</template>
<script setup>
import AppTitle from '@/components/global/AppTitle.vue'
</script>
