<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
          <server-list></server-list>
          <server-status></server-status>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import ServerStatus from './Servers/ServerStatus.vue'
  import ServerList from './Servers/ServerList.vue'
  import AppFooter from './Shared/Footer.vue'
  import AppHeader from './Shared/Header.vue'

  export default {
    components: {
      AppHeader,
      ServerList,
      ServerStatus,
      AppFooter
    }
  }
</script>

<style>

</style>
