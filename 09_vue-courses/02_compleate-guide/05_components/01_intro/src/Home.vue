<template lang="html">
  <div>
    <ServerStatus v-for="server in 5" />
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'

export default {
  components: {
    ServerStatus
  }
}
</script>
