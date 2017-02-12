<template>
  <article>
    <docs-sidebar></docs-sidebar>
    <transition name="page-nav" mode="out-in">
      <router-view></router-view>
    </transition>
  </article>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style media="screen">
.page-nav-enter-active, .page-nav-leave-active {
  transition: all .35s;
}

.page-nav-enter {
  transform: translateX(-20px);
  opacity: 0;
}

.page-nav-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
