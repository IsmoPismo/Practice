<template>
  <div id="app">
      <app-health :player="playerHealth" :monster="monsterHealth"></app-health>
      <component  :is="!gameIsRunning ? 'appStart' : 'appButtons'"
                  :startFunc="startNewGame"></component>
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
      gameIsRunning: false,
      playerHealth: 100,
      monsterHealth: 100
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
      this.playerHealth = 100;
      this.monsterHealth = 100;
    }
  }
}
</script>

<style>

</style>
