<template>
  <label class="relative mb-2 z-20 block outline-none mt-2">
    <span
      class="absolute left-0 duration-100 group-active:top-0 ml-2 z-10 text-[14px] leading-4 top-5"
      :class="[
        { 'hidden': selected.length > 0 },
        { 'text-gray-300': selected.length === 0 },
      ]"
      >{{ title }}</span
    >
    <select
      v-model="selected"
      :name="name"
      class="pl-1 pr-1 bg-transparent py-4 pt-4 min-w-full block duration-300 ease-in border-gray border-[1px] outline-none rounded-[10px] relative z-20 text-xs lg:text-sm 2xl:base"
      required
      @focus="focus = true"
      @change="checkValueLength"
      @focusout="checkValueLength"
      @input="$emit('selectValue', { name, value: $event.target.value })"
    >
      <option
        v-for="property in properties"
        :key="property"
        :value="property"
      >
        {{ property }}
      </option>
    </select>
  </label>
</template>
<script>
export default {
  name: 'AppDropdown',
  props: {
    properties: {
      type: Array,
      default: () => {
        return [
          {
            name: 'prop',
          },
        ]
      },
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: '',
      focus: false,
    }
  },
  computed: {
    isSelected() {
      return this.selected.length > 0
    },
  },
  methods: {
    checkValueLength() {
      this.$log.info(this.selected)
      this.focus = this.selected.length !== 0
    },
  },
}
</script>
