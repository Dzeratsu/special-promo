<template>
  <div class="flex justify-center">
    <a :href="link" target="_blank" class="block w-full sm:max-w-[370px]">
    <button
      class="rounded-[15px] sm:py-[19px] py-[12px] text-center w-full  sm:max-w-[370px]  bg-yellow text-[16px] sm:text-[21px] hover:shadow-xl">
      <slot />
    </button>
    </a>
  </div>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    link: {
      type: String,
      require: false,
      default: '#'
    }
  }
}
</script>
