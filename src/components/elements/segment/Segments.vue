<template lang="html">
  <lazy-tag class="ui segments" :class="[propClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass} from 'semantic/mixins'

export default {
  name: 'ui-segments',
  mixins: [
    LazyTag('div'),
    PropClass('secondary', 'horizontal', 'raised', 'stacked', 'piled', 'disabled',
              'loading', 'inverted')
  ],
  props: {
    attach: [Boolean, String]
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.attach) {
        if (typeof this.attach === 'string') {
          cx.push(this.attach)
        }
        cx.push('attached')
      }
    }
  }
}
</script>
