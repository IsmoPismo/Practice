<template>
  <div>
    <h3>Edit the User</h3>
    <p>{{ $route.query.q }}</p>
    <p>{{ $route.query.locale }}</p>
    <button class="btn btn-outline-light" @click="confirm = true">Confirm Exit</button>
    <transition name="slide">
      <div v-if="confirm">
        <p class="mt-4 lead text-light">Exit Confirmed</p>
        <p class="text-muted">You may leave without confiming it</p>
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        confirm: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirm){
        next()
      } else {
        if(confirm('Are you sure you wanna leave?')){
          next()
        } else {
          next(false)
        }
      }
    }
  }
</script>
