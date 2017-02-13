import UiButton from './UiButton.vue'
import UiButtonContent from './UiButtonContent.vue'
import UiButtonGroup from './UiButtonGroup.vue'
import UiButtonOr from './UiButtonOr.vue'

export default {
  install(Vue) {
    Vue.component('ui-button', UiButton)
    Vue.component('ui-button-group', UiButtonGroup)
    Vue.component('ui-button-content', UiButtonContent)
    Vue.component('ui-button-or', UiButtonOr)
  }
}
