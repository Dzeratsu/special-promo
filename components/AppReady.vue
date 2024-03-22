<template>
  <section>
    <span id="ready-solutions" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6">
      <app-title>ГОТОВЫЕ КОМПЛЕКСНЫЕ РЕШЕНИЯ</app-title>
      <div
        class="max-sm:flex-col flex gap-x-[30px] max-sm:mt-[18px] 2xl:mt-[61px] lp:mt-[23px] flex-row-reverse"
      >
        <div class="sm:w-6/12">
          <div class="flex items-center sm:items-center flex-shrink-1">
            <nuxt-img
              format="webp"
              quality="100"
              class="hidden sm:block"
              src="img/ready-icon2.svg"
              width="70"
              height="70"
              alt="Защита древесины от огня для наружных работ"
            />
            <nuxt-img
              format="webp"
              quality="100"
              class="sm:hidden "
              src="img/ready-icon1mob.svg"
              width="48"
              height="48"
              alt="Защита древесины от огня для наружных работ"
            />
            <ul class="ml-[18px] sm:ml-[30px]">
              <li class="text-[16px] font-semibold lg:text-[21px]">
                Для ВНУТРЕННИХ работ
              </li>
              <li class="text-[16px] max-sm:leading-[15px] lg:text-[21px]">
                Цвет + Защита от огня, плесени, растрескивания, старения
              </li>
            </ul>
          </div>
          <nuxt-img
            format="webp"
            quality="100"
            class="mt-[46px] lp:mt-[16px] lp:max-w-[80%]"
            src="img/ready2.png"
            width="570"
            height="428"
            alt="Защита древесины от огня для наружных работ"
          />
        </div>
        <div class="max-sm:mt-[36px] sm:w-6/12">
          <div class="flex items-center sm:items-center">
            <nuxt-img
              format="webp"
              quality="100"
              class="sm:hidden"
              src="img/ready-icon2mob.svg"
              width="48"
              height="48"
              alt="Защита древесины от огня для наружных работ"
            />
            <nuxt-img
              format="webp"
              quality="100"
              class="hidden sm:block"
              src="img/ready-icon1.svg"
              width="70"
              height="70"
              alt="#"
            />
            <ul class="ml-[18px] sm:ml-[30px]">
              <li class="text-[16px] font-semibold lg:text-[21px]">
                Для НАРУЖНЫХ работ
              </li>
              <li class="text-[16px] max-sm:leading-[15px] lg:text-[21px]">
                Цвет + Защита от огня, плесени, растрескивания, старения,
                выцветания, влаги
              </li>
            </ul>
          </div>
          <nuxt-img
            format="webp"
            quality="100"
            class="mt-[46px] lp:mt-[16px] lp:max-w-[80%]"
            src="img/ready1.png"
            width="570"
            height="428"
            alt="#"
          />
        </div>
      </div>
    </div>
    <AppButton
      link="https://www.nort-udm.ru/mesta-prodazh/"
      class="2xl:mt-[66px] mt-[33px] lp:mt-[15px]"
      >Узнайте, где купить
    </AppButton>
  </section>
</template>
<script>
import AppTitle from '@/components/global/AppTitle.vue'
import AppButton from '@/components/global/AppButton.vue'

export default {
  name: 'AppReady',
  components: { AppButton, AppTitle },
}
</script>
