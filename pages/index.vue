<template>
  <main>
    <AppHeader />
    <AppBanner class="pt-[30px] lg:pt-[83px]" />
      <AppSpecial/>
     <div class="bg-bg-gray py-[27px] sm:py-[80px]"> <AppSlider class="max-w-[1170px] mx-auto" /></div>
      <AppCombine class="py-[27px] sm:py-[80px] max-w-[1170px] mx-auto" />
      <div class="bg-bg-gray py-[27px] sm:py-[80px]">  <AppChoosePirilax class="max-w-[1170px] mx-auto" /></div>
      <AppReady class=" py-[27px] sm:py-[80px] max-w-[1170px] mx-auto" />
      <div class="bg-bg-gray py-[40px] ">   <AppReviews class="max-w-[1170px] mx-auto" /></div>
      <AppScrollToTo />
  </main>
</template>

<script>
import AppScrollToTo from '../components/AppScrollToTop.vue'

export default {
  name: 'IndexPage',
  components: { AppScrollToTo },
}
</script>
