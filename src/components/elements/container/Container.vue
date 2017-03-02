<template lang="html">
  <lazy-tag class="ui container" :class="[stylingClass, propClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {PropClass, LazyTag} from 'semantic/mixins'

export default {
  name: 'ui-container',
  mixins: [PropClass('text', 'fluid'), LazyTag('div')],
  props: {
    align: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.align) {
        if (/^(left|right|center)$/.test(this.align)) {
          cx.push(`${this.align} aligned`)
        } else if (this.align === 'justified') {
          cx.push(this.align)
        }
      }
      return cx
    }
  }
}
</script>
