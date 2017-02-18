import DefaultItem from './DefaultItem.vue'

export default {
  name: 'ui-item',
  render(h) {
    // TODO: return different component by parent component
    // ex)
    // if (this.$parent.$option._componentTag === 'ui-menu') {
    //   return h(MenuItem, this.$vnode.data, this.$slots.default)
    // }
    return h(DefaultItem, this.$vnode.data, this.$slots.default)
  }
}
