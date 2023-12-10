<template>
  <div class="flex items-center text-base sm:text-[21px] sm:leading-[21px] leading-[16px] font-semibold pt-5 gap-4">
    <span class="bg-gray pt-[8px] pl-[7px] pb-[7px] pr-[8px] sm:pt-[11px] sm:pl-[9px] sm:pb-[9px] sm:pm run devpr-[1px] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] block rounded-[5px] flex-shrink-0">
            <nuxt-img format="webp"
                      quality="100"
                      alt="approve"
                      src="img/approve.svg"
                      width="19"
                      height="19"/>
          </span>
    <p><slot/></p>
  </div>
</template>

<script>
export default {
  name: "ApproveImage"
}
</script>
