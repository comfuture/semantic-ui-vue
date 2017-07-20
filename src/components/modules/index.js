import Dimmer from './dimmer'
import Modal from './modal'
import Checkbox from './checkbox'

export default {
  install(Vue) {
    Vue.use(Dimmer)
    Vue.use(Modal)
    Vue.use(Checkbox)
  }
}
