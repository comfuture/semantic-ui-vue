<template>
  <div class="ui progress" :class="[propClass, stylingClass]">
    <div class="bar" :style="{width: `${percent}%`}">
      <div class="progress" v-if="showProgress">{{percent}}%</div>
    </div>
    <div class="label" v-if="label">{{label}}</div>
  </div>
</template>
<script>
import {COLORS, SIZES, ATTACH} from 'semantic/const'
import {PropClass} from 'semantic/mixins'

export default {
  name: 'ui-progress',
  mixins: [
    PropClass('indicating', 'active', 'success', 'warning', 'error', 'disabled', 'inverted')
  ],
  props: {
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      validate: value => SIZES.indexOf(value) > -1
    },
    color: {
      type: String,
      validate: value => COLORS.indexOf(value) > -1
    },
    attach: {
      type: String,
      validate: value => ATTACH.indexOf(value) > -1
    },
    label: String,
    showProgress: Boolean
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    percent() {
      return Math.floor(this.value / this.max * 100)
    },
    stylingClass() {
      let cx = []
      this.color && cx.push(this.color)
      this.size && cx.push(this.size)
      this.attach && cx.push(`${this.attach} attached`)
      return cx
    }
  }
}
</script>
