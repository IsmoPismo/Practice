<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="server in servers" :server="server"></app-server>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue';

  export default {
    data: function(){
      return {
        servers: [
          {id: 12, status: 'Normal'},
          {id: 23, status: 'Unknown'},
          {id: 48, status: 'Normal'},
          {id: 55, status: 'Critical'}
        ]
      }
    },
    components: {
      'app-server': Server
    }
  }
</script>
