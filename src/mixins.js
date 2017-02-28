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
*  - lazyTagName instance variable (including computed one)
*  - defined tag name as props "tag"
*  - originally coded tag name if component provided as
*    form '<... is="custom-component">'
*  - passed parameter to this function
*/
export function LazyTag(defaultTagName) {
  return {
    props: {
      tag: String
    },
    beforeCreate() {
      let component = this
      this.$options.components['lazy-tag'] = {
        name: 'lazy-tag',
        functional: true,
        render(h, context) {
          var tagName = defaultTagName
          try {
            if (typeof component.lazyTagName === 'string') {
              tagName = component.lazyTagName
            } else if (component.$vnode.data.hasOwnProperty('tag')) {
              tagName = component.$vnode.data.tag
            } else if (component.$options.propsData.hasOwnProperty('tag')) {
              tagName = component.$options.propsData.tag
            }
          } catch (e) {
            throw new Error("Can't render lazy-tag")
          }
          return h(tagName, context.data, context.children)
        }
      }
    }
  }
}
