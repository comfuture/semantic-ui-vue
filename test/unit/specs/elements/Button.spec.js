import * as utils from 'test/unit/utils.js'
import Button from 'elements/button/Button.vue'

describe('Button.vue', () => {
  const newVM = utils.newVM(Button)
  it('default className', () => {
    const vm = newVM()
    vm.$.classes().should.be.eql(['ui', 'button'])
  })

  it('should have red', () => {
    const vm = newVM({
      color: 'red'
    })
    vm.$.classes().should.be.eql(['ui', 'button', 'red'])
  })

  it('should have icon', () => {
    const vm = newVM({
      icon: 'sign in'
    })
    vm.$.classes().should.be.eql(['ui', 'button', 'icon'])

    const $i = vm.$.children('i')
    $i.classes().should.be.eql(['icon', 'sign', 'in'])
  })
})
