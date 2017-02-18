import Common from './components/common'
import Elements from './components/elements'
import Views from './components/views'

export default {
  install(Vue) {
    Vue.use(Common)
    Vue.use(Elements)
    Vue.use(Views)
  }
}
