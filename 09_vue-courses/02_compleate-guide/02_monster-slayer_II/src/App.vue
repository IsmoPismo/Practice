<template>
  <div id="app">
      <app-health :player="playerHealth" :monster="monsterHealth"></app-health>
      <transition name="fade" mode="out-in">
        <component  :is="!gameIsRunning ? 'appStart' : 'appButtons'"
                    :startFunc="startNewGame">
        </component>
      </transition>
      <app-log></app-log>
  </div>
</template>

<script>
import Health from './Health.vue'
import Start from './Start.vue'
import Buttons from './Buttons.vue'
import Log from './Log.vue'
import { eventBus } from './main'

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
    },
    turn(d, m){
      this.monsterHealth -= d;
      this.playerHealth -= m;
    }
  },
  created(){
    eventBus.$on('attack', (dmg, mosnter) => this.turn(dmg, mosnter))
    eventBus.$on('special', (dmg, monster) => this.turn(dmg, monster))
    eventBus.$on('heal', (heal, monster) => {
      this.playerHealth += heal;
      this.playerHealth -= monster;
    })
  }
}
</script>

<style scoped>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 380ms ease-in;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity 170ms ease-out;
  }
</style>
