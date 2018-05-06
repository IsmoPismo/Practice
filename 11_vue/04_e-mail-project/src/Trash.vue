<template>
  <div class="inbox-body">
    <app-messages :messages="deletedMessages"></app-messages>
  </div>
</template>

<script>
import Messages from './Messages.vue'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    appMessages: Messages
  },
  computed: {
    deletedMessages(){
      return this.data.messages.filter(msg => msg.isDeleted)
  }
}
}
</script>
