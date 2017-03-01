import {addClass} from './helper'

/**
* predefine class names for slot
*/
export function SlotClass(mapping) {
  return {
    mounted() {
      var value
      for (let key of Object.keys(mapping)) {
        value = mapping[key]
        if (this.$slots.hasOwnProperty(key)) {
          for (let slot of this.$slots[key]) {
            try {
              addClass(slot.elm, value)
            } catch (e) {}
          }
        }
      }
    }
  }
}

/**
* define boolean property and make that as className
*/
export function PropClass(...props) {
  let properties = {}
  for (let prop of props) {
    properties[prop] = Boolean
  }

  return {
    props: properties,
    computed: {
      propClass() {
        let ret = {}
        for (let prop of props) {
          ret[prop] = properties.hasOwnProperty(prop) && !!this[prop]
        }
        return ret
      }
    }
  }
}

/**
* It define a asyncronous component named 'lazy-tag' that
* renders a html tag by conditions below:
*  - lazyTagName computed variable
*  - defined tag name as props "tag"
*  - originally coded tag name if component provided as
*    form '<... is="custom-component">'
*  - passed parameter to this function
*/
export function LazyTag(defaultTagName) {
  let makeTagNameGetter = (ctx) => {
    return function() {
      var tagName = defaultTagName
      try {
        if (typeof ctx._tag === 'string') {
          tagName = ctx._tag
        } else if (ctx.$vnode.data.hasOwnProperty('tag')) {
          tagName = ctx.$vnode.data.tag
        } else if (ctx.$options.propsData.hasOwnProperty('tag')) {
          tagName = ctx.$options.propsData.tag
        }
      } catch (e) {
        // pass
      }
      return tagName
    }
  }

  return {
    props: {
      tag: String
    },
    beforeCreate() {
      let getTagName = makeTagNameGetter(this)
      this.$options._tag = null
      this.$options.components['lazy-tag'] = {
        name: 'lazy-tag',
        functional: true,
        render(h, context) {
          return h(getTagName(), context.data, context.children)
        }
      }
    },
    computed: {
      lazyTagName: {
        get() {
          return makeTagNameGetter(this)()
        },
        set(value) {
          this._tag = value
          this.$forceUpdate()
        }
      }
    }
  }
}
