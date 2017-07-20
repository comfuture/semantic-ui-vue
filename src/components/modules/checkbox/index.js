import Checkbox from './Checkbox.vue'
import Radio from './Radio.vue'

export default {
  install(Vue) {
    Vue.component('ui-checkbox', Checkbox)
    Vue.component('ui-radio', Radio)
  }
}
