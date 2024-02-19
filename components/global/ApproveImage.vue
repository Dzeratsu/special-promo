<template>
  <div
    class="flex items-center gap-4 pt-3 text-base font-semibold leading-[16px] sm:text-[21px] sm:leading-[21px] flex-shrink-1"
  >
    <div class="max-sm:min-w-[40px] sm:w-[40px] hidden sm:block">
      <img
        v-if="!white"
        alt="approve"
        src="img/approve.svg"
        width="40"
        height="40"
      />
      <img
        v-else
        alt="approve"
        src="img/approve-white.svg"
        width="40"
        height="40"
      />
    </div>
    <div class="block sm:hidden max-sm:min-w-[60px] sm:w-[40px]">
      <img
        v-if="!white"
        alt="approve"
        src="img/approve.svg"
        width="29"
        height="29"
      />
      <img
        v-else
        alt="approve"
        src="img/approve-white.svg"
        width="29"
        height="29"
      />
    </div>
    <p class="text-[21px] max-sm:text-[16px]"><slot /></p>
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
