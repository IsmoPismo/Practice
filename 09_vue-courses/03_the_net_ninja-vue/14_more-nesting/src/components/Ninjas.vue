<template>
<div id="ninjas">
  <ul>
    <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
      <h2>{{ ninja.name }}</h2>
      <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
  #ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    cursor: pointer;
  }
</style>
