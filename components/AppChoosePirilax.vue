<template>
  <section>
    <div class="mx-auto px-6">
      <h2 class="font-bold text-3xl sm:text-6xl text-center">ВЫБИРАЙТЕ PIRILAX-SPECIAL</h2>
    </div>
    <div class="mx-auto md:pl-[170px] px-6">
    <ApproveImage class="mt-[31px]">Если планируете обработку дома защитно-декоративным составом</ApproveImage>
    <ApproveImage class="md:mt-[48px]">Если решили защитить дом от огня и биопоражения, но он уже покрашен ЛКМ</ApproveImage>
    </div>
  </section>
</template>

<script>
import ApproveImage from '@/components/global/ApproveImage.vue';

export default {
  name: "ChoosePage",
  components: {ApproveImage}
}
</script>
