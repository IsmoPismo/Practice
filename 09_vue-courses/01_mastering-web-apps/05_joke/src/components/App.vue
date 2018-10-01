<template lang="html">
  <div id="app" class="mt-5 lead">
    <h1 class="m-3 h3">Fresh Jokes</h1>
    <button class="btn btn-outline-dark" @click="initJokes">Ten Random Jokes</button>
    <hr>
    <div class="col-md-12">
      <Joke
        v-for = "(joke, index) in $store.state.jokes"
        :joke="joke"
        key = "index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  methods: mapActions([
    'initJokes'
  ]),
  components: {
    Joke
  }
}
</script>

<style lang="css">

</style>
