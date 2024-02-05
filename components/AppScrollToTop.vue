<template>
  <div @click="scroll" class="fixed left-[70px] bottom-[30px] pointer">
    <button class="px-[27px] py-[32px] rounded-full shadowCircle"><img src="img/scroll.svg" alt="scroll" width="18" height="30" class="text-xl"/></button>
  </div>
</template>
<script>
export default {
  name: "AppScrollToTo",
  methods: {
    scroll() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style>
.shadowCircle {
  box-shadow: 0px 0px 10px 0px rgba(9, 6, 12, 0.1);
}
</style>
