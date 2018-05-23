<template lang="html">
  <section class="row controls">
      <div class="small-12 columns">
          <button id="attack" @click="attack">ATTACK</button>
          <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
          <button id="heal" @click="heal">HEAL</button>
      </div>
  </section>
</template>

<script>
import { eventBus } from './main'

export default {
  methods: {
    attack(){
      let dmg = this.calculateDamage(8, 15);
      let monsterDamage = this.monsterDamage();
      eventBus.$emit('attack', dmg, monsterDamage);
    },
    specialAttack(){
      let dmg = this.calculateDamage(13, 35);
      let monsterDamage = this.monsterDamage();
      eventBus.$emit('special', dmg, monsterDamage);
    },
    heal(){
      let monsterDamage = this.monsterDamage();
      eventBus.$emit('heal', 11, monsterDamage);
    },
    calculateDamage(min, max){
      return Math.max(Math.ceil(Math.random() * max), min)
    },
    monsterDamage(){
      return this.calculateDamage(10, 16);
    }
  }
}
</script>

<style lang="css">
</style>
