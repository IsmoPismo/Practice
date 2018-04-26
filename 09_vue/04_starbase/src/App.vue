<template>
<div id="app">
  <h3>{{ title }}</h3>
  <Characters />
</div>
</template>

<script>
import Characters from './components/Characters.vue'

export default {
  name: 'app',
  data() {
    return {
      title: 'Generate your Team'
    }
  },
  components: {
    Characters
  }
}
</script>
