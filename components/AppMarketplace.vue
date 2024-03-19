<template>
  <div>
    <div
      class="lg:flex text-center lg:text-left pt-[105px] pb-[65px] items-center relative block max-sm:hidden"
    >
      <p class="text-[45px] leading-[45px] font-semibold">
        Покупайте <span class="inline lg:block">на маркетплейсах</span>
      </p>
      <nuxt-img
        format="webp"
        quality="100"
        src="img/arrow.svg"
        width="117"
        height="46"
        class="absolute left-[350px] top-[70px] lg:block hidden"
      />
      <div
        class="lg:ml-[105px] flex gap-x-[25px] mt-[25px] lg:mt-0 justify-center"
      >
        <a href="https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%9F%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81%20%D0%A1%D0%BF%D0%B5%D1%88%D0%BB" target="_blank"
          ><nuxt-img
          format="webp"
          quality="100" src="img/will.png" width="228" height="50"
        /></a>
        <a href="https://www.ozon.ru/search/?from_global=true&text=pirilax+special" target="_blank"
          ><nuxt-img
          format="webp"
          quality="100" src="img/ozon.png" width="177" height="50"
        /></a>
        <a
          href="https://market.yandex.ru/catalog--propitki/18060868/list?hid=16407095&text=%D0%BF%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81&rt=9&was_redir=1&cpa=1&rs=eJwzEgtgrGLl2L7lJfsqRi6Om-9msgkce_SQGQBiQQk7&_redirectCount=1"
          target="_blank"
          ><nuxt-img
          format="webp"
          quality="100" src="img/ya.png" width="242" height="51"
        /></a>
      </div>
    </div>
    <div>
      <div class="max-sm:block hidden text-center my-[25px]">
        <p class="text-[21px] font-semibold leading-[21px]">
          Покупайте на маркетплейсах
        </p>
        <div class="flex gap-x-[30px] mt-[19px] justify-center">
          <a
            href="https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%9F%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81%20%D0%A1%D0%BF%D0%B5%D1%88%D0%BB"
            target="_blank"
          >
            <nuxt-img
              format="webp"
              quality="100" src="img/will-mob.png" width="58" height="58"
          /></a>
          <a href="https://www.ozon.ru/search/?from_global=true&text=pirilax+special" target="_blank">
            <nuxt-img
              format="webp"
              quality="100" src="img/ozon-mob.png" width="58" height="58"
          /></a>
          <a
            href="https://market.yandex.ru/search?suggest_text=%D0%9D%D0%9E%D0%A0%D0%A2&vendorId=13323952&rs=eJxNkD1Iw1AUhd_TommmjDV1uG6COKQVRVMhdBIHFRcXwfjXRUc7uTwoiA7d3FzSVSqI4OIPxkGEjkoHcTA6iJPgIIqTOQcpLofD-S7n3vcK9e45faNVWJmEzvipymsJ_vkc_m4i1aSOJPoADY-YG3h1jVztQuP8RapmFjR4Y34CH5_BJ0OgyT6SsE0_DZV57DUD7K-Bqlv44BRqquNIfthwDJVv7E22r9DcAjUe5xc5c8jmKXRGX-y04KXGLT5oqOHjYV6yx1fs8L2fbLjnW5qg0QHzNn5Ammx74Mwjb3jhPcKZ_ksk5VKnX7L0Df6Dywuf-D-G_QEveeeWDb-lLW901SuujIyVF-y8bVnakVxGMk6Pm11bryxXN7eWCqIGVQfaYv-HRcI-Qp3Top0ut_cPAjn6F-Uem6Y%2C&glfilter=7893318%3A13323952"
            target="_blank"
          >
            <nuxt-img
              format="webp"
              quality="100" src="img/ya-mob.png" width="58" height="58"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppMarketplace',
}
</script>
