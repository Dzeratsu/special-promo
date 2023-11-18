<template>
  <section>
    <div class="mx-auto px-6">
      <h2 class="font-bold text-3xl sm:text-6xl text-center">РАЗРАБОТАН <span class="max-sm:block">СПЕЦИАЛЬНО</span>
        <span class="sm:block">для совместного применения с красками и лаками</span></h2>
      <div>
        <div class="flex flex-col sm:flex-row items-center mt-5 sm:justify-center  sm:gap-[57px]">
          <nuxt-img
            format="webp"
            quality="100"
            class="hidden sm:block"
            src="img/special.svg"
            alt="pirilax-special"
            width="414"
            height="373"
          />
          <nuxt-img
            format="webp"
            quality="100"
            src="img/special_mob.svg"
            alt="pirilax-special-mob"
            width="176"
            height="159"
            class="sm:hidden"
          />
          <div class="mt-[21px]">
            <div
              class="flex items-center text-base sm:text-[21px] sm:leading-[21px] leading-[16px] font-semibold pt-5 gap-4"
              v-for="(item, index) in text" :key="index">
          <span class="bg-gray pt-[8px] pl-[7px] pb-[7px] pr-[8px] sm:pt-[11px] sm:pl-[9px] sm:pb-[9px] sm:pm run devpr-[1px] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] block rounded-[5px] flex-shrink-0">
            <nuxt-img format="webp"
                      quality="100"
                      src="img/approve.svg"
                      width="19"
                      height="19"/>
          </span>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AppSpecial',
  data() {
    return {
      text: [
        'Можно наносить на окрашенные поверхности!',
        'Cовместим с большинством ЛКМ',
        'Бесцветный, не изменяет цвет древесины и декоративного покрытия',
        'Не образует высолов',
        'Подходит для наружных и внутренних работ'
      ]
    }
  }
}
</script>
