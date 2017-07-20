<template>
  <ui-transition name="fade">
    <div class="ui modals page dimmer" :class="{active}" v-show="active">
      <ui-transition :name="transition">
        <div class="ui active modal" v-if="active">
          <i class="close icon" v-if="closeButton" @click="close"></i>
          <div class="header" v-if="$slots.header">
            <slot name="header"></slot>
          </div>
          <div class="content" v-if="$slots.default">
            <slot></slot>
          </div>
          <div class="actions">
            <slot name="actions">
              <div class="ui positive right button" @click="close">OK</div>
            </slot>
          </div>
        </div>
      </ui-transition>
    </div>
  </ui-transition>
</template>
<script>
export default {
  name: 'ui-modal',
  props: {
    active: Boolean,
    closeButton: Boolean,
    transition: {
      type: String,
      default: 'scale'
    }
  },
  methods: {
    show() {
      this.$emit('update:active', true)
    },
    close() {
      this.$emit('update:active', false)
    }
  }
}
</script>
<style>
.visible.modals, .active.modals {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
} 
.ui.modal {
  top: initial; 
}
</style>
