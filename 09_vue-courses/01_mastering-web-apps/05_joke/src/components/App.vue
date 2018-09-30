<template lang="html">
  <div id="app" class="mt-5 lead">
    <h1 class="m-3 h3">Fresh Jokes</h1>
    <button class="btn btn-outline-dark" @click="initJokes">Ten Random Jokes</button>
    <hr>
    <div class="">
      {{ $store.state.jokes }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'initJokes'
  ])
}
</script>

<style lang="css">

</style>
