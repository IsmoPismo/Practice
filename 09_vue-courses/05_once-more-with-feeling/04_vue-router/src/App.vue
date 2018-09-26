<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="container mt-4"></router-view>
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
</style>
