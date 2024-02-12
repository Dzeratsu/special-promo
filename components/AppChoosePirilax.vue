<template>
  <section>
    <div class="mx-auto px-6">
      <app-title>ВЫБИРАЙТЕ PIRILAX-SPECIAL</app-title>
    </div>
    <div class="mx-auto px-6 md:pl-[170px]">
      <ApproveImage :white="true" class="mt-[20px]"
        >Если хотите получить цветное декоративное покрытие с огнебиозащитным
        эффектом</ApproveImage
      >
      <ApproveImage :white="true" class="md:mt-[20px]"
        >Если хотите получить огнебиозащитное покрытие, сохранив натуральный
        цвет дерева</ApproveImage
      >
      <ApproveImage :white="true" class="md:mt-[20px]"
        >Если хотите обработать огнебиозащитой ранее окрашенные
        поверхности</ApproveImage
      >
    </div>
  </section>
</template>

<script>
import ApproveImage from '@/components/global/ApproveImage.vue'
import AppTitle from '@/components/global/AppTitle.vue'

export default {
  name: 'ChoosePage',
  components: { AppTitle, ApproveImage },
}
</script>
