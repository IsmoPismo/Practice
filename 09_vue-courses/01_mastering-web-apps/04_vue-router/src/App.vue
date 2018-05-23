<template>
  <div>
    <h3>Starbase Router</h3>
    <h3>
      <router-link to="/data/people" class="link">Meet the Crew</router-link> |
      <router-link to="/data/planets" class="link">Explore the Planets</router-link>
    </h3>
    <router-view></router-view>
  </div>
</template>
