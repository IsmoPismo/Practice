<template>
<div>
  <app-data></app-data>
  <hr>
  <app-event></app-event>
  <hr>
  <app-style></app-style>

</div>
</template>

<script>
import Data from './Data.vue'
import Event from './Events.vue'
import Style from './Style.vue'

export default {
  components: {
    appData: Data,
    appEvent: Event,
    appStyle: Style
  }
}
</script>

<style>
div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
