<template lang="html">
  <div class="main ui container">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.main.ui.container {
  margin-left: 16rem !important;
  margin-right: 1rem !important;
  width: auto !important;
  max-width: 960px !important;
}
</style>
