<template>
  <div class="flex items-end justify-center gap-4 px-4">
    <h2
      class="flex-shrink-0 text-center text-[21px] font-bold before:w-full before:bg-lineTitle sm:text-6xl"
    >
      <slot />
    </h2>
  </div>
</template>
<script>
export default {
  name: 'AppTitle',
}
</script>
