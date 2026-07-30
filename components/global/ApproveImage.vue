<template>
  <div
    class="flex flex-shrink-1 items-center gap-2 pt-3 text-base font-semibold leading-[16px] sm:text-[21px] sm:leading-[21px]"
  >
    <div class="hidden min-w-[60px] sm:block max-sm:min-w-[40px]">
      <img
        v-if="!white"
        src="/img/approve.svg"
        alt=""
        width="40"
        height="40"
        aria-hidden="true"
      />
      <img
        v-else
        src="/img/approve-white.svg"
        alt=""
        width="40"
        height="40"
        aria-hidden="true"
      />
    </div>
    <div class="block min-w-[60px] sm:hidden max-sm:min-w-[40px]">
      <img
        v-if="!white"
        src="/img/approve.svg"
        alt=""
        width="29"
        height="29"
        aria-hidden="true"
      />
      <img
        v-else
        src="/img/approve-white.svg"
        alt=""
        width="29"
        height="29"
        aria-hidden="true"
      />
    </div>
    <p class="text-[16px] lg:text-[21px]"><slot /></p>
  </div>
</template>

<script>
export default {
  name: 'ApproveImage',
  props: {
    white: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
