<template>
  <section>
    <div class="mx-auto px-6">
      <h2 class="font-bold text-[21px] sm:text-6xl text-center">СОЧЕТАЙТЕ ЛУЧШИЕ СВОЙСТВА И НАДЕЖНОСТЬ</h2>
      <app-title class="mt-4">СОСТАВОВ PIRILAX</app-title>
      <div class="mx-auto px-6 mt-5">
      <article v-for="data in dataObject" v-bind:key="data">
        <div class="flex items-center gap-5">
       <nuxt-img :src="`img/${data.img}`"/>
        <div>
          <p>{{data?.title}}</p>
          <p>{{data?.description}}</p>
        </div>
        </div>
      </article>
      </div>
    </div>
  </section>
</template>
<script>
import AppTitle from '@/components/global/AppTitle.vue';

export default {
  name: 'AppCombine',
  components: {AppTitle},
  data() {
    return {
      dataObject: [
        {
          title: 'Обеспечивает высокие показатели огнезащиты',
          description: 'Препятствует распространению пламени, I и II группа огнезащитной эффективности',
          img: "combine1.svg",
          imgMob: "combine1-mob.svg"
        },
        {
          title: 'Защищает от плесневых и деревоокрашивающих грибов и водорослей',
          description: 'Высокоэффективный антисептик по ГОСТ 30028.4',
          img: "combine2.svg",
          imgMob: "combine2-mob.svg"
        },
        {
          title: 'Экономичен, так как служит долго',
          description: 'До 16 лет сохраняет свойства огнезащиты и антисептирования',
          img: "combine3.svg",
          imgMob: "combine3-mob.svg"
        },
        {
          title: 'Обработанные поверхности безопасны для людей и животных',
          description: '',
          img: "combine4.svg",
          imgMob: "combine4-mob.svg"
        }
      ]
    }
  }
}
</script>
