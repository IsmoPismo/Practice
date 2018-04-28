<template>
  <div>
    <AppHeader></AppHeader>
    <div class="flex">
      <servers  class="items"></servers>
      <ServerDetails class="items"></ServerDetails>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/Shared/Header.vue'
import AppFooter from './components/Shared/Footer.vue'
import ServerDetails from './components/Server/ServerDetails.vue'
import Servers from './components/Server/Servers.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    ServerDetails,
    Servers
  }
}
</script>

<style>
  .flex {
    display: flex
  }

  .items {
    flex-grow: 1;
  }

</style>
