<template lang="html">
  <lazy-tag class="content" :class="className">
    <div class="header" v-if="!!header">{{header}}</div>
    <slot></slot>
    <slot name="meta"></slot>
    <slot name="description"></slot>
    <slot name="extra"></slot>
  </lazy-tag>
</template>

<script>
import {SlotClass, LazyTag} from 'semantic/mixins'

export default {
  name: 'ui-content',
  mixins: [
    SlotClass({
      description: 'description',
      meta: 'meta',
      extra: 'extra'
    }),
    LazyTag('div')
  ],
  props: {
    header: String,
    visible: Boolean,
    hidden: Boolean
  },
  computed: {
    className() {
      return {
        visible: this.visible,
        hidden: this.hidden
      }
    }
  }
}
</script>
