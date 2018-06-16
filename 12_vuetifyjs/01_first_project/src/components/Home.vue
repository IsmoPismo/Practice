<template id="">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="secondary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="secondary">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel class="mt-3">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="title" >
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        meetups: [
          {imageUrl: '/static/assets/new_york.jpg', id: 'r65bha1h68a8', title: 'New York'},
          {imageUrl: '/static/assets/tokyo.jpg', id: 'r65bhaaffh6a8', title: 'Tokyo'},
          {imageUrl: '/static/assets/london.jpg', id: 'r65bha1678aw8', title: 'London'}
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    width: 100%;
    bottom: 50px;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
