import Vue from 'vue'
import $ from 'jquery'

/**
 * Creator Vue component
 *
 * 컴포넌트 생성자(Ctor)와 DOM Element(el)를 가지는 클로저를 리턴한다.
 *
 * 리턴받은 클로저는 propsData를 파라메터로 받아서 뷰 컴포넌트를 생성한다.
 * $ 함수는 query를 파라메터로 받아서 $(vm.$el).find(query)의 결과를 리턴한다.
 *
 * @param {Object} vue - Vue component
 * @returns {Function} - 컴포넌트 생성자(Ctor)와 DOM Element(el)를 가지는 클로저
 *                     - 파라메터로 propsData를 받는다.
 */
export function newVM(vue) {
  const Ctor = Vue.extend(vue)
  const el = document.createElement('div')
  return (propsData = {}) => {
    const vm = new Ctor({el, propsData})
    vm.$ = $(vm.$el)
    return vm.$mount()
  }
}

/**
 * jQuery Function
 *
 * return array of classes
 */
$.fn.classes = function() {
  return this.attr('class').split(' ')
}
