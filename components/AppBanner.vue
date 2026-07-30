<template>
  <section aria-label="Главный баннер">
    <nuxt-img
      quality="100"
      format="webp"
      src="img/banner.jpg"
      alt="Pirilax Special — огнебиозащита древесины"
      width="1953"
      height="765"
      class="mx-auto hidden mob:block lp:w-[90%]"
    />
    <nuxt-img
      format="webp"
      quality="100"
      src="img/banner-mob.jpg"
      alt="Pirilax Special — огнебиозащита древесины"
      width="375"
      height="213"
      class="w-full pt-6 mob:hidden"
    />
  </section>
</template>

<script>
export default {
  name: 'AppBanner',
}
</script>
