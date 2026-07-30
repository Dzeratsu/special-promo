<template>
  <section>
    <span id="about" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6 py-[27px] sm:my-[80px]">
      <h2 class="text-center text-[21px] font-bold lp:text-4xl 2xl:text-6xl uppercase">
        Уникальный
        <span class="max-sm:block"
          >огнебиозащитный состав,
          <span class="sm:block">совместимый с лаками и красками!</span></span
        >
      </h2>
      <div>
        <div
          class="mt-5 flex flex-col items-center md:flex-row sm:justify-center sm:gap-[57px]"
        >
          <picture class="hidden max-w-full sm:block lp:max-w-[320px]">
            <source srcset="/img/special.webp" type="image/webp" />
            <img
              src="/img/special.jpg"
              alt="Pirilax Special"
              width="828"
              height="746"
              class="h-auto max-w-full"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <picture class="sm:hidden">
            <source srcset="/img/special_mob.webp" type="image/webp" />
            <img
              src="/img/special_mob.jpg"
              alt="Pirilax Special"
              width="520"
              height="468"
              class="h-auto"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div class="mt-[21px]">
            <div v-for="(item, index) in text" :key="index" class="">
              <ApproveImage>{{ item }}</ApproveImage>
            </div>
          </div>
        </div>
      </div>
      <AppButton
        link="https://www.nort-udm.ru/upload/iblock/6b8/6b80f525a1086ef2d4d3182fb46bc53e.pdf"
        class="mt-[39px]"
      >
        <div class="flex items-center justify-center gap-4">
          <span>Инструкция</span>
          <img src="/img/load.svg" width="23" height="23" alt="" aria-hidden="true" />
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
        'Можно наносить на чистую древесину',
        'Можно наносить на ранее окрашенную древесину',
        'На древесину, обработанную «PIRILAX®»-Special, можно наносить лаки и краски',
        'Невидимая огнезащита: не тонирует древесину и не изменяет цвет декоративного покрытия',
        'Не образует высолов',
      ],
    }
  },
}
</script>
