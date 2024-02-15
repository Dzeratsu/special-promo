<template>
  <section>
        <span
          id="about"
          class="block absolute -mt-32 lg:-mt-24"
        ></span>
    <div class="mx-auto px-6 py-[27px] sm:my-[80px]">
      <h2 class="text-center text-[21px] font-bold sm:text-6xl uppercase">
        Уникальный
        <span class="max-sm:block"
          >огнебиозащитный состав,
          <span class="sm:block">совместимый с лаками и красками!</span></span
        >
      </h2>
      <div>
        <div
          class="mt-5 flex flex-col items-center sm:flex-row sm:justify-center sm:gap-[57px]"
        >
          <img
            class="hidden sm:block"
            src="img/special.svg"
            alt="pirilax-special"
            width="414"
            height="373"
          />
          <img
            src="img/special_mob.svg"
            alt="pirilax-special-mob"
            width="260"
            height="234"
            class="sm:hidden"
          />
          <div class="mt-[21px]">
            <div v-for="(item, index) in text" :key="index">
              <ApproveImage>{{ item }}</ApproveImage>
            </div>
          </div>
        </div>
      </div>
      <AppButton
        link="https://www.nort-udm.ru/upload/iblock/e3a/e3acb41b4f341335863eb551bddb6087.pdf"
        class="mt-[39px]"
      >
        <div class="flex items-center justify-center gap-4">
          <span>Инстуркция</span>
          <img src="img/load.svg" width="23" height="23" alt="load" />
        </div>
      </AppButton>
    </div>
  </section>
</template>
<script>
import ApproveImage from '@/components/global/ApproveImage.vue'
import AppButton from '@/components/global/AppButton.vue'

export default {
  name: 'AppSpecial',
  components: { AppButton, ApproveImage },
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
