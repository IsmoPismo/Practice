<template>
  <div class="inbox-body">
    <app-messages :messages="incomingMessages"></app-messages>
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
  computed: {
    incomingMessages(){
      return this.data.messages.filter(msg => !msg.isDeleted && msg.type === 'incoming')
    }
  },
  components: {
    appMessages: Messages
  }
}
</script>
