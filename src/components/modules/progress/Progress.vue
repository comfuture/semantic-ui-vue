<template>
  <div class="ui progress" :class="[propClass, stylingClass]">
    <div class="bar" :style="{width: `${percent}%`}">
      <div class="progress" v-if="showProgress">{{percent}}%</div>
    </div>
    <div class="label" v-if="label">{{interpolatedLabel}}</div>
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
      validator: value => SIZES.indexOf(value) > -1
    },
    color: {
      type: String,
      validator: value => COLORS.indexOf(value) > -1
    },
    attach: {
      type: String,
      validator: value => ATTACH.indexOf(value) > -1
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
      return Math.floor(Math.min(this.value, this.max) / this.max * 100)
    },
    stylingClass() {
      let cx = []
      this.color && cx.push(this.color)
      this.size && cx.push(this.size)
      this.attach && cx.push(`${this.attach} attached`)
      return cx
    },
    interpolatedLabel() {
      if (this.label) {
        return this.label.replace(/{value}/, this.value).replace(/{max}/, this.max)
      }
      return ''
    }
  }
}
</script>
