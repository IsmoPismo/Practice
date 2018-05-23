<template>
  <div>
    <h1>{{ article }}</h1>
    <button class="btn btn-primary" @click="share('facebook')">Share on Facebook</button>
    <button class="btn btn-primary" @click="share('twiter')">Share on Twitter</button>
  </div>
</template>

<script>
import { eventBus } from './main';

export default {
  props: ['article'],
  methods: {
    share(socialMedia) {
      this.$emit('articleWasShared', {
        media: socialMedia
      });
      eventBus.$emit('articleShared', {
        articleTitle: this.article,
        media: socialMedia
      })
    }
  }
}
</script>
