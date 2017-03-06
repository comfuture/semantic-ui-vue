import {Assertion} from 'should'

Assertion.alias('containDeep', 'contains')

Assertion.add('containsAll', function(cx) {
  this.obj.should.containDeep(cx).which.length(cx.length)
})
