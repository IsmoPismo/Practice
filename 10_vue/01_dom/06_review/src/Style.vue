<template lang="html">
  <div>
    <h4 :class="classObject">
      this div's gonna change
    </h4>
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
  },
  computed: {
    classObject() {
      return {
        darkness: this.isDark,
        white: this.lightLetters
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
  }

  h4 {
    transition: all 400ms;
  }

  .darkness {
    background-color: #666;
  }

  .white {
    color: white;
    padding: 19px;
    transform: scale3d(4,4,4) scale(55, 2);
  }
</style>
