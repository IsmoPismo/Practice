<template>
  <div class="container">
    <nav class="navbar navbar-dark bg-dark">
      <router-link
          to='/transition'
          tag='button'
          class='btn btn-outline-success'
      >Transitions</router-link>
      <router-link
          to='/animation'
          tag='button'
          class='btn btn-outline-success'
      >Animation</router-link>
      <router-link
          to='/transitionanimation'
          tag='button'
          class='btn btn-outline-success'
      >Transition/Animation</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
