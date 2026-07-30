<template>
  <div
    v-if="openPopup"
    class="bg-popup fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    @click.stop.self="closePopup"
    @keydown.esc.stop="closePopup"
  >
    <WrapForm />
  </div>
</template>

<script>
import WrapForm from '~/components/global/WrapForm.vue'

export default {
  name: 'AppPopup',
  components: { WrapForm },
  computed: {
    openPopup() {
      return this.$store.state.popup.open
    },
  },
  methods: {
    closePopup() {
      this.$store.dispatch('popup/close')
    },
  },
}
</script>
