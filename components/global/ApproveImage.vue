<template>
  <div
    class="flex items-center gap-2 pt-3 text-base font-semibold leading-[16px] sm:text-[21px] sm:leading-[21px] flex-shrink-1"
  >
    <div class="max-sm:min-w-[40px] min-w-[60px] hidden sm:block">
      <nuxt-img
        format="webp"
        quality="100"
        v-if="!white"
        alt="approve"
        src="img/approve.svg"
        width="40"
        height="40"
      />
      <nuxt-img
        format="webp"
        quality="100"
        v-else
        alt="approve"
        src="img/approve-white.svg"
        width="40"
        height="40"
      />
    </div>
    <div class="block sm:hidden max-sm:min-w-[40px] min-w-[60px]">
      <nuxt-img
        format="webp"
        quality="100"
        v-if="!white"
        alt="approve"
        src="img/approve.svg"
        width="29"
        height="29"
      />
      <nuxt-img
        format="webp"
        quality="100"
        v-else
        alt="approve"
        src="img/approve-white.svg"
        width="29"
        height="29"
      />
    </div>
    <p class="lg:text-[21px] text-[16px]"><slot /></p>
  </div>
</template>

<script>
export default {
  name: 'ApproveImage',
  props: {
    white: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
}
</script>
