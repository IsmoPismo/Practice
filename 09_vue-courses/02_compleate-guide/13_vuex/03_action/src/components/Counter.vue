<template>
    <div>
        <button class="btn btn-primary" @click="addFive(subtractBy)">Subtract {{subtractBy}}</button>
        <button class="btn btn-primary" @click="asyncFive({by: subtractBy, delay: delayDuration})">
          Subtract {{subtractBy}} with a delay of {{delayDuration}}
        </button>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
      data(){
        return {
          subtractBy: 21,
          delayDuration: 900
        }
      },
        methods: {
            ...mapActions([
              'addFive',
              'asyncFive'
            ])
            // => behind the scenes
            // addFive(param){
            //   this.$store.dispach('addFive', param)
            }
    }
</script>
