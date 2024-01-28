<template>
  <div
    class="flex items-center gap-4 pt-5 text-base font-semibold leading-[16px] sm:text-[21px] sm:leading-[21px]"
  >
    <span
      class="block h-[30px] w-[30px] flex-shrink-0 rounded-[5px] bg-gray pb-[7px] pl-[7px] pr-[8px] pt-[8px] sm:h-[40px] sm:w-[40px] sm:pb-[9px] sm:pl-[9px] sm:pr-[1px] sm:pt-[11px]"
    >
      <nuxt-img
        format="webp"
        quality="100"
        alt="approve"
        src="img/approve.svg"
        width="19"
        height="19"
      />
    </span>
    <p class="text-[21px]"><slot /></p>
  </div>
</template>

<script>
export default {
  name: 'ApproveImage',
}
</script>
