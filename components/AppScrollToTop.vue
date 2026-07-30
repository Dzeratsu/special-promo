<template>
  <aside
    v-show="visible"
    class="pointer fixed bottom-[120px] left-[70px] z-50 hidden lg:block"
    aria-label="Навигация по странице"
  >
    <button
      type="button"
      class="shadowCircle flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white"
      aria-label="Прокрутить наверх"
      @click="scrollToTop"
    >
      <img
        src="/img/scroll.svg"
        alt=""
        width="32"
        height="20"
        class="block"
        aria-hidden="true"
      />
    </button>
  </aside>
</template>

<script>
export default {
  name: 'AppScrollToTop',
  data: () => ({
    visible: false,
  }),
  mounted() {
    this.updateVisibility()
    window.addEventListener('scroll', this.updateVisibility, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateVisibility)
  },
  methods: {
    updateVisibility() {
      this.visible = window.scrollY > 750
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style>
.shadowCircle {
  box-shadow: 0 0 10px 0 rgb(9 6 12 / 10%);
}
</style>
