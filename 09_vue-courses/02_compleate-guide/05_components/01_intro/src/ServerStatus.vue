<template lang="html">
  <div>
    <h1>Hi dude, your server status: {{ status }}</h1>
    <button @click="changeStatus">Fix Server</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      status: 'CRITICAL!'
    }
  },
  methods: {
    changeStatus(){
      this.status = 'Normal.'
    }
  }
}
</script>
