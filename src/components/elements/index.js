import Button from './button'
import Container from './container'
import Divider from './divider'
import Flag from './flag'
import Header from './header'
import Icon from './icon'
import Image from './image'
import Input from './input'
import Label from './label'
import List from './list'
import Loader from './loader'
import Rail from './rail'
import Reveal from './reveal'
import Segment from './segment'

export default {
  install(Vue) {
    Vue.use(Button)
    Vue.use(Container)
    Vue.use(Divider)
    Vue.use(Flag)
    Vue.use(Header)
    Vue.use(Icon)
    Vue.use(Image)
    Vue.use(Input)
    Vue.use(Label)
    Vue.use(List)
    Vue.use(Loader)
    Vue.use(Rail)
    Vue.use(Reveal)
    Vue.use(Segment)
  }
}
