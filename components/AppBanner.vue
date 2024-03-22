<template>
  <div>
    <nuxt-img
      quality="100"
      format="webp"
      src="img/banner.png"
      alt="pirilax special"
      width="1953"
      height="765"
      class="mx-auto hidden mob:block lp:w-[90%]"
    />
    <nuxt-img
      format="webp"
      quality="100"
      src="img/banner-mob.png"
      alt="pirilax special"
      width="375"
      height="213"
      class="mob:hidden w-full pt-6"
    />
  </div>
</template>
<script>
export default {
  name: 'AppBanner',
}
</script>
