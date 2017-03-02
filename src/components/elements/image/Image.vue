<template lang="html">
  <img class="ui image" :class="[stylingClass]" :src="src"
    v-if="lazyTagName === 'img'">
  <lazy-tag class="ui image" :class="[stylingClass]" :href="href" v-else>
    <slot>
      <img :src="src">
    </slot>
  </lazy-tag>
</template>

<script>
import {PropClass, LazyTag} from 'semantic/mixins'

// usage:
/*
  <ui-image src="foo.jpg"></ui-image>

  <img is="ui-image" src="foo.jpg">

  <ui-image tag="div" size="tiny">
    <img src="...">
  </ui-image>

  <div is="ui-image" src="foo.jpg"></div>

  <div is="ui-image">
    <img src="...">
  </div>

  <svg is="ui-image">
    <path ...></path>
  </svg>
*/

export default {
  name: 'ui-image',
  mixins: [
    LazyTag('img'),
    PropClass('hidden', 'disabled', 'avatar', 'bordered', 'fluid', 'rounded',
              'circular', 'centered', 'spaced', 'floated')
  ],
  props: {
    src: String,
    size: String,
    href: String,
    align: String
  },
  computed: {
    stylingClass() {
      let cx = []
      if (this.size) {
        cx.push(this.size)
      }
      if (this.align) {
        cx.push(`${this.align} aligned`)
      }
      return cx
    }
  },
  watch: {
    href(value) {
      if (typeof value === 'string') {
        this.lazyTagName = 'a'
      }
    }
  }
}
</script>
