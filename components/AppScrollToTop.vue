<template>
  <div
    v-if="$store.state.positionY > 750"
    class="fixed left-[70px] bottom-[30px] pointer hidden lg:block"
    @click="scroll"
  >
    <button class="px-[27px] py-[32px] rounded-full shadowCircle">
      <img
        src="img/scroll.svg"
        alt="scroll"
        width="18"
        height="30"
        class="text-xl"
      />
    </button>
  </div>
</template>
<script>
export default {
  name: 'AppScrollToTo',
  data: () => ({
    scroolBoolean: false,
  }),
  mounted() {
    window.addEventListener('scroll', this.setPosition)
  },
  methods: {
    scroll() {
      this.scroolBoolean = 123
      window.scrollTo(0, 0)
    },
    setPosition() {
      this.$store.commit('setPositionY', window.scrollY)
    },
  },
}
</script>
<style>
.shadowCircle {
  box-shadow: 0 0 10px 0 rgb(9 6 12 / 10%);
}
</style>
