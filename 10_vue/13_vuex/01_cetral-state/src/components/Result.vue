<template>
  <div>
    <p>Counter is: {{ $store.state.counter }}</p>
    <p title="getters: {
        counterDouble: state => state.counter * 2
      }">Using getters (hover for more): {{ counterDouble }}</p>
      <strong>Using mapGetters helper function and the spread operator to add additional computed properties</strong>
      <ul>
        <li>{{counterDouble}}</li>
        <li>{{counterTriple}}</li>
        <li>{{myComputed}}</li>
      </ul>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
          ...mapGetters([
            'counterDouble',
            'counterTriple'
          ]),
          myComputed(){
            return 'This is a separate computed property'
          }
        }
    }
</script>
