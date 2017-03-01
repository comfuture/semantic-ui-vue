<template lang="html">
  <lazy-tag class="ui label" :class="[stylingClass]" :href="href">
    <img :src="image" v-if="image">
    <i class="icon" :class="icon" v-if="icon"></i>
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass} from 'semantic/mixins'

// TODO: provide ui-tag, ui-ribbon separately

export default {
  name: 'ui-label',
  mixins: [
    LazyTag('div'),
    PropClass('basic', 'left', 'right', 'corner' ,'tag', 'ribbon', 'horizontal',
              'floating', 'circular', 'empty', )
  ],
  props: {
    image: String,
    color: String,
    pointing: [Boolean, String],
    attach: String,
    icon: String,
    href: String,
    size: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.image) {
        cx.push('image')
      }
      if (this.color) {
        cx.push(this.color)
      }
      if (this.pointing) {
        var direction = ''
        if (typeof this.pointing !== 'boolean') {
          direction = this.pointing
        }
        cx.push(`${direction} pointing`)
      }
      if (this.attach) {
        cx.push(`${this.attach} attached`)
      }
      // XXX
      if (this.href) {
        this.lazyTagName = 'a'
      }
      if (this.size) {
        cx.push(this.size)
      }
      return cx
    }
  }
}
</script>
