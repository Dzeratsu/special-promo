<template>
  <div class="flex items-end justify-center gap-4 px-4">
    <h2 class="text-center text-[21px] font-bold before:w-full lp:text-4xl 2xl:text-6xl">
      <slot />
    </h2>
  </div>
</template>
<script>
export default {
  name: 'AppTitle',
}
</script>
