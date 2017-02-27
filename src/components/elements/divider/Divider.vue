<template lang="html">
  <div class="ui divider" :class="[propClass]">
    <slot></slot>
  </div>
</template>

<script>
import {PropClass} from 'semantic/mixins'

export default {
  name: 'ui-divider',
  mixins: [
    PropClass('horizontal', 'vertical', 'inverted', 'fitted', 'hidden',
              'section', 'clearing')
  ]
}
</script>

<style lang="css">
</style>
