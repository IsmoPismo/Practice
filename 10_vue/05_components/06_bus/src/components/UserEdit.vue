<template>
<div class="component">
  <h3>You may edit the User here</h3>
  <p>Edit me!</p>
  <p>Emitted with the eventBus vue instance: {{ userAge }}</p>
</div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: ['userAge'],
  created(){
    eventBus.$on('ageWasChanged', age => {
      this.userAge = age;
    })
  }
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
