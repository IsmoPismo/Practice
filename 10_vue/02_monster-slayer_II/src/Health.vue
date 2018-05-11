<template lang="html">
  <section class="row">
      <div class="small-6 columns">
          <h1 class="text-center">YOU</h1>
          <div class="healthbar">
              <div  class="healthbar text-center"
                    style="background-color: green; margin: 0; color: white;"
                    :style="{width: player + '%'}"></div>
          </div>
      </div>
      <div class="small-6 columns">
          <h1 class="text-center">MONSTER</h1>
          <div class="healthbar">
              <div  class="healthbar text-center"
              style="background-color: green; margin: 0; color: white;"
              :style="{width: monster + '%'}"></div>
          </div>
      </div>
  </section>
</template>

<script>
import { eventBus } from './main'

export default {
  props: {
    player: Number,
    monster: Number
  }
}
</script>

<style lang="css">
</style>
