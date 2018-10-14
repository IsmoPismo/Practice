<template lang="html">
  <div class="container mt-5">
    <h1 class="display-2 mt-5">Trade or View Portfolio</h1>
    <h6>You may save or load your data</h6>
    <h6>Click on 'End day' to begin a new day</h6>
    <hr>
    <p>Your funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  }
}
</script>

<style lang="css">
</style>
