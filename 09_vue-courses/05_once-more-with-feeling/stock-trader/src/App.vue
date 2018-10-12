<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-sm-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
export default {
  components : {
    appHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
