<template>
  <div class="">
    <router-view name="header-top" class="mb-5"></router-view>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <h1>Routing</h1>
                <hr>

                <router-view></router-view>
            </div>
        </div>
    </div>
    <router-view name="header-bottom" class="mt-5"></router-view>
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
