<template>
  <div class="fixed z-50 lg:right-[70px] right-[20px] lg:bottom-[120px] bottom-[100px] pointer lg:block">
    <div class="grid gap-10">
      <!--      <button
        v-if="openButton"
        class="p-[20px] rounded-full bg-[#FF802E] test"
        @click="openPopup"
      >
        <img
          src="img/phone.svg"
          alt="scroll"
          width="31"
          height="31"
          class="text-xl"
        />
      </button>
      <button v-if="openButton" class="p-[22px] rounded-full bg-[#282421]">
        <img
          src="img/chat.svg"
          alt="scroll"
          width="28"
          height="24"
          class="text-xl"
        />
      </button>-->
      <button
        v-if="!$store.state.popup.open"
        class="p-[20px] rounded-full bg-[#FF802E] test"
        @click="openPopup"
      >
        <img
          src="img/phone.svg"
          alt="scroll"
          width="31"
          height="31"
          class="text-xl hidden lg:block"
        />
        <img
          src="img/phone.svg"
          alt="scroll"
          width="16"
          height="16"
          class="text-xl lg:hidden"
        />
      </button>
      <button
        v-else
        class="p-[20px] rounded-full bg-[#666666] test"
        @click="openPopup"
      >
        <img
          src="img/cross.svg"
          alt="scroll"
          width="31"
          height="31"
          class="text-xl hidden lg:block"
        />
        <img
          src="img/cross.svg"
          alt="scroll"
          width="16"
          height="16"
          class="text-xl lg:hidden"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppPhone',
  data() {
    return {
      openButton: false,
    }
  },
  methods: {
    openPopup() {
      if (!this.$store.state.popup.open) {
        this.$store.commit('popup/OPEN_POPUP')
      } else {
        this.$store.commit('popup/CLOSE_POPUP')
      }
    },
  },
}
</script>
<style></style>
