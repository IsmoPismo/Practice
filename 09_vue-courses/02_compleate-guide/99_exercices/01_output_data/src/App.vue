<template>
  <div id="app">
    <app-nav></app-nav>
    <app-backgroud></app-backgroud>
  </div>
</template>

<script>
import Background from './components/Background.vue'
import Nav from './components/Nav.vue'

export default {
  components: {
    'app-backgroud': Background,
    'app-nav': Nav
  }
}
</script>
