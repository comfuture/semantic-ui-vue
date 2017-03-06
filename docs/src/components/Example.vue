<template lang="html">
  <ui-segments>
    <ui-segment>
      <a is="ui-label" :class="{blue: showSource}" corner="top right" @click.native="toggleSource" v-if="hasSource">
        <ui-icon name="code"></ui-icon>
      </a>
      <slot></slot>
    </ui-segment>
    <transition name="slide">
      <ui-segment v-show="showSource">
        <ui-label attach="top left">vue component</ui-label>
        <slot name="code"></slot>
      </ui-segment>
    </transition>
  </ui-segments>
</template>

<style lang="css">
  .slide-enter-active {
    transition: all .2s ease;
  }
  .slide-leave-active {
    transition: all .2s ease;
  }
  .slide-enter, .slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>

<script>
export default {
  name: 'docs-example',
  data() {
    return {
      showSource: false
    }
  },
  computed: {
    hasSource() {
      return (this.$slots.hasOwnProperty('code') && this.$slots.code.length > 0)
    }
  },
  methods: {
    toggleSource() {
      this.showSource = !this.showSource
    }
  }
}
</script>
