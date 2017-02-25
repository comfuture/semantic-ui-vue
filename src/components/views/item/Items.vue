<template lang="html">
  <div class="ui items" :class="[propClass]">
    <slot></slot>
  </div>
</template>

<script>
import {PropClass} from 'semantic/mixins'

export default {
  name: 'ui-items',
  mixins: [PropClass('divided', 'very', 'relaxed', 'link')]
}
</script>
