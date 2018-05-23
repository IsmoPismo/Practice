<template>
<div class="article">
  <h1>{{ title }}</h1>

  <p>Published on {{ published | moment }}</p>
  <p>Facebook: {{ fbShare }}</p>
  <p>Twitter: {{ tShare }}</p>
  <p class="lead">{{ content }}</p>

  <app-author :author="author"></app-author>
  <br><br>
  <app-social-sharing @articleWasShared="shared" :article="title"></app-social-sharing>
</div>
</template>

<script>
import moment from 'moment';
import Author from './Author.vue';
import Social from './Social.vue';

export default {
  data() {
    return {
      title: '10 Reasons why Vue.js is Awesome',
      published: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan eu erat ut scelerisque.',
      author: {
        firstName: 'Bo',
        lastName: 'Andersen'
      },
      fbShare: 0,
      tShare: 0
    };
  },
  filters: {
    moment: function(value) {
      return moment(value).format('MMMM Do');
    }
  },
  methods: {
    shared: function(event) {
      if (event.media === 'facebook'){
        this.fbShare++;
      } else {
        this.tShare++;
      }
    }
  },
  components: {
    appAuthor: Author,
    appSocialSharing: Social
  }
}
</script>
