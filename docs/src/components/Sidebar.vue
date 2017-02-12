<template lang="html">
  <div class="ui inverted vertical left fixed menu">
    <div class="item">
      <strong>Semantic UI Vue</strong>
    </div>
    <div class="item">
      <div class="header">Getting Started</div>
      <div class="menu">
        <router-link exact to="/"><div class="item">Introduction</div></router-link>
        <div class="item" href="/usage">Usage</div>
        <a class="item" href="https://github.com/comfuture/semantic-ui-vue"><i aria-hidden="true" class="github icon"></i>GitHub</a>
        <a class="item" href="https://github.com/comfuture/semantic-ui-vue/blob/master/CHANGELOG.md"><i aria-hidden="true" class="file text outline icon"></i>CHANGELOG</a>
      </div>
    </div>
    <div class="item">
      <div class="header">Elements</div>
      <div class="menu">
        <router-link exact to="/elements/button"><div class="item">Button</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'docs-sidebar'
}
</script>
<style>
  .ui.inverted.vertical.left.fixed.menu .router-link-active .item {
    color: #fff;
  }
</style>
