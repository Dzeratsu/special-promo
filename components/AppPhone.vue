<template>
  <aside
    class="pointer fixed bottom-[100px] right-[20px] z-50 lg:bottom-[120px] lg:right-[70px]"
    aria-label="Обратный звонок"
  >
    <button
      type="button"
      class="callback test flex items-center justify-center rounded-full p-[20px]"
      :class="isOpen ? 'bg-[#666666]' : 'bg-orange-gr'"
      :aria-label="isOpen ? 'Закрыть форму' : 'Открыть форму обратной связи'"
      :aria-expanded="isOpen ? 'true' : 'false'"
      @click="togglePopup"
    >
      <img
        v-if="!isOpen"
        src="/img/phone.svg"
        alt=""
        width="31"
        height="31"
        class="hidden lg:block"
        aria-hidden="true"
      />
      <img
        v-if="!isOpen"
        src="/img/phone.svg"
        alt=""
        width="16"
        height="16"
        class="lg:hidden"
        aria-hidden="true"
      />
      <img
        v-if="isOpen"
        src="/img/cross.svg"
        alt=""
        width="31"
        height="31"
        class="hidden lg:block"
        aria-hidden="true"
      />
      <img
        v-if="isOpen"
        src="/img/cross.svg"
        alt=""
        width="16"
        height="16"
        class="lg:hidden"
        aria-hidden="true"
      />
    </button>
  </aside>
</template>

<script>
export default {
  name: 'AppPhone',
  computed: {
    isOpen() {
      return this.$store.state.popup.open
    },
  },
  methods: {
    togglePopup() {
      if (this.isOpen) {
        this.$store.commit('popup/CLOSE_POPUP')
      } else {
        this.$store.commit('popup/OPEN_POPUP')
      }
    },
  },
}
</script>

<style>
.callback {
  position: fixed;
  z-index: 10;
  top: calc(100vh - 9.6562em);
  right: 5.6562em;
  animation: 2s infinite splash;
  transform-origin: 50% 50%;
  transform: translate(50%, -50%);
  will-change: box-shadow, transform;
  transition: box-shadow 0.3s, transform 0.1s;
  border: none;
  cursor: pointer;
}
.bg-orange-gr {
  background: linear-gradient(180deg, #ff802e 0, #ff2d00 100%);
}
@keyframes splash {
  0% {
    box-shadow: 0 0 0 0 #ff802e;
  }
  100% {
    box-shadow: 0 0 60px 11px rgba(255, 128, 46, 0);
  }
}
</style>
