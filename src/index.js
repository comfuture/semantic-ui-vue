import Transition from './components/transition'
import Common from './components/common'
import Elements from './components/elements'
import Views from './components/views'
import Modules from './components/modules'

export default {
  install(Vue) {
    Vue.use(Transition)
    Vue.use(Common)
    Vue.use(Elements)
    Vue.use(Views)
    Vue.use(Modules)
  }
}
