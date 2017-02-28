<template lang="html">
  <lazy-tag class="ui divider" :class="[propClass]">
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {PropClass, LazyTag} from 'semantic/mixins'

export default {
  name: 'ui-divider',
  mixins: [
    PropClass('horizontal', 'vertical', 'inverted', 'fitted', 'hidden',
              'section', 'clearing'),
    LazyTag('div')
  ]
}
</script>
