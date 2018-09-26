<template>
  <div class="d-flex flex-column align-items-center">
    <h3>Some User Details</h3>
    <p class="lead text-muted text-center">{{ this.$route.params.id }}</p>
    <router-link  tag="button"
                  class="btn btn-outline-info"
                  :to="{ name: 'userEdit', params: {id: $route.params.id}, query: {q: 100, locale: 'en'} }">
                  Edit User {{ $route.params.id }}
    </router-link>
  </div>
</template>
