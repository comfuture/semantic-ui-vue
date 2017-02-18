<template lang="html">
  <div class="ui buttons" :class="[stylingClass, propClass]">
    <slot></slot>
  </div>
</template>

<script>
import {PropClass} from 'semantic/mixins'

const NUMERICS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
const COLORS = []
const SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

export default {
  name: 'ui-buttons',
  mixins: [PropClass('icon', 'vertical', 'labeled', 'basic')],
  props: {
    color: String,
    size: String,
    colum: String,
    attached: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.color) {
        cx.push(this.color)
      }
      if (this.size) {
        cx.push(this.size)
      }
      if (this.attached) {
        cx.push(`${this.attached} attached`)
      }
      return cx
    }
  }
}
</script>
