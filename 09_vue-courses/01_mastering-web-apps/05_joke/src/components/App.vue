<template lang="html">
  <div id="app" class="mt-5 lead">
    <h1 class="m-3 h3">Fresh Jokes</h1>
    <button class="btn btn-outline-dark" @click="initJokes">Ten Random Jokes</button>
    <button class="btn btn-outline-primary" @click="addJoke">Get Fresh Joke</button>
    <br>
    <span v-for="type in types">
      <input type="checkbox"
      :value="type"
      v-model="checkedTypes"
      checked>
      <label>{{type}}</label>&nbsp;
    </span>
    <hr>
    <div class="col-md-12">
      <Joke
        v-for = "(joke, index) in $store.state.jokes"
        v-show = "checkedTypes.includes(joke.type)"
        :joke="joke"
        :index="index"
        key = "index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  data(){
    return {
      types: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming']
    }
  },
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components: {
    Joke
  }
}
</script>

<style lang="css">

</style>
