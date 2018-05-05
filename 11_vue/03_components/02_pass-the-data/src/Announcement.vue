<template>
    <div class="alert alert-info">
      {{ title }}
      <template v-if="social!==''"> was shared on </template>
      {{ social }}
    </div>
</template>

<script>
  import { eventBus } from './main'
  import Social from './Social.vue'

    export default {
        data() {
            return {
                title: 'No title has been shared yet',
                social: ''
            };
        },
        created(){
            eventBus.$on('articleShared', function(data){
              console.log(data);
              this.title = data.articleTitle;
              this.socila = data.media;
              console.log(this.title);
            })
        }
    }
</script>
