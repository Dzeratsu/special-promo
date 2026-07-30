<template>
  <section aria-label="Главный баннер">
    <picture class="mx-auto hidden mob:block lp:w-[90%]">
      <source srcset="/img/banner.webp" type="image/webp" />
      <img
        src="/img/banner.jpg"
        alt="Pirilax Special — огнебиозащита древесины"
        width="1600"
        height="627"
        class="mx-auto w-full"
        fetchpriority="high"
        decoding="async"
      />
    </picture>
    <picture class="mob:hidden">
      <source srcset="/img/banner-mob.webp" type="image/webp" />
      <img
        src="/img/banner-mob.jpg"
        alt="Pirilax Special — огнебиозащита древесины"
        width="375"
        height="213"
        class="w-full pt-6"
        fetchpriority="high"
        decoding="async"
      />
    </picture>
  </section>
</template>

<script>
export default {
  name: 'AppBanner',
}
</script>
