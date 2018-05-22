<template>
  <div>
    <p>{{ counterDouble }}</p>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
          ...mapGetters([
            'counterDouble'
          ])
        }
    }
</script>
