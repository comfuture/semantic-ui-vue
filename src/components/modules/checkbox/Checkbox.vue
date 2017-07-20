<template>
  <div class="ui checkbox" tabindex="-1" :class="[propClass, stylingClass]" @click="click">
    <input type="checkbox" tabindex="0" class="hidden" :name="name" :checked="checked">
    <label><slot></slot></label>
  </div>
</template>
<script>
import { PropClass } from 'semantic/mixins'

export default {
  name: 'ui-checkbox',
  mixins: [
    PropClass('disabled')
  ],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    checked: Boolean,
    value: String,
    readonly: Boolean
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.readonly) {
        cx.push('read-only') // what a stupid naming
      }
      return cx
    }
  },
  methods: {
    click() {
      if (this.disabled) return
      this.$emit('change', !this.checked)
    }
  }
}
</script>
