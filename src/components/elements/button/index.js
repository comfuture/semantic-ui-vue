import Button from './Button.vue'
import Buttons from './Buttons.vue'

export default {
  install(Vue) {
    Vue.component('ui-button', Button)
    Vue.component('ui-buttons', Buttons)
  }
}
