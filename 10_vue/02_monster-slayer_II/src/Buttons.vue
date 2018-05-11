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
  data(){
    return {
      dmg: 30
    }
  },
  methods: {
    attack(){
      eventBus.$emit('attack', this.dmg);
    }
  }
}
</script>

<style lang="css">
</style>
