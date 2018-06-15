<template id="">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
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
          {imageUrl: 'https://cdn.pixabay.com/photo/2015/03/11/12/31/new-york-668616_960_720.jpg', id: 'r65bha1h68a8', title: 'New York'},
          {imageUrl: 'https://c1.staticflickr.com/4/3810/11753289395_ab7be4e12d_b.jpg', id: 'r65bhaaffh6a8', title: 'Tokyo'},
          {imageUrl: 'https://cdn.pixabay.com/photo/2014/11/13/23/34/london-530055_960_720.jpg', id: 'r65bha1678aw8', title: 'London'}
        ]
      }
    }
  }
</script>
