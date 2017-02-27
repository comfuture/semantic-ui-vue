import Items from './Items.vue'
import Item from './Item'

export default {
  install(Vue) {
    Vue.component('ui-item', Vue.extend(Item))
    Vue.component('ui-items', Items)
  }
}
