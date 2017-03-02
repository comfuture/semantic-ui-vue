<template lang="html">
  <lazy-tag class="ui button" :class="[autoClass, stylingClass, propClass]" @click="$emit('click', $event)">
    <i class="icon" :class="iconName" v-if="hasIcon"></i>
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {PropClass, LazyTag} from 'semantic/mixins'

export default {
  name: 'ui-button',
  mixins: [
    PropClass('primary', 'secondary', 'animated', 'labeled', 'basic', 'inverted',
              'active', 'disabled', 'loading', 'compact', 'fluid', 'circular'),
    LazyTag('button')
  ],
  props: {
    icon: String,
    color: String,
    size: String,
    floated: String,
    attached: String,
    social: String
  },
  computed: {
    autoClass() {
      return {
        icon: this.hasIcon
      }
    },
    hasIcon() {
      return (!!this.icon || !!this.social)
    },
    iconName() {
      return this.icon || this.social
    },
    stylingClass() {
      let cx = []
      if (this.color || this.social) {
        cx.push(this.color || this.social)
      }
      if (this.size) {
        cx.push(this.size)
      }
      if (this.floated) {
        cx.push(`${this.floated} floated`)
      }
      if (this.attached) {
        // XXX: tag name must not be 'button', this effects before dom rendered
        this.lazyTagName = 'a'
        cx.push(`${this.attached} attached`)
      }
      return cx
    }
  }
}
</script>
