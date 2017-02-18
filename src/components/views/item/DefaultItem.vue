<template lang="html">
  <div class="item" @click="$emit('click', $event)" :class="className">
    <div class="ui image" v-if="imageProps">
      <img :src="image">
    </div>
    <slot name="image"></slot>
    <slot></slot>
  </div>
</template>

<script>
import {SlotClass} from 'semantic/mixins'

export default {
  mixins: [SlotClass({image: 'ui image'})],
  props: {
    image: String,
    active: Boolean
  },
  computed: {
    imageProps() {
      return !!this.image &&
             !(this.$slots.hasOwnProperty('image') &&
             this.$slots.image.length > 0)
    },
    className() {
      return {
        active: this.active
      }
    }
  }
}
</script>
