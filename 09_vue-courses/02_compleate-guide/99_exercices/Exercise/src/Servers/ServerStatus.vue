<template>
  <div class="col-xs-12 col-sm-6">
    <h3>Server #{{ server.id }}</h3>
    <p>Status: {{ server.status }}</p>
    <hr>
    <button @click="setStatusToNormal">Set Status to Normal</button>
  </div>
</template>

<script>
  import { serverBus } from '../main'

  export default {
    data: function(){
      return {
        server: null
      }
    },
    methods: {
      setStatusToNormal(id){
        this.server.status = 'Normal'
      }
    },
    created(){
      serverBus.$on('serverSelected', (server) => {
        this.server = server;
      })
    }
  }
</script>
