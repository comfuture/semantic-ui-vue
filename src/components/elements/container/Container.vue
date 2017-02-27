<template lang="html">
  <div class="ui container" :class="[stylingClass, propClass]">
    <slot></slot>
  </div>
</template>

<script>
import PropClass from 'semantic/mixins'

export default {
  name: 'ui-container',
  mixins: [PropClass('text', 'fluid')],
  props: {
    align: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.align) {
        if (/left|right|center/.test(this.align)) {
          cx.push(`${this.align} aligned`)
        } else if (this.align === 'justified') {
          cs.push(this.align)
        }
      }
    }
  }
}
</script>
