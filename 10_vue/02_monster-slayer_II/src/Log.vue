<template lang="html">
  <section class="row log">
      <div class="small-12 columns">
          <ul>
              <li v-for="turn in log">
                {{ turn }}
              </li>
          </ul>
      </div>
  </section>
</template>

<script>
import { eventBus } from './main'

export default {
  data(){
    return {
      log: ['player fucks up monster for x', 'monster fucks up player for x']
    }
  },
  created(){
    eventBus.$on('attack', (dmg, monster) => this.attack(dmg, monster));
    eventBus.$on('special', (dmg, monster) => this.attack(dmg, monster));
    eventBus.$on('heal', (heal, monster) => this.heal(heal, monster));
  },
  methods: {
    attack(d, md){
      this.log.unshift(`Player damages monster for ${d}`);
      this.log.unshift(`Monster damages player for ${md}`);
    },
    heal(h, md){
      this.log.unshift(`Player heals himself for ${h}`);
      this.log.unshift(`Monster damages player for ${md}`);
    }
  }
}
</script>

<style lang="css">
</style>
