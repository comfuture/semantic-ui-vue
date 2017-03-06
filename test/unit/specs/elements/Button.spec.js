import * as utils from 'test/unit/utils.js'
import Button from 'elements/button/Button.vue'

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

    const cx = ['ui', 'red', 'button']
    vm.$.classes().should.containsAll(cx)
  })

  it('should have icon', () => {
    const vm = newVM({
      icon: 'sign in'
    })

    const cx = ['ui', 'icon', 'button']
    vm.$.classes().should.contains(cx)

    const $i = vm.$.children('i')
    const iconCx = ['icon', 'sign', 'in']
    $i.classes().should.containsAll(iconCx)
  })
})
