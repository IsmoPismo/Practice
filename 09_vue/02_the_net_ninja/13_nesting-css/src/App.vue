<template>
  <div id="app">
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninja from './Ninja.vue'

export default {
  components: {
    ninjas: Ninja
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
