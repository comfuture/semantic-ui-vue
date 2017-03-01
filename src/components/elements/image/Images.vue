<template lang="html">
  <lazy-tag class="ui images" :class="[propClass, stylingClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag} from 'semantic/mixins'

export default {
  name: 'ui-images',
  mixins: [
    LazyTag('div')
  ],
  props: {
    size: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.size) {
        cx.push(this.size)
      }
      return cx
    }
  }
}
</script>
