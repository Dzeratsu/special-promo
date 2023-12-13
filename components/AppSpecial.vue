<template>
  <section>
    <div class="mx-auto px-6">
      <h2 class="text-center text-[21px] font-bold sm:text-6xl">
        РАЗРАБОТАН <span class="max-sm:block">СПЕЦИАЛЬНО</span>
        <span class="sm:block">для применения с красками и лаками</span>
      </h2>
      <div>
        <div
          class="mt-5 flex flex-col items-center sm:flex-row sm:justify-center sm:gap-[57px]"
        >
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
            <div v-for="(item, index) in text" :key="index">
              <ApproveImage>{{ item }}</ApproveImage>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ApproveImage from '@/components/global/ApproveImage.vue'

export default {
  name: 'AppSpecial',
  components: { ApproveImage },
  data() {
    return {
      text: [
        'Можно наносить на окрашенные поверхности!',
        'Cовместим с большинством ЛКМ',
        'Бесцветный, не изменяет цвет древесины и декоративного покрытия',
        'Не образует высолов',
        'Подходит для наружных и внутренних работ',
      ],
    }
  },
}
</script>
