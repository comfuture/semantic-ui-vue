<template lang="html">
  <lazy-tag class="item" @click="$emit('click', $event)"
    :class="[propClass, stylingClass]">
    <i class="icon" :class="icon" v-if="icon"></i>
    <div class="ui image" v-if="imageProps">
      <img :src="image">
    </div>
    <slot name="image"></slot>
    <slot name="header"></slot>
    <slot name="description"></slot>
    <slot></slot>
  </lazy-tag>
</template>

<script>
import {LazyTag, PropClass, SlotClass} from 'semantic/mixins'

export default {
  mixins: [
    LazyTag('div'),
    PropClass('active'),
    SlotClass({
      image: 'ui image',
      header: 'header',
      description: 'description'
    })
  ],
  props: {
    image: String,
    icon: String,
    value: [String, Object]
  },
  computed: {
    imageProps() {
      return !!this.image &&
             !(this.$slots.hasOwnProperty('image') &&
             this.$slots.image.length > 0)
    },
    stylingClass() {
      let cx = []
      return cx
    }
  }
}
</script>
