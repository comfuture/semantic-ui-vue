import DefaultItem from './DefaultItem.vue'

export default {
  name: 'ui-item',
  render(h) {
    return h(DefaultItem, this.$vnode.data, this.$slots.default)
  }
}
