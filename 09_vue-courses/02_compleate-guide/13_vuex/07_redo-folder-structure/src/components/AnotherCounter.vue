<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 111, duration: 700})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 111, duration: 700})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
              'asyncIncrement',
              'asyncDecrement'
            ])
        }
    }
</script>
