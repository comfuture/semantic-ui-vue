<template lang="html">
  <lazy-tag class="ui step" :class="[propClass]">
    <i class="icon" :class="icon" v-if="icon"></i>
    <slot name="title"></slot>
    <slot name="description"></slot>
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass, SlotClass} from 'semantic/mixins'

export default {
  name: 'ui-step',
  mixins: [
    LazyTag('div'),
    PropClass('completed', 'active', 'disabled'),
    SlotClass({
      title: 'title',
      description: 'description'
    })
  ],
  props: {
    icon: String,
    href: String
  },
  watch: {
    href(value) {
      if (value) {
        this.lazyTagName = 'a'
      }
    }
  }
}
</script>
