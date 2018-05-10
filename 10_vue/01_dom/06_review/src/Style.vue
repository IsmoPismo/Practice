<template lang="html">
  <div>
    <transition>
    <h4 :class="{darkness: isDark, white: lightLetters}"
        v-if="isDark"
    >
      this div's gonna change
    </h4>
    </transition>
    <button type="button" @click="darkify">Darken</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
      lightLetters: false
    }
  },
  methods: {
    darkify() {
      this.isDark = !this.isDark;
      this.lightLetters = !this.lightLetters;
    }
  }
}
</script>

<style scoped lang="css">
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .darkness {
    background-color: #666;
  }

  .white {
    color: white;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  }
</style>
