<template lang="html">
  <lazy-tag class="ui steps" :class="[propClass, stylingClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass} from 'semantic/mixins'

const NUMERIC = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve'
}
export default {
  name: 'ui-steps',
  mixins: [
    LazyTag('div'),
    PropClass('ordered', 'vertical', 'stackable', 'fluid')
  ],
  props: {
    attach: [Boolean, String],
    cols: [Number, String], // XXX: review this naming
    size: String
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
      if (this.cols) {
        let engName = NUMERIC[String(this.cols)] || String(this.cols)
        cx.push(engName)
      }
      if (this.size) {
        cx.push(this.size)
      }
      return cx
    }
  }
}
</script>
