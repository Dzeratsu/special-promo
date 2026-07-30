<template>
  <div>
    <AppHeader />
    <main id="main-content">
      <AppBanner class="pt-[30px] lg:pt-[83px]" />
      <AppSpecial />
      <div class="bg-bg-gray pt-[27px] sm:py-[40px]">
        <AppSlider class="mx-auto max-w-[1170px]" />
      </div>
      <AppCombine class="mx-auto max-w-[1170px] py-[27px] sm:py-[80px]" />
      <div class="bg-bg-gray py-[27px] sm:py-[80px]">
        <AppChoosePirilax class="mx-auto max-w-[1170px]" />
      </div>
      <AppReady class="mx-auto max-w-[1170px] py-[27px] sm:py-[80px]" />
      <div class="bg-bg-gray py-[40px]">
        <AppReviews class="mx-auto max-w-[1170px]" />
      </div>
      <AppMarketplace class="mx-auto max-w-[1170px]" />
      <AppVk />
    </main>
    <AppPopup />
    <AppScrollToTop />
    <AppPhone />
    <AppFooter />
  </div>
</template>

<script>
import AppScrollToTop from '../components/AppScrollToTop.vue'
import AppPopup from '@/components/global/AppPopup.vue'

export default {
  name: 'IndexPage',
  components: { AppPopup, AppScrollToTop },
}
</script>
