<template>
  <div class="">
    <h3>Some User Details</h3>
    <br>
    <p>User id is: {{ $route.params.id }}</p>
    <router-link  tag="button"
                  :to="{name: 'userEdit', params: {id: $route.params.id} }">Edit User</router-link>
  </div>
</template>
