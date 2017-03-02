<template lang="html">
  <lazy-tag class="ui labels" :class="[propClass, stylingClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass} from 'semantic/mixins'

export default {
  name: 'ui-labels',
  mixins: [
    LazyTag('div'),
    PropClass('tag', 'circular')
  ],
  props: {
    size: String,
    color: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.size) {
        cx.push(this.size)
      }
      if (this.color) {
        cx.push(this.color)
      }
      return cx
    }
  }
}
</script>
