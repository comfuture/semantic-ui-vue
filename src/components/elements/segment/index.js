import Segment from './Segment.vue'
import Segments from './Segments.vue'

export default {
  install(Vue) {
    Vue.component('ui-segment', Segment)
    Vue.component('ui-segments', Segments)
  }
}
