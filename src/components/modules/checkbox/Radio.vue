<template>
  <div class="ui radio checkbox" tabindex="-1" :class="[propClass, stylingClass]" @click="click">
    <input type="radio" tabindex="0" class="hidden" :name="name" :checked="checked">
    <label><slot></slot></label>
  </div>
</template>
<script>
import { PropClass } from 'semantic/mixins'

export default {
  name: 'ui-radiobutton',
  mixins: [
    PropClass('disabled')
  ],
  model: {
    prop: 'selectedValue'
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    value: [String, Number],
    selectedValue: [String, Number],
    readonly: Boolean
  },
  computed: {
    checked() {
      return this.value === this.selectedValue
    },
    stylingClass() {
      let cx = []
      if (this.checked) {
        cx.push('checked')
      }
      if (this.readonly) {
        cx.push('read-only') // what a stupid naming
      }
      return cx
    }
  },
  methods: {
    click() {
      if (this.disabled) return
      this.$emit('input', this.value)
    }
  }
}
</script>
