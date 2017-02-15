<template lang="html">
  <div class="item" @click="onClick" :class="className">
    <div class="ui small image" v-if="!!image">
      <img :src="image">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    active: Boolean
  },
  computed: {
    className() {
      return {
        active: this.active
      }
    }
  },
  methods: {
    onClick(event) {
      // this.active = true
      this.$emit('click', event)
    }
  }
}
</script>
