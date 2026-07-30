<template>
  <section aria-labelledby="marketplace-title">
    <div
      class="relative hidden items-center pt-[105px] pb-[65px] text-center max-sm:hidden lg:flex lg:text-left"
    >
      <h2 id="marketplace-title" class="text-[45px] font-semibold leading-[45px]">
        Покупайте <span class="inline lg:block">на маркетплейсах</span>
      </h2>
      <img
        src="/img/arrow.svg"
        alt=""
        width="117"
        height="46"
        class="absolute left-[350px] top-[70px] hidden lg:block"
        aria-hidden="true"
      />
      <div
        class="mt-[25px] flex justify-center gap-x-[25px] lg:ml-[105px] lg:mt-0"
      >
        <a
          v-for="item in desktopMarkets"
          :key="item.name"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <nuxt-img
            format="webp"
            :alt="`Купить Pirilax Special на ${item.name}`"
            quality="100"
            :src="item.src"
            :width="item.width"
            :height="item.height"
          />
        </a>
      </div>
    </div>
    <div class="my-[25px] hidden text-center max-sm:block">
      <p class="text-[21px] font-semibold leading-[21px]">
        Покупайте на маркетплейсах
      </p>
      <div class="mt-[19px] flex justify-center gap-x-[30px]">
        <a
          v-for="item in mobileMarkets"
          :key="'m-' + item.name"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <nuxt-img
            format="webp"
            :alt="`Купить Pirilax Special на ${item.name}`"
            quality="100"
            :src="item.src"
            width="58"
            height="58"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
const OZON =
  'https://www.ozon.ru/search/?from_global=true&text=pirilax+special'
const YANDEX =
  'https://market.yandex.ru/catalog--propitki/18060868/list?hid=16407095&text=%D0%BF%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81&rt=9&was_redir=1&cpa=1&rs=eJwzEgtgrGLl2L7lJfsqRi6Om-9msgkce_SQGQBiQQk7&_redirectCount=1'
const WB =
  'https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%9F%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81%20%D0%A1%D0%BF%D0%B5%D1%88%D0%BB'

export default {
  name: 'AppMarketplace',
  data() {
    return {
      desktopMarkets: [
        { name: 'Ozon', href: OZON, src: 'img/ozon.png', width: 177, height: 50 },
        { name: 'Яндекс Маркет', href: YANDEX, src: 'img/ya.png', width: 242, height: 51 },
        { name: 'Wildberries', href: WB, src: 'img/will.png', width: 228, height: 50 },
      ],
      mobileMarkets: [
        { name: 'Ozon', href: OZON, src: 'img/ozon-mob.png' },
        {
          name: 'Яндекс Маркет',
          href:
            'https://market.yandex.ru/search?suggest_text=%D0%9D%D0%9E%D0%A0%D0%A2&vendorId=13323952&rs=eJxNkD1Iw1AUhd_TommmjDV1uG6COKQVRVMhdBIHFRcXwfjXRUc7uTwoiA7d3FzSVSqI4OIPxkGEjkoHcTA6iJPgIIqTOQcpLofD-S7n3vcK9e45faNVWJmEzvipymsJ_vkc_m4i1aSOJPoADY-YG3h1jVztQuP8RapmFjR4Y34CH5_BJ0OgyT6SsE0_DZV57DUD7K-Bqlv44BRqquNIfthwDJVv7E22r9DcAjUe5xc5c8jmKXRGX-y04KXGLT5oqOHjYV6yx1fs8L2fbLjnW5qg0QHzNn5Ammx74Mwjb3jhPcKZ_ksk5VKnX7L0Df6Dywuf-D-G_QEveeeWDb-lLW901SuujIyVF-y8bVnakVxGMk6Pm11bryxXN7eWCqIGVQfaYv-HRcI-Qp3Top0ut_cPAjn6F-Uem6Y%2C&glfilter=7893318%3A13323952',
          src: 'img/ya-mob.png',
        },
        { name: 'Wildberries', href: WB, src: 'img/will-mob.png' },
      ],
    }
  },
}
</script>
