const Transition = {
  name: 'ui-transition',
  functional: true,
  props: {
    name: String
  },
  render(h, {props, data, children}) {
    return h('transition', {
      ...data,
      props: {
        'enter-active-class': `visible transition animation ${props.name} in`,
        'leave-active-class': `visible transition animation ${props.name} out`
      }
    }, children)
  }
}

export default {
  install(Vue) {
    Vue.component('ui-transition', Transition)
  }
}
