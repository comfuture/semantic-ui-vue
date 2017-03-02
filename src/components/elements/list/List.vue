<template lang="html">
  <lazy-tag class="ui list" :class="[propClass, stylingClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass} from 'semantic/mixins'

export default {
  name: 'ui-list',
  mixins: [
    LazyTag('div'),
    PropClass('relaxed', 'divided', 'bulleted', 'horizontal', 'ordered', 'link',
              'inverted', 'selection', 'animated', 'very', 'celled')
  ],
  props: {
    align: String,
    size: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.align) {
        cx.push(`${this.align} aligned`)
      }
      if (this.size) {
        cx.push(this.size)
      }
      return cx
    }
  }
}
</script>
