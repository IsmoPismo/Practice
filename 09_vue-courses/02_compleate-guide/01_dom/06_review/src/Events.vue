<template lang="html">
  <div>
    <h1 @mousemove="updateCo">Was he slow? <span @mousemove.stop> Dead Spot</span></h1>
    <p>{{ x }} / {{ y }}</p>
    <input type="text" @keyup.shift="modifierKey">
  </div>
</template>

<script>
export default {
  data(){
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    updateCo(passedEvent){
      this.x = passedEvent.clientX;
      this.y = passedEvent.clientY;
    },
    modifierKey(event){
      console.log('Nothing special');
    }
  },
  computed: {
    // use whereever you can
    // but they always run syncronosly
  }
}
</script>

<style scoped>
  h1 {
    border: 1px solid black;
  }
  span {
    background: hotpink;
  }
</style>
