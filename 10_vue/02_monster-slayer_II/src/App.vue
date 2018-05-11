<template>
  <div id="app">
      <app-health></app-health>
      <component :is="!gameIsRunning ? 'appStart' : 'appButtons'" :startFunc="startNewGame"></component>
      <app-log></app-log>
  </div>
</template>

<script>
import Health from './Health.vue'
import Start from './Start.vue'
import Buttons from './Buttons.vue'
import Log from './Log.vue'

export default {
  data(){
    return {
      gameIsRunning: false
    }
  },
  components: {
    appHealth: Health,
    appStart: Start,
    appButtons: Buttons,
    appLog: Log
  },
  methods: {
    startNewGame(){
      this.gameIsRunning = true;
    }
  }
}
</script>

<style>

</style>
