<template>
  <div class="flex justify-center">
    <a
      :href="link"
      target="_blank"
      class="block w-full 2xl::max-w-[370px] max-w-[327px]"
    >
      <button
        class="w-full rounded-[15px] bg-yellow py-[12px] text-center text-[16px] hover:shadow-xl 2xl:max-w-[370px] 2xl:py-[19px] 2xl:text-[21px]"
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
