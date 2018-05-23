<template lang="html">
  <div>
    <h4>{{ title }}</h4>
    <q>{{ content }}</q>
    <author></author>
    <p>{{ date | moment}}</p>
  </div>
</template>

<script>
import Author from './Author.vue'
import moment from 'moment'

export default {
  data(){
    return {
      title: "The Article Header",
      content: "Gives head to Jimmy Blowjob",
      date: new Date()
    }
  },
  components: {
    Author
  },
  filters: {
    moment(val){
      return moment(val).format('MMMM Do');
    }
  }
}
</script>

<style lang="css">
</style>
