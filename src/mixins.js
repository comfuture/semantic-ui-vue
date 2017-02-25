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
  let propDict = {}
  for (let prop of props) {
    propDict[prop] = Boolean
  }

  return {
    props: propDict,
    computed: {
      propClass() {
        let ret = {}
        for (let prop of props) {
          ret[prop] = this.hasOwnProperty(prop) && !!this[prop]
        }
        console.log(ret)
        return ret
      }
    }
  }
}
