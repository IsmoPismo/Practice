<template lang="html">
  <div id="app">
    <h3>{{ title }}</h3>
    <Character  v-for='(id, index) in initial_ids'
                :id='id'
                key='index'/>
  </div>
</template>

<script>
import Character from './components/Characters.vue'
export default {
  name: 'app',
  data(){
    return {
      title: 'Choose Your Team',
      initial_ids: [55, 23, 7]
    }
  },
  components: {
    Character
  }
}
</script>

<style lang="css">
</style>
