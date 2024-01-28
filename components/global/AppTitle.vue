<template>
  <div class="flex items-end justify-center gap-4 px-4">
    <h2 class="text-center text-[21px] font-bold before:w-full sm:text-6xl">
      <slot />
    </h2>
  </div>
</template>
<script>
export default {
  name: 'AppTitle',
}
</script>
