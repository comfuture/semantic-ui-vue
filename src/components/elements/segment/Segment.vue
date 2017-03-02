<template lang="html">
  <lazy-tag class="ui segment" :class="[propClass, stylingClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass} from 'semantic/mixins'

export default {
  name: 'ui-segment',
  mixins: [
    LazyTag('div'),
    PropClass('raised', 'stacked', 'tall', 'piled', 'vertical', 'padded',
              'compact', 'secondary', 'tertiary', 'circular', 'clearing', 'basic')
  ],
  props: {
    color: String,
    attach: [Boolean, String],
    float: String,
    align: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.color) {
        cx.push(this.color)
      }
      if (this.attach) {
        if (typeof this.attach === 'string') {
          cx.push(this.attach)
        }
        cx.push('attached')
      }
      if (this.float) {
        cx.push(`${this.float} floated`)
      }
      if (this.align) {
        cx.push(`${this.align} aligned`)
      }
      return cx
    }
  }
}
</script>
