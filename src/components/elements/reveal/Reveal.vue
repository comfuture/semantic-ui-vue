<template lang="html">
  <lazy-tag class="ui reveal" :class="[propClass, stylingClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass} from 'semantic/mixins'

export default {
  name: 'ui-reveal',
  mixins: [
    LazyTag('div'),
    PropClass('active', 'instant', 'disabled')
  ],
  props: {
    transition: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.transition) {
        cx.push(this.transition)
      }
      return cx
    }
  }
}
</script>
