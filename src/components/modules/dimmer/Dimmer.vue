<template>
    <ui-transition name="fade">
      <div class="ui active dimmer" :class="[propClass]" v-if="active">
        <div class="content" v-if="$slots.default">
          <div class="center">
            <slot></slot>
          </div>
        </div>
        <div class="ui loader" :class="{text: loadingText}" v-if="loading">{{loadingText}}</div>
      </div>
    </ui-transition>
</template>
<script>
import {PropClass} from 'semantic/mixins'

export default {
  name: 'ui-dimmer',
  mixins: [
    PropClass('page', 'disabled', 'inverted')
  ],
  props: {
    loading: [Boolean, String],
    active: Boolean
  },
  computed: {
    loadingText() {
      if (typeof this.loading === 'string') {
        return this.loading
      }
      return ''
    }
  }
}
</script>
