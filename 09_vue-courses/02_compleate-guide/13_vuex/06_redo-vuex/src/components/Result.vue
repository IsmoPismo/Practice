<template>
  <div class="">
    <p class="lead">Counter is: {{ doubleCounter }}</p>
    <p class="lead">Number of clicks: {{ stringCounter }}</p>
    <!-- <p class="lead">{{name}}</p> -->
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
      computed: {
        ...mapGetters([
          'doubleCounter',
          'stringCounter'
        ]),
        // name(){
        //   return 'Ismar'
        // }
      }
    }
</script>
