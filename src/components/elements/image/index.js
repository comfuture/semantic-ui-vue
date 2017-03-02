import Image from './Image.vue'
import Images from './Images.vue'

export default {
  install(Vue) {
    Vue.component('ui-image', Image)
    Vue.component('ui-images', Images)
  }
}
