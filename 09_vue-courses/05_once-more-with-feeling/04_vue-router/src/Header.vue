<template>
  <div class="bg-info">
    <ul class="nav container">
      <router-link tag="li" to="/" active-class="active" exact class="nav-item">
        <a class="nav-link text-light">Home</a>
      </router-link>
      <router-link tag="li" to="/user" active-class="active" exact class="nav-item">
        <a class="nav-link text-light">User</a>
      </router-link>
    </ul>
  </div>
</template>
