<template>
  <div id="app">
    <h1>Scoped</h1>
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

<style scoped>
  h1 {
    font-size: 8rem;
  }
</style>
