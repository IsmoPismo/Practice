<template>
<div>
  <nav class="navbar navbar-dark bg-dark p-3 mb-5">
    <router-link to='/' tag='button' class='btn btn-outline-success'>Home</router-link>
    <router-link to='/transition' tag='button' class='btn btn-outline-success'>Transitions</router-link>
    <router-link to='/animation' tag='button' class='btn btn-outline-success'>Animation</router-link>
    <router-link to='/transitionanimation' tag='button' class='btn btn-outline-success'>Transition/Animation</router-link>
    <router-link to='/customclasses' tag='button' class='btn btn-outline-success'>Custom Classes</router-link>
  </nav>
  <div class="container">
  <transition name="appslide" mode="out-in">
    <router-view></router-view>
  </transition>
  </div>
</div>
</template>

<style scoped>
  .appslide-enter {
    opacity: 0;
    transform: translateX(300px);
  }
  .appslide-enter-active {
    transition: all 850ms ease;
  }
  .appslide-leave-active {
    opacity: 0;
    transition: all 300ms ease;
    transform: translateX(300px);
  }
</style>
