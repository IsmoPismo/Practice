<template>
  <div class="">
    <nav class="navbar navbar-dark bg-dark">
      <router-link to="/" class="badge badge-secondary p-3">Home</router-link>
      <router-link to="/dynamic" class="badge badge-secondary p-3">Dynamic Components</router-link>
      <router-link to="/list" class="badge badge-secondary p-3">List</router-link>
    </nav>
    <div class="container">
      <transition name="router-anim" enter-active-class="animation fadeOutLeft" enter-leave-class="animation fadeOutLeft">
        <router-view class="mt-3"></router-view>
      </transition>
    </div>
  </div>
</template>

<style>

@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css'

</style>
