<template>
<div id="app">
  <button @click="selectedComponent = 'SlideOne'">One</button>
  <button @click="selectedComponent = 'SlideTwo'">Two</button>
  <button @click="selectedComponent = 'SlideThree'">Three</button>
  <p>Selected: {{ selectedComponent }}</p>
  <components :is="selectedComponent"></components>
</div>
</template>

<script>
import SlideOne from './SlideOne.vue'
import SlideTwo from './SlideTwo.vue'
import SlideThree from './SlideThree.vue'

export default {
  data(){
    return {
      selectedComponent: 'SlideOne'
    }
  },
  components: {
    SlideOne,
    SlideTwo,
    SlideThree
  }
}
</script>

<style>
</style>
