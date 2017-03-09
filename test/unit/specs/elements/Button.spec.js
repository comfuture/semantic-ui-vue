import * as utils from 'test/unit/utils.js'
import Button from 'elements/button/Button.vue'
import Container from 'elements/container/Container.vue'

describe('Button.vue', () => {
  const newVM = utils.newVM(Button)
  it('default className', () => {
    const vm = newVM()

    const cx = ['ui', 'button']
    vm.$.classes().should.contains(cx)
  })

  it('should have red', () => {
    const vm = newVM({
      color: 'red'
    })

    const cx = ['red']
    vm.stylingClass.should.containsAll(cx)
  })

  it('should have icon', (done) => {
    const vm = newVM({
      // icon: 'sign in'
    })

    const cx = ['icon']
    vm.$.classes().should.not.contains(cx)

    vm.icon = 'sign in'

    vm.$nextTick(() => {
      vm.$.classes().should.contains(cx)

      const $i = vm.$.children('i')
      const iconCx = ['icon', 'sign', 'in']
      $i.classes().should.containsAll(iconCx)

      done()
    })
  })

  it('component test', (done) => {
    const vm = newVM({
      color: ''
    }, `<ui-container><ui-button :color="color">btn</ui-button></ui-container>`,
    [Container])

    const uiButton = vm.$.children('button')

    uiButton.classes().should.not.contains(['red'])
    vm.color = 'red'

    vm.$nextTick(() => {
      uiButton.classes().should.contains(['red'])
      done()
    })
  })
})
