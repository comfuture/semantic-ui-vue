<template lang="html">
  <lazy-tag class="ui input" :class="[propClass, stylingClass]">
    <slot name="label">
      <div class="ui label">{{label}}</div>
    </slot>
    <slot>
      <input type="text" :name="name" :placeholder="placeholder">
    </slot>
    <slot name="icon">
      <i class="icon" :class="icon" v-if="icon"></i>
    </slot>
    <slot name="rightLabel">
      <div class="ui label">{{label}}</div>
    </slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass, SlotClass} from 'semantic/mixins'

// TODO: implement action input

export default {
  name: 'ui-input',
  mixins: [
    LazyTag('div'),
    PropClass('focus', 'loading', 'disabled', 'error', 'left', 'right', 'corner',
              'transparent', 'inverted', 'fluid'),
    SlotClass({
      icon: 'icon',
      label: 'label'
    })
  ],
  props: {
    name: String,
    placeholder: String,
    icon: String,
    label: String,
    size: String
  },
  mounted() {
    if (this.focus) {
      this.$el.focus()
    }
  },
  computed: {
    hasIcon() {
      return (!!this.icon ||
             (this.$slots.icon && this.$slots.icon.length > 0))
    },
    hasLabel() {
      return (!!this.label ||
             (this.$slot.label || this.$slots.rightLabel))
    },
    stylingClass() {
      let cx = []
      if (this.hasIcon) {
        cx.push('icon')
      }
      if (this.hasLabel) {
        cx.push('labeled')
      }
      if (this.$slots.rightLabel) {
        cx.push('right')
      }
      if (this.size) {
        cx.push(this.size)
      }
    }
  }
}
</script>
