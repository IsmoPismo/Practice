<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view class="container mt-4"></router-view>
    </transition>
  </div>
</template>

<script>
import appHeader from './Header.vue'
export default {
  components: {
    appHeader
  }
}
</script>

<style>
  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    transition: all 490ms ease;
  }

  .slide-leave-active {
    opacity: 0;
    transition: all 235ms ease;
  }
</style>
