<template>
  <section>
    <div class="mx-auto px-6">
      <app-title>ГОТОВЫЕ КОМПЛЕКСНЫЕ РЕШЕНИЯ</app-title>
      <div class="flex-shrink-1 flex flex-col sm:mt-[61px] sm:flex-row">
        <div>
          <div class="flex-shrink-1 flex items-start sm:items-center">
            <img
              class="hidden sm:block"
              src="img/ready-icon1.svg"
              width="70"
              height="70"
              alt="#"
            />
            <img
              class="sm:hidden"
              src="img/ready-icon1mob.svg"
              width="48"
              height="48"
              alt="#"
            />
            <ul class="ml-[18px] sm:ml-[30px]">
              <li class="text-[16px] font-semibold sm:text-[21px]">
                Для наружных работ
              </li>
              <li class="text-[16px] max-sm:leading-[15px] sm:text-[21px]">
                Цвет + Защита от огня, плесени, растрескивания, старения,
                <span class="max-sm:hidden">выцветания, влаги</span>
              </li>
            </ul>
          </div>
          <img
            class="mt-[46px]"
            src="img/ready1.png"
            width="570"
            height="428"
            alt="#"
          />
        </div>
        <div>
          <div class="flex-shrink-1 flex items-start sm:items-center">
            <img
              class="hidden sm:block"
              src="img/ready-icon2.svg"
              width="70"
              height="70"
              alt="#"
            />
            <img
              class="sm:hidden"
              src="img/ready-icon2mob.svg"
              width="48"
              height="48"
              alt="#"
            />
            <ul class="ml-[18px] sm:ml-[30px]">
              <li class="text-[16px] font-semibold sm:text-[21px]">
                Для внутренних работ
              </li>
              <li class="text-[16px] max-sm:leading-[15px] sm:text-[21px]">
                Цвет + Защита от огня, плесени, растрескивания, старения
              </li>
            </ul>
          </div>
          <img
            class="mt-[46px]"
            src="img/ready2.png"
            width="570"
            height="428"
            alt="#"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppTitle from '@/components/global/AppTitle.vue'

export default {
  name: 'AppReady',
  components: { AppTitle },
}
</script>
