<template>
<div class="component">
  <h3>You may view the User Details here</h3>
  <p>Many Details</p>
  <p>User name: <strong>{{ myName }}</strong></p>
  <p>User Age Passed: {{ userAgePassed }}</p>
  <button class="btn" @click="changeAge">Emit Bus vue instance</button>
</div>
</template>

<script>
import { eventBus } from '../main'

export default {
  data(){
      return {
        userAge: 29
      }
  },
  methods: {
    // Outsourced to the BUS
    // changeAge() {
    //   eventBus.$emit('ageWasChanged', this.userAge)
    // }
    // So we can write:
    changeAge(){
      eventBus.changeAge(this.userAge);
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
