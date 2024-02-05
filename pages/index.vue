<template>
  <main>
    <AppHeader />
    <AppBanner class="pt-[30px] lg:pt-[83px]" />
    <div class="mx-auto max-w-[1170px] pt-[30px] max-sm:w-full lg:pt-[83px]">
      <AppSpecial class="mt-[48px]" />
      <AppSlider class="mt-[48px]" />
      <AppCombine class="mt-[48px]" />
      <AppChoosePirilax class="mt-[48px]" />
      <AppReady class="mt-[48px]" />
      <AppReviews class="mt-[48px]" />
      <AppScrollToTo/>
    </div>
  </main>
</template>

<script>
import AppScrollToTo from "../components/AppScrollToTop.vue";

export default {
  name: 'IndexPage',
  components: {AppScrollToTo},
}
</script>
