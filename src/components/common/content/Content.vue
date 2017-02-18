<template lang="html">
  <div class="content" :class="className">
    <div class="header" v-if="!!header">{{header}}</div>
    <slot></slot>
    <slot name="meta"></slot>
    <slot name="description"></slot>
    <slot name="extra"></slot>
  </div>
</template>

<script>
import {SlotClass} from 'semantic/mixins'

export default {
  name: 'ui-content',
  mixins: [
    SlotClass({
      description: 'description',
      meta: 'meta',
      extra: 'extra'
    })
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
