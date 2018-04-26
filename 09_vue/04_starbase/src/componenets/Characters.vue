<template>
  <div>
    {{ character }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(){
      fetch(`https://swapi.co/api/people`,{
        method: 'GET'
      })
        .then(res => res.json())
        .then(json => this.character = json)
    }
  },
  created(){
    this.fetchCharacter()
  }
}
</script>

<style>
</style>
