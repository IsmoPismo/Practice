<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">

  <router-link to="/" class="navbar-brand" tag="a">Stock Trader</router-link>
  <ul class="navbar-nav mr-auto d-flex flex-row">
    <router-link :to="{ name: 'portfolio'}" tag="li" class="nav-item mx-4" activeClass="active">
      <a class="nav-link">Portfolio</a>
    </router-link>
    <router-link :to="{ name: 'stocks'}" tag="li" class="nav-item" activeClass="active">
      <a class="nav-link">Stock</a>
    </router-link>
  </ul>
</div>
</nav>
</template>

<script>
</script>

<style media="screen">
nav {
  margin-bottom: 59px;
  padding-top: 25px !important;
  padding-bottom: 15px !important;
}

</style>
