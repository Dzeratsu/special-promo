<template>
  <div>
    <div
      class="lg:flex text-center lg:text-left pt-[105px] pb-[65px] items-center relative block max-sm:hidden"
    >
      <p class="text-[45px] leading-[45px] font-semibold">
        Покупайте <span class="inline lg:block">на маркетплейсах</span>
      </p>
      <img
        src="img/arrow.svg"
        width="117"
        height="46"
        class="absolute left-[350px] top-[70px] lg:block hidden"
      />
      <div
        class="lg:ml-[105px] flex gap-x-[25px] mt-[25px] lg:mt-0 justify-center"
      >
        <a href="https://www.wildberries.ru/brands/nort-1091799" target="_blank"
          ><img src="img/will.png" width="228" height="50"
        /></a>
        <a href="https://www.ozon.ru/brand/nort-87169131/" target="_blank"
          ><img src="img/ozon.png" width="177" height="50"
        /></a>
        <a
          href="https://market.yandex.ru/catalog--propitki/18060868/list?hid=16407095&text=%D0%BF%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81&rt=9&was_redir=1&cpa=1&rs=eJwzEgtgrGLl2L7lJfsqRi6Om-9msgkce_SQGQBiQQk7&_redirectCount=1"
          target="_blank"
          ><img src="img/ya.png" width="242" height="51"
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
            href="https://www.wildberries.ru/brands/nort-1091799"
            target="_blank"
          >
            <img src="img/will-mob.png" width="58" height="58"
          /></a>
          <a href="https://www.ozon.ru/brand/nort-87169131/" target="_blank">
            <img src="img/ozon-mob.png" width="58" height="58"
          /></a>
          <a
            href="https://market.yandex.ru/search?was_redir=1&rt=10&rs=eJwdUL0OAWEQvC8iFDRK1YVCo1KJn-SLRqNQKFRyvUqtOeIBiEREiItOc6Ej57iGSuKnklBcRHIqT6BgpplMdmdndjfV9ZXFSATP9nl70S_thRB7oej1PHCY_aP7zv1RCWyA1wzqPVTcIFAdW-ANKI0DlX2gHoPeqaHrvFCRFrhccyqJrjpBRb1RWaV_BbkyBo024OyRnjY9pyvoFe5m0vOBXKe5Q2W5RrdA_yrQWMLTKEFvfFBxQuBuh1hkog9cS3K3Ltxkiw5fJl6ZcrL4DV5t4gNyTs2d3Sd38JiY4OZxG8o0E_28KMzujFMRoscP6ORlcO3Ge6PZH2majhk%2C&suggest_text=%D0%BD%D0%BE%D1%80%D1%82&allowCollapsing=1&local-offers-first=0&glfilter=7893318%3A13323952"
            target="_blank"
          >
            <img src="img/ya-mob.png" width="58" height="58"
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
