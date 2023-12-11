<template>
  <section>
    <div class="mx-auto px-6">
      <app-title>ВЫБИРАЙТЕ PIRILAX-SPECIAL</app-title>
    </div>
    <div class="mx-auto md:pl-[170px] px-6">
    <ApproveImage class="mt-[31px]">Если планируете обработку дома защитно-декоративным составом</ApproveImage>
    <ApproveImage class="md:mt-[48px]">Если решили защитить дом от огня и биопоражения, но он уже покрашен ЛКМ</ApproveImage>
    </div>
  </section>
</template>

<script>
import ApproveImage from '@/components/global/ApproveImage.vue';
import AppTitle from '@/components/global/AppTitle.vue';

export default {
  name: "ChoosePage",
  components: {AppTitle, ApproveImage}
}
</script>
