<template>
  <div class="flex justify-center">
    <a :href="link" target="_blank" class="block w-full sm:max-w-[370px] max-w-[327px]">
      <button
        class="w-full rounded-[15px] bg-yellow py-[12px] text-center text-[16px] hover:shadow-xl sm:max-w-[370px] sm:py-[19px] sm:text-[21px]"
      >
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
      default: '#',
    },
  },
}
</script>
