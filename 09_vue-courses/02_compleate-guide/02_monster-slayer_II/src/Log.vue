<template lang="html">
  <section class="row log">
      <div class="small-12 columns" id="ludilo">
          <ul>
            <transition-group name='fade'>
              <li v-for="(turn, i) in log" :key="turn">
                {{ turn }}
              </li>
            </transition-group>
          </ul>
      </div>
  </section>
</template>

<script>
import { eventBus } from './main'

export default {
  data(){
    return {
      log: []
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
      this.log.push(`Player heals himself for ${h}`);
      this.log.push(`Monster damages player for ${md}`);
    }
  }
}
</script>

<style scoped lang="css">
  .fade-enter{
    opacity: 0;
    transform: rotate(10deg) translateX(-100px);
  }

  .fade-enter-active{
    transition: all 580ms;
  }

  .fade-move {
    transition: transform 500ms;
  }
</style>
