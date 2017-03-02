import Step from './Step.vue'
import Steps from './Steps.vue'

export default {
  install(Vue) {
    Vue.component('ui-step', Step)
    Vue.component('ui-steps', Steps)
  }
}
