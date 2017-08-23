<template>
  <div class="ui rating" :class="[propClass, stylingClass]" @mouseout="leave">
    <i class="ui icon" :class="{active: value <= rating}"
      @mouseover="hover(value)"
      @click="setValue(value)"
      v-for="value in items" :key="value"></i>
  </div>
</template>
<script>
import {PropClass} from 'semantic/mixins'
import {addClass, removeClass} from 'semantic/helper'

export default {
  name: 'ui-rating',
  mixins: [PropClass('star', 'heart', 'disabled')],
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    size: String,
    readonly: Boolean
  },
  data() {
    return {
      rating: this.value
    }
  },
  computed: {
    items() {
      return Array(this.max).fill().map((_, i) => i + 1)
    },
    stylingClass() {
      let cx = []
      this.size && cx.push(this.size)
      return cx
    }
  },
  methods: {
    setValue(value) {
      if (this.readonly) return
      this.leave()
      this.rating = value
      this.$emit('input', value)
    },
    hover(value) {
      if (this.readonly) return
      let siblings = [].slice.call(this.$el.children)
      siblings.forEach((el, i) => {
        if (i < value) {
          addClass(el, 'selected')
        } else {
          removeClass(el, 'selected')
        }
      })
    },
    leave() {
      let siblings = [].slice.call(this.$el.children)
      siblings.forEach((el, i) => removeClass(el, 'selected'))
    }
  }
}
</script>
