<template lang="html">
  <div>
    <!-- Single class names have to be in quotes -->
    <div  class="demo"
          @click="attachBlack = !attachBlack"
          :class="['white', {darkness: attachBlack}]"></div>
    <!-- We can attach objects with computed properties -->
    <div  class="demo"
          :class="classObject"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attachBlack: false
    }
  },
  computed: {
    classObject(){
      return {
        darkness: this.attachBlack,
        white: this.attachBlack
      }
    }
  }
}
</script>

<style scoped lang="css">
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 400ms;
  }

  .darkness {
    background-color: #666;
  }

  .white {
    width: 500px;
    padding: 19px;
  }

  .demo {
    width: 200px;
    height: 150px;
    border: 1px solid black;
  }
</style>
