<template lang="html">
  <main class="page">
    <div class="ui container basic segment">
      <slot name="header"></slot>
    </div>
    <ui-divider></ui-divider>
    <div class="ui container">
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="css">
main.page {
  width: auto !important;
  max-width: 960px !important;
  margin-left: 15rem;
  margin-top: 1rem;
}
</style>
