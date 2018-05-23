<template>
  <div class="inbox-body">
    <app-messages :messages="sentMessages"></app-messages>
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
    sentMessages(){
      return this.data.messages.filter(msg => !msg.isDeleted && msg.type === 'outgoing')
    }
  },
  components: {
    appMessages: Messages
  }
}
</script>
