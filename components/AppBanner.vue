<template>
  <div>
    <nuxt-img
      src="img/banner.png"
      format="webp"
      quality="100"
      alt="pirilax special"
      width="1920"
      height="765"
      class="mx-auto hidden mob:block"
    />
    <nuxt-img
      src="img/banner-mob.png"
      format="webp"
      quality="100"
      alt="pirilax special"
      width="375"
      height="213"
      class="mob:hidden"
    />
  </div>
</template>
<script>
export default {
  name: 'AppBanner',
}
</script>
