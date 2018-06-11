<template>
  <div class="row">
    <div class="col">
      <h3>Some User Details</h3>
      <p class="text-muted">User has ID : {{ $route.params.id }}</p>
      <router-link  tag="button"
                    class="btn btn-outline-info btn-lg"
                    :to="{name: 'editUser', params: { id: $route.params.id}}">
                    Edit User
      </router-link>
    </div>
  </div>
</template>
