<template>
  <div id="app">
      <app-health></app-health>
      <app-start></app-start>
      <app-buttons></app-buttons>
      <app-log></app-log>
  </div>
</template>

<script>
import Health from './Health.vue'
import Start from './Start.vue'
import Buttons from './Buttons.vue'
import Log from './Log.vue'


export default {
  components: {
    appHealth: Health,
    appStart: Start,
    appButtons: Buttons,
    appLog: Log
  }
}
</script>

<style>

</style>
