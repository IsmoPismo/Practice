<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
          <server-list></server-list>
          <server-status></server-status>
        </div>
        <hr>
        <server-update></server-update>
    </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue'
  import ServerList from './ServerList.vue'
  import ServerUpdate from './ServerUpdate.vue'
  import AppHeader from './Header.vue'

  export default {
    components: {
      AppHeader,
      ServerList,
      ServerStatus,
      ServerUpdate
    }
  }
</script>

<style>

</style>
