<template lang="html">
  <lazy-tag class="content" :class="[propClass, stylingClass]">
    <div class="header" v-if="!!header">{{header}}</div>
    <slot></slot>
    <slot name="meta"></slot>
    <slot name="description"></slot>
    <slot name="extra"></slot>
  </lazy-tag>
</template>

<script>
import {SlotClass, LazyTag, PropClass} from 'semantic/mixins'

export default {
  name: 'ui-content',
  mixins: [
    SlotClass({
      description: 'description',
      meta: 'meta',
      extra: 'extra'
    }),
    LazyTag('div'),
    PropClass('hidden', 'visible')
  ],
  props: {
    header: String,
    align: String,
    float: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.align) {
        cx.push(`${this.align} aligned`)
      }
      if (this.float) {
        cx.push(`${this.float} floated`)
      }
      return cx
    }
  }
}
</script>
