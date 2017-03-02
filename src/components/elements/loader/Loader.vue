<template lang="html">
  <lazy-tag class="ui loader" :class="[propClass, stylingClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass} from 'semantic/mixins'

export default {
  name: 'ui-loader',
  mixins: [
    LazyTag('div'),
    PropClass('interminate', 'active', 'disabled', 'inline', 'centered', 'inverted')
  ],
  props: {
    size: String
  },
  computed: {
    hasText() {
      return this.$slots.default && this.$slots.default.length > 0
    },
    stylingClass() {
      let cx = []
      if (this.hasText) {
        cx.push('text')
      }
      if (this.size) {
        cx.push(this.size)
      }
      return cx
    }
  }
}
</script>
