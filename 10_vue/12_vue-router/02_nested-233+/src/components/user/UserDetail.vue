<template>
  <div class="">
    <h3>Some User Details</h3>
    <br>
    <p>User id is: {{ $route.params.id }}</p>
    <!-- params and query params -->
    <router-link  tag="button"
                  :to="{name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', q: 1000} }">Edit User</router-link>
  </div>
</template>
