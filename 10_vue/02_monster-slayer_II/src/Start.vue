<template lang="html">
  <section class="row controls">
      <div class="small-12 columns">
          <button id="start-game" @click="startFunc">START NEW GAME</button>
      </div>
  </section>
</template>

<script>
export default {
  props: {
    startFunc: Function
  }
}
</script>

<style lang="css">
</style>
