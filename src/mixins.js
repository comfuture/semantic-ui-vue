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
          try {
            for (let slot of this.$slots[key]) {
              addClass(slot.elm, value)
            }
          } catch (e) {}
        }
      }
    }
  }
}
