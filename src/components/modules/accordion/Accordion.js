import {PropClass} from 'semantic/mixins'

const AccordionHeader = {
  name: 'ui-accordion-header',
  props: {
    index: {
      type: Number,
      required: true
    },
    active: Boolean
  },
  render(h) {
    return h('div', {
      'class': [{active: this.active}, 'title']
    }, this.$slots.default)
  }
}

const AccordionContent = {
  name: 'ui-accordion-content',
  props: {
    index: {
      type: Number,
      required: true
    },
    active: Boolean
  },
  render(h) {
    return h('ui-transition', {props: {name: 'slide down'}}, [
      this.active && h('div', {'class': [{active: this.active}, 'content']}, this.$slots.default)
    ])
  }
}

export default {
  name: 'ui-accordion',
  mixins: [
    PropClass('styled', 'fluid', 'inverted')
  ],
  components: {
    'ui-accordion-header': AccordionHeader,
    'ui-accordion-content': AccordionContent
  },
  props: {
    activeIndex: {
      type: [Number, Array],
      default: 0
    },
    exclusive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeIndice: []
    }
  },
  created() {
    if (typeof this.activeIndex === 'number') {
      this.activeIndice.push(this.activeIndex)
    } else if (this.exclusive) {
      this.activeIndice.push(this.activeIndex[0])
    } else {
      [].push.apply(this.activeIndice, this.activeIndex)
    }
  },
  methods: {
    isActive(index) {
      return this.activeIndice.indexOf(index) > -1
    },
    setActive(index) {
      if (this.exclusive) {
        this.activeIndice.splice(0, this.activeIndice.length)
        this.activeIndice.push(index)
      } else {
        if (this.activeIndice.indexOf(index) > -1) { // off
          for (var i = this.activeIndice.length - 1; i >= 0; i--) {
            if (this.activeIndice[i] === index) {
              this.activeIndice.splice(i, 1)
            }
          }
        } else {    // on
          this.activeIndice.push(index)
        }
      }

      this.$emit('update:activeIndex', this.activeIndice)
    }
  },
  render(h) {
    const makeActivator = index => () => this.setActive(index)

    let headerIndex = -1
    let paneIndex = -1

    return h('div', {
      'class': ['ui', 'accordion', this.propClass]
    }, this.$slots.default.map((child, i) => {
      if (child.tag && child.data) {
        // console.log(child)
        if (/title/.test(child.data.staticClass)) {
          headerIndex += 1
        //   if (/active/.test(child.data.staticClass)) {
        //     this.setActive(headerIndex)
        //   }
          return h('ui-accordion-header', {
            props: {
              index: headerIndex,
              active: this.isActive(headerIndex)
            },
            nativeOn: {
              click: makeActivator(headerIndex)
            }
          }, child.children)
        } else if (/content/.test(child.data.staticClass)) {
          paneIndex += 1
          return h('ui-accordion-content', {
            props: {
              index: paneIndex,
              active: this.isActive(paneIndex)
            }
          }, child.children)
        }
      }
    }))
  }
}
