<template lang="html">
  <i class="icons" :class="[name, stylingClass]">>
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'ui-icons',
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
