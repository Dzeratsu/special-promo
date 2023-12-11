<template>
  <div class="flex items-end justify-center gap-4 px-4">
    <nuxt-img
      src="/img/line.svg"
      alt="title-line"
      format="webp"
      class="hidden md:block w-full"
    />
  <h2 class="font-bold text-[21px] sm:text-6xl text-center before:bg-lineTitle before:w-full flex-shrink-0"><slot/>
  </h2>
    <nuxt-img
      src="/img/line.svg"
      alt="title-line"
      format="webp"
      class="hidden md:block w-full"
    />
</div>
</template>
<script>
export default {
  name: "AppTitle"
}
</script>
