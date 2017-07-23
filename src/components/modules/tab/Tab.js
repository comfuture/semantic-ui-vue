export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      realActiveIndex: this.activeIndex || 0
    }
  },
  methods: {
    setActive(index) {
      this.realActiveIndex = index
      this.$emit('update:activeIndex', index)
    }
  },
  render(h) {
    const makeActivator = index => () => this.setActive(index)
    let tabs = []
    let panes = []
    let index = -1
    for (let child of this.$slots.default) {
      if (!child.tag) continue
      index += 1
      let label = child.data.attrs['title']
      tabs.push(h('a', {
        'class': [{active: index === this.realActiveIndex}, 'item'],
        props: {
          index: index
        },
        on: {
          click: makeActivator(index)
        }
      }, label))
      panes.push(
        h('div', {
          'class': ['ui', 'bottom', 'attached', {active: index === this.realActiveIndex}, 'tab', 'segment'],
          props: {
            index: index
          }
        }, child.componentOptions ? child.componentOptions.children : child.children)
      )
    }
    return h('div', [
      h('div', {'class': 'ui top attached tabular menu'}, [tabs]),
      panes
    ])
  }
}
