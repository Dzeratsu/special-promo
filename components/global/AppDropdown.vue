<template>
  <label class="relative mb-2 z-20 block">
    <span
      class="absolute left-0 duration-100 group-active:top-0 z-10 text-xs lg:text-sm 2xl:base"
      :class="[
        { 'top-0 text-blue-link text-sm': focus },
        { 'top-5': !focus },
        { 'text-gray-300': selected.length === 0 },
        { 'border-blue-link': selected.length !== 0 },
      ]"
      >{{ title }}</span
    >
    <select
      v-model="selected"
      :name="name"
      class="py-2 pt-6 min-w-full block duration-300 ease-in border-b outline-none hover:border-blue-link relative z-20 bg-transparent text-xs lg:text-sm 2xl:base"
      required
      @focus="focus = true"
      @change="checkValueLength"
      @focusout="checkValueLength"
      @input="$emit('selectValue', { name, value: $event.target.value })"
    >
      <option
        v-for="property in properties"
        :key="property.name"
        :value="property.name"
      >
        {{ property.name }}
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
      this.focus = this.selected.length !== 0
    },
  },
}
</script>
