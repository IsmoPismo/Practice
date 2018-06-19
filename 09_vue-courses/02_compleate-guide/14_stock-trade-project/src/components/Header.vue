<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">

  <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <ul class="navbar-nav mr-auto">
      <router-link to="/portfolio" active-class="active" class="nav-item" tag="li">
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link to="/stocks" active-class="active" class="nav-item" tag="li">
        <a class="nav-link">Stocks</a>
      </router-link>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">End Day</a>
      </li>
      <li class="nav-item dropdown">
        <a  class="nav-link dropdown-toggle"
            href="#" id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
          Save & Load
        </a>
        <div  class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save</a>
          <a class="dropdown-item" href="#">Load</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
