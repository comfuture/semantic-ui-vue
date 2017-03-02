<template lang="html">
  <i class="icon" :class="[name, propClass, stylingClass]"></i>
</template>

<script>
import {PropClass} from 'semantic/mixins'

export default {
  name: 'ui-icon',
  mixins: [
    PropClass('disabled', 'loading', 'fitted', 'link', 'flipped', 'rotated',
              'circular', 'bordered', 'inverted', 'corner')
  ],
  props: {
    name: String,
    size: String,
    href: String,
    color: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.size) {
        cx.push(this.size)
      }
      if (this.href) {
        cx.push('link')
      }
      if (this.color) {
        cx.push(this.color)
      }
      return cx
    }
  }
}
</script>
