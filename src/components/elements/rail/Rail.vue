<template lang="html">
  <div class="ui rail" :class="[propClass, stylingClass]">
    <slot></slot>
  </div>
</template>

<script>
import {PropClass} from 'semantic/mixins'

export default {
  name: 'ui-rail',
  mixins: [
    PropClass('left', 'right', 'internal', 'dividing', 'attached', 'close', 'very')
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
