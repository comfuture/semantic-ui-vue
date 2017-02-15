<template lang="html">
  <div class="content" :class="className">
    <div class="header" v-if="!!header">{{header}}</div>
    <slot></slot>
    <slot name="meta" v-if="!hasDefaultSlot"></slot>
    <slot name="description" v-if="!hasDefaultSlot"></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-content',
  props: {
    header: String,
    visible: Boolean,
    hidden: Boolean
  },
  computed: {
    hasDefaultSlot() {
      return this.$slots.hasOwnProperty('default') &&
             this.$slots.default.length > 0
    },
    className() {
      return {
        visible: this.visible,
        hidden: this.hidden
      }
    }
  }
}
</script>
