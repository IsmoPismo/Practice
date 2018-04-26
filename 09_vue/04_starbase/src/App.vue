<template>
<div id="app">
  <h3>{{ title }}</h3>
  <button @click="fetchCharacter">Feč</button>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Generate your Team'
    }
  },
  methods: {
    fetchCharacter(){
      fetch(`https://swapi.co/api/people`,{
        method: 'GET'
      })
        .then(res => res.json())
        .then(json => console.log(json))

    }
  }
}
</script>
