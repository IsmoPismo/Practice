<template lang="html">
  <div class="col-md-6 mx-auto">
    <div class="joke-card">
      <div class="card-block">
        <button class="close" @click="removeJoke(index)"><span>&times;</span></button>
        <p><u>{{ joke.setup }}</u></p>
        <p><em>{{ joke.punchline }}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['joke', 'index'],
  methods: mapActions([
    'removeJoke'
  ])
}
</script>

<style media="screen">
  .joke-card {
    border: 2px solid #212529;
    border-radius: 2px;
    padding: 6px;
    margin: 6px;
  }
</style>
