<template lang="html">
  <div>
    <h1 class="display-3">Trade or View your Portfolio</h1>
    <h6>You may Save & Load your data</h6>
    <h6>Click on 'End Day' to End your day</h6>
    <hr>
    <p class="lead">Your funds: {{ funds }}</p>
  </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style lang="css">
</style>
