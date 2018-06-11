<template>
  <div class="">
    <app-header class="mb-5"></app-header>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <h1>Routing</h1>
                <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
    export default {
      components: {
        appHeader: Header
      }
    }
</script>

<style>
</style>
