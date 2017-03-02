import Icon from './Icon.vue'
import Icons from './Icons.vue'

export default {
  install(Vue) {
    Vue.component('ui-icon', Icon)
    Vue.component('ui-icons', Icons)
  }
}
