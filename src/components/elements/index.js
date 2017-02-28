import Button from './button'
import Container from './container'
import Divider from './divider'
import Flag from './flag'
import Header from './header'
import Icon from './icon'

export default {
  install(Vue) {
    Vue.use(Button)
    Vue.use(Container)
    Vue.use(Divider)
    Vue.use(Flag)
    Vue.use(Header)
    Vue.use(Icon)
  }
}
