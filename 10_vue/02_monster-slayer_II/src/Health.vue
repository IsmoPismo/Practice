<template lang="html">
  <section class="row">
      <div class="small-6 columns">
          <h1 class="text-center">YOU</h1>
          <div class="healthbar">
              <div  class="healthbar text-center"
                    style="background-color: green; margin: 0; color: white;"
                    :style="{width: playerHealth + '%'}"></div>
          </div>
      </div>
      <div class="small-6 columns">
          <h1 class="text-center">MONSTER</h1>
          <div class="healthbar">
              <div  class="healthbar text-center"
              style="background-color: green; margin: 0; color: white;"
              :style="{width: monsterHealth + '%'}"></div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      playerHealth: 100,
      monsterHealth: 100
    }
  }
}
</script>

<style lang="css">
</style>
