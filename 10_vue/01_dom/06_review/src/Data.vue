<template>
<div>
  <h2 v-once>
      {{ title }}
    </h2>

  <h3>
      {{ aMethod() }}
    </h3>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    aMethod() {
      this.title = "Change but v-once doesn't allow the upper one to change"
      return this.title;
    }
  }
}
</script>
