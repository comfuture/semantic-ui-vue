import Button from './button'
import Container from './container'
import Divider from './divider'
import Flag from './flag'

export default {
  install(Vue) {
    Vue.use(Button)
    Vue.use(Container)
    Vue.use(Divider)
    Vue.use(Flag)
  }
}
