<template>
  <div class="ui rating" :class="[propClass, stylingClass]" @mouseout="leave">
    <i class="ui icon" :class="{active: i <= value - 1}"
      @mouseover="hover(i)"
      @click="setValue(i)"
      v-for="(i, item) in items" :key="i"></i>
  </div>
</template>
<script>
import {PropClass} from 'semantic/mixins'
import {addClass, removeClass} from 'semantic/helper'

export default {
  name: 'ui-rating',
  mixins: [PropClass('star', 'heart', 'disabled')],
  props: {
    value: Number,
    max: {
      type: Number,
      default: 5
    },
    size: String,
    readonly: Boolean
  },
  data: function () {
    return {
      toggle: 0
    }
  },
  computed: {
    items() {
      return [...Array(this.max).keys()]
    },
    stylingClass() {
      let cx = []
      this.size && cx.push(this.size)
      return cx
    }
  },
  mounted: function () {
    this.toggle = this.value ? 0 : 1
  },
  methods: {
    setValue(value) {
      if (this.readonly) return
      this.leave()
      if (this.max === 1) return this.toggleValue()
      let siblings = [].slice.call(this.$el.children)
      siblings.forEach((el, i) => {
        removeClass(el, 'active')
      })
      siblings.forEach((el, i) => {
        if (i <= value) {
          addClass(el, 'active')
        }
      })
    },
    toggleValue() {
      let siblings = [].slice.call(this.$el.children)
      if (this.toggle) {
        siblings.forEach((el, i) => {
          addClass(el, 'active')
        })
        this.toggle = 0
      } else {
        siblings.forEach((el, i) => {
          removeClass(el, 'active')
        })
        this.toggle = 1
      }
    },
    hover(value) {
      if (this.readonly) return
      let siblings = [].slice.call(this.$el.children)
      siblings.forEach((el, i) => {
        if (i <= value) {
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
