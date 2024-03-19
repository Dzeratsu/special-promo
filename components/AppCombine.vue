<template>
  <section>
    <span id="property" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6">
      <h2 class="text-center text-[21px] font-bold sm:text-6xl">
        СОЧЕТАЕТ ЛУЧШИЕ СВОЙСТВА И НАДЕЖНОСТЬ СОСТАВОВ PIRILAX
      </h2>
      <div class="mx-auto mt-5 max-sm:px-0 max-sm:leading-4 lg:px-6">
        <article
          v-for="data in dataObject"
          :key="data.img"
          class="mx-auto sm:px-6 md:pl-[120px]"
        >
          <div class="mt-6 flex items-start gap-5 lg:mt-5 lg:items-center">
            <nuxt-img
              format="webp"
              quality="100"
              :src="`img/${data.img}`"
              width="70"
              height="70"
              class="hidden lg:block"
            />
            <nuxt-img
              format="webp"
              quality="100"
              :src="`img/${data.imgMob}`"
              width="47"
              height="47"
              class="mt-1 lg:hidden"
            />
            <div>
              <p class="text-base font-bold lg:text-2xl">{{ data?.title }}</p>
              <p class="text-base">{{ data?.description }}</p>
            </div>
          </div>
        </article>
        <span id="works" class="block absolute -mt-32 lg:-mt-24"></span>
        <client-only>
          <article class="mx-auto mt-[41px] lg:mt-[80px]">
            <iframe
              class="h-[200px] md:h-[631px]"
              width="100%"
              height="631"
              src="https://www.youtube.com/embed/DGeixKJ-DcM?si=8Bfq9aWkK6Q5shcK"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </article>
        </client-only>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AppCombine',
  data() {
    return {
      dataObject: [
        {
          title: 'Обеспечивает высокие показатели огнезащиты',
          description:
            'Препятствует распространению пламени, I и II группа огнезащитной эффективности',
          img: 'combine1.svg',
          imgMob: 'combine1-mob.svg',
        },
        {
          title:
            'Защищает от плесневых и деревоокрашивающих грибов и водорослей',
          description: 'Высокоэффективный антисептик по ГОСТ 30028.4',
          img: 'combine2.svg',
          imgMob: 'combine2-mob.svg',
        },
        {
          title: 'Экономичен, так как служит долго',
          description:
            'До 16 лет сохраняет свойства огнезащиты и антисептирования',
          img: 'combine3.svg',
          imgMob: 'combine3-mob.svg',
        },
        {
          title: 'Обработанные поверхности безопасны для людей и животных',
          description: '',
          img: 'combine4.svg',
          imgMob: 'combine4-mob.svg',
        },
      ],
    }
  },
}
</script>
