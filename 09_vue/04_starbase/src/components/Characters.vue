<template lang="html">
  <div @click="switchCharacter">
    <h4>{{ character }}</h4>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id){
      fetch(`https://swapi.co/api/people/${id}`, {
        method: 'GET'
      }).then(response => response.json())
        .then(json => this.character = json)
    },
    switchCharacter(){
      let random_id = Math.ceil(Math.random() * 83)
      this.fetchCharacter(random_id)
    }
  },
  created(){
    this.fetchCharacter(this.id);
  }
}
</script>

<style lang="css">
</style>
