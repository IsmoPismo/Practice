<template>
  <div id="app">
    <keep-alive>
      <components :is="activeComponent"></components>
    </keep-alive>
    <button @click="activeComponent='form-one'">Form One</button>
    <button @click="activeComponent='form-two'">Form Two</button>
  </div>
</template>

<script>
import FormOne from './components/formOne.vue'
import FormTwo from './components/formTwo.vue'

export default {
  data () {
    return {
      activeComponent: 'form-one'
    }
  },
  components:  {
    'form-one': FormOne,
    'form-two': FormTwo
  }
}
</script>

<style>
  button {
    display: block;
    margin: 5px auto;
    border-radius: 10px;
    border: 1px solid #535353;
    padding: 8px;
    outline: none;
  }
</style>
