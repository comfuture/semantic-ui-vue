import Label from './Label.vue'
import Labels from './Labels.vue'

const Tag = {
  name: 'ui-tag',
  functional: true,
  render(h, context) {
    context.data['class'] += ' tag'
    return h('ui-label', context.data, context.children)
  }
}

const Ribbon = {
  name: 'ui-ribbon',
  functional: true,
  render(h, context) {
    context.data['class'] += ' ribbon'
    return h('ui-label', context.data, context.children)
  }
}

export default {
  install(Vue) {
    Vue.component('ui-label', Label)
    Vue.component('ui-labels', Labels)
    Vue.component('ui-tag', Tag)
    Vue.component('ui-ribbon', Ribbon)
  }
}
