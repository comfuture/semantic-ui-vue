<template lang="html">
  <div class="ui items" :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-items',
  props: {
    divided: Boolean,
    very: Boolean,
    relaxed: Boolean,
    link: Boolean
  },
  computed: {
    className() {
      return {
        divided: this.divided,
        very: this.very,
        relaxed: this.relaxed,
        link: this.link
      }
    }
  }
}
</script>
