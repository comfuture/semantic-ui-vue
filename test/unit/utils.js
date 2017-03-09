import Vue from 'vue'

// install components
import semantic from 'semantic'
Vue.use(semantic)

/**
 * Creator Vue component
 *
 * 컴포넌트 생성자(Ctor)와 DOM Element(el)를 가지는 클로저를 리턴한다.
 *
 * 리턴받은 클로저는 propsData를 파라메터로 받아서 뷰 컴포넌트를 생성한다.
 * template을 파라메터로 넘길 경우 Vue로 생성해서 넘긴다.
 *
 * @param {Object} vue - Vue component
 * @returns {Function} - 컴포넌트 생성자(Ctor)와 DOM Element(el)를 가지는 클로저
 *                     - 파라메터로 propsData, template를 받는다.
 */
export function newVM(vue) {
  const Ctor = Vue.extend(vue)
  const el = document.createElement('div')

  return (propsData = {}, template = '') => {
    let config = {
      el, template
    }

    if (template) {
      config.data = () => propsData
    } else {
      config.propsData = propsData
    }

    const vm = (template)
      ? new Vue(config)
      : new Ctor(config)

    vm.$ = $(vm.$el)
    return vm.$mount()
  }
}

/**
 * Helper Function
 *
 * return a wrapper that have useful functions
 * @param {HTMLElement, NodeList, CSSSelector} el
 */
function $(el) {
  if (typeof el === 'string') { // selector
    el = document.querySelectorAll(el)
  }
  // XXX firstElement
  var firstElement
  if (el.length > 0) {
    firstElement = el[0]
  } else {
    firstElement = el
  }
  return {
    classes() {
      return firstElement.className.split(' ')
    },
    children(selector) {
      return $(firstElement.querySelectorAll(selector))
    }
  }
}
