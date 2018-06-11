<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <a href="/" class="navbar-brand">Routing</a>
        <ul class="navbar-nav ml-auto">
          <router-link class="nav-item" to="/" tag="li" active-class="active" exact><a class="nav-link">Home</a></router-link>
          <router-link class="nav-item" to="/user" tag="li" active-class="active" exact><a class="nav-link">User</a></router-link>
        </ul>
    </div>
  </nav>
</template>
