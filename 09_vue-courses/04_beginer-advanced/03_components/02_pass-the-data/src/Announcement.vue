<template>
    <div class="alert alert-info">
      <p v-if="title==''"">No Announcements</p>
      <p v-else>{{ title }} <template v-if="social!==''"> was shared on </template> {{ social }} </p>
    </div>
</template>

<script>
  import { eventBus } from './main'
  import Social from './Social.vue'

    export default {
        data() {
            return {
                title: "",
                social: ""
            };
        },
        created(){
            eventBus.$on('articleShared', (data) => {
              this.title = data.articleTitle;
              this.social = data.media;
            })
        }
    }
</script>
