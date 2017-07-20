import Dimmer from './dimmer'
import Modal from './modal'
import Checkbox from './checkbox'
import Accordion from './accordion'

export default {
  install(Vue) {
    Vue.use(Dimmer)
    Vue.use(Modal)
    Vue.use(Checkbox)
    Vue.use(Accordion)
  }
}
