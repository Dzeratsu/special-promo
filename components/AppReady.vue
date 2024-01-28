<template>
  <div>
    <app-title>ГОТОВЫЕ КОМПЛЕКСНЫЕ РЕШЕНИЯ</app-title>
    <div class="flex-shrink-1 flex gap-[20px] md:flex-row">
      <div>
        <div class="flex">
          <nuxt-img
            src="/img/ready-icon1.svg"
            format="webp"
            quality="100"
            width="70"
            height="70"
            alt="#"
          />
          <ul class="ml-">
            <li class="text-[21px] font-semibold">Для наружных работ</li>
            <li>
              Цвет + Защита от огня, плесени, растрескивания, старения,
              выцветания, влаги
            </li>
          </ul>
        </div>
        <nuxt-img
          src="/img/ready1.png"
          format="webp"
          quality="100"
          width="570"
          height="428"
          alt="#"
        />
      </div>
      <div>
        <div class="flex">
          <nuxt-img
            src="/img/ready-icon2.svg"
            format="webp"
            quality="100"
            width="70"
            height="70"
            alt="#"
          />
          <ul>
            <li class="text-[21px] font-semibold">Для внутренних работ</li>
            <li>Цвет + Защита от огня, плесени, растрескивания, старения</li>
          </ul>
        </div>
        <nuxt-img
          src="/img/ready2.png"
          format="webp"
          quality="100"
          width="570"
          height="428"
          alt="#"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AppTitle from '@/components/global/AppTitle.vue'

export default {
  name: 'AppReady',
  components: { AppTitle },
}
</script>
