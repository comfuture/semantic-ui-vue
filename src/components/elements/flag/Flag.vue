<template lang="html">
  <i class="flag" :class="name"></i>
</template>

<script>
export default {
  name: 'ui-flag',
  props: {
    name: String
  }
}
</script>
