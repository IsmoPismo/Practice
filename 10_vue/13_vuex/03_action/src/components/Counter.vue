<template>
    <div>
        <button class="btn btn-primary" @click="addFive">Increment</button>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        methods: {
            ...mapActions([
              'addFive'
            ])
        }
    }
</script>
