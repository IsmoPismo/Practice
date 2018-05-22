<template>
    <div>
        <button class="btn btn-primary" @click="takeAwayFive">Take away Five with mutations</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        methods: {
          ...mapMutations([
            'takeAwayFive'
          ])
        }
    }
</script>
