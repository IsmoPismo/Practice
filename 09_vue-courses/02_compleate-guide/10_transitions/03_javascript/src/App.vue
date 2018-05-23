<template>
  <div class="">
    <nav class="navbar navbar-dark bg-dark">
      <router-link to="/" class="badge badge-secondary p-3">Home</router-link>
      <router-link to="/dynamic" class="badge badge-secondary p-3">Dynamic Components</router-link>
      <router-link to="/list" class="badge badge-secondary p-3">List</router-link>
    </nav>
    <div class="container">
      <transition appear>
        <router-view class="mt-3"></router-view>
      </transition>
    </div>
  </div>
</template>

<style>
.badge {
  cursor: pointer;
}
.v-enter {
  opacity: 0;
  transform: rotateZ(-20deg);
}

.v-enter-active{
  transition: all 800ms ease;
}
</style>
