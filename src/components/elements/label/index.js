import Label from './Label.vue'
import Labels from './Labels.vue'

export default {
  install(Vue) {
    Vue.component('ui-label', Label)
    Vue.component('ui-labels', Labels)
  }
}
