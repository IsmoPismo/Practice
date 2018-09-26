<template>
  <div class="d-flex flex-column align-items-center">
    <h3>Some User Details</h3>
    <p class="lead text-muted text-center">{{ this.$route.params.id }}</p>
    <router-link  tag="button"
                  class="btn btn-outline-info"
                  :to="{ name: 'userEdit', params: {id: this.$route.params.id} }">
                  Edit User {{ this.$route.params.id }}
    </router-link>
  </div>
</template>
