<template lang="html">
  <lazy-tag class="ui header" :class="[propsClass, stylingClass]">
    <i :class="icon" class="icon" v-if="hasIcon"></i>
    <img class="ui image" :src="image" v-if="hasImage">
    <slot name="image"></slot>
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {PropClass, SlotClass, LazyTag} from 'semantic/mixins'

const SIZES = ['huge', 'large', 'medium', 'small', 'tiny']

export default {
  name: 'ui-header',
  mixins: [
    PropClass('sub', 'disabled', 'dividing', 'block', 'inverted'),
    SlotClass({image: 'ui image'}),
    LazyTag('div')
  ],
  props: {
    size: {
      type: String,
      validator(value) {
        return SIZES.indexOf(value) > -1
      }
    },
    icon: String,
    image: String,
    attached: [Boolean, String],
    float: String,
    align: String,
    color: String
  },
  computed: {
    hasIcon() {
      return !!this.icon
    },
    hasImage() {
      return !!this.image
    },
    stylingClass() {
      let cx = []
      if (this.attached) {
        if (typeof this.attached === 'string') {
          cx.push(`${this.attached} attached`)
        } else {
          cx.push('attached')
        }
      }
      if (this.float) {
        cx.push(`${this.float} floated`)
      }
      if (this.align) {
        if (/^(left|right|center)$/.test(this.align)) {
          cx.push(`${this.align} aligned`)
        } else if (this.align === 'justified') {
          cx.push(this.align)
        }
      }
      if (this.color) {
        cx.push(this.color)
      }
      return cx
    }
  }
}
</script>
